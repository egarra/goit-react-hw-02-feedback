import React, { Component } from 'react';
import { List, Btn } from './Controls.styled';

export class Controls extends Component {
  render() {
    const { options, onLeaveFeedBack } = this.props;

    return (
      <List>
        {options.map(option => {
          return (
            <li key={option}>
              <Btn type="button" onClick={() => onLeaveFeedBack(option)}>
                {option}
              </Btn>
            </li>
          );
        })}
      </List>
    );
  }
}
