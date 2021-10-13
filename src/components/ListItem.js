
import React from 'react';
import './ListItem.css';

const ListItem = ({country, onCountryClick}) => {
  const handleClick = function (){
    onCountryClick(country);
  }

  return <li onClick={handleClick}>{country.name}</li>
}

export default ListItem;

