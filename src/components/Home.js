import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Home.module.css';

function Home() {
  const navigate = useNavigate();
  const [reaction, setReaction] = useState('');
  const [comments] = useState([
    { id: 1, author: 'Rafiq', date: '10 February 2025', text: 'Bangladesh’s progress is truly inspiring.' },
    { id: 2, author: 'Meherun', date: '11 February 2025', text: 'Proud of how far the country has come.' }
  ]);

  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.postTitle}>
        Bangladesh: Growth, Struggles, and Dreams
      </h2>
      <p className={styles.postSubText}>
        A story of resilience, rich culture, and continuous development in South Asia.
      </p>

      <img src="https://minorityrights.org/app/uploads/2024/03/bangladesh.png.png" alt="Bangladesh Scenery" className={styles.imageBox} />

      <p className={styles.caption}>
        Let’s celebrate the strength and spirit of the people of Bangladesh.
      </p>

      <div className={styles.authorInfo}>
        <div className={styles.authorFlex}>
          <div>
            <button onClick={() => navigate('/author')} className={styles.authorButton}>
              Faiyaz Fardin
            </button>
            <p className={styles.authorDate}>15 November 2024</p>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      <p className={styles.postBody}>
        Bangladesh has risen from hardship to hope, from struggles to significant development. With a growing economy, vibrant culture, and a strong sense of community, the country continues to push boundaries. From the green hills of Sylhet to the bustling life of Dhaka, Bangladesh tells a story of resilience and potential.
      </p>

      <hr className={styles.divider} />

      <div className={styles.reactionSummary}>
        <div className={styles.reactionContainer}>
          {['Like', 'Love', 'Angry', 'Sad'].map((r) => (
            <button
              key={r}
              onClick={() => setReaction(r)}
              className={`${styles.reactionButton} ${reaction === r ? styles.selected : ''}`}
            >
              {r}
            </button>
          ))}
        </div>
        <p className={styles.reactionStats}>
          Like 35% &nbsp;&nbsp; Love 50% &nbsp;&nbsp; Angry 2% &nbsp;&nbsp; Sad 3%
        </p>
      </div>

      <div className={styles.commentSection}>
        <h4>20 Comments</h4>
        <div className={styles.commentInputBox}>
          <input type="text" placeholder="Write your comment.." />
          <button>&rarr;</button>
        </div>

        {comments.map((comment) => (
          <div key={comment.id} className={styles.commentBox}>
            <strong>{comment.author}, {comment.date}</strong>
            <p>{comment.text}</p>
            <div className={styles.commentActions}>
              <span>Like 12</span>
              <span>Dislike 1</span>
              <span>Reply</span>
              <span className={styles.report}>Report</span>
            </div>
          </div>
        ))}

        <div className={styles.pagination}>
          <button>1</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
