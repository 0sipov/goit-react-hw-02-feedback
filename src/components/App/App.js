import React, { Component } from 'react';
import styles from './App.module.css';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    options: {
      good: 0,
      neutral: 0,
      bad: 0,
      refrain: 0,
    },
  };
  addFeedback = event => {
    const name = event.currentTarget.name;
    this.setState(prevState => {
      return {
        options: { ...prevState.options, [name]: prevState.options[name] + 1 },
      };
    });
  };
  countTotalFeedback = () => {
    const { options } = this.state;
    return Object.values(options).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    );
  };
  countPositiveFeedbackPercentage = countTotalFeedback => {
    const { good } = this.state.options;
    return Math.round(
      countTotalFeedback() && (good / countTotalFeedback()) * 100,
    );
  };
  render() {
    const { options } = this.state;
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions addFeedback={this.addFeedback} options={options} />
        <Statistics
          options={options}
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
