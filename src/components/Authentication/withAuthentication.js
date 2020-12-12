import React from "react";
import Authentication from "./Authentication";
import {
  AuthenticationConsumer,
  AuthState,
} from "./context";

export default function withAuthentication(
  WrapperComponent,
  onlyProps=true
) {
  if (onlyProps) {
    return (props) => {
      return (
          <AuthenticationConsumer>
            {(authentication) => {
              return (
                <WrapperComponent authentication={authentication} {...props} />
              );
            }}
          </AuthenticationConsumer>
      );
    };
  }
  return (props) => {
    return (
        <AuthenticationConsumer>
          {(authentication) => {
            if (
              authentication.authState == AuthState.LOGGEDIN &&
              authentication.currentUser
            ) {
              return (
                <WrapperComponent authentication={authentication} {...props} />
              );
            } else {
              return <Authentication />;
            }
          }}
        </AuthenticationConsumer>
    );
  };
}
