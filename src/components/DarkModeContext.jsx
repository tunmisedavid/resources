import { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDark, setIsDark] = useState(!prefersDark);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setIsDark(stored === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};


export const useDarkMode = () => useContext(DarkModeContext);
