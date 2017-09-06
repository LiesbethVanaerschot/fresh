import React, { Component } from 'react';
import KUTE from 'kute.js';
require('kute.js/kute-svg');

const svgStyle = {
    enableBackground:"new 0 0 350 191.9"
};

class RBTwo extends Component {

    componentDidMount() {
        var tween = KUTE.fromTo(this.refs.RB2, {path: this.refs.RB2 }, { path: this.refs.RB2_End }, { easing: 'physicsBackInOut',
            yoyo: true,  repeat: 1, duration: 2000, morphPrecision: 5,
            morphIndex: 1998,complete:function(){
                tween.start();
            }
        }).start();
    }

    render() {
        return (
            <svg version="1.1" className="RB2_svg" id="Layer_1" x="0px" y="0px" style={svgStyle} width="350px" height="191.9px" viewBox="0 0 350 191.9">
                <path ref="RB2" className="RB2" d="M40.4,68.8c23.4,17.9,52.7,32.7,70.8,45.3
	C82.8,102,56.8,88.8,30.5,72.2c22,17.3,38.7,26.8,63.5,39.2C67.3,106,50.5,85.9,23.7,76.2c29.2,16.4,42.4,29.2,61.2,37.2
	c-10.6,1.1-46.4-27.2-57.6-28.6c8,5.9,13.6,5.8,42.2,27.4c-3.8-0.7-25.1-12.3-40.1-21.4c11.9,10.2,21.9,16.2,31.6,20.7
	c-20.2-3.5-28.2-17.2-47-24.2c13.7,9,21,15.1,31.5,21.7c-18.3-7.6-20.9-7.4-37.7-14c11.8,7.2,22.6,9.3,35,15.2
	c-12.4-4-26.3-5-37.7-11.7c7.4,5.5,17.2,6.7,25.3,10.7c-10.1-1.8-20.4-2.2-30.4-4.3c10.5,3.4,21.5,5.7,32.4,7.6
	c-8.2,0.9-16.6-0.1-24.8,0.1c11.2,1.7,23,3.4,34.4,2.6c-11.8,3.8-24.9,6.3-37.2,3.5c18.6,5.9,36.7-2.8,55.3-3.7
	c-16.2,2.5-31.2,11.3-48,10.4c20.6,3.8,39.2-10.9,59.7-8.9c-17.6,4.3-36.8,14.2-55.3,12.7c22.5,6.3,41-9.8,62.6-11.1
	c-18.5,6.4-35,22-55.6,20.8c27.3,5,48.4-18.5,74.5-20.7c-21.2,12.7-47.7,30.8-73.8,24.8c26.2,7.5,53.1-4.7,75.2-17.9
	c-19.7,13.1-41.3,26.9-66,25.7c24.7,4.3,45.4-11.4,66.4-21.6c-16.9,11-32.8,25.8-53.3,29.4c25.6-2.5,44.6-21.9,67.8-30.8
	C93,141.9,69.8,159.5,46.9,162c20.3,8.4,71.3-35,81.2-36.9c-20.9,17.2-41.3,38.6-66.4,49.8c29.2-6.1,56.3-34.7,80.7-51.9
	c-22,17.3-42.5,45.9-66.9,56.4c18.4,0.8,72.9-61.4,81.7-61.7c-26.5,21.3-47.4,55-78.6,64.2c22.8,2.7,75.5-59.7,88.2-65
	c-21.4,17.5-49.7,67.3-80.5,66.6c26.1,11.3,77.8-59.8,88.5-67.6c-14,21-43.1,61.4-65.2,70.4c19.1,0,64.4-58.6,75.9-71.8
	c-14.6,23.4-39.8,63.2-65.9,73.7c21,2.6,56.2-53.4,75.4-75.3c-15.8,24.3-26,66.5-59.6,72c40.7-3.6,43.6-52.7,70.1-73.7
	c-12,21.9-26.2,67.4-54.6,72.6c32,1.4,43.3-57.8,64.1-73.2c-14.2,23.3-22.3,71.4-55.4,75.3c39.8-3.3,37.9-52.6,63.2-73.5
	c-9.3,25.1-23.2,80.4-59.1,76.8c34.2,5.2,53.1-45.5,64.4-69.4c-10.5,28.4-23,68.7-59,71.7c41-0.8,57.5-51.3,72.1-81.8
	c-10.2,31.4-16.9,73.1-54.8,82.2c35.7-6.1,49.1-41.4,60-71.4c-5.1,21.8-11.7,47.6-30.3,62c27.9-17.6,34.4-50.4,43.2-79.6
	c-7.3,28.6-7.6,65.5-35.6,82.6c26.3-12.9,36.9-53.6,43.9-79.3c-3,25.3-8.8,52-27.2,70.9c23.2-19.5,34.1-54,37-83.2
	c0.5,30.5-13.8,69.3-31.8,93.7c23.1-25,35-65.8,40-98.8c-2.5,26.1-5.3,51.7-19.9,74.3c17.2-20.1,25.2-46.4,27.7-72.4
	c0.5,27.3-5.8,53.9-22.6,75.8c20.9-23.2,29.4-50.2,30.5-80.8c2.6,25.7-2.7,45.3-14.4,68.2c11.2-18.1,21.2-36.1,21.8-57.9
	c2,18.7-4.3,34-9.5,51.6c17-26.5,14.9-60.8,16.4-73.9C317,61,323,52.2,329.4,41.1C333,34.7,356.1,0.8,348.2,0
	c-8.7,17.4-19.4,46.5-37.2,56.6c-14.1,8-21.9-8.5-35.9-8.1c11.1,3.6,17.1,11,26.6,16.9c-6.7,5.6-30.8-13-39.8-12
	c10.4,4,21.8,11.9,30.1,19.4c-11.4,7.9-27.4-13.5-38.7-15.1c9.2,5.2,18.8,15.1,25.6,23.4c-0.8,0.7-33.9-23.6-54.5-27.4
	c16.6,6.1,33.3,17,46,29.3c-15.7-2.4-26.5-14.8-40.1-21.7c12.4,8.2,20.9,22.2,35.7,26.7c-9,7.8-46.2-28.6-53-33.4
	c10.7,11.1,28.3,35.9,45.3,36.8c-18.5,7.1-39.5-26.6-58.2-28.8c17.7,4.8,29.2,29.1,46.6,33.4C225.7,92,204,58.6,184,58.4
	c15.8,7,37.5,30.3,52.6,37.9c-15-3.7-45.4-21.7-53.4-24.7c17.9,11.6,33,21.7,52.7,28.3c-24.8,8.5-45.5-25.7-67.9-29.9
	c15.3,6.2,28.1,24,43.1,30.6c-23.6-7.1-47-26.8-67.4-40.2c14.8,11.8,29,24.7,45.6,33.9c-18.5-8.8-37.5-21.7-58.6-23.1
	c26.8,9.6,42.9,20.7,67.9,34.3c-19,2.1-74.9-38.6-94.1-47.5c40,25.9,43.6,34.1,77.7,50.1c-8.3-1.5-64.7-34.6-79.1-42.2
	c23.8,17,44.7,27.8,66.5,42c-20.8-8.3-76.2-42.6-85.8-45.3c28.8,16.9,49,32.5,79.3,46.7c-12.4-2.8-72.2-36.1-88.5-45.8
	C99.7,82,124.8,95,152.3,109.9C120.4,96.3,93.5,83.4,65,63.5c7.1,10.8,59.1,38.4,77,47.3c-25.3-7.1-46.6-23.1-71-36.6
	c15.9,12.3,44.9,30.2,66.1,39.2C108,101.9,80.8,88.1,56,69.2c22.7,21.2,41.6,31,69.5,44.3C104.6,109.8,63.4,80,40.4,68.8z"/>
                <path ref="RB2_End" className="RB2_End" d="M40.4,68.8c23.4,17.9,52.7,32.7,70.8,45.3
	C82.8,102,56.8,88.8,30.5,72.2c22,17.3,38.7,26.8,63.5,39.2C67.3,106,50.5,85.9,23.7,76.2c29.2,16.4,42.4,29.2,61.2,37.2
	c-10.6,1.1-46.4-27.2-57.6-28.6c8,5.9,13.6,5.8,42.2,27.4c-3.8-0.7-25.1-12.3-40.1-21.4c11.9,10.2,21.9,16.2,31.6,20.7
	c-20.2-3.5-28.2-17.2-47-24.2c13.7,9,21,15.1,31.5,21.7c-18.3-7.6-20.9-7.4-37.7-14c11.8,7.2,22.6,9.3,35,15.2
	c-12.4-4-26.3-5-37.7-11.7c7.4,5.5,17.2,6.7,25.3,10.7c-10.1-1.8-20.4-2.2-30.4-4.3c10.5,3.4,21.5,5.7,32.4,7.6
	c-8.2,0.9-16.6-0.1-24.8,0.1c11.2,1.7,23,3.4,34.4,2.6c-11.8,3.8-24.9,6.3-37.2,3.5c18.6,5.9,36.7-2.8,55.3-3.7
	c-16.2,2.5-31.2,11.3-48,10.4c20.6,3.8,39.2-10.9,59.7-8.9c-17.6,4.3-36.8,14.2-55.3,12.7c22.5,6.3,41-9.8,62.6-11.1
	c-18.5,6.4-35,22-55.6,20.8c27.3,5,48.4-18.5,74.5-20.7c-21.2,12.7-47.7,30.8-73.8,24.8c26.2,7.5,53.1-4.7,75.2-17.9
	c-19.7,13.1-41.3,26.9-66,25.7c24.7,4.3,45.4-11.4,66.4-21.6c-16.9,11-32.8,25.8-53.3,29.4c25.6-2.5,44.6-21.9,67.8-30.8
	C93,141.9,69.8,159.5,46.9,162c20.3,8.4,71.3-35,81.2-36.9c-20.9,17.2-41.3,38.6-66.4,49.8c29.2-6.1,56.3-34.7,80.7-51.9
	c-22,17.3-42.5,45.9-66.9,56.4c18.4,0.8,72.9-61.4,81.7-61.7c-26.5,21.3-47.4,55-78.6,64.2c22.8,2.7,75.5-59.7,88.2-65
	c-21.4,17.5-49.7,67.3-80.5,66.6c26.1,11.3,77.8-59.8,88.5-67.6c-14,21-43.1,61.4-65.2,70.4c19.1,0,64.4-58.6,75.9-71.8
	c-14.6,23.4-39.8,63.2-65.9,73.7c21,2.6,56.2-53.4,75.4-75.3c-15.8,24.3-26,66.5-59.6,72c40.7-3.6,43.6-52.7,70.1-73.7
	c-12,21.9-23.1,68.6-51.5,73.8c32,1.4,40.2-59,61-74.4c-14.2,23.3-19.3,72.5-52.4,76.4c39.8-3.3,34.9-53.8,60.2-74.7
	c-9.3,25.1-21.4,80.7-57.3,77c34.2,5.2,51.3-45.7,62.6-69.6c-10.5,28.4-19,69.1-54.9,72.1c41-0.8,53.5-51.7,68-82.2
	c-10.2,31.4-13.6,73.1-51.4,82.2c35.7-6.1,45.7-41.4,56.7-71.4c-5.1,21.8-11.7,47.6-30.3,62c27.9-17.6,34.4-50.4,43.2-79.6
	c-7.3,28.6-11.2,65.2-39.2,82.4c26.3-12.9,40.5-53.3,47.5-79c-3,25.3-8.8,52-27.2,70.9c23.2-19.5,34.1-54,37-83.2
	c0.5,30.5-18.6,69-36.7,93.4c23.1-25,39.8-65.5,44.8-98.5c-2.5,26.1-5.3,51.7-19.9,74.3c17.2-20.1,25.2-46.4,27.7-72.4
	c0.5,27.3-8.3,53.4-25.1,75.4c20.9-23.2,32-49.8,33.1-80.4c2.6,25.7-2.7,45.3-14.4,68.2c11.2-18.1,21.2-36.1,21.8-57.9
	c2,18.7-4.3,34-9.5,51.6c17-26.5,14.9-60.8,16.4-73.9C317,61,323,52.2,329.4,41.1C333,34.7,356.1,0.8,348.2,0
	c-8.7,17.4-19.4,46.5-37.2,56.6c-14.1,8-21.9-8.5-35.9-8.1c11.1,3.6,17.1,11,26.6,16.9c-6.7,5.6-30.8-13-39.8-12
	c10.4,4,21.8,11.9,30.1,19.4c-11.4,7.9-27.4-13.5-38.7-15.1c9.2,5.2,18.8,15.1,25.6,23.4c-0.8,0.7-33.9-23.6-54.5-27.4
	c16.6,6.1,33.3,17,46,29.3c-15.7-2.4-26.5-14.8-40.1-21.7c12.4,8.2,20.9,22.2,35.7,26.7c-9,7.8-46.2-28.6-53-33.4
	c10.7,11.1,28.3,35.9,45.3,36.8c-18.5,7.1-40.8-28.5-59.5-30.8c17.7,4.8,30.5,31.1,47.9,35.4c-21.1-4.1-45.4-35-65.3-35.1
	c15.8,7,40,27.9,55.1,35.5c-15-3.7-45.4-21.7-53.4-24.7c17.9,11.6,33,21.7,52.7,28.3c-24.8,8.5-44.6-27.5-67-31.7
	C184.1,74.5,196,94,211,100.6c-23.6-7.1-43.3-28.6-63.6-42.1c14.8,11.8,25.3,26.5,41.8,35.8c-18.5-8.8-35.6-24.4-56.7-25.8
	c26.8,9.6,41,23.4,65.9,37c-19,2.1-73.9-40.1-93.1-49c40,25.9,42.6,35.6,76.7,51.6c-8.3-1.5-64.7-34.6-79.1-42.2
	c23.8,17,44.7,27.8,66.5,42c-20.8-8.3-76.2-42.6-85.8-45.3c28.8,16.9,49,32.5,79.3,46.7c-12.4-2.8-72.2-36.1-88.5-45.8
	C99.7,82,124.8,95,152.3,109.9C120.4,96.3,93.5,83.4,65,63.5c7.1,10.8,59.1,38.4,77,47.3c-25.3-7.1-46.6-23.1-71-36.6
	c15.9,12.3,44.9,30.2,66.1,39.2C108,101.9,80.8,88.1,56,69.2c22.7,21.2,41.6,31,69.5,44.3C104.6,109.8,63.4,80,40.4,68.8z"/>
                <path ref="RB2_root" className="RB2_root" d="M348,0.3c-19.3,49.8-41.8,78.6-105.8,101.3
	c-48.2,15.9-123.7,16.3-196.2,9.7c47.9,7.5,61.8,6.2,80.8,6.7c42.1-0.7,85.7-3.2,124-16.3c34.6-13.5,52.5-27.6,59.8-34.3
	C326.8,52.6,358.2,0,348,0.3z"/>
            </svg>
        )
    }
}

export default RBTwo;