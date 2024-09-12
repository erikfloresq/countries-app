import React from 'react';
import styles from './Card.module.css';
import type { Country }  from '../../models/Country';

interface ICountry {
    country: Country
}

const Card: React.FC<ICountry> = ({ country }) => {
    return (
        <div className={styles.card}>
            <img src={country.image} alt={country.name} />
            <div className={styles.detail}>
                <h2 className={styles.title}>{country.name}</h2>
                <ul className={styles.items}>
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
                </ul>
            </div>
        </div>
    );
}

export default Card;