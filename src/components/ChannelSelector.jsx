import React, {Component} from 'react';

class ChannelSelector extends Component {
  render() {
    return (
      <div id="channelContainer" style={style.channelContainer}>
        <select onChange={this.props.changeChannel} style={style.dropdownButton} value={this.props.channel}>
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
            <option value="4">5</option>
            <option value="5">6</option>
            <option value="6">7</option>
            <option value="7">8</option>
            <option value="8">9</option>
            <option value="9">10</option>
            <option value="10">11</option>
            <option value="11">12</option>
            <option value="12">13</option>
            <option value="13">14</option>
            <option value="14">15</option>
            <option value="15">16</option>
          </select>
          <span style={style.label}>Channel</span>
      </div>
    );
  }
}

const style = {
  channelContainer: {
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
  label:{
    position: "absolute",
    bottom: 0,
    width: "100%",
    textAlign: "center",
    left: 0,
    fontSize: "0.7rem",
    color: "black",
  },
}


export default (ChannelSelector);
