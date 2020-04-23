import React from "react";

const numeral = require("numeral");

const Country = props => {
  return (
    <div
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
    </div>
  );
};

export default Country;
