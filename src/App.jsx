
import React, {Component} from "react";
import {
  Link
} from "react-router-dom";
import {Home, About, Keyboard} from './containers';
import './App.global.css';




class App extends Component {
  componentWillMount(){
    document.body.style.background = "#cccccc";
  }
  
  componentWillUnmount(){
      document.body.style.backgroundImage = null;
      document.body.style.background = null;
  }

    render() {
      return (
        <Keyboard/>
      );
    }
  }
  
  
  
  
  
  const style = {
    backgroundImage: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "100vw",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex:-1,
    }
  }
  export default App;