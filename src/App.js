import React from 'react';
import Navbar from './components/Navbar'; // Ensure this matches the file name exactly
import IntroSection from './components/introSection'; // Ensure this matches the file name exactly
import SkillsSection from './components/skillsSection'; // Ensure this matches the file name exactly

function App() {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <SkillsSection />
      {/* You can add more components or sections here as needed */}
    </div>
  );
}

export default App;
