import React, { Component } from 'react';
import data from './data/home.json';
import Greeting from '../components/greeting';

class Home extends Component {
    render () {
        return (
            <div className="container">
                <Greeting />
            </div>
        )
    }
}

export default Home;