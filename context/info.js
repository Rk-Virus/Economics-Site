// context/user.js

import { createContext, useContext } from "react";
// Creating the user context
const InfoContext = createContext();

// Making the function which will wrap the whole app using Context Provider
export default function AppStore({ children }) {
  
    const info= {
        id: 1,
        devName: "Rk Virus",
        siteName: "Ekonopro"
    }

  return (
    <InfoContext.Provider value={ {info} }>
      {children}
    </InfoContext.Provider>
  );
}

// Make useInfoContext Hook to easily use our context throughout the application
export function useInfoContext() {
  return useContext(InfoContext);
}