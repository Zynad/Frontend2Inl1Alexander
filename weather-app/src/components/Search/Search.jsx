import React from "react";
import { useRef } from "react";

const Search = ({ searchClick }) => {
  let searchValue = useRef();
  return (
    <div className="search-area">
      <input type="text" placeholder="Sök på stad" ref={searchValue} />
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
