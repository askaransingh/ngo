// // src/hooks/useAuth.js
// import { useState, useEffect } from 'react';
// import { auth } from '../config/firebase.config'; // Adjust the path as needed
// import { onAuthStateChanged } from 'firebase/auth';

// const useAuth = () => {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//       setIsLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   return { user, isLoading };
// };

// export default useAuth;
// // 

import { useEffect, useState } from 'react';
import { auth } from '../config/firebase.config'; // Adjust the path as needed
import { onAuthStateChanged } from 'firebase/auth';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false); // Set loading to false after auth state is checked
    });

    return () => unsubscribe();
  }, []);

  return { user, isLoading };
};

export default useAuth;
