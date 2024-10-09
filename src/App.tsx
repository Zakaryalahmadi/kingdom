import React from 'react';
import './App.css';
import Auth from './screens/auth/compoments/authpage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SelectionPage from './screens/gameSelection/selectionPage';

import QuantikPage from './screens/quantik/quantikPage';
import Home from './screens/kulami/src/screens/home/home';

function App() {
  return (
    <BrowserRouter>
       <div className="App">
        <Routes>
            <Route path="/" element={<Auth/>} />
        </Routes>
        <Routes>
            <Route path="/choice" element={<SelectionPage/>} />
        </Routes>
        <Routes>
            <Route path="/quantik" element={<QuantikPage/>} />
        </Routes>
        <Routes>
            <Route path="/kulami" element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
