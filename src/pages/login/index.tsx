import * as React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Loginstyles } from "@/PagesComponents/Login/Login.style";
import withoutAuth from "@/Auth/withoutAuth";
import { NextRouter } from "next/router";

interface ILoginProps {
  router: NextRouter
}

const Login = (props: ILoginProps) => {
  const { router } = props;

  const [userData, setUserData] = React.useState<{ email: string, password: string }>({ email: "", password: "" });

  function _handleLogin() {
    console.log(userData, "userData>");
    const { email, password } = userData;
    if (email !== "" && password !== "") {
      localStorage.setItem('Login', 'true');
      router.push('/dashboard');
    }
  }

  function onHandleChange(e: any, section: string): void {
    setUserData((prv) => ({ ...prv, [section]: e.target.value }))
  }

  return (
    <Loginstyles>
      <Box component="form" className="form" noValidate autoComplete="off">
        <img src="Images/Logoold.png" />
        <h1>Welcome!</h1>
        <h3>Sign Into Your Account</h3>
        <TextField label="Email" variant="filled" value={userData?.email} onChange={(e) => onHandleChange(e, "email")} />
        <TextField label="Password" variant="filled" value={userData?.password} type="password" onChange={(e) => onHandleChange(e, "password")} />
        <Button variant="contained" type="button" onClick={() => _handleLogin()}>Login</Button>
      </Box>
    </Loginstyles>
  );
}

export default withoutAuth(Login, '/dashboard')
