import * as React from 'react';
import './App.css';
import { EXButton, JustDoIt } from './EXButton/EXButton';
import ChangeTitle from './Ej3/ChangeTitle';
import { Link } from 'react-router-dom';

class App extends React.Component {

  resultTitle = "Here button. I called you!";

  callMe = () => {
    this.message.updateTitleState(this.resultTitle);
  };

  render() {
    return (
      <div className="main-screen">
        <ChangeTitle TITULO={"Alredy in!"} ref={(resultTitle) => this.message = resultTitle}>Welcome to the IT world!</ChangeTitle>
        <EXButton method={this.callMe} title='Listo para hacer clic' />
        <div className="navigation">
          <Link to={"/EXSecondView"} className="h1">
            Ir al ExSecondView
          </Link>
        </div>
      </div>
    );
  }
}
JustDoIt();
export default App;
