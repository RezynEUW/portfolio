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
                    setTimeout(() => setCardVisibility(prev => ({ ...prev, card1: true })), 1000);
                    setTimeout(() => setCardVisibility(prev => ({ ...prev, card2: true })), 2000);
                    setTimeout(() => setCardVisibility(prev => ({ ...prev, card3: true })), 3000);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(card1Ref.current);
        observer.observe(card2Ref.current);
        observer.observe(card3Ref.current);

        return () => observer.disconnect();
    }, []);

    const getCardStyle = (cardNumber) => ({
        backgroundColor: 'white',
        borderRadius: '60px',
        padding: '26px',
        boxShadow: cardVisibility[`card${cardNumber}`] ? '0px 0px 25px rgba(0, 0, 0, 0.4)' : 'none',
        width: 'calc(30% - 10px)',
        textAlign: 'left',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        border: '15px dashed transparent',
        backgroundClip: 'padding-box',
        opacity: cardVisibility[`card${cardNumber}`] ? 1 : 0,
        transition: 'opacity 2.5s ease, box-shadow 4s ease',
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
        width: '64%',
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
        width: '85%',
    };

    const gradientTextStyle = {
        fontWeight: '900',
        background: 'linear-gradient(90deg, rgba(131,58,180,1), rgba(253,29,29,1), rgba(252,176,69,1))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        display: 'block',
        fontSize: '2.3em',
        marginBottom: '10px',
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
                <div id="card1" ref={card1Ref} style={getCardStyle('1')}>
                    <span style={gradientTextStyle}>UI/UX</span>
                    <p>User Experience design and User Interface design are the two cornerstones of my ability. These are the groundwork for any valuable product and its potential. Through my education and personal projects, this has turned out to be my strongest suite. My eye is well trained and I've got a strong sense of what belongs and what does not.</p>
                </div>
                <div id="card2" ref={card2Ref} style={getCardStyle('2')}>
                    <span style={{...gradientTextStyle, color: 'rgba(253,29,29,1)'}}>Front End</span>
                    <p>My abilities are mainly focused upon general web development in classic HTML+CSS fashion, or more recently React and React Native for other platforms. Recent larger projects have been more focused on finishing products, so I'd very much be interested in pursuing this field even more whether it be professionally or for my own projects.</p>
                </div>
                <div id="card3" ref={card3Ref} style={getCardStyle('3')}>
                    <span style={{...gradientTextStyle, color: 'rgba(252,176,69,1)'}}>Back End</span>
                    <p>While my fundamentals are sharp in Design and UI/UX development, my degree also contains general tinkering with databases and server-based systems. Not my brightest category, but I am always up to learn something new!</p>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
