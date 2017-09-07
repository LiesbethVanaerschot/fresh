import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Plant extends Component {
    render() {
        const width = this.props.width;
        const height = this.props.height;
        const basicfill = this.props.basicfill;
        const accentcolor = this.props.accentcolor;
        const primarycolor = this.props.primarycolor;

        return (
            <svg className="svg-icon" id="plant" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width={width} height={height} viewBox="0 0 21.7 35.3">
                <g id="backgrounds">
                    <path fill={primarycolor} d="M9.1,13.1c-2.1,0-3.8,2.4-3.8,5.3c0,1.6,0.5,3,1.4,4v0.1h4.7v-0.1c0.9-1,1.4-2.5,1.4-4C12.9,15.4,11.2,13.1,9.1,13.1z"/>
                    <path fill={primarycolor} d="M5.1,10.3C4.7,9.2,4,8.3,3.3,7.7C2.7,7.2,2.2,7,1.7,7.1c-0.8,0.3-1.1,2.3-0.2,4.6c0.4,1,1,1.9,1.7,2.5c0.5,0.5,1,0.7,1.4,0.7c0.1,0,0.2,0,0.3-0.1c0.4-0.2,0.7-0.8,0.8-1.6C5.7,12.3,5.5,11.3,5.1,10.3z"/>
                    <path fill={primarycolor} d="M18.7,7.7c0.5,0,1.1-0.3,1.5-1c0.3-0.4,0.5-0.9,0.5-1.3l0,0c0-0.2,0-0.6-0.3-0.8c-0.1-0.1-0.3-0.1-0.4-0.1c-0.2,0-0.3,0-0.4,0.1c-0.4,0.1-0.8,0.5-1.1,0.9C18.1,5.8,18,6.3,18,6.7c0,0.2,0,0.6,0.3,0.8C18.4,7.6,18.5,7.7,18.7,7.7z"/>
                    <path fill={primarycolor} d="M12.1,13.3c0.3,0.2,0.7,0.2,1,0.2c1.3,0,2.7-1,3.5-2.6c0.5-1,0.7-2,0.6-3s-0.6-1.7-1.3-2.1c-0.3-0.2-0.7-0.2-1-0.2c-1.3,0-2.7,1-3.5,2.6c-0.5,1-0.7,2-0.6,3S11.3,13,12.1,13.3z"/>
                    <path fill={primarycolor} d="M11.7,5.8c0.4,0,0.8-0.2,1.1-0.7c0.3-0.4,0.5-1,0.6-1.6c0.1-0.7-0.1-1.3-0.4-1.8C12.8,1.4,12.5,1,12,1s-0.9,0.3-1.1,0.6c-0.4,0.4-0.6,1.1-0.6,1.7c-0.1,0.7,0.1,1.3,0.4,1.8C10.8,5.3,11.1,5.7,11.7,5.8C11.6,5.8,11.7,5.8,11.7,5.8z"/>
                    <polygon fill={accentcolor} points="5.4,34.3 5.4,34.4 12.8,34.4 13.8,26.9 4.4,26.9"/>
                    <polygon fill={accentcolor} points="14.4,25.9 14.2,23.1 4,23.1 3.8,25.9"/>
                </g>
                <g id="lines">
                    <ellipse fill="none" stroke={basicfill} transform="matrix(7.372631e-02 -0.9973 0.9973 7.372631e-02 7.6068 14.9194)" cx="11.8" cy="3.4" rx="2.9" ry="2.1"/>
                    <ellipse fill="none" stroke={basicfill} transform="matrix(0.6709 -0.7416 0.7416 0.6709 1.8974 16.2689)" cx="19.3" cy="6" rx="2.2" ry="1.5"/>
                    <ellipse fill="none" stroke={basicfill} transform="matrix(0.4583 -0.8888 0.8888 0.4583 -1.0425 17.5212)" cx="13.9" cy="9.6" rx="4.6" ry="3.3"/>
                    <ellipse fill="none" stroke={basicfill} transform="matrix(0.9212 -0.3892 0.3892 0.9212 -4.0257 2.1573)" cx="3.3" cy="11" rx="2.4" ry="4.6"/>
                    <path fill="none" stroke={basicfill} d="M11.8,23c0,0,1.9-2.5,1.7-5c-0.3-2.5-1.7-5.3-4.4-5.3S4.9,15.5,4.7,18c-0.3,2.5,1.7,5,1.7,5"/>
                    <polygon fill="none" stroke={basicfill} points="9,23 3.5,23 3,26.3 9,26.3 15.1,26.3 14.5,23 	"/>
                    <polyline fill="none" stroke={basicfill} points="3.8,26.3 5,34.8 13.2,34.8 14.3,26.3 	"/>
                </g>
                <g id="dottes">
                    <circle fill={basicfill} cx="11.6" cy="2.5" r="0.6"/>
                    <circle fill={basicfill} cx="12.2" cy="4.4" r="0.6"/>
                    <circle fill={basicfill} cx="3.9" cy="10.1" r="0.6"/>
                    <circle fill={basicfill} cx="2.2" cy="10" r="0.6"/>
                    <circle fill={basicfill} cx="3.9" cy="13" r="0.6"/>
                    <circle fill={basicfill} cx="19.2" cy="6.1" r="0.6"/>
                    <circle fill={basicfill} cx="14.4" cy="7.7" r="0.6"/>
                    <circle fill={basicfill} cx="14.9" cy="10.4" r="0.6"/>
                    <circle fill={basicfill} cx="12.3" cy="10.7" r="0.6"/>
                    <circle fill={basicfill} cx="9.5" cy="15.2" r="0.6"/>
                    <circle fill={basicfill} cx="7.7" cy="16.4" r="0.6"/>
                    <circle fill={basicfill} cx="10" cy="17.7" r="0.6"/>
                    <circle fill={basicfill} cx="7.6" cy="20.3" r="0.6"/>
                    <circle fill={basicfill} cx="10.7" cy="21.4" r="0.6"/>
                </g>
            </svg>
        );
    }
}

Plant.defaultProps = {
    width: '21.7',
    height: '35.4',
    basicfill: '#363d42',
    accentcolor: '#f5dcd9',
    primarycolor: '#85bd7e'
};

Plant.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    basicfill: PropTypes.string,
    accentcolor: PropTypes.string,
    primarycolor: PropTypes.string
};

export default Plant;
