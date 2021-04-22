import React, { createContext, useContext, useState } from "react";
import { directionEnum } from "../domain/model/enums";
import { Localization } from "../domain/model/interfaces/Localization";

interface ContextType {
  origin: Localization;
  destination: Localization;
  distance: number;
  addDistance: (distance: number) => void;
  addLocalization: (location: Localization) => void;
}

export const LocalizationContext = createContext({} as ContextType);

export const LocalizationProvider = ({ children }: { children: React.ReactNode }) => {
  const [origin, setOrigin] = useState({} as Localization);
  const [destination, setDestination] = useState({} as Localization);
  const [distance, setDistance] = useState(0);

  function addLocalization(local: Localization): void {
    if (local.direction === directionEnum.ORIGIN)
      return setOrigin(local);
    setDestination(local);
  }

  return (
    <LocalizationContext.Provider
      value={{ origin, destination, distance, addDistance: setDistance, addLocalization }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export function useLocalizationContext() {
  return useContext(LocalizationContext);
}
