import React from "react";

import { Link } from "react-router-dom";

const CountryPage = props => {
  const {
    flag,
    name,
    nativeName,
    topLevelDomain,
    population,
    region,
    languages,
    subregion,
    capital,
    currencies,
    borders
  } = props.location.state;

  return (
    <div className="country-page">
      <Link to="/">
        <button className="btn btn--long">Back</button>
      </Link>

      <main className="country-page__wrapper">
        <div className="flag-container">
          <img src={flag} alt="country flag" className="flag-container__img" />
        </div>

        <div className="country-page__info">
          <h2 className="country-page__info__header">{name}</h2>
          <div className="country-page__info__details">
            <p>
              <strong>Native Name: </strong>
              {nativeName}
            </p>
            <p>
              <strong>Top Level Domain: </strong>
              {topLevelDomain}
            </p>
            <p>
              <strong>Population: </strong>
              {population}
            </p>
            <p>
              <strong>Region: </strong>
              {region}
            </p>
            <p>
              <strong>Languages: </strong>
              {languages.map(language => {
                return language.name;
              })}
            </p>
            <p>
              <strong>Sub Region: </strong>
              {subregion}
            </p>
            <p>
              <strong>Capital: </strong>
              {capital}
            </p>
            <p>
              <strong>Currencies: </strong>
              <br />
              <br />
              {currencies.map(currency => {
                return <span className="currency">{currency.name}</span>;
              })}
              <br />
              <br />
            </p>
            <p>
              <strong>Border Countries: </strong>
              <br />
              <br />
              {borders.length === 0 ? (
                <span className="border-country">None</span>
              ) : (
                borders.map(borderCountry => {
                  return (
                    <span className="border-country">{borderCountry}</span>
                  );
                })
              )}
              {}
            </p>
          </div>
        </div>
      </main>
      <h1>{props.location.state.count}</h1>
    </div>
  );
};

export default CountryPage;
