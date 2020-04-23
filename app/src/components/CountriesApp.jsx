import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";

class CountriesApp extends React.Component {
  constructor() {
    super();
    this.state = {
      countrySearch: "",
      countryFilter: "None",
      countries: []
    };
    this.handleUpdateCountrySearch = this.handleUpdateCountrySearch.bind(this);
    this.handleUpdateCountryFilter = this.handleUpdateCountryFilter.bind(this);
    this.fetchCountries = this.fetchCountries.bind(this);
    this.filterCountriesByRegion = this.filterCountriesByRegion.bind(this);
    this.openCountryInfo = this.openCountryInfo.bind(this);
  }

  componentDidMount() {
    this.fetchCountries("https://restcountries.eu/rest/v2/all");
  }

  fetchCountries() {
    let url = "";

    if (this.state.countrySearch.trim() === "") {
      url = "https://restcountries.eu/rest/v2/all";
    } else {
      url = `https://restcountries.eu/rest/v2/name/${this.state.countrySearch}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.status === 404) {
          this.setState(() => {
            return {
              countries: []
            };
          });
        } else {
          this.setState(() => {
            const countries = this.filterCountriesByRegion(data);
            return {
              countries
            };
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  filterCountriesByRegion(countries) {
    if (this.state.countryFilter !== "None") {
      return countries.filter(country => {
        return country.region === this.state.countryFilter;
      });
    } else {
      return countries;
    }
  }

  handleUpdateCountrySearch(e) {
    const countrySearch = e.target.value;
    this.setState(() => {
      return { countrySearch };
    });
    return Promise.resolve();
  }

  handleUpdateCountryFilter(e) {
    this.fetchCountries();

    const countryFilter = e.target.value;

    this.setState(prevState => {
      return {
        countryFilter,
        countries: this.filterCountriesByRegion(prevState.countries)
      };
    });
  }

  openCountryInfo(e) {
    const countryCode = e.target.getAttribute("data-alpha3Code");
    console.log(countryCode);
  }

  render() {
    return (
      <div className="countries-app">
        <Header />
        <div className="wrapper">
          <Router>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  countrySearch={this.state.countrySearch}
                  countryFilter={this.state.countryFilter}
                  handleUpdateCountrySearch={this.handleUpdateCountrySearch}
                  handleUpdateCountryFilter={this.handleUpdateCountryFilter}
                  fetchCountries={this.fetchCountries}
                  countries={this.state.countries}
                  openCountryInfo={this.openCountryInfo}
                />
              )}
            />
          </Router>
        </div>
      </div>
    );
  }
}

export default CountriesApp;
