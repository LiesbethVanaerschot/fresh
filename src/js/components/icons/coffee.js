import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Coffee extends Component {
    render () {
        const width = this.props.width;
        const height = this.props.height;
        const basicfill = this.props.basicfill;
        const accentcolor = this.props.accentcolor;
        const primarycolor = this.props.primarycolor;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24.8 35.3">
                <path d="M20.4 20.1c-.4 0-.8.1-1.2.2v1.3c.3-.2.7-.3 1.2-.3 1.2 0 2.2 1 2.2 2.2v1.1c0 1.2-1 2.2-2.2 2.2-.4 0-.8-.1-1.2-.3v.4c0 .3 0 .6-.1.9.4.2.8.2 1.2.2 1.9 0 3.4-1.5 3.4-3.4v-1.1c.2-1.9-1.4-3.4-3.3-3.4z" fill={accentcolor}/>
                <path d="M9.7 10.5c-.6.5-1.3 1.2-1.3 2.5 0 .3.2.5.5.5s.5-.2.5-.5c0-.8.4-1.2 1-1.7s1.3-1.2 1.3-2.5-.7-1.9-1.3-2.5c-.5-.5-1-.9-1-1.7s.4-1.2 1-1.7 1.3-1.2 1.3-2.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5c0 .8-.4 1.2-1 1.7-.6.6-1.3 1.3-1.3 2.6s.7 1.9 1.3 2.5c.5.5 1 .9 1 1.7 0 .7-.4 1.1-1 1.6zm3.3 0c-.6.5-1.3 1.2-1.3 2.5 0 .3.2.5.5.5s.5-.2.5-.5c0-.8.4-1.2 1-1.7S15 10.1 15 8.8s-.7-1.9-1.3-2.5c-.5-.5-1-.9-1-1.7 0-.3-.2-.5-.5-.5s-.5.2-.5.5c0 1.3.7 1.9 1.3 2.5.5.5 1 .9 1 1.7s-.4 1.2-1 1.7zm-6.7 0C5.8 11 5 11.7 5 13c0 .3.2.5.5.5s.5-.2.5-.5c0-.8.4-1.2 1-1.7s1.3-1.2 1.3-2.5S7.6 6.9 7 6.3c-.5-.5-1-.9-1-1.7 0-.3-.2-.5-.5-.5-.2.1-.5.3-.5.6 0 1.3.8 1.9 1.3 2.4s1 .9 1 1.7-.4 1.2-1 1.7z" fill={basicfill}/>
                <path d="M3.9 33.7c0 .3.3.6.6.6h10.2c.3 0 .6-.3.6-.6v-.6H3.9v.6z" fill={primarycolor}/>
                <path d="M20.2 19c-.4 0-.8.1-1.2.2v-1.9c0-.9-.7-1.7-1.7-1.7H1.7c-.9 0-1.7.7-1.7 1.7v9.6c0 1.6.5 3.1 1.4 4.4.4.6.9 1.1 1.4 1.5v.9c0 .9.7 1.7 1.7 1.7h10.2c.9 0 1.7-.7 1.7-1.7v-.9c.5-.4 1-.9 1.4-1.5.5-.7.9-1.5 1.2-2.4.5.2.9.2 1.4.2 2.5 0 4.5-2 4.5-4.5v-1.1c-.2-2.5-2.2-4.5-4.7-4.5zm-5 14.7c0 .3-.3.6-.6.6H4.5c-.3 0-.6-.3-.6-.6v-.6h11.4c-.1 0-.1.6-.1.6zM18 23.5v3.4c0 1.6-.6 3.2-1.7 4.4-.2.3-.5.5-.8.7h-12c-.3-.2-.5-.5-.8-.7C1.6 30.1 1 28.5 1 26.9v-9.6c0-.3.3-.6.6-.6h15.7c.3 0 .6.3.6.6l.1 6.2zm1.1 0c0-.6.5-1.2 1.2-1.2s1.2.5 1.2 1.2v1.1c0 .6-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2v-1.1zm1.2 4.5c-.4 0-.8-.1-1.2-.2 0-.3.1-.6.1-.9v-.4c.3.2.7.3 1.2.3 1.2 0 2.2-1 2.2-2.2v-1.1c0-1.2-1-2.2-2.2-2.2-.4 0-.8.1-1.2.3v-1.3c.4-.1.8-.2 1.2-.2 1.9 0 3.4 1.5 3.4 3.4v1.1s0 3.4-3.5 3.4z" fill={basicfill}/>
            </svg>
        )
    }
}

Coffee.defaultProps = {
    width: '24.8',
    height: '35.3',
    basicfill: '#363d42',
    accentcolor: '#f5dcd9',
    primarycolor: '#85bd7e'
};

Coffee.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    basicfill: PropTypes.string,
    accentcolor: PropTypes.string,
    primarycolor: PropTypes.string
};

export default Coffee;