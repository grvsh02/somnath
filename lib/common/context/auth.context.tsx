import React, { ReactNode, useContext, createContext } from 'react';
import PrefetchContext, {ProfileContextType} from "../utils/context";

interface AuthProvider {
  children: ReactNode | ReactNode[];
  value?: any;
}

interface AuthContext {
  //Context states to globalize
  profile?: ProfileContextType | null;
}

const AuthContext = createContext<AuthContext>({
    profile: null
});

const AuthProvider = ({ children }: AuthProvider) => {

  const {profile} = useContext(PrefetchContext);

  console.log("AuthProvider", profile?.username);

  return <AuthContext.Provider value={{ profile }}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
