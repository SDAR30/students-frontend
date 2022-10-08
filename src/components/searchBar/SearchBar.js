import React from 'react';
import './SearchBar.scss'

function SearchBar({searchTerm, setSearchTerm}) {


    return (
        <input className="searchBar" placeholder='Search by name'
        value={searchTerm}
        onChange={e=>setSearchTerm(e.target.value)}
        />
    );
}

export default SearchBar;