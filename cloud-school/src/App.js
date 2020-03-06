import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Mission from './components/Mission';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
      <Router>
      <Route exact path="/" component={Home} />
      <Route path="/mission" component={Mission} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
