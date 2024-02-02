import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form  onSubmit={handleFormSubmit} className="flex justify-center my-12">
      <input
       
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter a city name"
        className=" px-5 py-3 rounded-l-lg focus:outline-none  focus:ring-2 focus:ring-blue-00"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
