
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
    const [isLoading, setIsLoading] = useState<boolean>(true);
  
    useEffect(() => {
        (async () => {
          const countriesResponse = await getCountries()
          setCountries(countriesResponse)
        })();
        return (() => {
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
        });
    }, []);

    if(isLoading) {
        return <div className={styles.loading}>Loading ...</div>
    }
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
                    <Link key={country.cca2.toLowerCase()} to={ `detail/${country.ccn3?.toLowerCase()}` }>
                        <Card country={country} />
                    </Link>
                    )
                }
            </main>
        </div>
    );
}

export default ListCountries;