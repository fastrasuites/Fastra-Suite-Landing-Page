import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Inventory from "./Inventory/inventory";

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/inventory' element={<Inventory />} />
    </Routes>
  );
}

export default App;
