import React from 'react';
import Home from './pages/Home';
import Calcu from './pages/Calcu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component{
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/calculator" element={<Calcu />} />
        </Routes>
      </Router>
    )
  }
}

export default App;
