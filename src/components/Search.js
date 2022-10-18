import { CleaningServices } from "@mui/icons-material";
import React, { useState, useEffect } from "react";

const Search = ({ setSearchTerm }) => {
  

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="search here "
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Search;
