// Suggestions.js

import React, { useEffect, useState } from 'react';
import classes from './Suggestion.module.css'; // Import CSS module

const Suggestions = () => {
  const [isVisible, setIsVisible] = useState(true); // Change initial state to true

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY === 0); // Set isVisible to true when at the top
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const suggestions = [
    'Home',
    'About Us',
    'Contact',
    'Services',
    'Blog',
    'FAQ'
    // Add more suggestions as needed
  ];

  return (
    <div className={`${classes.suggestions} ${isVisible ? classes.visible : ''}`}>
      <h2 className={classes.h2}>Suggested Pages</h2>
      <ul className={classes.ul}>
        {suggestions.map((suggestion, index) => (
          <li key={index} className={classes.li}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
