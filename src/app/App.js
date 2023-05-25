import '../App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "../routes/Home";
import CriticalRole from "../routes/CriticalRole";
import SpaceEngineers from "../routes/SpaceEngineers";
import NinthHouse from "../routes/NinthHouse";
import Layout from '../components/Layout';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/critical_role" element={<CriticalRole/>}/>
            <Route path="/space_engineers" element={<SpaceEngineers />}/>
            <Route path="/ninth_house" element={<NinthHouse />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
