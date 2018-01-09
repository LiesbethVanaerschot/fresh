import {render} from 'react-dom';
import React, { Component } from 'react';
import Main from './components/routing/main';
import Leaves from './components/leaves/leaves';
import Modal from './components/partials/modal';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Main />
                <Leaves/>
                <div className="pattern-fixed">
                </div>
                <Modal></Modal>
            </div>
        );
    }
}

render(<App/>, document.getElementById('main'));
