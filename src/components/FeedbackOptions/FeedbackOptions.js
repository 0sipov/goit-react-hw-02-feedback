import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOption = ({ addFeedback, options }) => {
  return (
    <div>
      <div className={styles.feedbackControl}>
        {options.map(elem => {
          return (
            <button
              key={elem.option}
              className={styles.borderButton + ' ' + styles[elem.option]}
              type="button"
              name={elem.option}
              onClick={addFeedback}
            >
              {elem.option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FeedbackOption;
