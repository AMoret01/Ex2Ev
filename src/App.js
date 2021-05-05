import {EXButton} from './EXButton/EXButton';
import {JustDoIt} from './EXButton/EXButton';
import './App.css';
import Inside from './Inside';

const App = () => (
  <div className="main-screen">
    <Inside TITULO = {'Already in!'}>Welcome to the IT world!</Inside>
    <EXButton title="Listo para hacer clic"></EXButton>
  </div>
);
JustDoIt();
export default App;
