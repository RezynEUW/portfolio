import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const techDemo = ({ category, gradient, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const projects = {
        'UI/UX': [
            { title: 'UI/UX Project 1', imageUrl: 'https://via.placeholder.com/300x200' },
            { title: 'UI/UX Project 2', imageUrl: 'https://via.placeholder.com/300x200' }
        ],
        'Front End': [
            { title: 'Front End Project 1', imageUrl: 'https://via.placeholder.com/300x200' },
            { title: 'Front End Project 2', imageUrl: 'https://via.placeholder.com/300x200' }
        ],
        'Hobbies': [
            { title: 'Hobby Project 1', imageUrl: 'https://via.placeholder.com/300x200' },
            { title: 'Hobby Project 2', imageUrl: 'https://via.placeholder.com/300x200' }
        ]
    };

    const carouselRef = useRef(null);

    useEffect(() => {
        const carouselElement = carouselRef.current;

        const handleDragStart = (e) => {
            setStartX(e.clientX);
            setIsDragging(true);
        };

        const handleDragEnd = (e) => {
            if (!isDragging) return;

            const endX = e.clientX;
            const difference = startX - endX;

            if (difference > 100) { // Threshold for swipe
                handleNextClick();
            } else if (difference < -100) {
                handlePrevClick();
            }
            setIsDragging(false);
        };

        if (carouselElement) {
            carouselElement.addEventListener('mousedown', handleDragStart);
            window.addEventListener('mouseup', handleDragEnd);
        }

        return () => {
            if (carouselElement) {
                carouselElement.removeEventListener('mousedown', handleDragStart);
            }
            window.removeEventListener('mouseup', handleDragEnd);
        };
    }, [isDragging, startX]);

    const handlePrevClick = () => {
        setCurrentSlide(prev => (prev === 0 ? projects[category].length - 1 : prev - 1));
    };

    const handleNextClick = () => {
        setCurrentSlide(prev => (prev === projects[category].length - 1 ? 0 : prev + 1));
    };

    const carouselStyle = {
        width: '650px',
        height: '650px',
        borderRadius: '50%',
        overflow: 'hidden',
        position: 'absolute',
        top: '50%', 
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: gradient,
        zIndex: 20,
        cursor: 'grab',
    };

    const carouselContentStyle = {
        display: 'flex',
        flexDirection: 'row',  // Align items in a row
        width: `${100 * projects[category].length}%`,  // Width based on number of projects
        transform: `translateX(-${currentSlide * (100 / projects[category].length)}%)`,
        transition: 'transform 0.5s ease',
    };

    const projectSlideStyle = {
        flex: `0 0 ${100 / projects[category].length}%`,  // Each slide takes up equal portion
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={carouselStyle} ref={carouselRef}>
            <div style={carouselContentStyle}>
                {projects[category].map((project, index) => (
                    <div key={index} style={projectSlideStyle}>
                        <img src={project.imageUrl} alt={project.title} style={{ maxWidth: '100%', maxHeight: '80%' }} />
                        <h3 style={{ color: 'white', fontSize: '24px' }}>{project.title}</h3>
                    </div>
                ))}
            </div>

            <button onClick={onClose} style={{ position: 'absolute', bottom: '20px', cursor: 'pointer', color: 'white', fontSize: '16px' }}>Close</button>
        </div>
    );
};

export default techDemo;
