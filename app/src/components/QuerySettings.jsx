import React from "react";

const QuerySettings = props => {
  return (
    <div className="query-settings">
      <input
        type="text"
        placeholder="Search for a country..."
        className="query-settings__search"
        value={props.countrySearch}
        onChange={props.handleUpdateCountrySearch}
      />
      <select
        name=""
        id=""
        className="query-settings__region"
        onChange={props.handleUpdateCountryFilter}
      >
        <option value="" disabled selected>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default QuerySettings;
