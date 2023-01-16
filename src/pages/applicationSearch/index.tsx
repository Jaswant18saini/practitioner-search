import React, { useState } from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import styles from "@/styles/Home.module.css";

const ApplicationSearch = () => {
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const handleChangeType = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };
  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const applicationType = [
    { label: "Membership", value: "membership" },
    { label: "CPD Event", value: "cpdEvent" },
    { label: "CPD Provider", value: "cpdProvider" },
  ];

  const applicationStatus = [
    {
      label: "Started",
      value: "started",
    },
    {
      label: "Submitted",
      value: "submitted",
    },
    {
      label: "Approved",
      value: "approved",
    },
    {
      label: "Rejected",
      value: "rejected",
    },
    {
      label: "Paid",
      value: "paid",
    },
    {
      label: "Awaiting Activation",
      value: "awaitingActivation",
    },
    {
      label: "Completed",
      value: "completed",
    },
    {
      label: "Cancelled",
      value: "cancelled",
    },
  ];

  return (
    <Box component="main" className={styles.main} id="wrapper">
      <Box>
        <p className="">View Applications</p>
      </Box>
      <Box>
        <InputLabel>Application Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={handleChangeType}
          value={type}
        >
          <MenuItem value={""}>Any</MenuItem>
          {applicationType?.map((val, index) => {
            return (
              <MenuItem key={index} value={val?.value}>
                {val?.label}
              </MenuItem>
            );
          })}
        </Select>

        <InputLabel>Application status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={handleChangeStatus}
          value={status}
        >
          <MenuItem value={""}>Any</MenuItem>
          {applicationStatus?.map((val, index) => {
            return (
              <MenuItem key={index} value={val?.value}>
                {val?.label}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
    </Box>
  );
};

export default ApplicationSearch;
