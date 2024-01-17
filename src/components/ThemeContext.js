import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Default theme

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const gradients = {
        light: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
        dark: 'linear-gradient(90deg, rgba(8,0,37,1) 0%, rgba(27,0,119,0.9) 50%, rgba(8,0,37,1) 100%)',
        light2: 'linear-gradient(135deg, rgba(131,58,180,1) 0%, rgba(8,0,37,1) 50%)',
        dark2: 'linear-gradient(135deg, rgba(153,58,180,1) 0%, rgba(8,0,37,1) 50%)'
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, gradients }}>
            {children}
        </ThemeContext.Provider>
    );
};
