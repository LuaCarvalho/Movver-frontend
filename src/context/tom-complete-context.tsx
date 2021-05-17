import React, { createContext, useContext, useState } from "react";
import { directionEnum } from "../domain/model/enums";
import { iTomTomSearch } from "../domain/model/interfaces/iTomTomSearch";

interface ContextType {
  contextQuery: string;
  contextDirection: directionEnum;
  tomSearch: iTomTomSearch;
  setContextQuery: (query: string) => void;
  setContextDirection: (context: directionEnum) => void;
  setTomSearch: (tomSearch: iTomTomSearch) => void;
}

export const TomCompleteContext = createContext({} as ContextType);

export const TomCompleteProvider = ({ children }: { children: React.ReactNode }) => {
  const [contextQuery, setContextQuery] = useState<string>("");
  const [tomSearch, setTomSearch] = useState({} as iTomTomSearch);
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
