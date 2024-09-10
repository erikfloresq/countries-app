import React, { useState, useEffect } from 'react';
import './App.css';
import Card from '../components/Card/Card';
import Search from '../components/Search/Search';
import Filter from '../components/Filter/Filter';
import { getCountries } from './countries';
import type { Country }  from '../models/Country';
import { Link } from 'react-router-dom';

function App() {
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
    <div className="app">
      <header className="app-header">
        <h1>Where in the world?</h1>
      </header>
      <div className='menu'>
        <Search text={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></Search>
        <Filter selectedRegion={selectedRegion} onChange={(e)=>{setSelectedRegion(e.target.value)}}></Filter>
      </div>
      <main className='countries-list'>
        {
          countries
            .filter((country) =>
              country.region.toLowerCase().includes(selectedRegion)
            )
            .filter((country) =>
              country.name.toLowerCase().includes(searchText)
            )
            .map((country) =>
              <Link to={ `detail/${country.name.toLowerCase()}` }>
                <Card country={country} />
              </Link>
              
            )
        }
      </main>
    </div>
  );
}

export default App;
