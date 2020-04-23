import React, { Component } from "react";

import QuerySettings from "./QuerySettings";
import Countries from "./Countries";

const Home = props => {
  return (
    <div>
      <QuerySettings
        countrySearch={props.countrySearch}
        countryFilter={props.countryFilter}
        handleUpdateCountrySearch={props.handleUpdateCountrySearch}
        handleUpdateCountryFilter={props.handleUpdateCountryFilter}
        fetchCountries={props.fetchCountries}
      />
      <Countries
        countries={props.countries}
        openCountryInfo={props.openCountryInfo}
      />
    </div>
  );
};

export default Home;
