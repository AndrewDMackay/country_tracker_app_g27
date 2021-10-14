
import React, { useState, useEffect } from 'react';
// import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail';
import CountrySelector from '../components/CountrySelector';


const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);


    useEffect(() => {
        getCountries();
      }, [])
  

      const getCountries = function(){
          fetch("https://restcountries.com/v2/all")
          .then(res => res.json())
          .then(countries => setCountries(countries))
      }
  

      const onCountrySelected = function(country){
          setSelectedCountry(country);
      }


      const worldPopulation = countries.reduce((runningTotal, country) => {
            return runningTotal + country.population
      }, 0);
      

      const borderCountries = selectedCountry?.borders?.map((borderCountry) => {
            return countries.find((country) => {
            return country.alpha3Code === borderCountry
         })
      })

  
      return (
          <div className="main-container">
              <p><strong>Current World Population: </strong>{worldPopulation}</p>
              <CountrySelector countries={countries} onCountrySelected={onCountrySelected}/>
              {selectedCountry ?<CountryDetail country={selectedCountry}/> : null}
              {selectedCountry && <CountryDetail country={selectedCountry} borderCountries={borderCountries}/>}
          </div>
      )
  }
  
  export default CountryContainer;    

