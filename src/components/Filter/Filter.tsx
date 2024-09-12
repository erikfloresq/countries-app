import React from "react";
import styles from "./Filter.module.css"

interface IFilter {
    selectedRegion: string,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Filter: React.FC<IFilter> = ({ selectedRegion, onChange }) => {
    return (
        <div className={styles.selectContainer}>
            <select 
                value={selectedRegion}
                onChange={onChange}
            >
                <option value="">Filter by Region</option>
                <option value="americas">Americas</option>
                <option value="africa">Africa</option>
                <option value="oceania">Oceania</option>
                <option value="antarctic">Antarctic</option>
                <option value="asia">Asia</option>
            </select>
        </div>
    );
}

export default Filter;