import React, { Component } from 'react';
import classNames from 'classnames';
import { observer} from 'mobx-react';

import filtering from './../../stores/filtering';

@observer class Filter extends Component {
    render() {
        const filterClasses = classNames('filter');
        const classes = classNames('link', 'link--underline', 'filter__link', {'active': this.props['data-text'] === filtering.active} );
        return (
            <div className={filterClasses}>
                <a className={classes} href="#" onClick={(event) => filtering.handleFilter(event, this.props['data-text'])}>{this.props['data-text']}</a>
            </div>
        );
    }
}

export default Filter;
