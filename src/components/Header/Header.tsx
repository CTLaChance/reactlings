import React, {Component} from 'react';
import logo from '../../assets/logo.svg';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <img src={logo} className="logo spin-clockwise" alt="React Logo" />
                <h1>Reactlings</h1>
                <img src={logo} className="logo spin-counter-clockwise" alt="React Logo" />
            </div>
        )
    }
}
