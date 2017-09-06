import React, { Component } from 'react';
import data from './../pages/data/about.json';
import Travel from './icons/travel';
import Plant from './icons/plant';
import Coffee from './icons/coffee';
import Music from './icons/music';

class Extras extends Component {
    render () {

        return (
            <div className="skills">
                <h3 className="skills__title">{data.extra.title}</h3>
                <div className="flex flex--row-sm">
                    <div className="flex__col-sm--3">
                        <Travel width="70" height="70" />
                    </div>
                    <div className="flex__col-sm--3">
                        <Plant width="70" height="70" />
                    </div>
                    <div className="flex__col-sm--3">
                        <Coffee width="70" height="70" />
                    </div>
                    <div className="flex__col-sm--3">
                        <Music width="70" height="70" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Extras;