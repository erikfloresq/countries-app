import React from "react";
import "./Filter.css"

interface IFilter {
    selectedRegion: string,
    onChange(event: any): any
}

const Filter = ({ selectedRegion, onChange }: IFilter) => {
    return (
        <div>
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