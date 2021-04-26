import React, { createContext, useContext, useState } from "react";
import { Freight } from "../domain/model/interfaces/Freight";
import { FreightHandler } from "../domain/services/function/freight-handler";

interface ContextType {
  freight: Freight;
  allFieldsAreFilled: boolean;
  addFreight: (freight: Freight) => void;
}

export const FreightContext = createContext({} as ContextType);

export const FreightProvider = ({ children }: { children: React.ReactNode }) => {
  const [allFieldsAreFilled, setAllFieldsAreFilled] = useState<boolean>(false);
  const [ freight ] = useState<Freight>({} as Freight);

  function addFreight(freightSource: Freight) {
    Object.assign(freight, freightSource)
    const isCompleted = FreightHandler.allFieldsAreFilled(freight);
    setAllFieldsAreFilled(isCompleted);
  }

  return (
    <FreightContext.Provider value={{ freight, allFieldsAreFilled, addFreight }}>
      {children}
    </FreightContext.Provider>
  );
};

export function useFreightContext() {
  return useContext(FreightContext);
}
