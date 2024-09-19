import React from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import { getCountry } from '../app/countries';
import type { Country } from '../models/Country';
import styles from "./Detail.module.css";

export const loader = async ({ params }: any) => {
    const country = await getCountry(params.countryCode);
    return country[0];
}

interface ICountry {
    country: Country
}

const BorderCountry: React.FC<ICountry> = ({ country }) => {
    if(country.borders == null) {
        return <div></div>
    } else {
        return (
            <div className={styles.borderContainer}>
                <h2>Border Countries:</h2>
                <ul>
                    {country.borders?.map((border) => (
                        <li key={border}>
                            <Link to={`../${border.toLowerCase()}`} relative="path">{border}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const Detail = () => {
    const country = useRouteLoaderData('detail') as Country;

    return (
        <div className={styles.detailRoot}>
            <div className={styles.detailContainer}>
                <div className={styles.menu}>
                    <Link className={styles.back} to={`/`}>← Back</Link>
                </div>
                <div className={styles.detail}>
                    <img className={styles.flagName} src={country.image} alt={country.name} />
                    <div className={styles.info}>
                        <h1>{country.name}</h1>
                        <div className={styles.items}>
                            <ul className={styles.column}>
                                <li>
                                    <label>Native Name:</label>
                                    Native
                                </li>
                                <li>
                                    <label>Population:</label>
                                    {country.population}
                                </li>
                                <li>
                                    <label>Region:</label>
                                    {country.region}
                                </li>
                                <li>
                                    <label>Sub Region:</label>
                                    {country.subregion}
                                </li>
                                <li>
                                    <label>Capital:</label>
                                    {country.capital}
                                </li>
                            </ul>
                            <ul className={styles.column}>
                                <li>
                                    <label>Top Level Domain:</label>
                                    {country.tld}
                                </li>
                                <li>
                                    <label>Currencies:</label>
                                    {country.currencies?.join(", ")}
                                </li>
                                <li>
                                    <label>Languages:</label>
                                    {country.languages?.join(", ")}
                                </li>
                            </ul>
                        </div>
                        <BorderCountry country={country} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;