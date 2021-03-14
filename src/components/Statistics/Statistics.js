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
          {options.map(elem => {
            return (
              <p key={elem.option}>
                {elem.option[0].toUpperCase() + elem.option.slice(1)}:{' '}
                {elem.feedbacks}
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
