import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Dashboard, Private, Barang } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route exact element={<Private />}>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/barang" element={<Barang />} />
      </Route>
    </Routes>
  );
}

export default App;
