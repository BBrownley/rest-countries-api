import React from "react";
import Country from "./Country";

const Countries = props => {
  return (
    <div className="countries">
      {props.countries.length === 0 ? <h1>No countries found</h1> : ""}
      {props.countries.map((country, index) => {
        return (
          <Country
            name={country.name}
            flag={country.flag}
            population={country.population}
            region={country.region}
            capital={country.capital}
            openCountryInfo={props.openCountryInfo}
            key={index}
            alpha3Code={country.alpha3Code}
          />
        );
      })}
    </div>
  );
};

export default Countries;
