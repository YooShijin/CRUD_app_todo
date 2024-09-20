import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative mb-4 mt-5">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search todos..."
        className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <svg
        className="w-6 h-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
        ></path>
      </svg>
    </div>
  );
};

export default SearchBar;
