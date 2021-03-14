import React, { Component } from 'react';
import styles from './App.module.css';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    options: [
      { option: 'good', feedbacks: 0 },
      { option: 'neutral', feedbacks: 0 },
      { option: 'bad', feedbacks: 0 },
      { option: 'refrain', feedbacks: 0 },
    ],
  };
  addFeedback = event => {
    const name = event.currentTarget.name;
    this.setState(preState => {
      return {
        options: preState.options.map(el => {
          if (el.option === name) {
            return { ...el, feedbacks: el.feedbacks + 1 };
          }
          return el;
        }),
      };
    });
  };
  countTotalFeedback = () => {
    const { options } = this.state;
    return options.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.feedbacks;
    }, 0);
  };
  countPositiveFeedbackPercentage = countTotalFeedback => {
    const { options } = this.state;
    const goodFeedbacks = options.find(el => el.option === 'good').feedbacks;
    return Math.round(
      countTotalFeedback() && (goodFeedbacks / countTotalFeedback()) * 100,
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
