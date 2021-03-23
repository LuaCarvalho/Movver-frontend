import React, { createContext, useContext, useState } from "react";

import { directionEnum } from "../model/types/enums";
import Location from "../model/interfaces/Location";

interface ContextType {
  origin: Location;
  destination: Location;
  distance: number;
  setDistance: (distance: number) => void;
  setLocation: (location: Location) => void;
}

export const LocationContext = createContext({} as ContextType);

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [origin, setOrigin] = useState({} as Location);
  const [destination, setDestination] = useState({} as Location);
  const [distance, setDistance] = useState(0);

  function setLocation(location: Location) {
    if (location.direction === directionEnum.ORIGIN) setOrigin(location);
    else setDestination(location);
  }

  return (
    <LocationContext.Provider value={{ origin, destination, distance, setDistance, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export function useLocationContext() {
  return useContext(LocationContext);
}
