import React from "react";

const Search = ({ search, handleChange }) => {
  return (
    <>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" onChange={handleChange} value={search} />
    </>
  );
};

export default Search;
