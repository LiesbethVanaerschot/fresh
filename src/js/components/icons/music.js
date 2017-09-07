import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Music extends Component {
    render() {
        const width = this.props.width;
        const height = this.props.height;
        const basicfill = this.props.basicfill;
        const accentcolor = this.props.accentcolor;
        const primarycolor = this.props.primarycolor;

        return (
            <svg className="svg-icon" id="music" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 35.7 34.8">
                <g id="backgrounds">
                    <path fill={accentcolor} d="M17.9,0.9c-4.7,0-9.1,1.9-12.4,5.3c-0.6,0.6-0.6,1.7,0,2.3C5.8,8.8,6.1,9,6.6,9c0.4,0,0.8-0.2,1.1-0.4c2.7-2.8,6.3-4.3,10.2-4.3s7.4,1.6,10.2,4.3C28.4,8.9,28.8,9,29.2,9l0,0c0.4,0,0.8-0.2,1.1-0.4c0.3-0.3,0.5-0.7,0.5-1.2c0-0.4-0.2-0.8-0.5-1.2C27,2.8,22.5,0.9,17.9,0.9z"/>
                    <path fill={primarycolor} d="M29.6,18.8c0-0.1,0-0.2,0-0.3v-0.1c-0.1-1-1-1.8-2-1.9c-0.1,0-0.3,0-0.4,0c-1.2,0-2.1,0.8-2.4,1.9L22.5,31c-0.2,1.2,0.6,2.4,2,2.6c0.1,0,0.3,0,0.4,0c0.9,0,1.7-0.5,2.1-1.2v-0.1c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0.1-0.2,0.1-0.3l2.2-12.6C29.6,19,29.6,18.9,29.6,18.8z"/>
                    <path fill={primarycolor} d="M8.6,32L8.6,32c0,0.1,0.1,0.2,0.1,0.3v0.1c0.4,0.8,1.3,1.2,2.1,1.2c0.1,0,0.3,0,0.4,0c0.6-0.1,1.2-0.4,1.6-0.9s0.5-1.1,0.4-1.7L11,18.4c-0.2-1.1-1.2-1.9-2.3-1.9c-0.1,0-0.3,0-0.4,0c-1.1,0.2-1.8,0.9-2,1.9v0.1c0,0.1,0,0.2,0,0.3l0,0c0,0.1,0,0.2,0,0.3l2.2,12.6C8.5,31.8,8.5,31.9,8.6,32z"/>
                </g>
                <g id="lines">
                    <path fill="none" stroke={basicfill} d="M17.9,4.7c-4.5,0-7.5,2.3-8.2,2.8c-0.7,0.5-2.4,3-4.4,1.1s1-4.3,4-5.9s5.7-2.1,8.7-2.1s5.8,0.5,8.7,2.1s6,4,4,5.9c-2,1.9-3.7-0.6-4.4-1.1S22.3,4.7,17.9,4.7z"/>
                    <path fill="none" stroke={basicfill} d="M30.3,8.8c0,0,6.3,8,1.6,17"/>
                    <path fill="none" stroke={basicfill} d="M27.6,15.9c1.9,0.4,2.6,2,2.3,3.9C29.5,21.6,28,30.9,28,30.9s-0.3,3.7-3.5,3.2c-3.1-0.5-2.4-4.1-2.4-4.1l1.9-11.3C24.1,18.7,24.5,15.4,27.6,15.9z"/>
                    <path fill="none" stroke={basicfill} d="M29.9,18.4c0,0,6.2,2.2,5.1,8.2s-7.4,5.8-7.4,5.8"/>
                    <path fill="none" stroke={basicfill} d="M5.4,8.8c0,0-6.3,8-1.6,17"/>
                    <path fill="none" stroke={basicfill} d="M8.1,15.9c-1.9,0.2-2.6,2-2.3,3.9c0.3,1.8,1.8,11.1,1.8,11.1s0.3,3.7,3.5,3.2c3.1-0.5,2.4-4.1,2.4-4.1l-1.9-11.3C11.6,18.7,11.4,15.6,8.1,15.9z"/>
                    <path fill="none" stroke={basicfill} d="M5.8,18.4c0,0-6.2,2.2-5.1,8.2s7.4,5.8,7.4,5.8"/>
                </g>
                <g id="notes">
                    <path fill="none" stroke={basicfill} d="M19.3,27.5c0,0-0.3-1.7-2.2-1.1c-1.8,0.6-0.9,2.8,0.4,2.7c1.3-0.1,2-0.8,2-3.2c0-2.4-0.1-5.6-0.1-5.6s0.9,1.4,1.7,1.7s0.6,1.7,0.6,1.7"/>
                    <path fill="none" stroke={basicfill} d="M16.7,18.1c0,0-0.3-1.4-1.9-1c-1.6,0.5-0.8,2.4,0.4,2.3c1.2-0.1,1.8-0.7,1.7-2.8s-0.1-4.9-0.1-4.9s0.8,1.3,1.5,1.5s0.5,1.5,0.5,1.5"/>
                </g>
            </svg>
        );
    }
}

Music.defaultProps = {
    width: '35.7',
    height: '34.8',
    basicfill: '#363d42',
    accentcolor: '#f5dcd9',
    primarycolor: '#85bd7e'
};

Music.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    basicfill: PropTypes.string,
    accentcolor: PropTypes.string,
    primarycolor: PropTypes.string
};

export default Music;
