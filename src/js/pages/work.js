import React, { Component } from 'react';
import { observer} from 'mobx-react';
import FlipMove from 'react-flip-move';
import classNames from 'classnames';
import data from './data/work.json';
import Filter from './../components/partials/filters';
import Project from './../components/partials/project';

import filtering from './../stores/filtering';

@observer class Work extends Component {
    render() {
        let filters = Object.keys(data.filters).map(function(key) {
            return <Filter key={key} data-text={data.filters[key]}></Filter>;
        });

        const moreBtn = classNames('btn', 'btn--primary', 'btn--more', {'hide': !filtering.showMoreBtn});

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
                        <FlipMove className="flex"
                            duration={400}
                            appearAnimation="fade"
                            enterAnimation="fade"
                            leaveAnimation="fade"
                        >
                            { filtering.active !== 'everything' ? (
                                filtering.selectedItems.slice(0, filtering.itemsToShow).map(function(key) {
                                    return <Project key={key.id} project-type={data.projects[key.id].type} project-url={data.projects[key.id].url} project-title={data.projects[key.id].title} project-img={data.projects[key.id].image} ></Project>;
                                })
                            ) : (
                                filtering.activeItems.slice(0, filtering.itemsToShow).map(function(key) {
                                    return <Project key={key.id} project-type={data.projects[key.id].type} project-url={data.projects[key.id].url} project-title={data.projects[key.id].title} project-img={data.projects[key.id].image} ></Project>;
                                })
                            )}
                        </FlipMove>
                        <div className="projects__more">
                            <a href="" onClick={(event) => filtering.handleShow(event)} className={moreBtn}>More items</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;
