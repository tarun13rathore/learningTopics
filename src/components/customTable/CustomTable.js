// CustomTable.js
import React from "react";

const CustomTable = ({ data }) => {
  // data should be an array of objects with the table rows' data

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name </th>
          <th>Age</th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            <td>{item?.id}</td>
            <td>{item?.firstName || item?.title}</td>
            <td>{item?.age || item?.price}</td>
            {/* Render other fields as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
