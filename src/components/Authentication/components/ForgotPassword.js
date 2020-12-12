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
export default function ForgotPassword() {
  const { setAuthState } = useAuthentication();
  const [fData, setFData] = useState({
    email: "",
  });
  const onSubmitForgotPassword = (e)=>{
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={onSubmitForgotPassword}>
        <center>
          <div>
            <AppLogo imageStyle={{ width: "35%" }} />
            <Typography variant="h4" style={{ marginTop: 20 }}>
            App Title
            </Typography>
          </div>

          <Typography variant="h6" style={{ marginTop: 20 }}>
            Reset your password
          </Typography>
          <RRow>
            <RCol xs={12}>
              <TextField
                autoComplete="email"
                name="email"
                required
                size="small"
                fullWidth
                id="email"
                label="email"
                value={fData.email}
                onChange={(e) => setFData({ ...fData, email: e.target.value })}
              />
            </RCol>
          </RRow>
          <Button variant="contained" color="primary" rounded style={{ width: "60%", marginTop: 20 }} type="submit">
            Submit
          </Button>

          <div style={{ marginTop: 20 }}>
            <span>
              <Button
                onClick={() => setAuthState(AuthState.LOGIN)}
                style={{ padding: 0, margin: 0 }}
                size="small"
                color="primary"
              >
                Back to login
              </Button>
            </span>
          </div>
        </center>
      </form>
    </div>
  );
}
