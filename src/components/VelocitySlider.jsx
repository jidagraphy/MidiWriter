import React, {Component} from 'react';
// import {ipcRenderer} from 'electron';

class VelocitySlider extends Component {
  
  render() {
    return (
      <div id="sliderContainer" style={style.sliderContainer}>
        <input style={style.velocitySlider} onChange={this.props.changeVelocity} type="range" min={0} max={127} value={this.props.velocity}/>
        <span style={style.label}>Velocity</span>
      </div>
    );
  }
}

const style = {
  sliderContainer: {
    position: "relative",
    display: "inline-block",
    padding: 20,
    verticalAlign: "middle",
  },
  velocitySlider: {

  },
    label:{
    position: "absolute",
    bottom: 0,
    width: "100%",
    textAlign: "center",
    left: 0,
    fontSize: "0.7rem",
    color: "black",
  },
  "velocitySlider::-webkit-slider-thumb":{
    "-webkit-appearance": "none",
  }
}

export default (VelocitySlider);
