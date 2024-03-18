import React, { Component } from 'react';
import { midiToNote } from "../utils/midiToNote"
import * as layoutPreset from "../process/layoutPreset";



class KeyboardLayout extends Component {
  render() {
    return (
      <div id="keyboard" style={style.keyboardContainer}>
      <div style={style.key}>
      <div style={style.keyLabel}>~</div>
      <input readOnly type="text" style={this.props.keyboardState[41].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("41")} onMouseUp={()=>this.props.keyup("41")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][41], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>1</div>
      <input readOnly type="text" style={this.props.keyboardState[2].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("2")} onMouseUp={()=>this.props.keyup("2")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][2], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>2</div>
      <input readOnly type="text" style={this.props.keyboardState[3].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("3")} onMouseUp={()=>this.props.keyup("3")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][3], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>3</div>
      <input readOnly type="text" style={this.props.keyboardState[4].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("4")} onMouseUp={()=>this.props.keyup("4")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][4], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>4</div>
      <input readOnly type="text" style={this.props.keyboardState[5].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("5")} onMouseUp={()=>this.props.keyup("5")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][5], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>5</div>
      <input readOnly type="text" style={this.props.keyboardState[6].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("6")} onMouseUp={()=>this.props.keyup("6")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][6], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>6</div>
      <input readOnly type="text" style={this.props.keyboardState[7].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("7")} onMouseUp={()=>this.props.keyup("7")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][7], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>7</div>
      <input readOnly type="text" style={this.props.keyboardState[8].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("8")} onMouseUp={()=>this.props.keyup("8")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][8], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>8</div>
      <input readOnly type="text" style={this.props.keyboardState[9].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("9")} onMouseUp={()=>this.props.keyup("9")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][9], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>9</div>
      <input readOnly type="text" style={this.props.keyboardState[10].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("10")} onMouseUp={()=>this.props.keyup("10")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][10], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>0</div>
      <input readOnly type="text" style={this.props.keyboardState[11].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("11")} onMouseUp={()=>this.props.keyup("11")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][11], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>-</div>
      <input readOnly type="text" style={this.props.keyboardState[12].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("12")} onMouseUp={()=>this.props.keyup("12")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][12], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>+</div>
      <input readOnly type="text" style={this.props.keyboardState[13].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("13")} onMouseUp={()=>this.props.keyup("13")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][13], this.props.transpose)}/>
      </div>
      <div style={{...style.key, ...style.delete, ...style.keyDisabled}}>
      <div style={style.keyLabel}>Delete</div>
      </div>
      <div style={{...style.key, ...style.tab, ...style.keyDisabled}}>
      <div style={style.keyLabel}>Tab</div>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>Q</div>
      <input readOnly type="text" style={this.props.keyboardState[16].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("16")} onMouseUp={()=>this.props.keyup("16")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][16], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>w</div>
      <input readOnly type="text" style={this.props.keyboardState[17].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("17")} onMouseUp={()=>this.props.keyup("17")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][17], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>E</div>
      <input readOnly type="text" style={this.props.keyboardState[18].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("18")} onMouseUp={()=>this.props.keyup("18")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][18], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>R</div>
      <input readOnly type="text" style={this.props.keyboardState[19].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("19")} onMouseUp={()=>this.props.keyup("19")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][19], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>T</div>
      <input readOnly type="text" style={this.props.keyboardState[20].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("20")} onMouseUp={()=>this.props.keyup("20")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][20], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>Y</div>
      <input readOnly type="text" style={this.props.keyboardState[21].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("21")} onMouseUp={()=>this.props.keyup("21")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][21], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>U</div>
      <input readOnly type="text" style={this.props.keyboardState[22].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("22")} onMouseUp={()=>this.props.keyup("22")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][22], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>I</div>
      <input readOnly type="text" style={this.props.keyboardState[23].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("23")} onMouseUp={()=>this.props.keyup("23")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][23], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>O</div>
      <input readOnly type="text" style={this.props.keyboardState[24].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("24")} onMouseUp={()=>this.props.keyup("24")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][24], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>P</div>
      <input readOnly type="text" style={this.props.keyboardState[25].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("25")} onMouseUp={()=>this.props.keyup("25")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][25], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>"["</div>
      <input readOnly type="text" style={this.props.keyboardState[26].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("26")} onMouseUp={()=>this.props.keyup("26")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][26], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>"]"</div>
      <input readOnly type="text" style={this.props.keyboardState[27].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("27")} onMouseUp={()=>this.props.keyup("27")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][27], this.props.transpose)}/>
      </div>
      <div style={{...style.key, ...style.backslash}}>
      <div style={style.keyLabel}>\</div>
      <input readOnly type="text" style={this.props.keyboardState[43].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("43")} onMouseUp={()=>this.props.keyup("43")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][43], this.props.transpose)}/>
      </div>
      <div style={{...style.key, ...style.capslock, ...style.keyDisabled}}>
      <div style={style.keyLabel}>CapsLock</div>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>A</div>
      <input readOnly type="text" style={this.props.keyboardState[30].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("30")} onMouseUp={()=>this.props.keyup("30")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][30], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>S</div>
      <input readOnly type="text" style={this.props.keyboardState[31].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("31")} onMouseUp={()=>this.props.keyup("31")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][31], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>D</div>
      <input readOnly type="text" style={this.props.keyboardState[32].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("32")} onMouseUp={()=>this.props.keyup("32")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][32], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>F</div>
      <input readOnly type="text" style={this.props.keyboardState[33].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("33")} onMouseUp={()=>this.props.keyup("33")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][33], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>G</div>
      <input readOnly type="text" style={this.props.keyboardState[34].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("34")} onMouseUp={()=>this.props.keyup("34")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][34], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>H</div>
      <input readOnly type="text" style={this.props.keyboardState[35].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("35")} onMouseUp={()=>this.props.keyup("35")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][35], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>J</div>
      <input readOnly type="text" style={this.props.keyboardState[36].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("36")} onMouseUp={()=>this.props.keyup("36")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][36], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>K</div>
      <input readOnly type="text" style={this.props.keyboardState[37].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("37")} onMouseUp={()=>this.props.keyup("37")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][37], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>L</div>
      <input readOnly type="text" style={this.props.keyboardState[38].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("38")} onMouseUp={()=>this.props.keyup("38")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][38], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>;</div>
      <input readOnly type="text" style={this.props.keyboardState[39].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("39")} onMouseUp={()=>this.props.keyup("39")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][39], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>'</div>
      <input readOnly type="text" style={this.props.keyboardState[40].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("40")} onMouseUp={()=>this.props.keyup("40")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][40], this.props.transpose)}/>
      </div>
      <div style={{...style.key, ...style.return, ...style.keyDisabled}}>
      <div style={style.keyLabel}>Return</div>
      </div>
      <div style={{...style.key, ...style.leftshift, ...style.keyDisabled}}>
      <div style={style.keyLabel}>Shift</div>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>Z</div>
      <input readOnly type="text" style={this.props.keyboardState[44].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("44")} onMouseUp={()=>this.props.keyup("44")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][44], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>X</div>
      <input readOnly type="text" style={this.props.keyboardState[45].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("45")} onMouseUp={()=>this.props.keyup("45")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][45], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>C</div>
      <input readOnly type="text" style={this.props.keyboardState[46].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("46")} onMouseUp={()=>this.props.keyup("46")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][46], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>V</div>
      <input readOnly type="text" style={this.props.keyboardState[47].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("47")} onMouseUp={()=>this.props.keyup("47")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][47], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>B</div>
      <input readOnly type="text" style={this.props.keyboardState[48].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("48")} onMouseUp={()=>this.props.keyup("48")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][48], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>N</div>
      <input readOnly type="text" style={this.props.keyboardState[49].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("49")} onMouseUp={()=>this.props.keyup("49")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][49], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>M</div>
      <input readOnly type="text" style={this.props.keyboardState[50].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("50")} onMouseUp={()=>this.props.keyup("50")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][50], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>,</div>
      <input readOnly type="text" style={this.props.keyboardState[51].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("51")} onMouseUp={()=>this.props.keyup("51")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][51], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>.</div>
      <input readOnly type="text" style={this.props.keyboardState[52].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("52")} onMouseUp={()=>this.props.keyup("52")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][52], this.props.transpose)}/>
      </div>
      <div style={style.key}>
      <div style={style.keyLabel}>/</div>
      <input readOnly type="text" style={this.props.keyboardState[53].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("53")} onMouseUp={()=>this.props.keyup("53")} value={midiToNote(layoutPreset[this.props.currentLayoutPreset][53], this.props.transpose)}/>
      </div>
      <div style={{...style.key, ...style.rightshift, ...style.keyDisabled}}>
      <div style={style.keyLabel}>Shift</div>
      </div>
      <div style={{...style.key, ...style.keyDisabled}}>
      <div style={style.keyLabel}>Fn</div>
      </div>
      <div style={{...style.key, ...style.leftctrl, ...style.keyDisabled}}>
      <div style={style.keyLabel}>Ctrl</div>
      </div>
      <div style={{...style.key, ...style.keyDisabled}}>
      <div style={style.keyLabel}>Alt</div>
      </div>
      <div style={{...style.key, ...style.command, ...style.keyDisabled}}>
      <div style={style.keyLabel}>Cmd</div>
      </div>
      <div style={{...style.key, ...style.space, ...style.keyDisabled}}>
      <div style={style.keyLabel}>Space</div>
      <input readOnly type="text" style={this.props.keyboardState[57].status ? {...style.keyValueLabel, ...style.keyOn} : style.keyValueLabel} onMouseDown={()=>this.props.keypress("57")} onMouseUp={()=>this.props.keyup("57")} value={"SUSTAIN"}/>
      </div>
      <div style={{...style.key, ...style.command, ...style.keyDisabled}}>
      <div style={style.keyLabel}>Cmd</div>
      </div>
      <div style={{...style.key, ...style.keyDisabled}}>
      <div style={style.keyLabel}>Alt</div>
      </div>
      <div style={{...style.key, ...style.keyDisabled}}>
      <div style={style.keyLabel}>Ctrl</div>
      </div>
      </div>
    );
  }
}


