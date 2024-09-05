import axios from 'axios';
import type { CountryResponse } from '../models/CountryResponse';
import type { Country } from '../models/Country';

const getCountries = async () => {
    let response = await axios.get("https://restcountries.com/v3.1/all")
    const countries: [Country] = response.data.map (
        (country: CountryResponse) => {
            return {
                image: country.flags.png,
                name: country.name.common,
                population: country.population,
                region: country.region,
                capital: country.capital
            }
        }
    );
    return countries
}

export default getCountries;