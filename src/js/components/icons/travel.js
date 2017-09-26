import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Travel extends Component {
    render() {
        const width = this.props.width;
        const height = this.props.height;
        const basicfill = this.props.basicfill;
        const accentcolor = this.props.accentcolor;
        const primarycolor = this.props.primarycolor;

        return (
            <svg className="svg-icon" id="travel" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 28.4 34.6">
                <g id="backgrounds">
                    <path fill={accentcolor} d="M9.8,33.6l-0.1,0.1H21v-0.1c-0.3-0.7-0.9-1.2-1.7-1.2h-7.8C10.8,32.4,10.1,32.8,9.8,33.6z"/>
                    <path fill={primarycolor} d="M8.4,12.7c-0.1,1.1,0.7,1.7,1.3,1.9c0.2,0,0.3,0.1,0.5,0.1c0.6,0,1.2-0.3,1.6-1v-0.1c0.2-0.4,0.2-0.8,0.1-1.2c-0.5-1.7,0.5-3.5,2.2-4c0.7-0.2,1.4-0.5,1.6-0.9c0.1-0.3,0.1-0.6,0-1.1c-0.2-0.7-0.7-1.2-1.3-1.6l0,0l0,0C12.7,5,11.2,5.6,9.8,6.6l0,0l0,0C9.7,6.9,9.7,7.3,9.7,7.7l0,0c0.1,1-0.1,2-0.6,2.9C8.7,11.2,8.5,11.9,8.4,12.7z"/>
                    <path fill={primarycolor} d="M21.3,8.4c0.8,0.8,1.7,1.4,2.7,1.9l0.3,0.1l-0.1-0.3c-0.5-1-1.1-1.9-1.9-2.7S20.6,6,19.6,5.5l-0.3-0.1l0.1,0.3C19.8,6.7,20.5,7.6,21.3,8.4z"/>
                    <path fill={primarycolor} d="M11.3,22.9l0.3,0.1l-0.1-0.3c-0.5-1-1.1-1.9-1.9-2.6c-0.8-0.8-1.7-1.4-2.6-1.9l-0.3-0.1l0.1,0.3c0.5,1,1.1,1.9,1.9,2.6C9.4,21.8,10.3,22.4,11.3,22.9z"/>
                    <path fill={primarycolor} d="M21.2,15.9c-0.6,0.8-0.7,1.7-0.9,2.5c-0.2,1-0.4,1.9-1.3,2.3c-0.3,0.1-0.5,0.1-0.8,0.2c-1.1,0.2-2.3,0.5-2.7,2.9v0.1h0.1c2.5,0,4.9-1,6.7-2.8c1.5-1.5,2.4-3.4,2.7-5.4v-0.1h-0.1C24,15.2,22,14.6,21.2,15.9z"/>
                </g>
                <g id="lines">
                    <circle fill="none" stroke={basicfill} cx="15.4" cy="14.3" r="10.1"/>
                    <path fill="none" stroke={basicfill} d="M22.5,7.1l1.8-1.8c0,0,4.9,4.9,3.3,12s-8.2,9.2-10.7,9.5C14.5,27,8.7,25.9,6.7,23c0.7-0.7,1.5-1.7,1.5-1.7"/>
                    <path fill="none" stroke={basicfill} d="M9.2,6.3c0,0-0.1,1.1,0,1.6c0.1,0.5,0.1,1.8-0.5,2.5c-0.9,0.9-1.8,4.1,1,4.9c2.7,0.8,2.9-2.6,2.6-3.5c-0.3-0.8,0.6-2.6,1.4-2.9c0.8-0.3,4.6-0.9,1.3-4.7"/>
                    <path fill="none" stroke={basicfill} d="M5.9,17.5c0,0,4.7,0.8,6.7,6.4"/>
                    <path fill="none" stroke={basicfill} d="M15,24.4c0,0,0.3-2.4,1.1-3.1c0.8-0.7,2.4-0.6,3.2-1.3c0.8-0.7,0.6-4,2.1-4.9c1.5-0.9,3.9,0,3.9,0"/>
                    <path fill="none" stroke={basicfill} d="M18.6,4.7c0,0,1,4.6,6.4,6.4"/>
                    <path fill="none" stroke={basicfill} d="M15.4,26.8v4.9"/>
                    <path fill="none" stroke={basicfill} d="M9.2,34c0,0,0.6-2.1,2.1-2.1c1.4,0,8.5,0,8.5,0s1.6,0.5,1.9,2.1" />
                    <line fill="none" stroke={basicfill} x1="7.7" y1="34.1" x2="23.3" y2="34.1"/>
                    <line fill="none" stroke={basicfill} x1="2.9" y1="5.3" x2="2" y2="6.5"/>
                    <path fill="none" stroke={basicfill} d="M1.4,7.8c0,0-0.4,0.7-0.4,1.4"/>
                    <path fill="none" stroke={basicfill} d="M0.6,10.9c0,0-0.2,1.1-0.2,1.5"/>
                </g>
                <g id="plane">
                    <line id="line_1" fill="none" stroke={basicfill} x1="2.9" y1="5.3" x2="2" y2="6.5"/>
                    <path id="line_2" fill="none" stroke={basicfill} d="M1.4,7.8c0,0-0.4,0.7-0.4,1.4"/>
                    <path id="line_3" fill="none" stroke={basicfill} d="M0.6,10.9c0,0-0.2,1.1-0.2,1.5"/>
                    <path fill={basicfill} d="M3.1,4.9L2.5,4.2L2.4,4.1c0,0,0,0-0.1-0.1c-0.1-0.1-0.1-0.2,0-0.3c0.1-0.2,0.2-0.3,0.2-0.3l0.2-0.1h0l0,0l0.1-0.1l0.2,0l0.9,0.1l0,0L3.4,3.3l1.2-0.9l0,0l0,0.5L3.2,1.8L2.8,1.5L2.6,1.4L2.5,1.3c0,0,0,0-0.1-0.1C2.3,1.1,2.3,1.1,2.3,0.9c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0,0,0.1-0.1l0.2-0.2c0.1-0.1,0.2-0.2,0.3-0.3l0,0L3-0.1L3.2,0l2.8,1.2l0,0L5.6,1.3l0.8-0.8c0.1-0.1,0.5-0.4,0.8-0.3c0.3,0,0.5,0.2,0.8,0.4c0.2,0.2,0.3,0.5,0.3,0.8c0,0.3-0.3,0.7-0.4,0.8L6.9,2.8l0,0l0.1-0.5l0.9,3l0,0l0.1,0.2L7.9,5.8L7.5,6.1L7.4,6.2c0,0-0.1,0.1-0.1,0.1c-0.1,0-0.2,0.1-0.4,0C6.7,6.2,6.7,6.1,6.7,6.1L6.2,5.3L5.3,3.6l0.5,0.1C5.4,4,5,4.4,4.7,4.8l0,0l0.1-0.4c0,0.3,0,0.6,0,0.9l0,0l0,0.2L4.8,5.5L4.5,5.8l0,0C4.5,5.8,4.4,5.9,4.2,5.9C4.1,5.9,4,5.9,4,5.8L3.9,5.7L3.6,5.5L3.1,4.9z M3.5,4.6L4,5.1l0.2,0.3l0.1,0.1c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.1,0l0,0l0,0l0.2-0.2L4.3,5.4l0,0C4.2,5.1,4.1,4.8,4.1,4.5L4,4.3l0.2-0.1l0,0C4.6,3.9,5,3.6,5.4,3.3L5.6,3l0.2,0.3l0.9,1.6l0.5,0.8c0,0,0,0-0.1,0c-0.1,0-0.2,0-0.2,0c0,0,0,0,0,0l0.2-0.2l0.4-0.3L7.4,5.6l0,0l-1.1-3L6.2,2.4l0.2-0.2l0,0l0.9-0.7c0.1-0.1,0.1-0.1,0.1-0.1c0,0,0-0.2-0.1-0.2c0,0-0.2-0.1-0.2-0.1c-0.1,0,0,0-0.2,0.1L6.2,1.9L6,2.1L5.7,2l0,0L3,0.6l0.4-0.1l0,0C3.2,0.6,3.1,0.7,3,0.8L2.9,1c0,0-0.1,0.1,0,0c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0-0.1l0.7,0.5L5,2.4l0.3,0.2L5,2.9l0,0L4,3.9L3.8,4.1L3.6,4l0,0L2.8,3.7l0.2,0l0,0h0C2.9,3.7,2.7,3.9,2.8,3.8c0,0,0-0.1,0-0.1c0,0,0,0,0,0l0.1,0.2L3.5,4.6z"/>
                </g>
            </svg>
        );
    }
}

Travel.defaultProps = {
    width: '28.4',
    height: '34.6',
    basicfill: '#363d42',
    accentcolor: '#f5dcd9',
    primarycolor: '#85bd7e'
};

Travel.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    basicfill: PropTypes.string,
    accentcolor: PropTypes.string,
    primarycolor: PropTypes.string
};

export default Travel;
