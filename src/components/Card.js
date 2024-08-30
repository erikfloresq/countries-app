import style from './Card.module.css';

function Card({ country }) {
    return (
        <div className={style.container}>
            <img className={style.container} src= {country.image} alt="Country flags" />
            <div className={style.detail}>
                <h2 className={style.title}>{country.name}</h2>
                <ul className={style.items}>
                    <li>
                        <label className={style.label}>Population:</label>
                        {country.population}
                    </li>
                    <li>
                        <label className={style.label}>Region:</label>
                        {country.region}
                    </li>
                    <li>
                        <label className={style.label}>Capital:</label>
                        {country.capital}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Card;