import { directionEnum } from "../domain/model/types/enums";
import React, { createContext, useContext, useState } from "react";

import TomTomSearch from "../domain/model/interfaces/TomTomSearch";

interface ContextType {
  contextQuery: string;
  contextDirection: directionEnum;
  tomSearch: TomTomSearch;
  setContextQuery: (query: string) => void;
  setContextDirection: (context: directionEnum) => void;
  setTomSearch: (tomSearch: TomTomSearch) => void;
}

export const TomCompleteContext = createContext({} as ContextType);

export const TomCompleteProvider = ({ children }: { children: React.ReactNode }) => {
  const [contextQuery, setContextQuery] = useState<string>("");
  const [tomSearch, setTomSearch] = useState({} as TomTomSearch);
  const [contextDirection, setContextDirection] = useState({} as directionEnum);

  return (
    <TomCompleteContext.Provider
      value={{
        contextQuery,
        tomSearch,
        contextDirection,
        setContextQuery,
        setContextDirection,
        setTomSearch,
      }}
    >
      {children}
    </TomCompleteContext.Provider>
  );
};

export function useTomCompleteContext() {
  return useContext(TomCompleteContext);
}
