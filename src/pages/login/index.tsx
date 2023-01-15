
import { Box, Button, TextField } from "@mui/material";
import * as React from "react";
import { Loginstyles } from "./styles";
export default function Login() {

  return (
    <Loginstyles>
      <Box
        component="form"
        className="form"
        noValidate
        autoComplete="off"
      >
        <img src="Images/Logoold.png" />
        <h1>Welcome!</h1>
        <h3>Sign Into Your Account</h3>
        <TextField id="filled-basic" label="Email" variant="filled" />
        <TextField id="filled-basic" label="Password" variant="filled" type="password" />


        <Button variant="contained">Login</Button>

      </Box>
    </Loginstyles>
  )

}
