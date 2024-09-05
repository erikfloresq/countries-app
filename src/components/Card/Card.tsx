import React from 'react';
import './Card.css';
import type { Country }  from '../../models/Country';

interface ICountry {
    country: Country
}

const Card: React.FC<ICountry> = ({ country }) => {
    return (
        <div className="card">
            <img src={country.image} alt={country.name} />
            <div className="detail">
                <h2 className="title">{country.name}</h2>
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
                </ul>
            </div>
        </div>
    );
}

export default Card;