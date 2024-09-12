import React from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import { getCountry } from '../app/countries';
import type { Country } from '../models/Country';
import styles from "./Detail.module.css";

export const loader = async ({ params }: any) => {
    const country = await getCountry(params.countryName);
    return country[0];
}

const Detail = () => {
    const country = useRouteLoaderData('detail') as Country;

    let borders = country.borders?.map((border) => (
        <li key={border}>
            {border}
        </li>
    ));

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
                                    Sub Region
                                </li>
                                <li>
                                    <label>Capital:</label>
                                    {country.capital}
                                </li>
                            </ul>
                            <ul className={styles.column}>
                                <li>
                                    <label>Top Level Domain:</label>
                                    top
                                </li>
                                <li>
                                    <label>Currencies:</label>
                                    Currencies
                                </li>
                                <li>
                                    <label>Languages:</label>
                                    Languages
                                </li>
                            </ul>
                        </div>
                        <div className={styles.borderContainer}>
                            <h2>Border Countries:</h2>
                            <ul>
                                {borders}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;