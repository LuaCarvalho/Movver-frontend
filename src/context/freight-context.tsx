import React, { createContext, useContext, useState } from "react";
import { Freight } from '../domain/model/classes/Freight';
import { iFreight } from "../domain/model/interfaces/iFreight";

interface ContextType {
  freight: iFreight;
  isReadyToStart: boolean;
  addFreight: (freight: iFreight) => void;
}

export const FreightContext = createContext({} as ContextType);

export const FreightProvider = ({ children }: { children: React.ReactNode }) => {
  const [isReadyToStart, setIsReadyToStart] = useState(false);
  const [ freight ] = useState<Freight>(new Freight({} as iFreight));

  function addFreight(freightSource: iFreight) {
    Object.assign(freight, new Freight(freightSource));
    setIsReadyToStart(freight.isReady());
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
