import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const registerUser = () => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = () => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    return signOut();
  };

  const updateUserProfile = () => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  const getCurrentUser = () => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });
    return () => {
      unsubscribe;
    };
  };

  const authInfo = {
    loading,
    user,
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    updateUserProfile,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
