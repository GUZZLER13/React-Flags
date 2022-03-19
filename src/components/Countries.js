import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([])
    const [rangeValue, setRangeValue] = useState(36)

    // Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, [])

    return (
        <div className='countries'>
            <ul className="radio-container">
                <input type="range"
                    min="1"
                    max="250"
                    defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                />
            </ul>
            <ul>
                {data
                    .slice(0, rangeValue)
                    .map((pays, index) => (
                        <Card key={index} country={pays} />
                    ))}
            </ul>
        </div>
    );
};

export default Countries;