import React, { Component } from 'react';
import LBOne from './LBOne';
import LBTwo from './LBTwo';
import RBOne from './RBOne';
import RBTwo from './RBTwo';
import LOOne from './LOOne';
import LOTwo from './LOTwo';
import ROOne from './ROOne';
import ROTwo from './ROTwo';
import ROThree from './ROThree';

class Leaves extends Component {
    render () {
        return (
            <div className="leaves">
                <div className="LB">
                    <LBOne />
                    <LBTwo />
                </div>
                <div className="LO">
                    <LOOne />
                    <LOTwo />
                </div>
                <div className="RB">
                    <RBOne />
                    <RBTwo />
                </div>
                <div className="RO">
                    <ROOne/>
                    <ROTwo/>
                    <ROThree/>
                </div>
            </div>
        )
    }
}

export default Leaves;