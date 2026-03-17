import React, {Component} from 'react';

class ActivateToggle extends Component {


  handleChange = (event) => {
    this.props.toggleActivated()
  }

  render() {
    return (
			<div id="activateToggleContainer" style={style.activateToggleContainer}>
        <label style={style.switch} className="switch">
          <input  checked={this.props.activated} onChange={this.handleChange} style={style.switchInput} type="checkbox"/>
          <span style={style.slider} className="slider">
          </span>
        </label>
     </div>
     );
  }
}

const style = {
  activateToggleContainer: {
    position: "relative",
    display: 'inline-block',
    padding: 20,
    verticalAlign: "middle",
  },
  slider : {
    borderRadius: 2,
  },
}


export default (ActivateToggle);
