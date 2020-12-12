import React, { useContext, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { RRow, RCol } from "../RLayout";
import { Card, Container, Hidden, useTheme } from "@material-ui/core";
import BackgroundImage from "./images/authentication_music_bg.jpg";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { AuthState } from "./context";
import ForgotPassword from "./components/ForgotPassword";
import useAuthentication from "./useAuthentication";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

const AuthPanel = ({ authState, mode, children }) => {
  if (authState == mode) {
    return children;
  }
  return null;
};

export default function Authentication() {
  const { authState } = useAuthentication();
  const theme = useTheme();
  return (
    <div>
      <Dialog open={true} fullWidth maxWidth="lg">
        <RRow style={{ height: "100vh" }}>
          <Hidden xsDown>
            <RCol
              xs={12}
              sm={5}
              style={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></RCol>
          </Hidden>
          <RCol xs={12} sm={7} style={{}}>
            <AuthPanel authState={authState} mode={AuthState.LOGIN}>
              <Container
                maxWidth="xs"
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card elevation={5} style={{ padding: 10 }}>
                  <Login />
                </Card>
              </Container>
            </AuthPanel>
            <AuthPanel authState={authState} mode={AuthState.SIGNUP}>
              <Container
                maxWidth="xs"
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card elevation={5} style={{ padding: 10 }}>
                  <SignUp />
                </Card>
              </Container>
            </AuthPanel>
            <AuthPanel authState={authState} mode={AuthState.FORGOT_PASSWORD}>
              <Container
                maxWidth="xs"
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card elevation={5} style={{ padding: 10 }}>
                  <ForgotPassword />
                </Card>
              </Container>
            </AuthPanel>
          </RCol>
        </RRow>
      </Dialog>
    </div>
  );
}
