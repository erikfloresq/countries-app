
import React, { useState, useEffect } from 'react';
import { getCountries } from '../../app/countries';
import Card from '../Card/Card';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import { Link } from 'react-router-dom';
import type { Country }  from '../../models/Country';
import styles from "./ListCountries.module.css";

const ListCountries = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string>("");
    const [searchText, setSearchText] = useState<string>("");
  
    useEffect(() => {
        (async () => {
          const countriesResponse = await getCountries()
          setCountries(countriesResponse)
        })();
    }, []);

    return (
        <div>
            <div className={styles.menu}>
                <Search text={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></Search>
                <Filter selectedRegion={selectedRegion} onChange={(e)=>{setSelectedRegion(e.target.value)}}></Filter>
            </div>
            <main className={styles.countriesList}>
                {
                countries
                    .filter((country) =>
                    country.region.toLowerCase().includes(selectedRegion)
                    )
                    .filter((country) =>
                    country.name.toLowerCase().includes(searchText)
                    )
                    .map((country) =>
                    <Link key={country.name.toLowerCase()} to={ `detail/${country.name.toLowerCase()}` }>
                        <Card country={country} />
                    </Link>
                    
                    )
                }
            </main>
        </div>
    );
}

export default ListCountries;