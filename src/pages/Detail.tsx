import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import { getCountry } from '../app/countries';
import type { Country } from '../models/Country';
import "./Detail.css";

export const loader = async ({ params }: any) => {
    const country = await getCountry(params.countryName);
    return country[0];
}

const Detail = () => {
    const country = useRouteLoaderData('detail') as Country;

    let borders = country.borders?.map((border) => (
        <li>
            {border}
        </li>
    ));

    return (
        <div className="container">
            <img src={country.image} alt={country.name} />
            <h1>{country.name}</h1>
            <ul className="items">
                    <li>
                        <label>Population:</label>
                        {country.population}
                    </li>
                    <li>
                        <label>Region:</label>
                        {country.region}
                    </li>
                    <li>
                        <label>Capital:</label>
                        {country.capital}
                    </li>
                    <li>
                        <label>Flag:</label>
                        {country.flag}
                    </li>
                    <li>
                        <label>Timezones:</label>
                        {country.timezones}
                    </li>
                    <li>
                        <label>Borders:</label>
                        <ul>
                            {borders}
                        </ul>
                    </li>
                </ul>
        </div>
    );
};

export default Detail;