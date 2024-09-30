// // src/context/AuthContext.js

// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// // Create a context for authentication
// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Replace this with actual auth logic
//     const checkAuth = async () => {
//       // Simulate an auth check
//       const user = await fakeAuthCheck();
//       setUser(user);
//       setLoading(false);
//     };

//     checkAuth();
//   }, []);

//   const fakeAuthCheck = () =>
//     new Promise((resolve) => setTimeout(() => resolve({ name: 'John Doe' }), 1000)); // Simulate user data

//   const login = (userData) => {
//     setUser(userData);
//     navigate('/home'); // Redirect to home on login
//   };

//   const logout = () => {
//     setUser(null);
//     navigate('/auth'); // Redirect to login on logout
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// src/context/AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase.config';
// import { auth } from '../firebase'; // Make sure you have firebase configured

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
