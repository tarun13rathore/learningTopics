import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  Stack,
} from "@mui/material";

const Create = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          rowGap: "20px",
        }}
      >
        <FormControl sx={{ gap: "20px" }}>
          <TextField
            name="name"
            value={formData?.name}
            type="text"
            size="small"
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            // onChange={(e)=>setFormData({...formData,name:e.target.value})}
            onChange={handleChange}
          />

          <TextField
            name="email"
            label="Email"
            type="email"
            size="small"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
          />

          <TextField
            label="Number"
            name="number"
            type="number"
            size="small"
            value={formData.number}
            onChange={handleChange}
            variant="outlined"
          />

          <TextField
            name="age"
            label="Age"
            type="number"
            size="small"
            value={formData.age}
            onChange={handleChange}
            variant="outlined"
          />
          {/* <TextField
            name="gender"
            label="Gender"
            type="text"
            size="small"
            value={formData.gender}
            onChange={handleChange}
            variant="outlined"
          /> */}
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="gender"
            value={formData.gender}
            label="Gender"
            size="small"
            onChange={handleChange}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>

          <Button
            style={{ marginTop: "20px" }}
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </FormControl>
      </div>
    </div>
  );
};

export default Create;
