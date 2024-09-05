import React from 'react';
import "./Search.css";

interface ISearch {
  text: string,
  onChange(event: any): any
}

const Search = ({ text, onChange }: ISearch) => {
  return (
    <form className='search'>
        <label>🔍</label>
        <input 
          className='search-input'
          type="search"
          placeholder='Search for a country...'
          value={text}
          onChange={onChange} />
    </form>
  );  
};

export default Search;