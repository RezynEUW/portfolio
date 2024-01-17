import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from './ThemeContext'; // Ensure this path is correct

const Navbar = () => {
    const { theme, toggleTheme, gradients } = useContext(ThemeContext);

    const navbarStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        height: '40px',
        background: gradients[theme],
        color: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    };

    const buttonContainerStyle = {
        display: 'flex',
        marginRight: '7.5%',
    };

    const buttonStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        margin: '0 5px',
        padding: '10px 15px',
        cursor: 'pointer',
        borderRadius: '5px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s',
        textDecoration: 'none',
    };

    const logoStyle = {
        height: '30px',
        width: 'auto',
        marginLeft: '7.5%',
    };

    const themeToggleButtonStyle = {
        ...buttonStyle,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={navbarStyle}>
            <img src="/logo.svg" alt="Logo" style={logoStyle} />
            <div style={buttonContainerStyle}>
                <button style={buttonStyle}>Projects</button>
                <button style={buttonStyle}>CV</button>
                <button style={buttonStyle}>LinkedIn</button>
                <button style={themeToggleButtonStyle} onClick={toggleTheme}>
                    <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
