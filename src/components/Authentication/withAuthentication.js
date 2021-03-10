import React from "react";
import Authentication from "./Authentication";
import useAuthentication from "./useAuthentication";

export default function withAuthentication(WrapperComponent) {
  return (props) => {
    const authentication = useAuthentication();

    if (!authentication.session) {
      return <Authentication />;
    }

    return <WrapperComponent authentication={authentication} {...props} />;
  };
}