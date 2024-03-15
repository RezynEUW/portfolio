import React, { useEffect, useState, useRef, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from './ThemeContext'; // Adjust the import path as needed

const SkillsSection = () => {
    const [cardVisibility, setCardVisibility] = useState({ card1: false, card2: false, card3: false });
    const { theme } = useContext(ThemeContext); // Use ThemeContext
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);

    // Define gradients for light and dark themes
    const gradients = {
        light: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
        dark: 'linear-gradient(90deg, rgba(8,0,37,1) 0%, rgba(27,0,119,1) 50%, rgba(8,0,37,1) 100%)',
        light2: 'linear-gradient(135deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 100%)',
        dark2: 'linear-gradient(135deg, rgba(27,0,119,1) 0%, rgba(18,18,18,1) 100%)',
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => setCardVisibility(prev => ({ ...prev, [entry.target.id]: true })), 300);
                }
            });
        }, { threshold: 1 });

        observer.observe(card1Ref.current);
        observer.observe(card2Ref.current);
        observer.observe(card3Ref.current);

        return () => observer.disconnect();
    }, []);

    const getCardStyle = (cardNumber) => ({
        backgroundColor: theme === 'light' ? gradients.light : gradients.dark, // Dark mode background color
        color: theme === 'dark' ? 'white' : 'black', // Text color for dark theme
        borderRadius: '60px',
        padding: '26px',
        boxShadow: cardVisibility[`card${cardNumber}`] ? '0px 0px 25px rgba(0, 0, 0, 0.4)' : 'none',
        width: cardVisibility[`card${cardNumber}`] ? 'calc(30% - 10px)' : '29%',
        textAlign: 'left',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        border: '15px dashed transparent',
        backgroundClip: 'padding-box',
        transition: `all ${cardNumber}s ease`,
        opacity: cardVisibility[`card${cardNumber}`] ? 1 : 0,
    });

    const skillsSectionStyle = {
        background: theme === 'light' ? gradients.light : gradients.dark2, // Use theme-based gradient
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
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

    const gradientTextStyle = {
        fontWeight: '900',
        background: theme === 'light' ? gradients.light2 : gradients.dark2,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center', // Align gradient text center
        display: 'block', // Changed to 'block' for center alignment
        fontSize: '2.3em',
        marginBottom: '10px', // Space between title and paragraph
    };

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
                <div id="card1" ref={card1Ref} style={getCardStyle(1)}>
                    <span style={gradientTextStyle}>UI/UX</span>
                    <p>User Experience design and User Interface design are the two cornerstones of my ability. These are the groundwork for any valuable product and its potential. Through my education and personal projects, this has turned out to be my strongest suite. My eye is well trained and I've got a strong sense of what belongs and what does not.</p>
                </div>
                <div id="card2" ref={card2Ref} style={getCardStyle(2)}>
                    <span style={gradientTextStyle}>Front End</span>
                    <p>My abilities are mainly focused upon general web development in classic HTML+CSS fashion, or more recently React and React Native for other platforms. Recent larger projects have been more focused on finishing products, so I'd very much be interested in pursuing this field even more whether it be professionally or for my own projects.</p>
                </div>
                <div id="card3" ref={card3Ref} style={getCardStyle(3)}>
                    <span style={gradientTextStyle}>Back End</span>
                    <p>While my fundamentals are sharp in Design and UI/UX development, my degree also contains general tinkering with databases and server-based systems. Not my brightest category, but I am always up to learn something new!</p>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
