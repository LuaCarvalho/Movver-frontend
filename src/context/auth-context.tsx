import React, { createContext, useContext, useEffect, useState } from "react";
import { iClient } from "../domain/model/interfaces/iClient";
import { AuthHttp } from "../domain/services/api/auth-http";

interface ContextType {
  signed: boolean;
  user: iClient;
  signIn(phoneNumber: string, password: string): Promise<boolean>;
  signOut(): void;
}

export const AuthContext = createContext({} as ContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setClient] = useState<iClient>({} as iClient);
  const [signed, setSigned] = useState(false);

  async function signIn(phoneNumber: string, password: string): Promise<boolean> {
    const user: iClient = await AuthHttp.signIn(phoneNumber, password);
    const isLogged = Boolean(user.phoneNumber);
    setClient(user);
    setSigned(isLogged);
    return isLogged;
  }

  function signOut() {
    AuthHttp.signOut()
      .then(_ => setSigned(false))
  }

  useEffect(() => {
    AuthHttp.automaticSignIn()
      .then(setClient)
      .then(_ => setSigned(true));
  }, []);

  return (
    <AuthContext.Provider value={{ signed, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}
