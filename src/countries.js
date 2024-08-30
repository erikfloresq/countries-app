import axios from "axios";

async function getCountries() {
    let response = await axios.get("https://restcountries.com/v3.1/all")
    const countriesResponse = response.data.map (
        (country) => {
            return {
                image: country.flags.png,
                name: country.name.common,
                population: country.population,
                region: country.region,
                capital: country.capital
            }
        }
    );
    return countriesResponse
}

export default getCountries;