
import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
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
          console.log(country);
          setSelectedCountry(country);
      }
  
      return (
          <div className="main-container">
              <CountrySelector countries={countries} onCountrySelected={onCountrySelected}/>
              {selectedCountry ?<CountryDetail country={selectedCountry}/> : null}
          </div>
      )
  }
  
  export default CountryContainer;    

