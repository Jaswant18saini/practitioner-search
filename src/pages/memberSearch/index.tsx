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
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

type Inputs = {
  memberShipNo: Number;
  membershipType: string;
  firstName: string;
  lastName: string;
  email: string;
  memberStatus: string;
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

const MemeberStatus = [
  {
    label: "Application Pending",
    value: "associate",
  },
  {
    label: "Membership Awaiting Activation",
    value: "memeberShipAwaitingActivation",
  },
  {
    label: "Renewal Due",
    value: "renewalDue",
  },
];

const MemberSearch = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Box component="main" className={styles.main} id="wrapper">
      <Box className="">
        Please specify the criteria for your member search.
        <br /> For help with the Member Search click {""}
        <Link href="https://bant.org.uk/bant/jsp/searchHelp.faces">here</Link>
        <Box
          component="form"
          className="form_memberSearch"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputLabel>Membership No</InputLabel>
          <Box className="d_Flex">
            <Box className="form_Group">
              <TextField
                className="form_Control"
                error={false}
                {...register("memberShipNo", { required: true })}
              />
              {errors.firstName?.type === "required" && (
                <p className="memberShipNo">This field is required</p>
              )}
            </Box>
            <InputLabel>Membership Type</InputLabel>
            <Box className="form_Group">
              <Controller
                control={control}
                name="membershipType"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={onChange}
                    defaultValue={""}
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
                )}
              />
            </Box>
            <InputLabel className="">First name</InputLabel>
            <Box className="form_Group">
              <TextField
                className="form_Control"
                error={errors.firstName !== undefined}
                {...register("firstName", { required: true })}
              />
              {errors.firstName?.type === "required" && (
                <p className="errormsg">This field is required</p>
              )}
            </Box>
            <InputLabel className="">Last name</InputLabel>
            <Box className="form_Group">
              <TextField
                className="form_Control"
                error={errors.lastName !== undefined}
                {...register("lastName", { required: true })}
              />
              {errors.lastName?.type === "required" && (
                <p className="errormsg">This field is required</p>
              )}
            </Box>
          </Box>
          <Box className="form_Group">
            <InputLabel className="">Email</InputLabel>
            <TextField
              className="form_Control"
              error={errors.email !== undefined}
              {...register("email", {
                pattern: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/,
                required: true,
              })}
            />
            {errors.email ? (
              <>
                {errors.email.type === "required" && (
                  <p className="errormsg">This field is required</p>
                )}
                {errors.email.type === "pattern" && (
                  <p className="errormsg">Please Enter a valid Email</p>
                )}
              </>
            ) : null}
          </Box>
          <InputLabel>Membership Status</InputLabel>
          <Box className="form_Group">
            <Controller
              control={control}
              name="memberStatus"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={value}
                  label="Any"
                  onChange={onChange}
                >
                  <MenuItem value={""}>Any</MenuItem>
                  {MemeberStatus?.map((val, index) => {
                    return (
                      <MenuItem key={index} value={val?.value}>
                        {val?.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              )}
            />
          </Box>
          <Box className="form_Group btn-cont">
            <Button type="submit">Submit</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MemberSearch;
