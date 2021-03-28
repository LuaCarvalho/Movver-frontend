import React, { createContext, useContext, useEffect, useState } from "react";

import { directionEnum } from "../domain/model/types/enums";
import Localization from "../domain/model/interfaces/Localization";

interface ContextType {
  origin: Localization;
  destination: Localization;
  distance: number;
  addDistance: (distance: number) => void;
  addLocation: (location: Localization) => void;
}

export const LocationContext = createContext({} as ContextType);

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [origin, setOrigin] = useState({} as Localization);
  const [destination, setDestination] = useState({} as Localization);
  const [distance, setDistance] = useState(0);

  function addLocation(local: Localization): void {
    if (local.direction === directionEnum.ORIGIN) setOrigin(local);
    else setDestination(local);
  }

  return (
    <LocationContext.Provider
      value={{ origin, destination, distance, addDistance: setDistance, addLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export function useLocationContext() {
  return useContext(LocationContext);
}
