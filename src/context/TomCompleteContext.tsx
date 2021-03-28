import { directionEnum } from "../domain/model/types/enums";
import React, { createContext, useContext, useState } from "react";

import TomTomSearch from "../domain/model/interfaces/TomTomSearch";

interface ContextType {
  direction: directionEnum;
  tomSearch: TomTomSearch;
  setDirection: (direction: directionEnum) => void;
  setTomSearch: (tomSearch: TomTomSearch) => void;
}

export const TomCompleteContext = createContext({} as ContextType);

export const  TomCompleteProvider = ({ children }: { children: React.ReactNode }) => {
  const [tomSearch, setTomSearch] = useState({} as TomTomSearch);
  const [direction, setDirection] = useState({} as directionEnum);

  return (
    <TomCompleteContext.Provider value={{ tomSearch, direction, setDirection, setTomSearch }}>
      {children}
    </TomCompleteContext.Provider>
  );
};

export function useTomCompleteContext() {
  return useContext(TomCompleteContext);
}
