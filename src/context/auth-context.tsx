import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "../domain/model/interfaces/User";
import { AuthHttp } from "../domain/services/api/auth-http";

interface ContextType {
  signed: boolean;
  user: User;
  signIn(phoneNumber: string, password: string): Promise<boolean>;
  signOut(): void;
}

export const AuthContext = createContext({} as ContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({} as User);
  const [signed, setSigned] = useState(false);

  async function signIn(phoneNumber: string, password: string): Promise<boolean> {
    const user: User = await AuthHttp.signIn(phoneNumber, password);
    const isLogged = Boolean(user.phoneNumber);
    setUser(user);
    setSigned(isLogged);
    return isLogged;
  }

  function signOut() {
    AuthHttp.signOut()
      .then(_ => setSigned(false))
  }

  useEffect(() => {
    AuthHttp.automaticSignIn()
      .then(setUser)
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
