import axios from 'axios';
import type { CountryResponse } from '../models/CountryResponse';
import type { CountryDetailResponse } from '../models/CountryDetailResponse';
import type { Country } from '../models/Country';

export const getCountries = async (): Promise<Country[]>  => {
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

export const getCountry = async (countryName: string): Promise<Country[]> => {
    let response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
    const country: [Country] = response.data.map (
        (country: CountryDetailResponse) => {
            return {
                image: country.flags.png,
                name: country.name.common,
                population: country.population,
                region: country.region,
                capital: country.capital,
                flag: country.flag,
                timezones: country.timezones,
                borders: country.borders
            }
        }
    );
    return country
}