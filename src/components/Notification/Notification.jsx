import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Title } from './Notification.styled';

export class Notification extends Component {
    render() {
        return (
            <Title>{this.props.message}</Title>
        )
    }
}

Notification.propTypes = {
    message: PropTypes.string
}