import React from "react";
import { useRef } from "react";
import "./Search.css";

const Search = ({ searchClick }) => {
  let searchValue = useRef();
  return (
    <div id="search-area">
      <input
        id="search-box"
        type="text"
        placeholder="Sök på stad"
        ref={searchValue}
      />
      <button
        id="search-button"
        onClick={() => {
          searchClick(searchValue.current.value);
        }}
      >
        Sök
      </button>
    </div>
  );
};

export default Search;
