import { Link, useParams } from "react-router-dom";
import countries from "../assets/data.json";
import type { CountriesTypes } from "../types/countries.d";
import { useDarkMode } from "usehooks-ts";

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

  return (
    <main
      className={`${
        isDarkMode ? "bg-white text-black" : "bg-very-dark-blue text-white"
      } h-screen flex flex-col items-start`}
    >
      <Link to="/" className="flex">
        <button
          className={`${
            isDarkMode ? "bg-white text-black" : "bg-dark-blue text-white"
          } mx-20 mt-32 flex items-center gap-1 mb-16 text-sm px-5 py-1 rounded-sm shadow-[0_0_4px_0_rgba(0,0,0,0.5)]`}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          Back
        </button>
      </Link>
      <header className="flex gap-36 justify-center items-center mx-20">
        <figure className="h-full w-1/2">
          <img
            src={country.flags.svg}
            className="object-cover h-full w-full shadow-md"
            alt={`Flag by ${country.name}`}
          />
        </figure>
        <div className="flex flex-col gap-5 w-[1000px]">
          <h2 className="font-bold text-3xl">{country.name}</h2>
          <section className="flex gap-44">
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
                return (
                  <p
                    className={`${
                      isDarkMode
                        ? "bg-white text-black"
                        : "bg-dark-blue text-white"
                    } flex items-center text-sm px-5 py-0 rounded-sm shadow-[0_0_4px_0_rgba(0,0,0,0.5)]`}
                  >
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
