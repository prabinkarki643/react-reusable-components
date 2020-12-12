import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import { RCol, RRow } from "../../RLayout";
import { AuthState } from "../context";
import useAuthentication from "../useAuthentication";
import { Button } from "@material-ui/core";
import logo from '../images/logo_placeholder.jpg'

// Create this component in your project directory and refer here.
const AppLogo = ()=>(
  <img src={logo} style={{width:'30%'}} alt="Logo"/>
)
export default function SignUp() {
  const { setAuthState } = useAuthentication();
  const [fData, setFData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onSubmitSignup = (e)=>{
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={onSubmitSignup}>
        <center>
          <div>
            <AppLogo imageStyle={{ width: "35%" }} />
            <Typography variant="h4" style={{ marginTop: 20 }}>
            App Title
            </Typography>
          </div>

          <Typography variant="h6" style={{ marginTop: 20 }}>
            Create your account
          </Typography>
          <RRow>
            <RCol xs={12} sm={6}>
              <TextField
                autoComplete="firstname"
                name="firstName"
                required
                size="small"
                fullWidth
                id="firstName"
                label="FirstName"
                value={fData.firstName}
                onChange={(e) =>
                  setFData({ ...fData, firstName: e.target.value })
                }
              />
            </RCol>
            <RCol xs={12} sm={6}>
              <TextField
                autoComplete="lastname"
                name="lastName"
                required
                size="small"
                fullWidth
                id="lastName"
                label="LastName"
                value={fData.lastName}
                onChange={(e) =>
                  setFData({ ...fData, lastName: e.target.value })
                }
              />
            </RCol>
          </RRow>
          <RRow>
            <RCol xs={12}>
              <TextField
                autoComplete="userName"
                name="userName"
                required
                size="small"
                fullWidth
                id="userName"
                label="Username"
                value={fData.userName}
                onChange={(e) =>
                  setFData({ ...fData, userName: e.target.value })
                }
              />
            </RCol>
          </RRow>
          <RRow>
            <RCol xs={12}>
              <TextField
                autoComplete="email"
                name="email"
                required
                size="small"
                fullWidth
                id="email"
                label="Email"
                value={fData.email}
                onChange={(e) => setFData({ ...fData, email: e.target.value })}
              />
            </RCol>
          </RRow>
          <RRow>
            <RCol xs={12}>
              <TextField
                autoComplete="password"
                name="password"
                required
                size="small"
                fullWidth
                id="password"
                label="Password"
                value={fData.password}
                onChange={(e) =>
                  setFData({ ...fData, password: e.target.value })
                }
              />
            </RCol>
          </RRow>
          <RRow>
            <RCol xs={12}>
              <TextField
                autoComplete="confirmPassword"
                name="confirmPassword"
                required
                size="small"
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                value={fData.confirmPassword}
                onChange={(e) =>
                  setFData({ ...fData, confirmPassword: e.target.value })
                }
              />
            </RCol>
          </RRow>

          <Button variant="contained" color="primary"  rounded style={{ width: "60%", marginTop: 20 }} type="submit">
            SIGNUP
          </Button>

          <div style={{ marginTop: 20 }}>
            <span>
              Already have an account?
              <Button
              color="primary"
                onClick={() => setAuthState(AuthState.LOGIN)}
                style={{ padding: 0, margin: 0 }}
                size="small"
              >
                Login
              </Button>
            </span>
          </div>
        </center>
      </form>
    </div>
  );
}
