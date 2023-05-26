import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import "./scss/_search.scss";

const Search = () => {
  return (
    <div className="search-container">
      <input className="search-input" type="text" placeholder="Buscar..." />

      <SearchOutlined />
    </div>
  );
};

export default Search;
