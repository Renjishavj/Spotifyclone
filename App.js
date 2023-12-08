import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, } from 'react-router-dom';
import Approuter from './Router/Approuter';

function App() {
  return (
    <Router>
    <Approuter/>
  </Router>
  );
}

export default App;
