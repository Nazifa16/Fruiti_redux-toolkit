import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Basket from "./pages/Basket";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
