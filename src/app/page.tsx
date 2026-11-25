import CountryCard from "../components/CountryCard";
import { countries } from "../data/countries";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">
        WorldQuest 🌍
      </h1>

      <p className="text-slate-600 mb-8">
        Master the world, one country at a time.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <CountryCard
            key={country.id}
            country={country}
          />
        ))}
      </div>
    </main>
  );
}