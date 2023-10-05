import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import countries from "../assets/data.json";
import { useDarkMode } from 'usehooks-ts';

export default function Flags() {
  const [filterRegion, setFilterRegion] = useState<string>("");
  const [searchItem, setSearchItem] = useState<string>("")
  const { isDarkMode } = useDarkMode()

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterRegion(event.target.value)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value)
  }

  const background = isDarkMode ? "bg-dark-blue text-white" : "bg-white text-black"

  return (
    <main className="flex flex-col gap-5 h-full">
      <div className="mt-24 flex flex-row sm:items-center sm:max-w-64 justify-between md:mx-[55px] sm:mx-4">
        <div className={`${background} flex justify-center sm:py-1 items-center px-2 py-3 rounded`}>
          <label htmlFor="search">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 opacity-50">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </label>
          <input type="text" placeholder="Search for a country" id='search' className={`rounded  text-sm px-3 py-2 focus:outline-none ${background}`} autoComplete="off" onChange={handleSearchChange} />
        </div>
        <select onChange={handleFilterChange} className={`${background} font-medium rounded px-2 py-3`}>
          <option value="" hidden>Filter by Region</option>
          <option value="All">All</option>
          <option value="Africa" className="">África</option>
          <option value="Americas" className="">Américas</option>
          <option value="Asia" className="">Asia</option>
          <option value="Europe" className="">Europa</option>
          <option value="Oceania" className="">Oceanía</option>
        </select>
      </div>
      <div className="grid flex-wrap auto-cols-auto min-h-screen sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-14 max-sm:px-8 pb-6">
        {countries
          .filter((country) => !filterRegion || country.region === filterRegion || filterRegion === 'All')
          .filter((country) => country.name.toLowerCase().includes(searchItem.toLowerCase()))
          .map((country) => {
            const { alpha3Code, name, flags, population, region, capital, translations } = country;
            return (
              <Link key={alpha3Code} to={`/${translations.es.toLowerCase()}`}>
                <Card
                  name={name}
                  flags={flags}
                  population={population}
                  region={region}
                  capital={capital}
                />
              </Link>
            );
          })
        }
      </div>
    </main >
  );
}
