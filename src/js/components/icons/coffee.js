import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Coffee extends Component {
    render() {
        const width = this.props.width;
        const height = this.props.height;
        const basicfill = this.props.basicfill;
        const accentcolor = this.props.accentcolor;
        const primarycolor = this.props.primarycolor;

        return (
            <svg className="svg-icon" id="coffee" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 24.5 35.5">
                <g id="backgrounds">
                    <path fill={accentcolor} d="M19.9,20c-0.4,0-0.9,0.1-1.3,0.2v1.4c0.3-0.2,0.8-0.3,1.3-0.3c1.3,0,2.4,1.1,2.4,2.3v1.2c0,1.3-1.1,2.3-2.4,2.3c-0.4,0-0.9-0.1-1.3-0.3v0.4c0,0.3,0,0.6-0.1,0.9c0.4,0.2,0.9,0.2,1.3,0.2c2,0,3.7-1.6,3.7-3.6v-1.2C23.6,21.6,21.9,20,19.9,20z"/>
                    <path fill={primarycolor} d="M3.6,33.9c0,0.3,0.3,0.6,0.6,0.6h10.2c0.3,0,0.6-0.3,0.6-0.6v-0.6H3.6V33.9z"/>
                </g>
                <g id="heat_1">
                    <path fill="none" stroke={basicfill} d="M5.1,4.7c0,0-0.1,1,0.5,1.6s1.8,1.1,1.8,2.8S6.3,11,5.7,11.8c-0.4,0.6-0.4,1.5-0.4,1.5"/>
                    <path fill="none" stroke={basicfill} d="M10.9,0.5c0,0,0.1,1-0.9,1.9S8.5,4.2,8.6,5S9.4,6.6,9.8,7c0.4,0.4,1.2,1,1.1,2s-0.7,1.8-1.3,2.2c-0.6,0.4-1,1.3-1,2"/>
                    <path fill="none" stroke={basicfill} d="M11.9,4.7c0,0.4,0.1,1.2,0.7,1.8c0.5,0.6,1.7,1.2,1.6,2.3s-0.6,1.8-1.6,2.6c-0.7,0.5-0.6,1.8-0.6,1.8"/>
                </g>
                <g id="lines">
                    <path fill="none" stroke={basicfill} d="M3.6,32.8c-3-1.3-3.1-4.8-3.1-5.2s0-8.8,0-10.1s1.7-1.2,1.7-1.2h7.1c0,0,7.1,0,7.1,0s1.7-0.1,1.7,1.2s0,9.7,0,10.1S18,31.4,15,32.8"/>
                    <path fill="none" stroke={basicfill} d="M9.3,35c0,0-3.6,0-4.9,0s-1.2-1.2-1.2-1.2v-1.1h6.1c0,0,6.1,0,6.1,0v1.1c0,0,0,1.2-1.2,1.2S9.3,35,9.3,35z"/>
                    <path fill="none" stroke={basicfill} d="M18.1,20.2c0,0,0.9-0.8,2.3-0.6c1.4,0.2,3.7,1.1,3.7,4.9s-2.8,4.2-3,4.2s-1.9,0.2-3-0.5"/>
                    <path fill="none" stroke={basicfill} d="M18.2,23c0.1-0.3,0.5-1.1,1.8-1.1c1.2,0,1.8,0.8,1.8,1.3s0,1.6,0,1.8c0,0.2-0.3,1.4-1.5,1.4c-1.6,0-2.1-1.2-2.1-1.2"/>
                </g>
            </svg>
        );
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
