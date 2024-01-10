import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const ProjectSection = () => {
    const projectSectionStyle = {
        height: '100vh', // Screen size height
        width: '100vw', // Screen width
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const whitePageStyle = {
        height: '95vh', // Slightly smaller than the full screen
        width: '95vw', // Full screen width
        backgroundColor: 'white',
        borderRadius: '50px 50px 0 0', // Rounded top corners
        boxShadow: 'inset 0px 0px 25px rgba(0, 0, 0, 0.2)', // Shadow inside the shape
        position: 'absolute',
        top: 'calc(2.5vh + 40px)', // Center vertically
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    // Optional: FontAwesomeIcon
    const arrowStyle = {
        color: 'white',
        fontSize: '2em',
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        cursor: 'pointer',
    };

    return (
        <div style={projectSectionStyle}>
            <div style={whitePageStyle}>
                {/* Content can be added here if needed */}
            </div>

            {/* Optional: FontAwesomeIcon, can be removed if not needed */}
            <FontAwesomeIcon icon={faMinus} style={arrowStyle} />
        </div>
    );
};

export default ProjectSection;
