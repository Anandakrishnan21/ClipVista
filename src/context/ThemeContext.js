import React, { useState, createContext } from "react"; // Removed the useContext import

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const [themeColors, setThemeColors] = useState({
    text: mode === "dark" ? "white" : "black",
    background: mode === "dark" ? "black" : "white",
  });

  const toggle = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    setThemeColors({
      text: newMode === "dark" ? "white" : "black",
      background: newMode === "dark" ? "black" : "white",
    });
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode, themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
