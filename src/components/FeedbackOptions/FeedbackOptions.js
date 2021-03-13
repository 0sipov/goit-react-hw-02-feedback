import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOption = ({ addFeedback, options }) => {
  return (
    <div>
      <div className={styles.feedbackControl}>
        {Object.keys(options).map(elem => {
          return (
            <button
              key={elem}
              className={styles.borderButton + ' ' + styles[elem]}
              type="button"
              name={elem}
              onClick={addFeedback}
            >
              {elem}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FeedbackOption;
