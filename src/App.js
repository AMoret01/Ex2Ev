import {EXButton} from './EXButton/EXButton';
import {JustDoIt} from './EXButton/EXButton';
import './App.css';
import Inside from './Inside';
import { Component } from 'react';

export default class App extends Component {

  message = "Here button. I called you!";
  title = 'Already in!'
  
  callMe = () => {
    this._inside.updateState(this.message);
  };
  
  render() {
   return (
      <div className="main-screen">
        <Inside TITULO={this.title}  ref={(ele) => this._inside = ele} >Welcome to the IT world!</Inside>
        <EXButton method={this.callMe} title={"Listo para hacer clic"}></EXButton>
      </div>
    );
  } 
}

JustDoIt();

