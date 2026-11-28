import { getCountries } from "../../../services/countryService";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CountryPage({
  params,
}: Props) {
  const { id } = await params;

  const countries = getCountries();

  const country = countries.find(
    (country) =>
      country.name.toLowerCase() === id.toLowerCase()
  );
  if (!country) {
    return (
      <main className="p-8">
        <h1>Country not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <img
        src={`https://flagcdn.com/w320/${country.code}.png`}
        alt={country.name}
        className="w-64 mb-6 rounded"
      />

      <h1 className="text-4xl font-bold mb-4">
        {country.name}
      </h1>

      <p className="mb-2">
        Capital: {country.capital}
      </p>

      <p className="mb-2">
        Continent: {country.continent}
      </p>

      <p className="mb-2">
        Population: {country.population}
      </p>

      <p className="mt-6">
        {country.description}
      </p>
    </main>
  );
}