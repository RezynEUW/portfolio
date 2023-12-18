import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const ProjectSection = () => {
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
        height: '33.33%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: gradient,
        transition: 'all 0.3s ease',
        position: 'absolute',
        top: topPosition,
        left: 0,
        color: 'white',
        fontSize: '1.5em',
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

    const handleHover = (e) => {
        e.target.style.zIndex = 10;
        e.target.style.top = '0';
        e.target.style.height = '100%';
    };

    const handleMouseLeave = (e) => {
        e.target.style.zIndex = 1;
        e.target.style.top = e.target.getAttribute('data-top');
        e.target.style.height = '33.33%';
    };

    const uiuxGradient = 'linear-gradient(180deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)';
    const frontEndGradient = 'linear-gradient(0deg, rgba(252,176,69,1) 0%, rgba(252,176,69,1) 5%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 95%, rgba(252,176,69,1) 100%)'; // Updated gradient with less prevalent red
    const hobbiesGradient = 'linear-gradient(0deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)';

    return (
        <div style={projectSectionStyle}>
            <div style={halfCircleStyle}>
                {/* UI/UX Section */}
                <div style={projectRowStyle('0', uiuxGradient)} data-top="0" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                    <h2>UI/UX Projects</h2>
                    {/* Project details here */}
                </div>

                {/* Front End Section */}
                <div style={projectRowStyle('33.33%', frontEndGradient)} data-top="33.33%" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                    <h2>Front End Projects</h2>
                    {/* Project details here */}
                </div>

                {/* Hobbies Section */}
                <div style={projectRowStyle('66.66%', hobbiesGradient)} data-top="66.66%" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                    <h2>Hobby Projects</h2>
                    {/* Project details here */}
                </div>
            </div>

            <FontAwesomeIcon icon={faMinus} style={arrowStyle} />
        </div>
    );
};

export default ProjectSection;
