import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  Dashboard,
  Private,
  Barang,
  AddBarang,
  EditBarang,
  Pegawai,
  AddPegawai,
  Supplier,
  AddSupplier,
  EditPegawai,
  EditSupplier,
} from "./components";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route exact element={<Private />}>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/barang" element={<Barang />} />
        <Route exact path="/barang/tambah-barang" element={<AddBarang />} />
        <Route exact path="/barang/edit-barang/:id" element={<EditBarang />} />
        <Route exact path="/barang/edit-barang/:id" element={<EditBarang />} />
        <Route exact path="/pegawai" element={<Pegawai />} />
        <Route exact path="/pegawai/tambah-pegawai" element={<AddPegawai />} />
        <Route
          exact
          path="/pegawai/edit-pegawai/:id"
          element={<EditPegawai />}
        />
        <Route exact path="/supplier" element={<Supplier />} />
        <Route
          exact
          path="/supplier/tambah-supplier"
          element={<AddSupplier />}
        />
        <Route
          exact
          path="/supplier/edit-supplier/:id"
          element={<EditSupplier />}
        />
      </Route>
    </Routes>
  );
}

export default App;
