import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const themeValue = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeProvider;

