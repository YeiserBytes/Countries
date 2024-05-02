import { useDarkMode } from 'usehooks-ts'
import type { CountriesDetails } from '../types/types.d'

export default function Card({
  flags,
  name,
  population,
  region,
  capital,
}: CountriesDetails) {
  const { isDarkMode } = useDarkMode()

  const background = isDarkMode ? 'bg-dark-blue' : 'bg-white'

  return (
    <div
      className={`${background} max-w-sm shadow-md rounded-md overflow-hidden`}
    >
      <img
        className="object-cover aspect-video"
        src={flags.svg}
        alt={`country: ${name}`}
      />
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
  )
}
