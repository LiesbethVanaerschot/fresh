import React, { Component } from 'react';
import classNames from 'classnames';

class Filter extends Component {
    render() {
        const classes = classNames('link', 'link--underline', 'filter__link');
        return (
            <div className="filter">
                <a className={classes} href="#">{this.props['data-text']}</a>
            </div>
        );
    }
}

export default Filter;
