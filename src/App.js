import {EXButton} from './EXButton/EXButton';
import './App.css';
import Inside from './Inside';

const App = () => (
  
  <div className="main-screen">
    <Inside TITULO = {'Already in!'}>Welcome to the IT world!</Inside>
    <EXButton title="Listo para hacer clic"></EXButton>
  </div>
);
console.log("Change for exercise 3, done");
export default App;
