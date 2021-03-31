import  React from "react";

/** Custom Hooks */
import useAuthHandler from "../utils/custom-hooks/AuthHandler";
/** Utils */
import { DEFAULT_USER_AUTH } from "../utils/Consts";
import { getStoredUserAuth } from "../utils/helper";



  
  export const authContext = React.createContext({
    auth: DEFAULT_USER_AUTH,
    setAuthStatus: () => {},
    setUnauthStatus: () => {}
  });

const { Provider } = authContext;
const AuthProvider= ({children}) => {
  const { auth, setAuthStatus, setUnauthStatus } = useAuthHandler(
    getStoredUserAuth()
  );
    let value ={ auth, setAuthStatus, setUnauthStatus };
  return (
    <Provider value={value}>
    {children}
    </Provider>
  );
};

export default AuthProvider;