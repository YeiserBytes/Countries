import { Link, useParams } from "react-router-dom";
import { useDarkMode } from "usehooks-ts";
import countries from "../assets/data.json";
import type { CountriesTypes } from "../types/types";
import { BackButton } from '../Components/Icons';

export default function FlagDetails() {
  const { countryName } = useParams();
  const { isDarkMode } = useDarkMode();

  const country: CountriesTypes | undefined = countries.find(
    (country: CountriesTypes) => country.translations.es.toLowerCase() === countryName?.toLowerCase()
  )

  const backgroundStyle = isDarkMode ? "bg-very-dark-blue text-white" : "bg-white text-black"
  const btnBackgroundStyle = isDarkMode ? "bg-dark-blue text-white" : "bg-white text-black"

  if (!country) return <h1>Country not found</h1>

  const {
    flags,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
  } = country

  return (
    <main className={`container ${backgroundStyle} h-screen flex flex-col items-start mt-28 md:mt-0`}>
      <Link to="/" className="flex">
        <button className={`${btnBackgroundStyle} mx-4 mt-4 md:mx-20 md:mt-32 flex items-center justify-center gap-1 mb-4 md:mb-16 text-sm px-5 py-1 rounded-sm shadow-md`} type="button">
          <BackButton />
          Back
        </button>
      </Link>
      <header className="flex flex-col md:flex-row md:w-screen md:h-[100dvh] overflow-hidden gap-4 md:gap-28 justify-center items-center">
        <figure className="w-96 mt-16 md:mt-0">
          <img
            src={flags.svg}
            className="object-cover w-full shadow-md"
            alt={`Flag by ${name}`}
          />
        </figure>
        <div className="flex flex-col md:gap-5 w-full md:w-[60%] lg:w-1/2 xl:w-[40%]">
          <h2 className="font-bold text-xl md:text-3xl">{name}</h2>
          <section className="flex flex-col gap-3 md:flex-row md:justify-between">
            <div className="flex flex-col gap-3">
              <p>
                <b className="font-semibold">Native Name: </b>
                {nativeName}
              </p>
              <p>
                <b className="font-semibold">Population: </b>
                {population.toLocaleString()}
              </p>
              <p>
                <b className="font-semibold">Region: </b>
                {region}
              </p>
              <p>
                <b className="font-semibold">Sub Region: </b>
                {subregion}
              </p>
              <p>
                <b className="font-semibold">Capital: </b>
                {capital}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p>
                <b className="font-semibold">Top Level Domain: </b>
                {topLevelDomain}
              </p>
              <p>
                <b className="font-semibold">Currencies: </b>
                {currencies ? currencies?.map(({ name }: { name: string }) => name).join(", ") : "None"}
              </p>
              <p>
                <b className="font-semibold">Languages: </b>
                {languages?.map(({ name }: { name: string }) => name).join(", ")}
              </p>
            </div>
          </section>
          <div className="flex gap-4">
            <b className="font-semibold">Border Countries: </b>
            <div className="flex gap-2">
              {borders?.map((name: string) => {
                const borderBackground = isDarkMode ? "bg-dark-blue" : "bg-white";
                const borderTextColor = isDarkMode ? "text-white" : "text-black";
                return (
                  <p key={name} className={`${borderBackground} ${borderTextColor} flex items-center text-sm px-2 md:px-5 py-0 rounded-sm shadow-md`}>
                    {name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
