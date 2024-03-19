import React, { useEffect, useState, useRef, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from './ThemeContext';

const SkillsSection = () => {
    const [cardVisibility, setCardVisibility] = useState({ card1: false, card2: false, card3: false });
    const { theme } = useContext(ThemeContext);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);

    const gradients = {
        light: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
        dark: 'linear-gradient(90deg, rgba(8,0,37,1) 0%, rgba(27,0,119,1) 50%, rgba(8,0,37,1) 100%)',
    };

    const textGradients = {
        card1: 'linear-gradient(135deg, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 100%',
        card2: 'linear-gradient(135deg, rgba(252,176,69,1) 0%, rgba(252,176,69,1) 15%, rgba(213,213,213,1) 50%, rgba(131,58,180,1) 85%, rgba(131,58,180,1) 100%)',
        card3: 'linear-gradient(135deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 100%)',
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => setCardVisibility((prev) => ({ ...prev, [entry.target.id]: true })), 300);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(card1Ref.current);
        observer.observe(card2Ref.current);
        observer.observe(card3Ref.current);

        return () => observer.disconnect();
    }, []);

    const handleMouseMove = (e, cardRef) => {
        const card = cardRef.current;
        card.style.transition = 'none';
        const { left, top, width, height } = card.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        const rotateX = (mouseY / height) * 30;
        const rotateY = -(mouseX / width) * 30;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = (cardRef) => {
        const card = cardRef.current;
        card.style.transition = 'transform 0.5s ease';
        card.style.transform = 'none';
    };

    const getTextGradientStyle = (cardNumber) => ({
        fontWeight: 'bold',
        background: textGradients[`card${cardNumber}`],
        '-webkit-background-clip': 'text',
        backgroundClip: 'text',
        color: 'transparent',
        textAlign: 'center',
        display: 'block',
        fontSize: '2.3em',
        marginBottom: '20px',
    });

    return (
        <div style={{
            background: theme === 'light' ? gradients.light : gradients.dark,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            position: 'relative',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '64%',
                marginBottom: '30px',
                paddingLeft: '11%',
                paddingRight: '11%',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,0,0,0.15) 0%, rgba(255,255,255,0) 70%)',
                    padding: '10px',
                }}><FontAwesomeIcon icon={faPencilRuler} style={{ color: 'white', fontSize: '2em' }} /></div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,0,0,0.15) 0%, rgba(255,255,255,0) 70%)',
                    padding: '10px',
                }}><FontAwesomeIcon icon={faCode} style={{ color: 'white', fontSize: '2.5em' }} /></div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,0,0,0.15) 0%, rgba(255,255,255,0) 70%)',
                    padding: '10px',
                }}><FontAwesomeIcon icon={faDatabase} style={{ color: 'white', fontSize: '2em' }} /></div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '85%',
            }}>
                {[card1Ref, card2Ref, card3Ref].map((ref, index) => (
                    <div
                        id={`card${index + 1}`}
                        ref={ref}
                        onMouseMove={(e) => handleMouseMove(e, ref)}
                        onMouseLeave={() => handleMouseLeave(ref)}
                        key={index}
                        style={{
                            backgroundColor: theme === 'light' ? gradients.light2 : gradients.dark2,
                            color: 'white',
                            fontWeight: 'bold',
                            borderRadius: '60px',
                            padding: '26px',
                            boxShadow: cardVisibility[`card${index + 1}`] ? '0px 0px 25px rgba(0, 0, 0, 0.4)' : 'none',
                            width: 'calc(33% - 20px)',
                            height: '400px',
                            textAlign: 'left',
                            boxSizing: 'border-box',
                            position: 'relative',
                            overflow: 'hidden',
                            border: '15px dashed transparent',
                            backgroundClip: 'padding-box',
                            transition: 'opacity 2.5s ease, box-shadow 4s ease',
                            opacity: cardVisibility[`card${index + 1}`] ? 1 : 0,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        <span style={getTextGradientStyle(index + 1)}>
                            {index === 0 ? "UI/UX" : index === 1 ? "Front End" : "Back End"}
                        </span>
                        <p>
                            {index === 0 ? "User Experience design and User Interface design are the two cornerstones of my ability. These are the groundwork for any valuable product and its potential. Through my education and personal projects, this has turned out to be my strongest suite. My eye is well trained and I've got a strong sense of what belongs and what does not." : index === 1 ? "My abilities are mainly focused upon general web development in classic HTML+CSS fashion, or more recently React and React Native for other platforms. Recent larger projects have been more focused on finishing products, so I'd very much be interested in pursuing this field even more whether it be professionally or for my own projects." : "While my fundamentals are sharp in Design and UI/UX development, my degree also contains general tinkering with databases and server-based systems. Not my brightest category, but I am always up to learn something new."}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
