import { getCountries } from "../../services/countryService";

export default function TestPage() {
    const countries = getCountries();

    return (
        <main className="p-8">
            <h1>API Test</h1>

            <p>
                Countries Loaded: {countries.length}
            </p>
        </main>
    );
}
