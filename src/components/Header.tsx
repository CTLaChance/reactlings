import React, { Component, Fragment } from 'react';
import logo from '../assets/logo.svg';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} className="logo" alt="React Logo" />
                <h1>Reactlings</h1>
            </div>
        )
    }
}
