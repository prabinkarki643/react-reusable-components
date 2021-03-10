import React, { useEffect, useState } from "react";
import AuthHandler from "../AuthHandler";

export const AuthState = {
  LOGIN: "login",
  SIGNUP: "signup",
  LOGGEDIN: "loggedin",
  SIGNOUT: "signout",
  FORGOT_PASSWORD: "forgotpassword",
};

export const AuthenticationContext = React.createContext();

const mockSession ={
  user:{name:"MockUser",username:"Pk"}
}
export const AuthenticationProvider = ({ children,config={
  loginRedirectUrl:'',
} }) => {
  const [session, setSession] = useState(mockSession);
  const [state, setState] = useState({
    loading: true,
    error: null,
    authState:AuthState.LOGIN
  });
  const{loginRedirectUrl}=config
  const changePathNameToLogin = ()=>{
    if(loginRedirectUrl){
      window.history.replaceState(null,loginRedirectUrl,loginRedirectUrl)
    }
  }
  const authCheck = ()=>{
    setState({ ...state, loading: true,error:null });
    const userSessionFromLocalStorage = localStorage.getItem("user_session");
    const user_session = userSessionFromLocalStorage
      ? JSON.parse(userSessionFromLocalStorage)
      : null;
    setSession(user_session)
    if(!user_session){
      changePathNameToLogin()
    }
    setState({ ...state, loading: false });
  }
  const logOutUserSession = async ()=>{
    localStorage.removeItem("user_session");
      setSession(null);
  }

  //Get User From localStorage and set to the context
  useEffect(() => {
    authCheck()
  }, []);
  return (
    <AuthenticationContext.Provider
      value={{
        session: session,
        authLoading: state.loading,
        authError: state.error,
        authState: state.authState,
        setSession: (session,rememberme=false) => {
          if(rememberme){
            localStorage.setItem("user_session",JSON.stringify(session))
          }
          setSession(session)
        },
        setAuthState: (authState) => {
          setState({ ...state,authState:authState });
        },
        logout: logOutUserSession,
      }}
    >
      <AuthenticationContext.Consumer>
        {(authentication) => {
          AuthHandler.authentication = authentication;
          if (authentication.authLoading) {
            return <div>Authenticating...</div>;
          }
          return children;
        }}
      </AuthenticationContext.Consumer>
    </AuthenticationContext.Provider>
  );
};
export const AuthenticationConsumer = AuthenticationContext.Consumer;

