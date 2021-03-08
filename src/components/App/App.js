import React, { Component } from 'react';
import styles from './App.module.css';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOption from '../FeedbackOptions/FeedbackOption';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedback = event => {
    const name = event.currentTarget.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = countTotalFeedback => {
    const { good } = this.state;
    return Math.round(
      countTotalFeedback() && (good / countTotalFeedback()) * 100,
    );
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOption
          addFeedback={this.addFeedback}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          countTotalFeedback={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage(
            this.countTotalFeedback,
          )}
        />
      </Section>
    );
  }
}

export default App;
