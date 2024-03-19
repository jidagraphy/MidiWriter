import React, { Component } from 'react';
// import { keypress, keyup, changeLayoutPreset, changeVelocity, changeChannel, changeTranspose, activateMidi, deactivateMidi } from '../actions/keyboard';
import { ActivateToggle, KeyboardLayout, LayoutSelector, VelocitySlider, ChannelSelector, TransposeModifier } from '../components'
import * as layoutPreset from "../process/layoutPreset";



class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activated: true,
      key: "",
      velocity: 100,
      channel: 0,
      transpose: 0,
      currentLayoutPreset: "chromatic",
      sustain: false,
      sustainModifier: "space",
      keyboardState: {
        "41": {
          key: "`",
          status: false,
        },
        "2": {
          key: "1",
          status: false,
        },
        "3": {
          key: "2",
          status: false,
        },
        "4": {
          key: "3",
          status: false,
        },
        "5": {
          key: "4",
          status: false,
        },
        "6": {
          key: "5",
          status: false,
        },
        "7": {
          key: "6",
          status: false,
        },// 6
        "8": {
          key: "7",
          status: false,
        },// 7
        "9": {
          key: "8",
          status: false,
        },// 8
        "10": {
          key: "9",
          status: false,
        },// 9
        "11": {
          key: "0",
          status: false,
        },// 0
        "12": {
          key: "-",
          status: false,
        },// -
        "13": {
          key: "=",
          status: false,
        },// =


        "16": {
          key: "q",
          status: false,
        },// q
        "17": {
          key: "w",
          status: false,
        },// w
        "18": {
          key: "e",
          status: false,
        },// e
        "19": {
          key: "r",
          status: false,
        },// r
        "20": {
          key: "t",
          status: false,
        },// t
        "21": {
          key: "y",
          status: false,
        },// y
        "22": {
          key: "u",
          status: false,
        },// u
        "23": {
          key: "i",
          status: false,
        },// i
        "24": {
          key: "o",
          status: false,
        },// o
        "25": {
          key: "p",
          status: false,
        },// p
        "26": {
          key: "[",
          status: false,
        },// []
        "27": {
          key: "]",
          status: false,
        },// ]
        "43": {
          key: "\\",
          status: false,
        },// \


        "30": {
          key: "a",
          status: false,
        },// a
        "31": {
          key: "s",
          status: false,
        },// s
        "32": {
          key: "d",
          status: false,
        },// d
        "33": {
          key: "f",
          status: false,
        },// f
        "34": {
          key: "g",
          status: false,
        },// g
        "35": {
          key: "h",
          status: false,
        },// h
        "36": {
          key: "j",
          status: false,
        },// j
        "37": {
          key: "k",
          status: false,
        },// k
        "38": {
          key: "l",
          status: false,
        },// l
        "39": {
          key: ";",
          status: false,
        },// ;
        "40": {
          key: "'",
          status: false,
        },// '


        "44": {
          key: "z",
          status: false,
        },// z
        "45": {
          key: "x",
          status: false,
        },// x
        "46": {
          key: "c",
          status: false,
        },// c
        "47": {
          key: "v",
          status: false,
        },// v
        "48": {
          key: "b",
          status: false,
        },// b
        "49": {
          key: "n",
          status: false,
        },// n
        "50": {
          key: "m",
          status: false,
        },// m
        "51": {
          key: ",",
          status: false,
        },// ,
        "52": {
          key: ".",
          status: false,
        },// .
        "53": {
          key: "/",
          status: false,
        },// /
        "57": {
          key: "space",
          status: false,
        },
      }
    }
  }

  keypress(value){
    console.log(value)
    window.midiApi.send("keypress", value)
  }

  keyup(value){
    console.log(value)
    window.midiApi.send("keyup", value)
  }

  toggleActivated() {
    if(this.state.activated){
      window.midiApi.send("deactivateMidi")
      this.setState((state) => ({ activated: false }));
    }else{
      window.midiApi.send("activateMidi")
      this.setState((state) => ({ activated: true }));
    }
    // window.midiApi.send("toggleActivated")
    // this.setState((state) => ({ activated: !state.activated }));
  }
  changeVelocity(event){
    window.midiApi.send("changeVelocity", event.target.value)
    this.setState((state) => ({velocity: event.target.value}))
  }

  changeLayoutPreset(event) {
    window.midiApi.send("changeLayoutPreset", event.target.value)
    this.setState((state) => ({currentLayoutPreset: event.target.value}))
  }
  changeChannel(event) {
    window.midiApi.send("changeChannel", event.target.value)
    this.setState((state) => ({channel: event.target.value}))
  }
  changeTranspose(event) {
    window.midiApi.send("changeTranspose", event.target.value)
    this.setState((state) => ({transpose: event.target.value}))
  }

  componentDidMount() {
    // Called when message received from main rgrprocess
    window.midiApi.receive("keypress", (data) => {
      console.log(`Received ${data} pressed`);

      this.setState((state) => {
        let keyState = state.keyboardState[data];
        let newKeyState = {...keyState, status : true};
        let newKeyboardState = {...state.keyboardState, [data] : newKeyState}
  
        return {
          ...state,
          keyboardState: newKeyboardState
        }
      });
    })

    window.midiApi.receive("keyup", (data) => {
      console.log(`Received ${data} released`);

      this.setState((state) => {
        let keyState = state.keyboardState[data];
        let newKeyState = {...keyState, status : false};
        let newKeyboardState = {...state.keyboardState, [data] : newKeyState}
  
        return {
          ...state,
          keyboardState: newKeyboardState
        }
      });
    })


    window.midiApi.receive("activateMidi", (data) => {
      this.setState((state) => ({ activated: true }));
    })
    window.midiApi.receive("deactivateMidi", (data) => {
      this.setState((state) => ({ activated: false }));
    })
  }

  render() {
    return (
      <div>
        M I D I W R I T E R
        <div style={style.header}>

        </div>
        <div style={style.upperliner}>
          <ActivateToggle
            activated={this.state.activated}
            toggleActivated={this.toggleActivated.bind(this)}
          />
          <LayoutSelector
            currentLayoutPreset={this.state.currentLayoutPreset}
            changeLayoutPreset={this.changeLayoutPreset.bind(this)}
          />
        </div>
        <KeyboardLayout
          keypress={this.keypress.bind(this)}
          keyup={this.keyup.bind(this)}
          keyboardState={this.state.keyboardState}
          currentLayoutPreset={this.state.currentLayoutPreset}
          transpose={this.state.transpose}
        />
        <div style={style.underliner}>
          <TransposeModifier
            changeTranspose={this.changeTranspose.bind(this)}
            transpose={this.state.transpose}
          />
          <VelocitySlider
            changeVelocity={this.changeVelocity.bind(this)}
            velocity={this.state.velocity}
          />
          <ChannelSelector
            changeChannel={this.changeChannel.bind(this)}
            channel={this.state.channel}
          />
        </div>
        <div style={style.footer}>
          v0.0.1 by @jidagraphy
        </div>
      </div>
    );
  }
}


