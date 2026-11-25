import { Country } from "../types/country";

type CountryCardProps = {
    country: Country;
};

export default function CountryCard({
    country,
}: CountryCardProps) {
    return (
        <div className="border rounded-lg p-4 shadow-sm bg-white text-black">
            <div className="text-5xl mb-2">
                {country.flag}
            </div>

            <h2 className="text-xl font-bold">
                {country.name}
            </h2>

            <p>Capital: {country.capital}</p>
            <p>Continent: {country.continent}</p>
            <p>Population: {country.population}</p>
        </div>
    );
}