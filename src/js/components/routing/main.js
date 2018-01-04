import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './../header';
import Greeting from '../greeting';
import About from '../../pages/about';
import Work from '../../pages/work';

class Main extends Component {
    render() {
        return (
            <main>
                <BrowserRouter>
                    <Header/>
                </BrowserRouter>
                <div className="content">
                    <Greeting />
                    <About/>
                    <Work/>
                </div>
            </main>
        );
    }
}

export default Main;
