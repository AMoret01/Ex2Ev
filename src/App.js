import {EXButton} from './EXButton/EXButton';
import {JustDoIt} from './EXButton/EXButton';
import './App.css';
import Inside from './Inside';
import {Switch, Route, Link} from 'react-router-dom';
import EXSecondView from './EXSecondView'
import { Fragment } from 'react';

//const message = ["Here button. I called you!"];

// const callMe = (props) => {
//   if (props === message)
//   {
//     function finalMessage(){
//       const result = message.map((item,index) => <EXButton key={index} title = {item}></EXButton>)
//       return result;
//     }
//     return finalMessage()
//   }
// };
function App() {
  return (
    <Fragment>
    <div className="main-screen">
        <Inside TITULO = {'Already in!'}>Welcome to the IT world!</Inside>
        <EXButton /*method={callMe(message)}*/ title={"Listo para hacer clic"}></EXButton>
        <h2>
          <Link to={'/EXSecondView'}>
            Ir a EXSecondView
          </Link>
        </h2>
    </div>
    <div>
      <Switch>
          <Route path={'/Home'}>
          </Route>
          <Route path={'/EXSecondView'}>
            <EXSecondView/>
          </Route>
        </Switch>
    </div>
    </Fragment>
  )
} 
JustDoIt();
export default App;
