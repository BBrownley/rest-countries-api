import React from "react";
import Country from "./Country";

const Countries = props => {
  return (
    <div className="countries">
      {props.countries.length === 0 ? <h1>No countries found</h1> : ""}
      {props.countries.map((country, index) => {
        const {
          name,
          nativeName,
          flag,
          population,
          region,
          capital,
          alpha3Code,
          currencies,
          languages,
          subregion,
          borders
        } = country;

        return (
          <Country
            name={name}
            nativeName={nativeName}
            topLevelDomain={country.topLevelDomain[0]}
            flag={flag}
            population={population}
            region={region}
            capital={capital}
            openCountryInfo={props.openCountryInfo}
            key={index}
            alpha3Code={alpha3Code}
            currencies={currencies}
            languages={languages}
            subregion={subregion}
            borders={borders}
          />
        );
      })}
    </div>
  );
};

export default Countries;
