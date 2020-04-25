import React from "react";

import { Link } from "react-router-dom";

const numeral = require("numeral");

const Country = props => {
  const {
    flag,
    name,
    topLevelDomain,
    population,
    region,
    subregion,
    capital,
    currencies,
    languages,
    nativeName,
    borders
  } = props;

  console.log(borders);

  return (
    <Link
      to={{
        pathname: `/country/${props.name}`,
        state: {
          flag,
          name,
          topLevelDomain,
          population,
          region,
          subregion,
          capital,
          currencies,
          languages,
          nativeName,
          borders
        }
      }}
      className="country"
      onClickCapture={props.openCountryInfo}
      data-alpha3code={props.alpha3Code}
    >
      <div className="country__flag-container">
        <img
          src={props.flag}
          alt="country flag"
          className="country__flag-container__flag"
        />
      </div>

      <div className="country__info">
        <h2 className="country__info__name">{props.name}</h2>

        <p>
          <strong>Population: </strong>
          {numeral(props.population).format("0,0")}
        </p>

        <p>
          <strong>Region: </strong>
          {props.region}
        </p>

        <p>
          <strong>Capital: </strong>
          {props.capital.trim() === "" ? "N/A" : props.capital}
        </p>
      </div>
    </Link>
  );
};

export default Country;
