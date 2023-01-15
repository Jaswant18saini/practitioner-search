
import { Box, Button, TextField } from "@mui/material";
import * as React from "react";
import { Loginstyles } from "./styles";
export default function Login() {

return(
    <Loginstyles>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <h2>Login</h2>
      <TextField id="filled-basic" label="Email" variant="filled" />
      <TextField id="filled-basic" label="Password" variant="filled" />


       <Button variant="contained">Login</Button>

    </Box>
</Loginstyles>
)

}
