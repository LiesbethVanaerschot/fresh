import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class Header extends Component {

    constructor(){
        super();
        this.state = {
            bgfade: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollFade.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollFade.bind(this));
    }

    scrollFade () {
        if (window.pageYOffset >= 100) {
            this.setState({ bgfade: true })
        }
        else if (window.pageYOffset < 100) {
            this.setState({ bgfade: false })
        }
    }

    render () {

        const classes = classNames({mainheader: true, bgfade: this.state.bgfade});

        return (
            <header className={classes}>
                <div className="container">
                    <a href="/" className="mainheader__logo">
                        <img src="images/logo.svg" alt="logo liesbeth vanaerschot" className="mainheader__img"/>
                    </a>
                    <nav className="mainheader__nav">
                        <Link className="mainheader__link" to='/about'>About</Link>
                        <Link className="mainheader__link" to='/work'>Work</Link>
                        <Link className="mainheader__link" to='/contact'>Contact</Link>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;