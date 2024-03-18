import * as types from '../actions/ActionTypes';
// import { ipcRenderer } from 'electron';

const initialState = {
  activated: true,
  key: "",
  velocity: 100,
  channel: 0,
  transpose: 0,
  currentLayoutPreset: "chromatic",
  sustain: false,
  sustainModifier: "space",
  keyboardState: {
    "41" : {
      key : "`",
      status : false,
    },
    "2" : {
      key : "1",
      status : false,
    },
    "3" : {
      key : "2",
      status : false,
    },
    "4" : {
      key : "3",
      status : false,
    },
    "5" : {
      key : "4",
      status : false,
    },
    "6" : {
      key : "5",
      status : false,
    },
    "7" : {
      key : "6",
      status : false,
    },// 6
    "8" : {
      key : "7",
      status : false,
    },// 7
    "9" : {
      key : "8",
      status : false,
    },// 8
    "10" : {
      key : "9",
      status : false,
    },// 9
    "11" : {
      key : "0",
      status : false,
    },// 0
    "12" : {
      key : "-",
      status : false,
    },// -
    "13" : {
      key : "=",
      status : false,
    },// =


    "16" : {
      key : "q",
      status : false,
    },// q
    "17" : {
      key : "w",
      status : false,
    },// w
    "18" : {
      key : "e",
      status : false,
    },// e
    "19" : {
      key : "r",
      status : false,
    },// r
    "20" : {
      key : "t",
      status : false,
    },// t
    "21" : {
      key : "y",
      status : false,
    },// y
    "22" : {
      key : "u",
      status : false,
    },// u
    "23" : {
      key : "i",
      status : false,
    },// i
    "24" : {
      key : "o",
      status : false,
    },// o
    "25" : {
      key : "p",
      status : false,
    },// p
    "26" : {
      key : "[",
      status : false,
    },// []
    "27" : {
      key : "]",
      status : false,
    },// ]
    "43" : {
      key : "\\",
      status : false,
    },// \


    "30" : {
      key : "a",
      status : false,
    },// a
    "31" : {
      key : "s",
      status : false,
    },// s
    "32" : {
      key : "d",
      status : false,
    },// d
    "33" : {
      key : "f",
      status : false,
    },// f
    "34" : {
      key : "g",
      status : false,
    },// g
    "35" : {
      key : "h",
      status : false,
    },// h
    "36" : {
      key : "j",
      status : false,
    },// j
    "37" : {
      key : "k",
      status : false,
    },// k
    "38" : {
      key : "l",
      status : false,
    },// l
    "39" : {
      key : ";",
      status : false,
    },// ;
    "40" : {
      key : "'",
      status : false,
    },// '


    "44" : {
      key : "z",
      status : false,
    },// z
    "45" : {
      key : "x",
      status : false,
    },// x
    "46" : {
      key : "c",
      status : false,
    },// c
    "47" : {
      key : "v",
      status : false,
    },// v
    "48" : {
      key : "b",
      status : false,
    },// b
    "49" : {
      key : "n",
      status : false,
    },// n
    "50" : {
      key : "m",
      status : false,
    },// m
    "51" : {
      key : ",",
      status : false,
    },// ,
    "52" : {
      key : ".",
      status : false,
    },// .
    "53" : {
      key : "/",
      status : false,
    },// /
    "57": {
      key : "space",
      status : false,
    },
  }
};



export default function keyboard(state = initialState, action) {
  switch (action.type) {
    case types.KEYPRESS: {
      let keyState = state.keyboardState[action.key];
      let newKeyState = {...keyState, status : true};
      let newKeyboardState = {...state.keyboardState, [action.key] : newKeyState}
      // console.log(newKeyboardState[action.key])
      return {
        ...state,
        keyboardState : newKeyboardState
      };
    }
    case types.KEYUP: {
      let keyState = state.keyboardState[action.key];
      let newKeyState = {...keyState, status : false};
      let newKeyboardState = {...state.keyboardState, [action.key] : newKeyState}
      // console.log(newKeyboardState[action.key])
      return {
        ...state,
        keyboardState : newKeyboardState
      };
    }
    case types.SUSTAIN_ON: {
      return {
        ...state,
        sustain : true,
      };
    }
    case types.SUSTAIN_OFF: {
      return {
        ...state,
        sustain : false,
      };
    }
    case types.CHANGE_SUSTAIN_MODIFER: {
      return {
        ...state,
        sustainModifier : action.sustainModifer,
      };
    }
    case types.CHANGE_LAYOUT_PRESET: {
      // ipcRenderer.send('changeLayoutPreset', action.layoutPreset)
      return {
        ...state,
        currentLayoutPreset: action.layoutPreset
      };
    }
    case types.CHANGE_VELOCITY: {
      // ipcRenderer.send('changeVelocity', action.velocity)
      return {
        ...state,
        velocity: action.velocity
      };
    }
    case types.CHANGE_CHANNEL: {
      // ipcRenderer.send('changeChannel', action.channel)
      return {
        ...state,
        channel: action.channel
      };
    }
    case types.CHANGE_TRANSPOSE: {
      // ipcRenderer.send('changeTranspose', action.transpose)
      return {
        ...state,
        transpose: action.transpose
      };
    }
    case types.ACTIVATE_KEYBOARD: {
      // ipcRenderer.send('activateMidi')
      return {
        ...state,
        activated: true
      };
    }
    case types.DEACTIVATE_KEYBOARD: {
      // ipcRenderer.send('deactivateMidi')
      return {
        ...state,
        activated: false
      };
    }
    default:
    return state;
  }
};
