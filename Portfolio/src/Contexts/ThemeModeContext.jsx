import React, { useState, createContext } from 'react';

export const ThemeModeContext = createContext();

 export default function ThemeModeContextProvider(props) {
  const[mode,setMode]=useState({
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
  })
   return (
    <ThemeModeContext.Provider value={{...mode}}>
    {props.children}
  </ThemeModeContext.Provider>
   )
 }
 
