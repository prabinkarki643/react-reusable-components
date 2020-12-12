/**
 * Authenication Component
 * Allow user to add all auth flow called signin/signup/forgotpassword out of the box using React Context API.
 * Also Allow user to use withAuthentication HOC to add total authenticated routes in a minutes,
 * Following are the brif description about How To Use This Component.
 * 
 * Steps:
 * 1.Use AuthenticationProvider component in index.js or root component(this is responsible for providing all common state to all components)
 * 2.To Use With HOC
 *   >> use withAuthentication HOC with propsOnly=false, that will display auth screen if user is not signed in and display main screen if user is signed in.
 * 2.To Use With Manually
 *   >>use either withAuthentication HOC with propsOnly=true OR useAuthentication Hooks, which will give you all the state in the context and
 *     check the authState and currentUser(authState == AuthState.LOGGEDIN && currentUser) to navigate use either in auth screen(Authentication Component) or Dashboard screen(Protected Routes)
 * Context State Info:
 *   >>See in context/index.js file
 * 
 * Note:
 *  You can always listen for context change using useAuthentication() Hooks or withAuthentication() HOC
 */


import Authentication from "./Authentication";

export default Authentication

export {default as Authentication} from './Authentication'
export {default as withAuthentication} from './withAuthentication'
export {default as useAuthentication} from './useAuthentication'
export {default as AuthHandler} from './AuthHandler'
export * from './context'