
import React, { useState, useEffect } from 'react';

const countryContainer = () => {
    const [countries setCountries] = useState([]);
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
          setSelectedMunro(country);
      }
  
      return (
          <div className="main-container">
              <MunroSelector munros={munros} onMunroSelected={onMunroSelected}/>
              {selectedMunro ?<MunroDetail munro={selectedMunro}/> : null}
          </div>
      )
  }
  
  export default MunroContainer;    

