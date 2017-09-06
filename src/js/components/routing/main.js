import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './../header';
import About from '../../pages/about';
import Greeting from '../greeting';

class Main extends Component {
    render() {
        return (
            <main>
                <BrowserRouter>
                    <Header/>
                </BrowserRouter>
                {/*<Switch>*/}
                    {/*<Route exact path='/about' component={About}/>*/}
                {/*</Switch>*/}
                <div className="content">
                    <Greeting />
                    <About/>
                </div>
            </main>
        )
    }
}

export default Main;