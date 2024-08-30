import { useState, useEffect } from 'react';
import style from './App.module.css';
import Card from './components/Card';
import getCountries from './countries';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      (async () => {
        const json = await getCountries()
        setData(json)
      })();

      return () => {

      };
  }, []);

  return (
    <div className={style.root}>
      <h2 className={style.header}>
        <h1>Where in the world?</h1>
        <button className={style.button}>
          Dark Mode
        </button>
      </h2>
      <main className={style.main}>
        {data.map((country) =>  
          <Card country={country} />
        )}
      </main>
    </div>
  );
}

export default App;
