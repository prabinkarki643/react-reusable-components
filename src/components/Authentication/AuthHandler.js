// This is a singleton class that holds the authentication value from its provider to use in non react component
// Setting autentication is done inside the AuthenticatioProvider file in context/index.js
class AuthHandler {
  /**
   * @type {{logout:Function,currentUser:object,setAuthState:Function,setCurrentUser:Function,setAuthentication:Function,logout:Function,loginSuccess:Function}}
   */
  authentication = {};
}

export default new AuthHandler();
