import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SectionTag, Title} from './Section.styled';

export class Section extends Component {
  render() {
    return (
      <SectionTag>
          <Title>{this.props.title}</Title>
          {this.props.children}
      </SectionTag>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
};