// This is a singleton class that holds the authentication value from its provider to use in non react component
// Setting autentication is done inside the AuthenticatioProvider file in context/index.js
class AuthHandler {
/**
 * Used in non component file
 * @type {{logout:Function,setSession:Function,session:object|null,authLoading:boolean,authError:any,authState:string,setAuthState:Function}}
 */
  authentication = {};
}

export default new AuthHandler();
