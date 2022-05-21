import React, { FC, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}

export default App;
