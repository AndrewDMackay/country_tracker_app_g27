
import React from 'react';
import './ListItem.css';

const CountryDetail = ({country}) => {

    return (
        <div>
            <h3>{country.name}</h3>
                <p>{country.height}</p>
                <p>{country.region}</p>
                <p>{country.meaning}</p>
        </div>
    )
}

export default CountryDetail;

