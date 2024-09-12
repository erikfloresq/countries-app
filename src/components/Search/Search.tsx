import React from 'react';
import styles from "./Search.module.css";

interface ISearch {
  text: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<ISearch> = ({ text, onChange }) => {
  return (
    <form className={styles.search}>
        <label>🔍</label>
        <input 
          className={styles.searchInput}
          type="search"
          placeholder='Search for a country...'
          value={text}
          onChange={onChange} />
    </form>
  );  
};

export default Search;