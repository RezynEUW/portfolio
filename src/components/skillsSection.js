import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faCode, faDatabase, faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Import the down arrow icon

const skillsSectionStyle = {
    background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '0',
    height: '100vh',
};

const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '57%',
    marginBottom: '30px',
    paddingLeft: '11%',
    paddingRight: '11%',
};

const iconBackgroundStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0,0,0,0.15) 0%, rgba(255,255,255,0) 70%)',
    padding: '10px',
};

const iconStyle = {
    color: 'white',
    fontSize: '2em',
};

const iconStyleFrontEnd = {
    ...iconStyle,
    fontSize: '2.5em',
};

const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '75%',
};

const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '30px',
    padding: '26px',
    boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.4)',
    width: 'calc(30% - 10px)',
    textAlign: 'center',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    border: '15px dashed transparent', // Adjusted dashed border
    backgroundClip: 'padding-box',
};

const gradientTextStyle = {
    fontWeight: '900',
    background: 'linear-gradient(90deg, rgba(131,58,180,1), rgba(253,29,29,1), rgba(252,176,69,1))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline',  
    fontSize: '2.3em',
};

const SkillsSection = () => {
    return (
        <div style={skillsSectionStyle}>
            <div style={iconContainerStyle}>
                <div style={iconBackgroundStyle}>
                    <FontAwesomeIcon icon={faPencilRuler} style={iconStyle} />
                </div>
                <div style={iconBackgroundStyle}>
                    <FontAwesomeIcon icon={faCode} style={iconStyleFrontEnd} />
                </div>
                <div style={iconBackgroundStyle}>
                    <FontAwesomeIcon icon={faDatabase} style={iconStyle} />
                </div>
            </div>
            <div style={cardContainerStyle}>
                <div style={cardStyle}>
                    <span style={gradientTextStyle}>UI/UX</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div style={cardStyle}>
                    <span style={{...gradientTextStyle, color: 'rgba(253,29,29,1)'}}>Front End</span>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div style={cardStyle}>
                    <span style={{...gradientTextStyle, color: 'rgba(252,176,69,1)'}}>Back End</span>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
