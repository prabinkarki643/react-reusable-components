import { useContext } from "react";
import { AuthenticationContext } from "./context";

/**
 * @returns {{logout:Function,setSession:Function,session:object|null,authLoading:boolean,authError:any,authState:string,setAuthState:Function}}
 */
export default function useAuthentication() {
    return useContext(AuthenticationContext);
  }