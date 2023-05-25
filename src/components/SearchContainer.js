import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const SearchContainer = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (value) => {
        setSearchTerm(value);
    }

    return (
        <div>
            <SearchBar handleSearch={handleSearch}/>
            <SearchResults searchTerm={searchTerm}/>
        </div>
    )
}

export default SearchContainer;