import React, { Component } from 'react';
import classNames from 'classnames';

class Project extends Component {
    render() {
        const flexCol = classNames('flex-col', 'flex-col-sm--6', 'flex-col-md--4');
        return (
            <div className={flexCol}>
                <a href="" className="project">
                    <div className="project__hover">
                        <div className="project__content">
                            <h3>{this.props['project-title']}</h3>
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
