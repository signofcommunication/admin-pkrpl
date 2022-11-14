import React, { useContext, createContext } from "react";
import { signOut, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./firebase";

const ProviderContext = createContext();

function Provider({ children }) {
  const auth = getAuth();

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  const value = { login, logout };

  return (
    <ProviderContext.Provider value={value}>
      {children}
    </ProviderContext.Provider>
  );
}

function useProvider() {
  return useContext(ProviderContext);
}

export { useProvider, Provider };
