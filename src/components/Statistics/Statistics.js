import React from 'react';
import styles from './Statistics.module.css';
import Notification from '../Notification/Notification';

const Statistics = ({
  options,
  total,
  countTotalFeedback,
  positivePercentage,
}) => {
  return (
    <div className={styles.Statistics}>
      <h2>Statistics</h2>
      {countTotalFeedback() > 0 ? (
        <>
          {Object.entries(options).map(elem => {
            return (
              <p key={elem[0]}>
                {elem[0][0].toUpperCase() + elem[0].slice(1)}: {elem[1]}
              </p>
            );
          })}
          <p>Total: {total} </p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default Statistics;
