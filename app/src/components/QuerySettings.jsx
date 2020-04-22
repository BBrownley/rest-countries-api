import React from "react";

const QuerySettings = props => {
  return (
    <div className="query-settings">
      <input
        type="text"
        placeholder="Search for a country..."
        className="query-settings__search"
        value={props.countrySearch}
        onChange={event => {
          props.handleUpdateCountrySearch(event).then(() => {
            props.fetchCountries();
          });
        }}
      />
      <select
        name=""
        id=""
        className="query-settings__region"
        onChange={props.handleUpdateCountryFilter}
      >
        <option value="None" disabled selected>
          Filter by Region
        </option>
        <option value="None">(No filter)</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default QuerySettings;
