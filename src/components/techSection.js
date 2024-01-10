import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import techDemo from './techDemo'; // Adjust the import path as needed

const techSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedGradient, setSelectedGradient] = useState('');
    const [hoveredRow, setHoveredRow] = useState(null);

    const projectSectionStyle = {
        height: '95vh',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const halfCircleStyle = {
        width: '650px',
        height: '650px',
        backgroundColor: '#FEFEFE',
        borderRadius: '50%',
        boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.4)',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.3s ease',
    };

    const projectRowStyle = (topPosition, gradient) => ({
        width: '100%',
        height: hoveredRow === topPosition ? '100%' : '33.33%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: gradient,
        transition: 'all 0.3s ease',
        position: 'absolute',
        top: hoveredRow === topPosition ? '0' : topPosition,
        left: 0,
        color: 'white',
        fontSize: '1.5em',
        zIndex: hoveredRow === topPosition ? 10 : 1,
        cursor: 'pointer',
    });

    const arrowStyle = {
        color: 'white',
        fontSize: '2em',
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        cursor: 'pointer',
    };

    const handleHover = (row) => {
        setHoveredRow(row);
    };

    const handleClick = (category, gradient) => {
        setSelectedProject(category);
        setSelectedGradient(gradient);
    };

    const uiuxGradient = 'linear-gradient(180deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)';
    const frontEndGradient = 'linear-gradient(0deg, rgba(252,176,69,1) 0%, rgba(252,176,69,1) 5%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 95%, rgba(252,176,69,1) 100%)';
    const hobbiesGradient = 'linear-gradient(0deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)';

    return (
        <div style={projectSectionStyle}>
            {selectedProject && (
                <ProjectCarousel 
                    category={selectedProject} 
                    gradient={selectedGradient} 
                    onClose={() => setSelectedProject(null)}
                />
            )}
            <div style={halfCircleStyle}>
                <div 
                    style={projectRowStyle('0', uiuxGradient)}
                    onMouseEnter={() => handleHover('0')} 
                    onMouseLeave={() => setHoveredRow(null)} 
                    onClick={() => handleClick('UI/UX', uiuxGradient)}
                >
                    <h2>UI/UX Projects</h2>
                </div>

                <div 
                    style={projectRowStyle('33.33%', frontEndGradient)}
                    onMouseEnter={() => handleHover('33.33%')} 
                    onMouseLeave={() => setHoveredRow(null)} 
                    onClick={() => handleClick('Front End', frontEndGradient)}
                >
                    <h2>Front End Projects</h2>
                </div>

                <div 
                    style={projectRowStyle('66.66%', hobbiesGradient)}
                    onMouseEnter={() => handleHover('66.66%')} 
                    onMouseLeave={() => setHoveredRow(null)} 
                    onClick={() => handleClick('Hobbies', hobbiesGradient)}
                >
                    <h2>Hobby Projects</h2>
                </div>
            </div>

            <FontAwesomeIcon icon={faMinus} style={arrowStyle} />
        </div>
    );
};

export default TechSection;
