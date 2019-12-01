import React from 'react';
import '../App.css';
var ut = require('..//components/img/BT.jpg');

class Content extends React.Component {

  render() { 

    const mystyle = {

      
      color: "white",
      backgroundColor: "lightBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    return (
      <div className="App">

   
<h1 style={mystyle}>Create your team by navigating towards the create player tab!</h1>
<h2 style={mystyle}>Build your team by adding player Name and position and a image of selected player!</h2>
<img src = {ut} alt ="A"/>


      </div>
    );
  }
}

export default Content;