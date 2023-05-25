import React from 'react';

const SearchBar = ({handleSearch}) => {
    const handleChange = (event) => {
        handleSearch(event.target.value);
    };

    return (
        <input type="text" placeholder="Search" onChange={handleChange} />
    )
}

export default SearchBar