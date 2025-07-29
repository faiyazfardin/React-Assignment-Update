import React from 'react';
import styles from '../css/Profile.module.css';

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <img  src="https://w0.peakpx.com/wallpaper/273/247/HD-wallpaper-anime-that-time-i-got-reincarnated-as-a-slime-rimuru-tempest.jpg"alt="Faiyaz Fardin"  className={styles.avatar}/>

        <div>
          <h2>Faiyaz Fardin</h2>
          <h5>A slime</h5>
          <p>Joined: 5 November 2021</p>
        </div>
      </div>

      <div className={styles.profileBody}>
        <h3>About</h3>
        <p>
          Passionate about Slimes. 
        </p>

        <h3>Posts</h3>
        <ul>
          <li>The Journey of Bangladesh: Resilience and Progress</li>
          <li>101 Reasons why slimes should be the national creature of Bangladesh</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
