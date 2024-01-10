import React from 'react';
import { ThemeProvider } from './components/ThemeContext'; // Adjust the path as needed
import Navbar from './components/Navbar';
import IntroSection from './components/introSection';
import SkillsSection from './components/skillsSection';
import ProjectSection from './components/projectSection';


function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <IntroSection />
        <SkillsSection />
        <ProjectSection />
        {/* You can add more components or sections here as needed */}
      </div>
    </ThemeProvider>
  );
}

export default App;
