import React from 'react';
import styles from './Statistics.module.css';
import Notification from '../Notification/Notification';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  countTotalFeedback,
  positivePercentage,
}) => {
  return (
    <div className={styles.Statistics}>
      <h2>Statistics</h2>
      {countTotalFeedback() > 0 ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total} </p>
          <p>
            Positive feedback:
            {positivePercentage}%
          </p>
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default Statistics;
