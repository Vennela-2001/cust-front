import logo from './logo.svg';
import './App.css';
import CrudOperation from './CRUD/crudoperation';
import Component1 from './CRUD/mycomponent';
import Bookoperation from './Book/bookoperation';
import AssignmentCrud from './Book/assignmentCrud';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    //<Bookoperation/>
    <AssignmentCrud/>
    //<Component1/>
  );
}

export default App;
