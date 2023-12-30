import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Task from './components/Task';
import Check from './components/Check';
import LogIn from './components/LogIn'

// const Home = () => <div>Home</div>;
// const About = () => <div>About</div>;

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Check />} /> 
      <Route path="/Home" element={<Home />} />
      {/* <Route path="/About" element={<About />} /> */}
      <Route path="/Task" element={<Task />}/>
      <Route path="/LogIn" element={<LogIn/>}/>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </Router>
);

export default App;
