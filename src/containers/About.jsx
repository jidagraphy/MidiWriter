import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {Counter} from '../components';
// import * as counterActions from '../actions/counter';

class About extends Component {


  render() {
    return (
      <div style={style.homeContainer}>
      <div style={style.tempContainer}>
      <p style={style.tempText}>
      MIDIWriter v 0.0.1      <br/>

      jidagraphy@gmail.com
      </p>


      </div>

      </div>
    );
  }
}


const style = {
  homeContainer : {
    textAlign : "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    fontFamily: "didot",
    letterSpacing: "5px",
    lineHeight: "3rem",
    padding: "20vh 0"
  },
  tempContainer: {
    padding: "10vh 0",
  },
  tempText : {
    color: "white",
  },
  youtubeEmbed: {
    lineHeight: "2rem",
    margin: "10px 0",
    width: 300,
    height: 300,
  },
  contactLink : {
    color : "rgb(56, 103, 121)",
    fontSize: "1.5rem",
    display: "block",
  },






  keyboardContainer : {
    maxWidth: 1085,
    padding: 20,
    position: "absolute",
    top : "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 10,
    display: "grid",
    gridTemplateColumns: "repeat(30, 30px)",
    gridTemplateRows: "repeat(5, 60px)",
    gridGap: 5,
  },
  key: {
    border: "2px solid black",
    borderRadius: 5,
    gridColumn: "span 2",
    fontSize: 20,
    textAlign: "center",
    paddingTop: 17,
  }
}

export default About;
