import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/users?search=${searchQuery}`);
      setUsers(response.data);
    } catch (error) {
      console.error("There was an error searching for users!", error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Search by username"
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {users.map((user) => (
          <li key={user.sn}>{user.username} - {user.phone}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;