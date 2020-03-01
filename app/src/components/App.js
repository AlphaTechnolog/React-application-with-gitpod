import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Navbar from './include/Navbar'

import Home from './routes/home/Home'
import About from './routes/about/About'

export default class App extends Component {
    render() {
        return (
            <Router>
                {/**Navbar */}
                <div>
                    <Navbar/>
                </div>
                {/**Content */}
                <main>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                </main>
            </Router>
        )
    }
}