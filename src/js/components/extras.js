import React, { Component } from 'react';
import classNames from 'classnames';
import data from './../pages/data/about.json';
import Travel from './icons/travel';
import Plant from './icons/plant';
import Coffee from './icons/coffee';
import Music from './icons/music';

class Extras extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkvisible.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkvisible.bind(this));
    }

    posY(elm) {
        let test = elm;
        let top = 0;

        while (!!test && test.tagName.toLowerCase() !== 'body') {
            top += test.offsetTop;
            test = test.offsetParent;
        }

        return top;
    }

    viewPortHeight() {
        let de = document.documentElement;

        if (!!window.innerWidth) {
            return window.innerHeight;
        } else if ( de && !isNaN(de.clientHeight) ) {
            return de.clientHeight;
        }

        return 0;
    }

    scrollY() {
        if ( window.pageYOffset ) {
            return window.pageYOffset;
        }
        return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    }

    checkvisible() {
        let vpH = this.viewPortHeight(); // Viewport Height
        let st = this.scrollY(); // Scroll Top
        let y = this.posY(this.refs.extra);

        this.setState({show: (y < (vpH + st))});
    }

    render() {
        const classes = classNames({skills: true, skillsExtra: true, show: this.state.show});

        return (
            <div ref="extra" className={classes}>
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
        );
    }
}

export default Extras;
