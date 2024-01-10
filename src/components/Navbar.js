import React from 'react';

const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    height: '40px',
    background: 'linear-gradient(90deg, rgba(131,58,180,1), rgba(253,29,29,1), rgba(252,176,69,1))',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    
};

const buttonContainerStyle = {
    display: 'flex',
    marginRight: '7.5%', // Right margin for buttons
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
    height: '30px', // Adjust as needed for your logo size
    width: 'auto',
    marginLeft: '7.5%', // Left margin for the logo
};

const Navbar = () => {
    return (
        <div style={navbarStyle}>
            <img src="/logo.svg" alt="Logo" style={logoStyle} /> {/* Use logo.svg here */}
            <div style={buttonContainerStyle}>
                <button style={buttonStyle}>Projects</button>
                <button style={buttonStyle}>CV</button>
                <button style={buttonStyle}>LinkedIn</button>
            </div>
        </div>
    );
};

export default Navbar;
