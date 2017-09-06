import React, { Component } from 'react';
import KUTE from 'kute.js';
require('kute.js/kute-svg');

const svgStyle = {
    enableBackground:"new 0 0 400 500"
};

class LBOne extends Component {

    componentDidMount() {
        var tween = KUTE.fromTo(this.refs.LB1, {path: this.refs.LB1 }, { path: this.refs.LB1_End }, { easing: 'physicsBackInOut',
            yoyo: true,  repeat: 1, duration: 2000, morphPrecision: 5,
            morphIndex: 1998,complete:function(){
                tween.start();
            }
        }).start();
    }

    render() {
        return (
            <svg x="0px" y="0px" className="LB1_svg"
                 width="400px" height="500px" viewBox="0 0 221.6 333.1" style={svgStyle}>
                <path ref="LB1" className="LB1" d="M216.9,61.1c-27.6,6.4-56.6,19.1-77,24.9
	c26.4-13.8,52.1-25,80.5-34.4c-26.3,5.7-43.6,12.4-68,23.2c20.4-16.5,45.6-16.6,69.2-30.6c-30,11.7-47.6,13.7-65.1,22.7
	c5.7-8.5,48.6-17.8,56.5-25.3c-9.3,2.3-12.6,6.5-46.1,14.6c2.8-2.4,24.4-11.1,40.5-16.6c-14.9,2.6-25.4,6.4-34.7,10.8
	c14.9-12.9,30.1-10.4,46.7-20c-15.1,4.7-24,6.4-35.4,10.1c16.8-9,18.3-11,33.5-19.4c-12.6,4.3-20.7,11.1-32.7,16.7
	c10.6-6.8,19.8-16.5,31.8-20.8c-8.6,2.2-15.5,8.7-23.5,12.2c7.5-6.4,14.1-13.8,21.8-20c-9,5.7-17.4,12.5-25.5,19.4
	c4.4-6.7,10.2-12.3,15.1-18.5c-8.1,7.3-16.7,15-23,24c4.4-11.1,10.6-22.4,20.2-29.8c-15.7,10.2-20.4,29-31.1,43.3
	c8-13.6,10.7-30.1,21.6-42c-15.4,13-15.9,35.8-29.9,49.8c7.6-15.8,12-36,24.4-48.9c-18.5,12.8-17.8,36.4-30.1,53.3
	c6.6-17.6,5.1-39.4,18.6-54C154.8,23,159.3,53,145,73.7c3.6-23.5,6.3-54.2,26.7-70C150.1,18.6,142.8,46,139,70.5
	c2.3-22.6,5.3-47.2,21.3-64.7C142,21.6,141,46.5,135.7,68.3c2.2-19.3,0.9-40.2,10.8-57.6c-13.8,20.6-11,46.5-18.6,69.2
	c2.5-24.5,3.6-52.5,15.8-71c-18.6,9.9-17.6,74.4-22.3,82.9c0-26.1-3.4-54.3,3.7-79.8c-13.3,25.4-8.7,63-10.9,91.7
	c0.6-26.9-8-59.7-0.9-84.2c-11.9,13.2,1,91.7-4.2,98.4c0.4-32.7-11.8-68.8,0.4-97.7c-15.9,15.2-1.9,92.6-5.7,105.3
	c0.1-26.6-19.6-78.1-0.2-100.5c-24.4,12.4-3.2,94.4-4,107.1c-7.1-23.2-19.2-69.6-12.4-91.5c-11.7,14.2,4.1,83.7,6.9,100.3
	c-8.4-25.2-22.6-68.2-14.4-94.1c-14.8,14,5.3,74.5,9.8,102.1c-8.4-26.7-33.5-60-17-88.3C50.3,93,85,125.3,84.3,157.8
	c-8.9-22.3-34-60.7-20.5-85C43.1,95.7,80.2,140.4,79,165.2C70.4,140.4,39.7,105,57,78c-21.9,31.6,15.9,60.3,15.9,91.9
	C60,147.7,27.4,103.5,52,79c-24.8,22.2,1.3,67.3,12.1,90.3C49.4,144.2,27.2,110.2,47,81.6c-24.5,30.9,2.9,74.1,16.6,103.6
	c-17.1-26.8-43.9-57.3-27.5-91c-17.3,30.2,0.7,61.8,16.3,88.3c-13.1-17.2-28.2-37.8-27.5-60.5c-4,31.4,16.4,56.4,32.7,80.8
	c-16.8-22.9-44-45.7-39.6-77c-6.6,27.4,17.2,60.1,32,81.1c-16.9-17.8-33.2-38.4-36-63.6c0.3,29.1,19.2,58.4,39.2,78.4
	c-23-18.3-43-52.7-50.1-81C7.5,173.2,30.6,207,52,230.9c-17.9-17.9-35.2-35.6-43-60.3c4.4,25.1,19.1,47.2,36.8,64.9
	c-20.6-16.3-36.5-37.3-42.5-63.2c4.4,29.7,19.3,52.6,41.3,72.1C24,230.7,12.7,214.7,2.8,192c6.6,19.4,13.8,37.9,29.7,51.6
	C17.4,233.7,9.9,219.6,0,205c9.2,28.8,36.1,48.3,44.8,57.4c8.6,8.9,11.5,18.8,15.8,30.3c2.5,6.6,13.6,44.5,19,39.1
	c-7.6-17.2-22.7-42.9-19.3-62.2c2.7-15.4,19.7-11.1,28-21.7c-9.5,6.1-18.6,6-28.8,9.4c0-8.4,28.5-14.9,33.3-22.2
	c-9.3,5.3-22.2,9-32.8,10.5c1.1-13.3,26.9-12.1,34.9-19.5c-9.5,3.7-22.8,4.7-33,4.7c0-1,38.3-10.8,53.7-23.7
	c-14.7,8.6-33,14.3-49.9,16.2c11.3-10.2,27.2-10.6,40.6-16.5C92.6,211,77,208.7,64.6,217c-0.3-11.4,49.5-16.8,57.2-18.9
	c-14.8,1.2-44-1-55.1,11.1c6-18.1,43.9-13.1,57-25.6c-14.4,10.2-39.5,3.9-53.4,14.2c15.9-13.2,54-8.9,66.4-23.7
	c-14.9,7.5-45.5,9.3-60.3,15.8c11.9-8.9,43.9-20.4,51-24.6c-19.6,6.2-36.3,11.2-53.3,21.8c8.9-23.6,47-18.1,63.8-32.1
	c-14,7.5-35,6.2-49.1,13.3c19.7-13.1,48.6-18.5,71.1-25.4c-17.8,3.8-36.1,6.5-53.1,13.1c17.9-8.4,39.1-14.6,53-29.4
	c-23.5,14-41.7,19.2-67,29.4c10-15.4,74.5-32,92.9-40.8c-43.7,13.9-52.1,11.5-84.8,27c6.2-5.2,65.3-26.9,79.7-33
	c-27.2,7.3-48,16.2-71.8,23.7c18.9-10.3,78.3-30.5,86.1-36c-30.2,11-54.1,16.5-83.2,30.3c9.7-7.6,71-31.5,88.2-37.7
	c-29.2,7.5-54.2,18.3-82,29.5c29.6-15.4,55.6-27.4,87.9-36.4c-12.4-1.3-64.7,20.3-82.2,28.3c20.8-14.4,45.7-20.5,70.6-30.4
	c-18.9,4.3-49.9,14.8-69.6,25.1c26.3-14.6,53.2-26.3,82.4-33.2c-29.6,3.9-48.5,11.9-75.5,24.5C147.1,83.7,194.4,71.3,216.9,61.1z"/>
                <path ref="LB1_End" className="LB1_End" d="M216.9,61.1c-27.6,6.4-56.6,19.1-77,24.9
	c26.4-13.8,52.1-25,80.5-34.4c-26.3,5.7-43.6,12.4-68,23.2c20.4-16.5,45.6-16.6,69.2-30.6c-30,11.7-47.6,13.7-65.1,22.7
	c5.7-8.5,48.6-17.8,56.5-25.3c-9.3,2.3-12.6,6.5-46.1,14.6c2.8-2.4,24.4-11.1,40.5-16.6c-14.9,2.6-25.4,6.4-34.7,10.8
	c14.9-12.9,30.1-10.4,46.7-20c-15.1,4.7-24,6.4-35.4,10.1c16.8-9,18.3-11,33.5-19.4c-12.6,4.3-20.7,11.1-32.7,16.7
	c10.6-6.8,19.8-16.5,31.8-20.8c-8.6,2.2-15.5,8.7-23.5,12.2c7.5-6.4,14.1-13.8,21.8-20c-9,5.7-17.4,12.5-25.5,19.4
	c4.4-6.7,10.2-12.3,15.1-18.5c-8.1,7.3-16.7,15-23,24c4.4-11.1,10.6-22.4,20.2-29.8c-15.7,10.2-20.4,29-31.1,43.3
	c8-13.6,10.7-30.1,21.6-42c-15.4,13-15.9,35.8-29.9,49.8c7.6-15.8,12-36,24.4-48.9c-18.5,12.8-17.8,36.4-30.1,53.3
	c6.6-17.6,5.1-39.4,18.6-54C154.8,23,159.3,53,145,73.7c3.6-23.5,6.3-54.2,26.7-70C150.1,18.6,142.8,46,139,70.5
	c2.3-22.6,5.3-47.2,21.3-64.7C142,21.6,141,46.5,135.7,68.3c2.2-19.3,0.9-40.2,10.8-57.6c-13.8,20.6-11,46.5-18.6,69.2
	c2.5-24.5,3.6-52.5,15.8-71c-18.6,9.9-17.6,74.4-22.3,82.9c0-26.1-3.4-54.3,3.7-79.8c-13.3,25.4-8.7,63-10.9,91.7
	c0.6-26.9-8-59.7-0.9-84.2c-11.9,13.2,1,91.7-4.2,98.4c0.4-32.7-11.8-68.8,0.4-97.7c-15.9,15.2-1.9,92.6-5.7,105.3
	c0.1-26.6-24.2-76.2-4.8-98.6c-24.4,12.4,1.5,92.5,0.6,105.2C92.5,108.9,77.2,63.2,84,41.3c-11.7,14.2,7.3,83,10.1,99.6
	c-8.4-25.2-25.6-66.8-17.4-92.7c-14.8,14,8.2,73.1,12.8,100.7c-8.4-26.7-36.4-60.1-19.9-88.4C47.4,92.9,85,125.3,84.3,157.8
	c-8.9-22.3-34-60.7-20.5-85C43.1,95.7,80.2,140.4,79,165.2c-8.6-24.8-37.8-59.8-20.5-86.7c-21.9,31.6,14.4,59.8,14.4,91.4
	c-12.9-22.3-41.6-67-17-91.4c-24.8,22.2-2.6,67.8,8.2,90.8c-14.7-25.2-33.7-59.8-13.9-88.4c-24.5,30.9-0.3,74.8,13.4,104.3
	c-17.1-26.8-39.9-56.8-23.5-90.5c-17.3,30.2-3.3,61.3,12.3,87.8c-13.1-17.2-24.3-38.2-23.6-60.9c-4,31.4,12.5,56.8,28.8,81.3
	c-16.8-22.9-38.8-47.1-34.5-78.4C16.6,151.9,35.2,186,50,206.9c-16.9-17.8-33.2-38.4-36-63.6c0.3,29.1,19.2,58.4,39.2,78.4
	c-23-18.3-43-52.7-50.1-81C7.5,173.2,30.6,207,52,230.9c-17.9-17.9-35.2-35.6-43-60.3c4.4,25.1,19.1,47.2,36.8,64.9
	c-20.6-16.3-36.5-37.3-42.5-63.2c4.4,29.7,19.3,52.6,41.3,72.1C24,230.7,12.7,214.7,2.8,192c6.6,19.4,13.8,37.9,29.7,51.6
	C17.4,233.7,9.9,219.6,0,205c9.2,28.8,36.1,48.3,44.8,57.4c8.6,8.9,11.5,18.8,15.8,30.3c2.5,6.6,13.6,44.5,19,39.1
	c-7.6-17.2-22.7-42.9-19.3-62.2c2.7-15.4,19.7-11.1,28-21.7c-9.5,6.1-18.6,6-28.8,9.4c0-8.4,28.5-14.9,33.3-22.2
	c-9.3,5.3-22.2,9-32.8,10.5c1.1-13.3,26.9-12.1,34.9-19.5c-9.5,3.7-22.8,4.7-33,4.7c0-1,38.3-10.8,53.7-23.7
	c-14.7,8.6-33,14.3-49.9,16.2c11.3-10.2,27.2-10.6,40.6-16.5C92.6,211,77,208.7,64.6,217c-0.3-11.4,49.5-16.8,57.2-18.9
	c-14.8,1.2-44-1-55.1,11.1c6-18.1,43.9-13.1,57-25.6c-14.4,10.2-39.5,3.9-53.4,14.2c15.9-13.2,54-8.9,66.4-23.7
	c-14.9,7.5-45.5,9.3-60.3,15.8c11.9-8.9,43.9-20.4,51-24.6c-19.6,6.2-36.3,11.2-53.3,21.8c8.9-23.6,47-18.1,63.8-32.1
	c-14,7.5-35,6.2-49.1,13.3c19.7-13.1,48.6-18.5,71.1-25.4c-17.8,3.8-36.1,6.5-53.1,13.1c17.9-8.4,39.1-14.6,53-29.4
	c-23.5,14-41.7,19.2-67,29.4c10-15.4,74.5-32,92.9-40.8c-43.7,13.9-52.1,11.5-84.8,27c6.2-5.2,65.3-26.9,79.7-33
	c-27.2,7.3-48,16.2-71.8,23.7c18.9-10.3,78.3-30.5,86.1-36c-30.2,11-54.1,16.5-83.2,30.3c9.7-7.6,71-31.5,88.2-37.7
	c-29.2,7.5-54.2,18.3-82,29.5c29.6-15.4,55.6-27.4,87.9-36.4c-12.4-1.3-64.7,20.3-82.2,28.3c20.8-14.4,45.7-20.5,70.6-30.4
	c-18.9,4.3-49.9,14.8-69.6,25.1c26.3-14.6,53.2-26.3,82.4-33.2c-29.6,3.9-48.5,11.9-75.5,24.5C147.1,83.7,194.4,71.3,216.9,61.1z"/>
                <path ref="LB1_root" className="LB1_root" d="M81.8,332.4C56,287.9,48,253.6,69.6,191.9
	c17.2-45.8,62.4-102.6,111-153c-34.5,31.4-41.9,42.7-53.8,56.6c-24.9,32-49.3,66.2-62.5,102.8c-10.7,34.1-10.9,56.1-10.3,65.6
	C55.3,284.9,75.8,340.2,81.8,332.4z"/>
            </svg>
        )
    }
}

export default LBOne;