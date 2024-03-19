import React, { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from './ThemeContext';
import '../visiting.css';

const IntroSection = () => {
    const [animateFooter, setAnimateFooter] = useState(false);
    const [showDownArrow, setShowDownArrow] = useState(false);
    const [animateDownArrow, setAnimateDownArrow] = useState(false);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const footerTimer = setTimeout(() => setAnimateFooter(true), 300);
        const arrowTimer = setTimeout(() => {
            setShowDownArrow(true);
            setTimeout(() => setAnimateDownArrow(true), 100);
        }, 5000);

        return () => {
            clearTimeout(footerTimer);
            clearTimeout(arrowTimer);
        };
    }, []);

    const handleDownArrowClick = () => {
        const skillsSection = document.getElementById('skills-section');
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Define gradients for light and dark themes
    const gradients = {
        light: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
        dark: 'linear-gradient(90deg, rgba(8,0,37,1) 0%, rgba(27,0,119,1) 50%, rgba(8,0,37,1) 100%)',
        light2: 'linear-gradient(135deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 100%)',
        dark2: 'linear-gradient(135deg, rgba(27,0,119,1) 0%, rgba(8,0,37,1) 100%)',
    };

    const outerContainerStyle = {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '80vh',
        background: gradients[theme],
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
        zIndex: 4,
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
        zIndex: 4,
        marginRight: '200px',
        marginBottom: '0px',
    };

    const footerOuterStyle = {
        background: gradients[theme],
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
        background: theme === 'light' ? gradients.light2 : gradients.dark2,
        height: animateFooter ? '100%' : '99%',
        width: animateFooter ? '85%' : '84%',
        borderRadius: '85px',
        position: 'relative',
        zIndex: 3,
        boxShadow: animateFooter ? '0px 0px 25px rgba(0, 0, 0, 0.4)' : 'none',
        transition: 'all 1s ease',
    };

    const downArrowStyle = {
        color: 'white',
        fontSize: '2em',
        position: 'absolute',
        top: 'calc(80vh + 30px)',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 4,
        opacity: animateDownArrow ? 1 : 0,
        transition: 'opacity 1s ease',
    };

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
                        <p>View what I'm about below!</p>
                    </div>
                </div>
                <div style={introImageStyle}></div>
            </div>
            <div style={footerOuterStyle}>
                <div style={footerInnerStyle}>
                    {/* */}
                </div>
            </div>
            {showDownArrow && (
                <FontAwesomeIcon
                    icon={faChevronDown}
                    style={downArrowStyle}
                    onClick={handleDownArrowClick}
                />
            )}
        </div>
    );
};

export default IntroSection;
