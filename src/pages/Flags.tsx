import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import countries from "../assets/data.json";
import { CountriesTypes } from "../types/countries";

export default function Flags() {
  const [visibleFlags, setVisibleFlags] = useState(countries.slice(0, 20));

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      const nextBatchStart = visibleFlags.length;
      const nextBatchEnd = nextBatchStart + 20;
      const nextBatch = countries.slice(nextBatchStart, nextBatchEnd);
      setVisibleFlags((prevFlags) => [...prevFlags, ...nextBatch]);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleFlags]);

  return (
    <main className="">
      <div className="grid auto-cols-auto grid-cols-4 gap-12 px-14 pb-6">
        {visibleFlags.map((country: CountriesTypes) => {
          return (
            <Link to={`/${country.translations.es.toLowerCase()}`}>
              <Card
                key={country.alpha3Code}
                name={country.name}
                flags={country.flags}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
