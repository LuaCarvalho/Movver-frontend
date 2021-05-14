import React, { createContext, useContext, useState } from "react";
import { Freight } from "../domain/model/interfaces/Freight";
import { FreightHandler } from "../domain/services/function/freight-handler";

interface ContextType {
  freight: Freight;
  isReadyToStart: boolean;
  addFreight: (freight: Freight) => void;
}

export const FreightContext = createContext({} as ContextType);

export const FreightProvider = ({ children }: { children: React.ReactNode }) => {
  const [isReadyToStart, setIsReadyToStart] = useState<boolean>(false);
  const [ freight ] = useState<Freight>({} as Freight);

  function addFreight(freightSource: Freight) {
    Object.assign(freight, freightSource)
    const isReady = FreightHandler.allFieldsAreFilled(freight);
    setIsReadyToStart(isReady);
  }

  return (
    <FreightContext.Provider value={{ freight, isReadyToStart, addFreight }}>
      {children}
    </FreightContext.Provider>
  );
};

export function useFreightContext() {
  return useContext(FreightContext);
}
