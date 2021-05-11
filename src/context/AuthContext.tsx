import React, { createContext, useContext, useState } from "react";
import { User } from "../domain/model/interfaces/User";
import { AuthHttp } from "../domain/services/api/auth-http";
import { StorageKeys } from "../domain/services/config/index";
import { StorageHandler } from "../domain/services/function/storage-handler";

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
    const { user, token } = await AuthHttp.signIn(phoneNumber, password);
    setUser(user);
    setSigned(Boolean(user.phoneNumber));
    await StorageHandler.set(StorageKeys.user, user);
    await StorageHandler.set(StorageKeys.token, token);
    return Boolean(token);
  }

  function signOut() {
    AuthHttp.signOut();
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user.phoneNumber), user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}
