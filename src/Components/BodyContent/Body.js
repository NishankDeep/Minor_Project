// HomePageContent.js

import React from 'react';
import bacImg from './bg1.jpg'
import devImg from './dev.jpg'
import classes from './Body.module.css';

const HomePageContent = () => {
  return (
    <>
    <div className={classes.home_page_content}>
      <div className={classes.image_overlay}>
        <img src={bacImg} alt="Content" className={classes.content_image} />
      </div>
      <div className={classes.content_container}>
        <h2>Welcome to Our Website</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida orci ac velit elementum,
          vitae consequat quam volutpat. Integer in turpis vel ligula imperdiet venenatis at eget felis.
        </p>
      </div>
      <div className={classes.button_container}>
        <button className={classes.button}>Learn More</button>
        <button className={classes.button}>Contact Us</button>
        <button className={classes.button}>Explore</button>
      </div>  
      
    </div>
  </>
  );
}

export default HomePageContent;
