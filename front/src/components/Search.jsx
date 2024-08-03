import React, { useState, useEffect, useCallback } from 'react';
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  // const handleKeyUp = useCallback((e) => {
  //   if (e.key === 'Enter' && query) {
  //     handleSearch();
  //   }
  // }, [handleSearch]);

  // useEffect(() => {
  //   window.addEventListener('keyup', handleKeyUp);
  //   return () => {
  //     window.removeEventListener('keyup', handleKeyUp);
  //   };
  // }, [handleKeyUp]);

  return (
    <div className="search-bar flex items-center border-2 rounded-lg p-1">
      <input
        type="search"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="p-2 rounded focus:outline-none w-full"
        onKeyDown={(e) => e.key === 'Enter' && query && handleSearch()}
      />
      <button onClick={handleSearch} className="p-2 ml-2 lg:border-l-2">
        <CiSearch size={25} />
      </button>
    </div>
  );
};

export default SearchBar;