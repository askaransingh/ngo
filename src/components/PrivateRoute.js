// // src/components/PrivateRoute.js

// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import useUser from '../hooks/useUser'; // Ensure you have this hook for user authentication

// const PrivateRoute = ({ element: Component, ...rest }) => {
//   const { data: user, isLoading } = useUser();

//   if (isLoading) {
//     return <div>Loading...</div>; // Or a loading spinner
//   }

//   return user ? <Component {...rest} /> : <Navigate to="/auth" />;
// };

// export default PrivateRoute;
// src/components/PrivateRoute.js

// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const PrivateRoute = ({ element: Component, restricted, ...rest }) => {
//   const { user, loading } = useAuth();

//   if (loading) {
//     return <div>Loading...</div>; // Or a loading spinner
//   }

//   if (restricted && user) {
//     return <Navigate to="/" />; // Redirect logged-in users away from restricted routes
//   }

//   return user ? <Component {...rest} /> : <Navigate to="/auth" />;
// };

// export default PrivateRoute;
// src/components/PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ element: Component, restricted, ...rest }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  if (restricted && user) {
    return <Navigate to="/home" />;
  }

  return !user && restricted ? <Navigate to="/auth" /> : <Component {...rest} />;
};

export default PrivateRoute;
