import { useDarkMode } from "usehooks-ts";
import type { CountriesDetails } from "../types/types.d";

export default function Card({
  flags,
  name,
  population,
  region,
  capital,
}: CountriesDetails) {
  const { isDarkMode } = useDarkMode();

  const background = isDarkMode ? "bg-dark-blue" : "bg-white"

  return (
    <div className={`${background} max-w-sm shadow-md rounded-md overflow-hidden`}>
      <figure className="h-[150px] w-full">
        <img
          className="object-cover w-full h-full"
          src={flags.svg}
          alt={`country: ${name}`}
        />
      </figure>
      <div className="px-6">
        <h2 className="mt-4 mb-3 text-xl font-bold tracking-tight">{name}</h2>
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
