import React, { Component } from 'react';
import classNames from 'classnames';
import { observer} from 'mobx-react';
import { CSSTransition} from 'react-transition-group';

import data from './data/project.json';

import filtering from './../../stores/filtering';

@observer class Project extends Component {
    render() {
        const flexCol = classNames('flex-col', 'flex-col-sm--6', 'flex-col-md--4');
        const projectClasses = classNames('project', {'project--web': this.props['project-type'] === 'web', 'project--graphic': this.props['project-type'] === 'graphic'});
        const btnClasses = classNames('btn', 'btn--white');

        let targetProject = this.props['project-type'] === 'web' ? '_blank' : '';

        return (
            <div className={flexCol} data-type={this.props['project-type']}>
                <a href={this.props['project-url']} className={projectClasses} target={targetProject}>
                    <div className="project__hover">
                        <div className="project__content">
                            <h4>{this.props['project-title']}</h4>
                            <span className={btnClasses}>
                                {this.props['project-type'] === 'web' ? data.visit : data.watch}
                            </span>
                        </div>
                    </div>
                    <div className="project__inner">
                        <img src={`images/projects/${this.props['project-img']}`} alt="" className="project__img"/>
                    </div>
                </a>
            </div>
        );
    }
}

export default Project;
