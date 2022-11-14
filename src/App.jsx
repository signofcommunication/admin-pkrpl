import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Dashboard, Private } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route exact path="/" element={<Private />}>
        <Route exact path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
