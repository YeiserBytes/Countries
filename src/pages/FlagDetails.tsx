import { Link, useParams } from "react-router-dom";
import { useDarkMode } from "usehooks-ts";
import countries from "../assets/data.json";
import type { CountriesTypes } from "../types/types";
import { BackButton } from '../Components/Icons';

export default function FlagDetails() {
  const { countryName } = useParams();
  const { isDarkMode } = useDarkMode();

  const country = countries.find(
    (country: CountriesTypes) =>
      country.translations.es.toLowerCase() === countryName?.toLowerCase(),
  );

  if (!country) {
    return <div>País no encontrado</div>;
  }

  const background = isDarkMode ? "bg-very-dark-blue text-white" : "bg-white text-black"
  const buttonBackground = isDarkMode ? "bg-dark-blue text-white" : "bg-white text-black"

  return (
    <main className={`${background} h-screen flex flex-col items-start`}>
      <Link to="/" className="flex">
        <button className={`${buttonBackground} mx-20 mt-32 flex items-center justify-center gap-1 mb-16 text-sm px-5 py-1 rounded-sm shadow-[0_0_4px_0_rgba(0,0,0,0.5)]`} type="button">
          <BackButton />
          Back
        </button>
      </Link>
      <header className="flex max-sm:flex-col max-sm:w-screen max-sm:h-[100dvh] overflow-hidden gap-36 justify-center items-center md:mx-20">
        <figure className="h-full md:w-1/2 max-sm:max-w-sm">
          <img
            src={country.flags.svg}
            className="object-cover h-full w-full shadow-md"
            alt={`Flag by ${country.name}`}
          />
        </figure>
        <div className="flex flex-col md:gap-5 max-sm:w-full md:w-[1000px]">
          <h2 className="font-bold text-3xl">{country.name}</h2>
          <section className="flex max-sm:flex-col max-sm:justify-between md:gap-44 max-sm:j max-sm:items-center">
            <div className="flex flex-col gap-3">
              <p>
                <b className="font-semibold">Native Name: </b>
                {country.nativeName}
              </p>
              <p>
                <b className="font-semibold">Population: </b>
                {country.population.toLocaleString()}
              </p>
              <p>
                <b className="font-semibold">Region: </b>
                {country.region}
              </p>
              <p>
                <b className="font-semibold">Sub Region: </b>
                {country.subregion}
              </p>
              <p>
                <b className="font-semibold">Capital: </b>
                {country.capital}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p>
                <b className="font-semibold">Top Level Domain: </b>
                {country.topLevelDomain}
              </p>
              <p>
                <b className="font-semibold">Currencies: </b>
                {country?.currencies
                  ? country?.currencies?.map(({ name }) => name).join(", ")
                  : "None"}
              </p>
              <p>
                <b className="font-semibold">Languages: </b>
                {country?.languages?.map(({ name }) => name).join(", ")}
              </p>
            </div>
          </section>
          <div className="flex gap-4">
            <b className="font-semibold">Border Countries: </b>
            <div className="flex gap-2">
              {country?.borders?.map((name) => {
                const background =isDarkMode ? "bg-dark-blue text-white" : "bg-white text-black"
                return (
                  <p className={`${background} flex items-center text-sm px-5 py-0 rounded-sm shadow-[0_0_4px_0_rgba(0,0,0,0.5)]`}>
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
