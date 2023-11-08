// // LeftSideBox.js

// import React, { useState } from 'react';
// import styles from './LeftBox.module.css';

// const LeftSideBox = () => {
//   const [isBoxVisible, setIsBoxVisible] = useState(false);

//   const toggleBoxVisibility = () => {
//     setIsBoxVisible(!isBoxVisible);
//   };

//   return (
//     <div className={`${styles.leftSideBox} ${isBoxVisible ? styles.visible : ''}`}>
//       <button className={styles.toggleButton} onClick={toggleBoxVisibility}>
//         Toggle Box
//       </button>
//       <div className={styles.boxContent}>
//         <h2>This is the Left Side Box</h2>
//         <p>Some content goes here...</p>
//       </div>
//     </div>
//   );
// };

// export default LeftSideBox;
// Suggestions.js

import React, { useEffect, useState } from 'react';
import classes from './LeftBox.module.css'; // Import CSS module

const LeftBox = () => {
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
    'Name',
    'Liking',
    // 'Contact',
    // 'Services',
    // 'Blog',
    // 'FAQ'
    // Add more suggestions as needed
  ];

  return (
    <div className={`${classes.suggestions} ${isVisible ? classes.visible : ''}`}>
      <h2 className={classes.h2}>Profile</h2>
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

export default LeftBox;
