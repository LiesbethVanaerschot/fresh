import React, { Component } from 'react';
import classNames from 'classnames';

class Greeting extends Component {

    constructor(){
        super();
        this.state = {
            fadeout: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollFade.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollFade.bind(this));
    }

    scrollFade () {
        if (window.pageYOffset >= 80) {
            this.setState({ fadeout: true })
        }
        else if (window.pageYOffset < 100) {
            this.setState({ fadeout: false })
        }
    }

    render () {

        const classes = classNames({greeting__content : true, fadeout: this.state.fadeout});

        return (
            <div className="greeting">
                <div ref="greeting_content" className={classes}>
                    <div className="container--small">
                        <h1 className="greeting__title">Hello</h1>
                        <p className="greeting__text">
                            My name is Liesbeth, a creative webdesigner and
                            developer. Do you want to know more? Please do not hesitate and take a further look.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Greeting;