import React, { Component } from 'react';
import { Controls } from 'components/Controls/Controls';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container } from './Container/Container';

export class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleClick = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((value, acc) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const keys = Object.keys(this.state);

    const itemObj = {
      ...this.state,
      total: this.countTotalFeedback(),
      positiveFeedback: this.countPositiveFeedbackPercentage(),
    };

    return (
      <Container>
        <Section title="Please leave feedback">
          <Controls options={keys} onLeaveFeedBack={this.handleClick} />
        </Section>

        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics obj={itemObj} />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    );
  }
}
