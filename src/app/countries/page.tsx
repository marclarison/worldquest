"use client";

import { useState } from "react";
import CountryCard from "../../components/CountryCard";
import SearchBar from "../../components/SearchBar";
import { getCountries } from "../../services/countryService";

export default function Home() {
  const [search, setSearch] = useState("");

  const countries = getCountries();

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">
        VEXILLUM 🚩
      </h1>

      <p className="text-slate-600 mb-6">
        Know the world. One flag at a time..
      </p>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.id}
            country={country}
          />
        ))}
      </div>
    </main>
  );
}