import React, { useState } from "react";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import styles from "@/styles/Home.module.css";

const CreateMember = () => {
  const [type, setType] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const MemeberShipTypes = [
    {
      label: "Associate",
      value: "associate",
    },
    {
      label: "Fellow",
      value: "fellow",
    },
    {
      label: "Fellow Discounted",
      value: "fellowDiscounted",
    },
  ];

  return (
    <Box component="main" className={styles.main} id="wrapper">
      <Box>
        <p className="">View Applications</p>
      </Box>
      <InputLabel>Membership Type</InputLabel>
      <Box>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={handleChange}
          value={type}
        >
          <MenuItem value={""}>Any</MenuItem>
          {MemeberShipTypes?.map((val, index) => {
            return (
              <MenuItem key={index} value={val?.value}>
                {val?.label}
              </MenuItem>
            );
          })}
        </Select>
        <InputLabel>Last Name</InputLabel>
        <Box className="form_Group">
          <TextField className="form_Control" error={false} />
        </Box>
        <Button color="primary">Create</Button>
      </Box>
    </Box>
  );
};

export default CreateMember;
