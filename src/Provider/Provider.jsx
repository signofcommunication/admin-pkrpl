import React, { useContext, createContext, useState, useEffect } from "react";
import {
  signOut,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "./firebase";
import axios from "axios";

const ProviderContext = createContext();

function Provider({ children }) {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const auth = getAuth();

  function getAllProducts() {
    return axios.get(`${import.meta.env.VITE_API}/products`);
  }

  function getSingleProduct(id) {
    return axios.get(`${import.meta.env.VITE_API}/products/${id}`);
  }

  function postProduct(data) {
    return axios.post(`${import.meta.env.VITE_API}/products`, data);
  }

  function editProduct(id, data) {
    return axios.patch(`${import.meta.env.VITE_API}/products/${id}`, data);
  }

  function deleteProduct(id) {
    return axios.delete(`${import.meta.env.VITE_API}/products/${id}`);
  }

  function getAllEmployees() {
    return axios.get(`${import.meta.env.VITE_API}/employees`);
  }

  function getSingleEmployee(id) {
    return axios.get(`${import.meta.env.VITE_API}/employees/${id}`);
  }

  function postEmployee(data) {
    return axios.post(`${import.meta.env.VITE_API}/employees`, data);
  }

  function editEmployee(id, data) {
    return axios.patch(`${import.meta.env.VITE_API}/employees/${id}`, data);
  }

  function deleteEmployee(id) {
    return axios.delete(`${import.meta.env.VITE_API}/employees/${id}`);
  }

  function getAllSuppliers() {
    return axios.get(`${import.meta.env.VITE_API}/supplier`);
  }

  function getSingleSupplier(id) {
    return axios.get(`${import.meta.env.VITE_API}/supplier/${id}`);
  }

  function postSupplier(data) {
    return axios.post(`${import.meta.env.VITE_API}/supplier`, data);
  }

  function editSupplier(id, data) {
    return axios.patch(`${import.meta.env.VITE_API}/supplier/${id}`, data);
  }

  function deleteSupplier(id) {
    return axios.delete(`${import.meta.env.VITE_API}/supplier/${id}`);
  }

  function getAllDataPembelian() {
    return axios.get(`${import.meta.env.VITE_API}/pembelian`);
  }

  function getSingleDataPembelian(id) {
    return axios.get(`${import.meta.env.VITE_API}/pembelian/${id}`);
  }

  function postDataPembelian(data) {
    return axios.post(`${import.meta.env.VITE_API}/pembelian`, data);
  }

  function editDataPembelian(id, data) {
    return axios.patch(`${import.meta.env.VITE_API}/pembelian/${id}`, data);
  }

  function deleteDataPembelian(id) {
    return axios.delete(`${import.meta.env.VITE_API}/pembelian/${id}`);
  }

  function getAllDataPenjualan() {
    return axios.get(`${import.meta.env.VITE_API}/penjualan`);
  }

  function getSingleDataPenjualan(id) {
    return axios.get(`${import.meta.env.VITE_API}/penjualan/${id}`);
  }

  function postDataPenjualan(data) {
    return axios.post(`${import.meta.env.VITE_API}/penjualan`, data);
  }

  function editDataPenjualan(id, data) {
    return axios.patch(`${import.meta.env.VITE_API}/penjualan/${id}`, data);
  }

  function deleteDataPenjualan(id) {
    return axios.delete(`${import.meta.env.VITE_API}/penjualan/${id}`);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);
    localStorage.setItem("isAuthenticated", false);
    return () => unsubscribe();
  }, []);

  const value = {
    login,
    logout,
    getSingleDataPenjualan,
    getSingleEmployee,
    getAllDataPembelian,
    getAllSuppliers,
    getAllDataPenjualan,
    deleteDataPembelian,
    deleteDataPenjualan,
    editDataPembelian,
    editDataPenjualan,
    postDataPembelian,
    postDataPenjualan,
    postEmployee,
    postSupplier,
    postProduct,
    getSingleDataPembelian,
    deleteSupplier,
    deleteEmployee,
    editSupplier,
    getSingleSupplier,
    editProduct,
    getSingleProduct,
    editEmployee,
    deleteProduct,
    getAllEmployees,
    getAllProducts,
    user,
    error,
  };

  return (
    <ProviderContext.Provider value={value}>
      {children}
    </ProviderContext.Provider>
  );
}

function useProvider() {
  const auth = useContext(ProviderContext);
  return { ...auth, isAuthenticated: auth.user != null };
}

export { useProvider, Provider };