const style = {
  keyboardContainer: {
    maxWidth: 1085,
    padding: 20,
    // position: "relative",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    borderRadius: 10,
    display: "grid",
    gridTemplateColumns: "repeat(30, 20px)",
    gridTemplateRows: "repeat(5, 40px)",
    gridGap: 1,
    fontFamily: "Helvetica Neue",
    color: "black",
  },
  key: {
    border: "2px solid black",
    borderRadius: 5,
    gridColumn: "span 2",
    paddingTop: 0,
    position: "relative",
  },
  keyLabel: {
    right: 5,
    bottom: 5,
    position: "absolute",
    fontSize: "0.5rem",
  },
  keyValueLabel: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height: "100%",
    width: "100%",
    fontSize: "0.8rem",
    color: "white",
    padding: 0,
    margin: 0,
    border: 0,
    background: "none",
    textAlign: "center",
  },
  keyOn: {
    background: "grey",
  },
  keyDisabled: {
    background: "rgba(0,0,0,0.3)",
  },
  delete: {
    gridColumn: "span 4",
  },
  tab: {
    gridColumn: "span 3",
  },
  backslash: {
    gridColumn: "span 3",
  },
  capslock: {
    gridColumn: "span 4",
  },
  return: {
    gridColumn: "span 4",
  },
  leftshift: {
    gridColumn: "span 5",
  },
  rightshift: {
    gridColumn: "span 5",
  },
  leftctrl: {
    gridColumn: "span 2",
  },
  command: {
    gridColumn: "span 3",
  },
  space: {
    gridColumn: "span 14",
  }
}


const mapStateToProps = (state) => ({
  color: state.color,
  number: state.number
});

export default (KeyboardLayout);
