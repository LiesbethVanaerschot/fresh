import React, { Component } from 'react';
import data from './data/work.json';
import Filter from './../components/partials/filters';
import Project from './../components/partials/project';

import filtering from './../stores/filtering';

class Work extends Component {
    render() {
        let filters = Object.keys(data.filters).map(function(key) {
            return <Filter filtering={filtering} key={key} data-text={data.filters[key]}></Filter>;
        });

        let projects = Object.keys(data.projects).map(function(key) {
            return <Project key={key} project-type={data.projects[key].type} project-url={data.projects[key].url} project-title={data.projects[key].title} project-img={data.projects[key].image} ></Project>;
        });

        return (
            <div className="section section--triangle section--about bg--white" ref="about">
                <div className="container--small">
                    <div className="section__content">
                        <div className="section__header text--center">
                            <h2 className="section__title">{data.title}</h2>
                        </div>
                        <div className="section__filters">
                            {filters}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="projects">
                        <div className="flex">
                            {projects}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;
