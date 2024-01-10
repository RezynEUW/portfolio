import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

// Define the color palettes for light and dark themes
const colorPalettes = {
    light: {
        purple: 'rgba(131,58,180,1)',
        red: 'rgba(253,29,29,1)',
        yellow: 'rgba(252,176,69,1)',
    },
    dark: {
        purple: 'rgba(153,58,180,1)',
        blue: 'rgba(27,0,119,1)',
        black: 'rgba(18,18,18,1)',
    }
};

// Create gradients using the color palettes
const themes = {
    light: {
        gradientThree: `linear-gradient(90deg, ${colorPalettes.light.purple} 0%, ${colorPalettes.light.red} 50%, ${colorPalettes.light.yellow} 100%)`,
        gradientTwo: `linear-gradient(90deg, ${colorPalettes.light.purple} 0%, ${colorPalettes.light.red} 100%)`, // Example two-color gradient
    },
    dark: {
        gradientThree: `linear-gradient(90deg, ${colorPalettes.dark.purple} 0%, ${colorPalettes.dark.blue} 50%, ${colorPalettes.dark.black} 100%)`,
        gradientTwo: `linear-gradient(90deg, ${colorPalettes.dark.purple} 0%, ${colorPalettes.dark.blue} 100%)`, // Example two-color gradient
    }
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Default theme

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const currentTheme = themes[theme];

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
