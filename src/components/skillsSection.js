import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faCode, faDatabase, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const SkillsSection = () => {
    const [cardVisibility, setCardVisibility] = useState({ card1: false, card2: false, card3: false });
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCardVisibility(prev => ({ ...prev, [entry.target.id]: true }));
                }
            });
        }, { threshold: 1 });

        observer.observe(card1Ref.current);
        observer.observe(card2Ref.current);
        observer.observe(card3Ref.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    const getCardStyle = (cardNumber) => ({
        backgroundColor: 'white',
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
    });

    const skillsSectionStyle = {
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
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
        background: 'linear-gradient(90deg, rgba(131,58,180,1), rgba(253,29,29,1), rgba(252,176,69,1))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center', // Align gradient text center
        display: 'block', // Changed to 'block' for center alignment
        fontSize: '2.3em',
        marginBottom: '10px', // Space between title and paragraph
    };

    const downArrowContainerStyle = {
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '2em',
        color: 'white',
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div id="card2" ref={card2Ref} style={getCardStyle(2)}>
                    <span style={{...gradientTextStyle, color: 'rgba(253,29,29,1)'}}>Front End</span>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div id="card3" ref={card3Ref} style={getCardStyle(3)}>
                    <span style={{...gradientTextStyle, color: 'rgba(252,176,69,1)'}}>Back End</span>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
            <div style={downArrowContainerStyle}>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </div>
    );
};

export default SkillsSection;
