// TwitterFeed.js

import React from 'react';
import classes from './Post.module.css';

const Post = () => {
  return (
    <>
    <div className={classes.twitter_feed}>
      <div className={classes.tweet}>
        <div className={classes.user_avatar}>
          <img src="https://placekitten.com/50/50" alt="User Avatar" />
        </div>
        <div className={classes.tweet_content}>
          <div className={classes.user_info}>
            <span className={classes.username}>John Doe</span>
            <span className={classes.handle}>@john_doe</span>
          </div>
          <p className={classes.tweet_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo vel ligula cursus semper.
          </p>
        </div>
      </div>

      {/* Add more tweets as needed */}
    </div>
    <div className={classes.twitter_feed}>
      <div className={classes.tweet}>
        <div className={classes.user_avatar}>
          <img src="https://placekitten.com/50/50" alt="User Avatar" />
        </div>
        <div className={classes.tweet_content}>
          <div className={classes.user_info}>
            <span className={classes.username}>John Doe</span>
            <span className={classes.handle}>@john_doe</span>
          </div>
          <p className={classes.tweet_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo vel ligula cursus semper.
          </p>
        </div>
      </div>

      {/* Add more tweets as needed */}
    </div>
    </>
  );
};

export default Post;
