import * as types from './ActionTypes';

export const keypress = (key) => ({
  type : types.KEYPRESS,
  key
});
export const keyup = (key) =>  ({
  type : types.KEYUP,
  key
});
export const sustainOn = () => ({
  type: types.SUSTAIN_ON,
})
export const sustainOff = () => ({
  type: types.SUSTAIN_OFF,
})
export const changeSustainModifer = (sustainModifer) => ({
  type: types.CHANGE_SUSTAIN_MODIFER,
  sustainModifer,
})
export const changeLayoutPreset = (layoutPreset) =>  ({
  type : types.CHANGE_LAYOUT_PRESET,
  layoutPreset
});
export const changeVelocity = (velocity) =>  ({
  type : types.CHANGE_VELOCITY,
  velocity
});
export const changeChannel = (channel) =>  ({
  type : types.CHANGE_CHANNEL,
  channel
});
export const changeTranspose = (transpose) =>  ({
  type : types.CHANGE_TRANSPOSE,
  transpose
});
export const activateMidi = () =>  ({
  type : types.ACTIVATE_KEYBOARD,
});
export const deactivateMidi = () =>  ({
  type : types.DEACTIVATE_KEYBOARD,
});
