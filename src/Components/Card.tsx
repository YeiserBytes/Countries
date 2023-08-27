import { useDarkMode } from "usehooks-ts";
import type { CountriesDetails } from "../types/countries.d";

export default function Card({
  flags,
  name,
  population,
  region,
  capital,
}: CountriesDetails) {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`${
        isDarkMode ? "bg-white" : "bg-dark-blue"
      } max-w-sm shadow-md rounded-md overflow-hidden`}
    >
      <figure className="h-[150px] w-full">
        <img
          className="w-full h-full object-cover"
          src={flags.svg}
          alt={`country: ${name}`}
        />
      </figure>
      <div className="px-6">
        <h2 className="mb-3 mt-4 text-xl font-bold tracking-tight">{name}</h2>
        <div>
          <p className="font-normal">
            <strong>Population:</strong> {population.toLocaleString()}
          </p>
          <p className="font-normal">
            <strong>Region:</strong> {region}
          </p>
          <p className="mb-12 font-normal">
            <strong>Capital:</strong> {capital}
          </p>
        </div>
      </div>
    </div>
  );
}
