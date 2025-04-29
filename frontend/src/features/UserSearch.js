import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="mb-4 flex items-center gap-2">
      <input
        type="text"
        className="border border-gray-300 rounded px-2 py-1 w-64"
        placeholder="請輸入使用者名稱"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleKeyPress}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        查詢
      </button>
    </div>
  );
};

export default Search;