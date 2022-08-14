import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from './components/pages/homepage'
import Navbar from './components/navbar';


function App() {
  // const [apiRes, setApiRes] = useState("");
  // fetch("http://localhost:9000/testAPI")
  //         .then(res => res.text())
  //         .then(res => setApiRes(res));

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>


          {/* // NOTE!!! KEEP THIS ROUTE AT THE VERY BOTTOM, OR ELSE ALL PAGES WILL DEFAULT TO "/" */}
          <Route path={'/'} element={ <Homepage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
