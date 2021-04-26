import React, { createContext, useContext, useState } from "react";
import { User } from "../domain/model/interfaces/User";
import { AuthHttp } from "../domain/services/api/auth-http";
import { StorageKeys } from "../domain/services/config/index";
import { StorageHandler } from "../domain/services/function/storage-handler";


interface ContextType {
  signed: boolean;
  user: User;
  loading: boolean;
  signIn(phoneNumber: string, password: string): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext({} as ContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>({} as User);

  async function signIn(phoneNumber: string, password: string) {
    const { user, token } = await AuthHttp.signIn(phoneNumber, password);
    setUser(user);
    await StorageHandler.set(StorageKeys.user, user);
    await StorageHandler.set(StorageKeys.token, token);
  }

  function signOut() {
    AuthHttp.signOut();
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}
