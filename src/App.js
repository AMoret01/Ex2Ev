import {EXButton} from './EXButton/EXButton';
import {JustDoIt} from './EXButton/EXButton';
import './App.css';
import Inside from './Inside';

const message = ["Here button. I called you!"];

const callMe = (props) => {
   if (props === message)   {
        function finalMessage(){
        const result = message.map((item,index) => <EXButton key={index} title = {item}></EXButton>)
        return result;
      }
      return finalMessage();
   }
};

const App = () => (
  <div className="main-screen">
    <Inside TITULO = {'Already in!'}>Welcome to the IT world!</Inside>
    <EXButton method={callMe(message)} title={"Listo para hacer clic"}></EXButton>
  </div>
);
JustDoIt();
export default App;
