import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as layoutPreset from "../process/layoutPreset";


class SustainModifierSelector extends Component {

  componentDidMount() {}


	handleSelectorChange = (event) => {
		this.props.changeLayoutPreset(event.target.value);
	}
  render() {
    return (
			<div id="selectorContainer" style={style.selectorContainer}>
      <select onChange={this.handleSelectorChange} style={style.dropdownButton} value={this.props.currentLayoutPreset}>
        <option value="chromatic">chromatic</option>
        <option value="drumpad">drumpad</option>
      </select>
    </div>);
  }
}

const style = {
  selectorContainer: {
    position: "relative",
    display: "inline-block",
    padding: 20,
    verticalAlign: "middle",
  },
  dropdownButton: {
    color: "black",
    padding: "10px 20px",
    fontSize: 16,
    borderWidth: "2px",
		borderColor: "black",
		background: "none",
  },
  dropdownContent: {
    position: "absolute",
    backgroundColor: "#f1f1f1",
    minWidth: 160,
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: 1,
    display: "none"
  },
  dropdownItem: {
    color: "black",
    padding: "12px 16px",
    textDecoration: "none",
    display: "block"
  },
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(SustainModifierSelector);
