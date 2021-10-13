
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


      const getWorldPopulation = function(countries){
      const worldPopulation = countries.population.reduce((runningTotal, population) => {
            return runningTotal + population
      }, 0);
      return worldPopulation;
      }

  
      return (
          <div className="main-container">
              <CountrySelector countries={countries} onCountrySelected={onCountrySelected}/>
              {selectedCountry ?<CountryDetail country={selectedCountry}/> : null}
              {/* <p><strong>Current World Population: </strong>{getWorldPopulation(countries)}</p> */}
          </div>
      )
  }
  
  export default CountryContainer;    

