import React, {Component} from 'react';
import * as layoutPreset from "../process/layoutPreset";


class LayoutSelector extends Component {
  render() {
    return (
			<div id="selectorContainer" style={style.selectorContainer}>
      <select onChange={this.props.changeLayoutPreset} style={style.dropdownButton} value={this.props.currentLayoutPreset}>
        <option value="chromatic">chromatic</option>
        <option value="drumpad">drumpad</option>
      </select>
    </div>);
  }
}

const style = {
  selectorContainer: {
    position: "relative",
    display: 'inline-block',
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
    borderRadius: 5,
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
export default (LayoutSelector);
