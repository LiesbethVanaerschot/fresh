import React, { Component } from 'react';
import classNames from 'classnames';

class Filter extends Component {
    render() {
        const filterClasses = classNames('filter');
        const classes = classNames('link', 'link--underline', 'filter__link', {'active': this.props.filtering.active[this.props['data-text']]});
        return (
            <div className={filterClasses}>
                <a className={classes} href="#" onClick={(event) => this.props.filtering.handleFilter(event, this.props['data-text'])}>{this.props['data-text']}</a>
            </div>
        );
    }
}

export default Filter;
