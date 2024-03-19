import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from './ThemeContext'; // Ensure this path is correct

const Navbar = () => {
    const { theme, toggleTheme, gradients } = useContext(ThemeContext);
    const [showMessage, setShowMessage] = useState(false);

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

    const logoContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        marginLeft: '7.5%',
        cursor: 'pointer',
    };

    const logoStyle = {
        height: '30px',
        width: 'auto',
        zIndex: 10,
    };

    const messageStyle = {
        position: 'absolute',
        whiteSpace: 'nowrap',
        left: '180%',
        top: '50%',
        transform: showMessage ? 'translate(0, -50%)' : 'translate(-250%, -50%)',
        opacity: showMessage ? 1 : 0,
        transition: 'transform 1.5s ease-out, opacity 4s ease-out',
        pointerEvents: 'none',
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
        position: 'relative',
        overflow: 'hidden',
    };

    const themeToggleButtonStyle = {
        ...buttonStyle,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    // Global styles for the pulsating glow effect
    const globalStyles = `
        @keyframes pulseGlow {
            0%, 100% {
                box-shadow: 0 0 1px rgba(255, 255, 255, 0);
            }
            50% {
                box-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
            }
        }

        .buttonHoverEffect:hover {
            animation: pulseGlow 3.5s infinite ease-in-out;
        }
    `;

    return (
        <>
            <style>{globalStyles}</style>
            <div style={navbarStyle}>
                <div 
                    style={logoContainerStyle} 
                    onMouseEnter={() => setShowMessage(true)} 
                    onMouseLeave={() => setShowMessage(false)}
                >
                    <img src="/logo.svg" alt="Logo" style={logoStyle} onClick={() => {}} />
                    <span style={messageStyle}>Thank you for visiting!</span>
                </div>
                <div style={buttonContainerStyle}>
                    <button className="buttonHoverEffect" style={buttonStyle}>Projects</button>
                    <button className="buttonHoverEffect" style={buttonStyle}>CV</button>
                    <button className="buttonHoverEffect" style={buttonStyle}>LinkedIn</button>
                    <button className="buttonHoverEffect" style={themeToggleButtonStyle} onClick={toggleTheme}>
                        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
