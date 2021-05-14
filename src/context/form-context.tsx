import React, { createContext, useContext, useState } from "react";

interface ContextType {
  isError: boolean;
  msg: string;
  fieldName: string;
  add: (error: boolean, msg: string, fieldName: string) => void;
}

export const FormContext = createContext({} as ContextType);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState("");
  const [fieldName, setFieldName] = useState("");

  function add(error: boolean, msg: string, fieldName: string): void {
    setIsError(error);
    setMsg(msg);
    setFieldName(fieldName);
  }

  return (
    <FormContext.Provider value={{ isError, msg, fieldName, add }}>{children}</FormContext.Provider>
  );
};

export function useFormContext() {
  return useContext(FormContext);
}
