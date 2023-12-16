import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faCode, faDatabase, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const outerContainerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
    background: 'linear-gradient(90deg, rgba(131,58,180,1), rgba(253,29,29,1), rgba(252,176,69,1))',
};

const introSectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    flex: 1,
};

const nameTextStyle = {
    fontSize: '2.5rem',
    fontFamily: 'Raleway',
    fontWeight: '900',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: '150px',
    zIndex: 3,
    //background: 'linear-gradient(90deg, rgba(253,29,29,1), rgba(252,176,69,1), rgba(131,58,180,1))',
    background: 'white',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    MozBackgroundClip: 'text',
    MozTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
};

const descripTextStyle = {
    fontSize: '1.5rem',
    fontFamily: 'Raleway',
    color: 'white',
    textAlign: 'left',
    marginLeft: '150px',
    maxWidth: '600px',
};

const textContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 3,
};

const introImageStyle = {
    width: '400px',
    height: '400px',
    borderRadius: '200px',
    backgroundImage: 'url(/clear4.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center 70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    marginRight: '200px',
    marginBottom: '0px',
};

const footerOuterStyle = {
    background: 'linear-gradient(90deg, rgba(131,58,180,1), rgba(253,29,29,1), rgba(252,176,69,1))',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
};

const footerInnerStyle = {
    background: 'linear-gradient(135deg, rgba(131,58,180,1), rgba(253,29,29,1), rgba(252,176,69,1))',
    height: '100%',
    width: '85%',
    borderRadius: '85px',
    boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.4)',
    position: 'relative',
};

// Style for the down arrow icon
const downArrowStyle = {
    color: 'white',
    fontSize: '2em',
    position: 'absolute',
    top: 'calc(80vh + 30px)',
    left: '50%',
    transform: 'translateX(-50%)',
};

const IntroSection = () => {
    return (
        <div style={outerContainerStyle}>
            <div style={introSectionStyle}>
                <div style={textContainer}>
                    <div style={nameTextStyle}>
                        <h1>Lukas Hedström</h1>
                    </div>
                    <div style={descripTextStyle}>
                        <p>Welcome!</p>
                        <p>I am a student in the Master of Science Programme in Interaction Technology and Design at Umeå University.</p>
                    </div>
                </div>
                <div style={introImageStyle}>
                    {/* The image is now displayed as a background */}
                </div>
            </div>

            <div style={footerOuterStyle}>
                <div style={footerInnerStyle}>
                    {/* Additional content for the footer can go here */}
                </div>
            </div>
            <FontAwesomeIcon icon={faChevronDown} style={downArrowStyle} /> {/* Down arrow icon */}
        </div>
    );
};

export default IntroSection;
