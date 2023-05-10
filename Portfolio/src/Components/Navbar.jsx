import React, { useContext } from 'react';
import { ThemeModeContext } from '../Contexts/ThemeModeContext';

 export default function Navbar() {
  const { isLightTheme, light, dark } = useContext(ThemeModeContext);
  const theme = isLightTheme ? light : dark;
   return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
    <h1>logo</h1>
   
  </nav>
   )
 }
 
