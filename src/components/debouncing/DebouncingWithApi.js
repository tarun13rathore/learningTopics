import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";

// services.js

export default function DebouncingWithAPi() {
  const [name, setName] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  const filterApi = async (query) => {
    try {
      const { data } = await axios.get(
        `https://657fc2666ae0629a3f53998c.mockapi.io/api/curd?name=${query}`
      );
      setError(null);
      return data;
    } catch (error) {
      setError("Data Not Found");
      return [];
    }
  };

  useEffect(() => {
    const deb = setTimeout(async () => {
      const data = await filterApi(searchTerm);
      setName(data);
    }, 300);

    return () => {
      clearTimeout(deb);
    };
  }, [searchTerm]);

  return (
    <>
      <div style={{ marginTop: "150px" }}>
        <div
          style={{
            border: "1px solid black",
            textAlign: "center",
            marginTop: "50px",
            width: "300px", // Set a fixed width for the container
            margin: "auto", // Center the container horizontally
            padding: "20px", // Add some padding for spacing
            borderRadius: "8px", // Add rounded corners
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
          }}
        >
          <input
            type="text"
            value={searchTerm}
            placeholder="Search Name"
            style={{
              border: "1px solid black",
              marginBottom: "10px", // Add some space between the input and the card content
              width: "100%", // Make the input take up the full width
              padding: "8px", // Add padding to the input
              boxSizing: "border-box", // Ensure padding is included in the width
            }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {name?.map((i) => (
              <div
                key={i.id} // Add a unique key for each card
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "10px",
                  marginBottom: "10px",
                  backgroundColor: "#f9f9f9", // Set a background color
                }}
              >
                {i.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
