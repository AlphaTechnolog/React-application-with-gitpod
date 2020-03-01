import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom'

import M from 'materialize-css/dist/js/materialize.min.js'

const stylesHamburguerIcon = {
    cursor: 'pointer'
}

export default class Navbar extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    }

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="blue darken-3">
                        <div className="nav-wrapper container">
                            <Link to="/" className="brand-logo">React app</Link>
                            <a data-target="responsive-menu" className="sidenav-trigger">
                                <i style={stylesHamburguerIcon} className="material-icons">
                                    menu
                                </i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About us</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul className="sidenav" id="responsive-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                </ul>
            </div>
        )
    }
}