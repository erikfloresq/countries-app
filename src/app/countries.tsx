import axios from 'axios';
import type { CountryResponse } from '../models/CountryResponse';
import type { CountryDetailResponse } from '../models/CountryDetailResponse';
import type { Country } from '../models/Country';
import { count } from 'console';

export const getCountries = async (): Promise<Country[]>  => {
    let response = await axios.get("https://restcountries.com/v3.1/all")
    const countries: [Country] = response.data.map (
        (country: CountryResponse) => {
            return {
                image: country.flags.png,
                name: country.name.common,
                population: country.population,
                region: country.region,
                capital: country.capital,
                ccn3: country.ccn3
            }
        }
    );
    return countries
}

export const getCountry = async (countryCode: string): Promise<Country[]> => {
    let response = await axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    const country: [Country] = response.data.map (
        (country: CountryDetailResponse) => {
            return {
                image: country.flags.png,
                name: country.name.common,
                population: country.population,
                region: country.region,
                subregion: country.subregion,
                capital: country.capital,
                tld: country.tld,
                ccn3: country.ccn3,
                currencies: Object.values(country.currencies).map((currency) => currency.name),
                languages: Object.values(country.languages).map((language) => language),
                borders: country.borders
            }
        }
    );
    return country
}