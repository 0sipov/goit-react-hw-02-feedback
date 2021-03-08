import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOption = ({ addFeedback }) => {
  return (
    <div>
      <div className={styles.feedbackControl}>
        <button
          className={styles.borderButton + ' ' + styles.green}
          type="button"
          name="good"
          onClick={addFeedback}
        >
          Good
        </button>
        <button
          className={styles.borderButton + ' ' + styles.yellow}
          type="button"
          name="neutral"
          onClick={addFeedback}
        >
          Neutral
        </button>
        <button
          className={styles.borderButton + ' ' + styles.red}
          type="button"
          name="bad"
          onClick={addFeedback}
        >
          Bad
        </button>
      </div>
    </div>
  );
};

export default FeedbackOption;
