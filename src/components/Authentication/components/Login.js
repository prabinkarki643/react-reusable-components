import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import { RCol, RRow } from "../../RLayout";
import { AuthState } from "../context";
import useAuthentication from "../useAuthentication";
import { FormControlLabel, Checkbox, Button } from "@material-ui/core";
import logo from '../images/logo_placeholder.jpg'
// Create this component in your project directory and refer here.
const AppLogo = ()=>(
  <img src={logo} style={{width:'30%'}} alt="Logo"/>
)

export default function Login() {
  const { setAuthState, setSession } = useAuthentication();
  const [fData, setFData] = useState({
    userName: "",
    password: "",
    rememberme: false,
  });

  const onSubmitLogin = (e) => {
    e.preventDefault();
    const { userName, password, rememberme } = fData;
    const name = userName.includes('@')?userName.split('@')[0]:userName
    setSession({ user: { name: name,username:name } }, rememberme);
  };
  return (
    <div>
      <form onSubmit={onSubmitLogin}>
        <center>
          <div>
            <AppLogo imageStyle={{ width: "35%" }} />
            <Typography variant="h4" style={{ marginTop: 20 }}>
             App Title
            </Typography>
          </div>

       

          <Typography variant="h6" style={{ marginTop: 20 }}>
            Login to your account
          </Typography>
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
                autoComplete="fpassword"
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
              <Button
                onClick={() => setAuthState(AuthState.FORGOT_PASSWORD)}
                style={{ padding: 0, margin: 0, float: "right" }}
                size="small"
                color="primary"
              >
                Forgot Password?
              </Button>
            </RCol>
          </RRow>
          <RRow>
            <RCol>
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    color="primary"
                    checked={fData.rememberme}
                    onChange={(e) =>
                      setFData({ ...fData, rememberme: e.target.checked })
                    }
                  />
                }
                label="Remember me"
              />
            </RCol>
          </RRow>

          <Button
          variant="contained"
            rounded
            style={{ width: "60%", marginTop: 20 }}
            type="submit"
            color="primary"
          >
            LogIn
          </Button>

          <div style={{ marginTop: 20 }}>
            <span>
              New to Reactional Music?{" "}
              <Button
                onClick={() => setAuthState(AuthState.SIGNUP)}
                style={{ padding: 0, margin: 0 }}
                size="small"
                color="primary"
              >
                Create acount
              </Button>
            </span>
          </div>
        </center>
      </form>
    </div>
  );
}
