import React, { createContext, useContext, useState } from "react";

const TrailerContext = createContext();

export const TrailerProvider = ({ children }) => {
  const [trailerData, setTrailerData] = useState(null);

  const setTrailer = (data) => {
    setTrailerData(data);
  };

  return (
    <TrailerContext.Provider value={{ trailerData, setTrailer }}>
      {children}
    </TrailerContext.Provider>
  );
};

export const useTrailer = () => {
  return useContext(TrailerContext);
};
