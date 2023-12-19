import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";

// services.js
const fetchPhotos = async (query) => {
  const { data } = await axios.get(
    `https://657fc2666ae0629a3f53998c.mockapi.io/api/curd?name=${query}`
  );
  return data;
};

export default function WithoutDebouncing() {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetch = useCallback(async () => {
    const data = await fetchPhotos(searchTerm);
    setPhotos(data);
  }, [searchTerm]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {photos?.map((photo) => (
          <div>{photo.name}</div>
        ))}
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";

// const useDebounce = (value, delay) => {
//   const [debounceValue, setDebounceValue] = useState(value);
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebounceValue(value);
//     }, delay);
//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debounceValue;
// };

// export default useDebounce;
