import React, { Component } from 'react';
import data from './data/about.json';
import Skills from './../components/skills';
import Extras from './../components/extras';

class About extends Component {
    render () {
        return (
            <div className="section section--triangle section--about bg--white" ref="about">
                <div className="container--small">
                    <div className="section__content">
                        <div className="section__header text--center">
                            <h2 className="section__title">{data.title}</h2>
                        </div>
                        <p className="section__text">
                            {data.text}
                        </p>
                        <Skills/>
                        <Extras/>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;