import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div className="flex">
                {this.props.children}
            </div>
        );
    }
}

export default Projects;
