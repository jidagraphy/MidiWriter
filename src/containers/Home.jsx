import React, { Component } from 'react';
const {midiApi} = window;

// import {connect} from 'react-redux';
// import {Counter} from '../components';
// import * as counterActions from '../actions/counter';

class Home extends Component {

  componentDidMount() {
    // Called when message received from main process
    window.midiApi.receive("activateMidi", (data) => {
      console.log(`Received ${data} from main process`);
    });

    console.log(window.midiApi)
  }

  render() {
    return (
      <div style={style.homeContainer}>
        <div style={style.tempContainer}>
          <p style={style.tempText}>M I D I W R I T E R</p>
          <p style={style.tempText}>0.0.1 by @jidagraphy</p>
        </div>
        <br />
      </div>
    );
  }
}


// ipcRenderer.on('activateMidi', (event) => {
//   // store.dispatch(activateMidi())
//   console.log("her")
// })
// ipcRenderer.on('deactivateMidi', (event) => {
//   // store.dispatch(deactivateMidi())
// })


// // Send a message to the main process
// window.api.send("toMain", "some data");


const style = {
  homeContainer: {
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    fontFamily: 'didot',
    letterSpacing: '5px',
    lineHeight: '3rem',
    padding: '20vh 0'
  },
  tempContainer: {
    padding: '10vh 0'
  },
  tempText: {
    color: 'white'
  },
  youtubeEmbed: {
    lineHeight: '2rem',
    margin: '10px 0',
    width: 300,
    height: 300
  },
  contactLink: {
    color: 'rgb(56, 103, 121)',
    fontSize: '1.5rem',
    display: 'block'
  }
};

export default Home;
