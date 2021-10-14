
import React from 'react';
import './ListItem.css';


const CountryDetail = ({country, borderCountries}) => {

    const getLanguages = (country) => {
    const languages = country.languages.map((language) => {
        return language.name;
    })

    return languages.join(", ");
    }


    const getBorders = (country) => {
    const borders = country.borders?.map((borders) => {
            return borders
    })
    
    if(borders !== []){
        return "No Borders"
    } else {
        return borders.join(", ");
    }}


    const getCurrencies = (country) => {
    const currencies = country.currencies.map((currencies) => {
        return `${currencies.name}, ${currencies.code}, ${currencies.symbol}`
    })
    return currencies.join(", ");
    }


    const borderCountryNames = borderCountries?.map((country) => {
        return country.name
    })

    const borderCountriesPopulation = borderCountries?.reduce((total, country) => {
        return total + country.population
    }, 0)
    


    return (
        <div class="country-detail-container">
            <h1>Country: {country.name}</h1>
            <p><strong>Code: </strong>{country.alpha3Code}</p>
            <p><strong>Region: </strong>{country.region}</p>
            <p><strong>Sub-Region: </strong>{country.subregion}</p>
            <p><strong>Capital: </strong>{country.capital}</p>
            <p><strong>Languages: </strong>{getLanguages(country)}</p>
            <p><strong>Population: </strong>{country.population}</p>
            <p><strong>Latitude, and Longitude: </strong>{country.latlng}</p>
            <p><strong>Currencies: </strong>{getCurrencies(country)}</p>
            <p><strong>Border Countries:</strong>{getBorders(country)}</p>
            <p><strong>Surrounding Population:</strong>{borderCountriesPopulation}</p>
            <p><strong>Flag: </strong></p>
                <div class="flag-container">
                    <img src={country.flag}></img>
                </div>
        </div>
    )
}

export default CountryDetail;

