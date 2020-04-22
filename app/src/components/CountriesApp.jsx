import React, { Component } from "react";
import Header from "./Header";
import QuerySettings from "./QuerySettings";

class CountriesApp extends React.Component {
  constructor() {
    super();
    this.state = {
      countrySearch: "",
      countryFilter: undefined
    };
    this.handleUpdateCountrySearch = this.handleUpdateCountrySearch.bind(this);
    this.handleUpdateCountryFilter = this.handleUpdateCountryFilter.bind(this);
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }

  fetchCountries() {}

  handleUpdateCountrySearch(e) {
    const countrySearch = e.target.value;
    this.setState(() => {
      return { countrySearch };
    });
  }

  handleUpdateCountryFilter(e) {
    const countryFilter = e.target.value;
    this.setState(() => {
      return { countryFilter };
    });
  }

  render() {
    return (
      <div className="countries-app">
        <Header />
        <div className="wrapper">
          <QuerySettings
            countrySearch={this.state.countrySearch}
            countryFilter={this.state.countryFilter}
            handleUpdateCountrySearch={this.handleUpdateCountrySearch}
            handleUpdateCountryFilter={this.handleUpdateCountryFilter}
          />
        </div>
      </div>
    );
  }
}

export default CountriesApp;
