import { useContext } from "react";
import { AuthenticationContext } from "./context";

export default function useAuthentication() {
    return useContext(AuthenticationContext);
  }