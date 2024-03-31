import React, { createContext, useState, useEffect } from "react";
import { useColorScheme } from "nativewind";

interface ThemeProviderProps {
  children: React.ReactNode;
}

type themeProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const ThemeContext = createContext<themeProps>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const themeValue = colorScheme !== undefined ? colorScheme : "light";

  const toggleTheme = () => {
    toggleColorScheme()
  };

  console.log('first', colorScheme)

  return (
    <ThemeContext.Provider value={{ theme: themeValue, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};