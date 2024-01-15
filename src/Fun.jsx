// UserForm.js
import React, { useState } from "react";

const Fun = () => {
  // State variables for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    country: "",
  });

  const getDataHadler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the form data as needed (e.g., send it to a server, perform validation, etc.)
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={formData?.name}
          name="name"
          onChange={getDataHadler}
          required
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          value={formData?.email}
          name="email"
          onChange={getDataHadler}
          required
        />
      </label>
      <br />

      <label>
        City:
        <input
          type="text"
          value={formData?.city}
          name="city"
          onChange={getDataHadler}
          required
        />
      </label>
      <br />

      <label>
        Country:
        <input
          type="text"
          value={formData?.country}
          name="country"
          onChange={getDataHadler}
          required
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Fun;
