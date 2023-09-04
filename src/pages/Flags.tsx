import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import countries from "../assets/data.json";
import { useDarkMode } from 'usehooks-ts';

export default function Flags() {
  const [visibleFlags, setVisibleFlags] = useState(countries.slice(0, 20));
  const [filterRegion, setFilterRegion] = useState<string>("");
  const [searchItem, setSearchItem] = useState<string>("")
  const { isDarkMode } = useDarkMode()

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    const loadThreshold = 20;
    if (scrollTop + clientHeight >= scrollHeight - loadThreshold) {
      const nextBatchStart = visibleFlags.length;
      const nextBatchEnd = nextBatchStart + 20;
      const nextBatch = countries.slice(nextBatchStart, nextBatchEnd);
      setVisibleFlags((previousFlags) => [...previousFlags, ...nextBatch]);
    }
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterRegion(event.target.value)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleFlags, filterRegion]);

  const background = isDarkMode ? "bg-dark-blue text-white" : "bg-white text-black"

  return (
    <main className="flex flex-col gap-5 h-full">
      <div className="mt-24 flex justify-between mx-[55px]">
        <div className={`${background} flex justify-center items-center px-2 rounded`}>
          <label htmlFor="search">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 opacity-50">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </label>
          <input type="text" placeholder="Search for a country" id='search' className={`rounded text-sm px-3 ${background}`} autoComplete="off" onChange={handleSearchChange} />
        </div>
        <select onChange={handleFilterChange} className={`${background} font-medium rounded-lg text-left px-5 py-2.5`}>
          <option value="" hidden>Filter by Region</option>
          <option value="All">All</option>
          <option value="Africa" className="">África</option>
          <option value="Americas" className="">Américas</option>
          <option value="Asia" className="">Asia</option>
          <option value="Europe" className="">Europa</option>
          <option value="Oceania" className="">Oceanía</option>
        </select>
      </div>
      <div className="grid auto-cols-auto min-h-screen grid-wrap grid-cols-4 gap-12 px-14 pb-6">
        {visibleFlags.filter((country) => (!filterRegion || country.region === filterRegion || filterRegion === 'All') && country.translations.es.toLowerCase().includes(searchItem?.toLowerCase())).map((country) => {
          const { alpha3Code, name, flags, population, region, capital, translations } = country;
          return (
            <Link to={`/${translations.es.toLowerCase()}`}>
              <Card
                key={alpha3Code}
                name={name}
                flags={flags}
                population={population}
                region={region}
                capital={capital}
              />
            </Link>
          );
        })}
      </div>
    </main >
  );
}
