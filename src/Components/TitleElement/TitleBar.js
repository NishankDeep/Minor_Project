// TitleBar.js

import React from 'react';
import classes from './TitleBar.module.css';

const TitleBar = () => {
  return (
    <div className={classes.title_bar}>
      <div className={classes.left}>
        <span className={classes.website_name}>Developer Community</span>
      </div>
      <div className={classes.right}>
        {/* <div className={classes.link_container}> */}
            <a href="/" className={classes.link}>Home</a>
            <a href="/post" className={classes.link}>Post</a>
            <a href="#" className={classes.link}>Link3</a>
        {/* </div> */}
        <a href='/login' className={classes.button+" "+classes.login}>Login</a>
        <a href='/signup' className={classes.button}>Signup</a>
      </div>
    </div>
  );
}

export default TitleBar;
