import { Country } from "../types/country";
import Link from "next/link";

type CountryCardProps = {
    country: Country;
};

export default function CountryCard({
    country,
}: CountryCardProps) {
    return (
        <Link
            href={`/countries/${country.name.toLowerCase()}`}
        >
            <div className="border border-slate-200 bg-white text-black rounded-lg p-4 shadow-md hover:shadow-xl transition">
                <img
                    src={`https://flagcdn.com/w320/${country.code}.png`}
                    alt={country.name}
                    className="w-full h-28 object-contain bg-slate-100 p-2 rounded mb-3"
                />

                <h2 className="text-xl font-bold mt-2">
                    {country.name}
                </h2>

                <p className="text-slate-700">
                    Capital: {country.capital}
                </p>

                <p className="text-slate-700">
                    Continent: {country.continent}
                </p>

                <p className="text-slate-700">
                    Population: {country.population}
                </p>
            </div>
        </Link>    
            );
}