import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";

// services.js

export default function DebouncingWithAPi() {
  const [name, setName] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filterApi = async (query) => {
    const { data } = await axios.get(
      `https://657fc2666ae0629a3f53998c.mockapi.io/api/curd?name=${query}`
    );
    return data;
  };

  useEffect(() => {
    const deb = setTimeout(async () => {
      const data = await filterApi(searchTerm);
      setName(data);
    }, 3000);

    return () => {
      clearTimeout(deb);
    };
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {name?.map((photo) => (
          <div>{photo.name}</div>
        ))}
      </div>
    </div>
  );
}
