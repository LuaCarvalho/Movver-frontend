import React, { createContext, useContext, useState } from "react";
import { Point } from "react-native-google-places-autocomplete";

export enum directionEnum {
  ORIGEN = "Origem",
  DESTINATION = "Destino"
}

export interface Place {
  description: string;
  direction: directionEnum;
  geometry: { location: Point };
}

interface ContextType {
  locations: Place[];
  addLocation: (location: Place) => void;
}

export const LocationContext = createContext<ContextType>({} as ContextType);

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [locations, setLocations] = useState<Place[]>([]);

  function addLocation(location: Place): void {
    setLocations([...locations, location]);
  }

  return (
    <LocationContext.Provider value={{ locations, addLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export function useLocationContext() {
  return useContext(LocationContext);
}
