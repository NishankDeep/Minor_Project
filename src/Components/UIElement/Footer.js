// Footer.js

import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.footerColumn}>
          <h3>Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className={classes.footerColumn}>
          <h3>Follow Us</h3>
          <div className={classes.socialIcons}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className={classes.fab+" "+classes.fa_facebook}></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className={classes.fab+" "+classes.fa_twitter}></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className={classes.fab+" "+classes.fa_instagram}></i>
            </a>
          </div>
        </div>
        <div className={classes.footerColumn}>
          <h3>Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
