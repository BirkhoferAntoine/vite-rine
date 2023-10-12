import { createContext, useContext, useState } from 'react';

const skillListObject = {
  'Front-End': [
    'JavaScript ES6+ Syntax',
    'Dynamic animations with GSAP',
    '3D with Three.js',
    'Augmented reality with AR.js',
    'Homemade sliders and swipers',
    'Interactivity with canvas and fiber.js',
    'Asynchronous (fetch/axios & promises) handling',
    'Dynamic data and error handling',
    'Custom Maps with leaflet or mapbox',
    'DOM manipulations',
    'Object Oriented Programming',
    'JQuery',
  ],
  'React': [
    'Implementation within a Symfony or Laravel application',
    'Next.js framework',
    'Hooks and custom hooks',
    'Material Design UI & react @mui/material',
    'Theme handling',
    'Context',
    'Custom Form validation and filtering',
    '3D with react-three-fiber',
  ],
  'Back-End': [
    'Images and multimedia handling',
    'Security and validation',
    'Custom form validations and filtering',
    'Object Oriented Programming',
    'MVC structure',
    'Secure User handling',
    'PHP 8 or Node.js',
    'PHP Framework: Symfony',
    'MERN Stack',
  ],
  'Tools': [
    'Docker',
    'Git',
    'PHPStorm & WebStorm',
    'Jira',
    'Toggl Track',
    'Redmine Ticketing system',
    'Notion',
    'Moon Modeler',
    'Postman',
  ],
  'Database': [
    'MySQL',
    'PostgreSQL',
    'PDO',
    'MangoDB',
  ],
  'Frameworks': [
    'React.js',
    'Next.js',
    'Symfony',
    'Material Design UI & react @mui/material',
  ],
  'Operating Systems': [
    'Windows',
    'Linux',
    'MacOSX',
  ],
  'Design': [
    'Figma',
    'Photoshop',
    'AdobeXD',
    'Krita',
  ],
  'Multimedia': [
    'Audio Recording/Mixing/PostProduction with Cubase or Presonus Studio One',
    'Sound Design with Omnisphere',
    'Dynamic rendering of Audio/Video files from the server with FFMPEG',
  ],
  'CSS': [
    'Flexbox',
    'Display and Positions',
    'Transforms',
    'MediaQueries',
    'Responsive Design',
    'Shapes',
    'Animations',
    'Grid',
  ],
  'HTML': [
    'Semantic tags and best practices',
    'Form validations',
    'Accessibility and SEO basics'
  ],
};

const SkillsContext = createContext();

export function SkillsProviderWrapper({ children }) {
  const [wordsArray, setWordsArray]   = useState(Object.keys(skillListObject));
  const [aboutText, setAboutText]      = useState('Click on each of my skills to learn more');
  const someFunction = () => {
    // Do something with state
  };

  return (
    <SkillsContext.Provider value={{ wordsArray, setWordsArray, aboutText, setAboutText, someFunction }}>
      {children}
    </SkillsContext.Provider>
  );
}



/*const sharedValue = useMemo(() => {
    return {
      // Your shared value properties or functions
    };
  }, []); // The empty dependency array ensures it's only created once*/