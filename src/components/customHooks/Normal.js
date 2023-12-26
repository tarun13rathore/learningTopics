import React from "react";
import useFetch from "./useFetch";

const Normal = () => {
  const api = `https://657fc2666ae0629a3f53998c.mockapi.io/api/curd`;

  const { data, error, loading } = useFetch(api);
  if (error) {
    return (
      <>
        <h1>{error}</h1>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  }

  const names = data?.map((item) => item.name);
  return (
    <>
      {data && (
        <>
          <h2>Data:</h2>
          <ul className="card-list">
            {names.map((name, index) => (
              <li key={index} className="card-item">
                {name}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Normal;
