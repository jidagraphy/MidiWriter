import React, {Component} from 'react';

class TransposeModifier extends Component {
  render() {
    return (
      <div id="transposeModifierContainer" style={style.transposeModifierContainer}>
        <input onChange={this.props.changeTranspose} style={style.transposeInput} type="number" min={-24} max={24} value={this.props.transpose}/>
        <span style={style.label}>Transpose</span>
      </div>
    );
  }
}

const style = {
  transposeModifierContainer: {
    position: "relative",
    display: "inline-block",
    padding: 20,
    verticalAlign: "middle",
  },
  transposeInput : {
    color: "black",
    padding: "10px 20px",
    fontSize : 16,
    borderWidth: 2,
    borderColor: "black",
    background : "none",
    borderRadius: 5,
  },
  label:{
    position: "absolute",
    bottom: 0,
    width: "100%",
    textAlign: "center",
    left: 0,
    fontSize: "0.7rem",
    color: "black",
  }
}

export default (TransposeModifier);