const style = {
  keyboardContainer: {
    maxWidth: 1085,
    padding: 20,
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    borderRadius: 10,
    display: "grid",
    gridTemplateColumns: "repeat(30, 20px)",
    gridTemplateRows: "repeat(5, 40px)",
    gridGap: 5,
    fontFamily: "Helvetica Neue",
    fontSize: "0.6rem",
  },
  upperliner: {
    display: "flex",
    justifyContent: "space-between"
  },
  underliner: {
    display: "flex",
    justifyContent: "space-between"
  },
  header: {

  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  }
}


// const mapStateToProps = (state) => {
//   return {
//     keyboardState: state.keyboard.keyboardState,
//     currentLayoutPreset: state.keyboard.currentLayoutPreset,
//     velocity: state.keyboard.velocity,
//     channel: state.keyboard.channel,
//     transpose: state.keyboard.transpose,
//     activated: state.keyboard.activated
//   };
// }
// const mapStateToDispatch = (dispatch) => {
//   return {
//     keypress: (key) => {
//       return dispatch(keypress(key));
//     },
//     keyup: (key) => {
//       return dispatch(keyup(key))
//     },
//     changeLayoutPreset: (layoutPreset) => {
//       return dispatch(changeLayoutPreset(layoutPreset))
//     },
//     changeVelocity: (velocity) => {
//       return dispatch(changeVelocity(velocity))
//     },
//     changeChannel: (channel) => {
//       return dispatch(changeChannel(channel))
//     },
//     changeTranspose: (transpose) => {
//       return dispatch(changeTranspose(transpose))
//     },
//     activateMidi: () => {
//       return dispatch(activateMidi())
//     },
//     deactivateMidi: () => {
//       return dispatch(deactivateMidi())
//     },
//   }
// };

// ipcRenderer.on('activateMidi', (event) => {
//   store.dispatch(activateMidi())
// })
// ipcRenderer.on('deactivateMidi', (event) => {
//   store.dispatch(deactivateMidi())
// })

// Called when message received from main process
//   window.api.receive("activateMidi", (data) => {
//     console.log(`Received ${data} from main process`);
// });

// // Send a message to the main process
// window.api.send("toMain", "some data");

export default (Keyboard);
