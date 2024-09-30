// import { Suspense } from "react";
// import React  from "react";
// import {Route, Routes} from "react-router-dom";
// import { Authentication, HomeScreen } from "../pages";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import { ToastContainer, toast } from 'react-toastify'; // ✔️ Correct

// // import ToastContainer, { toast } from 'react-toastify';

// // import React from 'react';
// const { cloneElement } = React;
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // import {QueryClient, QueryClientProvider} from "react-query";
// // import {ReactQueryDevtools} from "react-query/devtools";
// // Replace old imports with these

// const App = () => {
//     const queryClient = new QueryClient();
//   return (
//     <QueryClientProvider client={queryClient}>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/*" element={<HomeScreen />} />
//         <Route path="/auth" element={<Authentication />} />
//       </Routes>
//     </Suspense>
//     <ToastContainer position="top-right" theme="dark"/>
//     <ReactQueryDevtools initialIsOpen={false}/>
//     </QueryClientProvider>
//   );
// };

// export default App;

// import { Suspense } from "react";
// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { Authentication, HomeScreen } from "../pages";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const App = () => {
//   const queryClient = new QueryClient();

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/*" element={<HomeScreen />} />
//           <Route path="/auth" element={<Authentication />} />
//           {/* <Route  element={user ? element : <Navigate to="/auth" replace />} /> */}
//         </Routes>
//       </Suspense>
//       {/* Explicitly passing props to avoid reliance on deprecated defaultProps */}
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// export default App;


// import { Suspense } from "react";
// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { Authentication, HomeScreen, UserProfile } from "../pages"; // Import UserProfile if needed
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const App = () => {
//   const queryClient = new QueryClient();

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/*" element={<HomeScreen />} />
//           <Route path="/auth" element={<Authentication />} />
//           {/* Add UserProfile route if necessary */}
//           <Route path="/profile" element={<UserProfile />} />
//         </Routes>
//       </Suspense>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// export default App;





// import { Suspense } from "react";
// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { Authentication, HomeScreen, UserProfile } from "../pages"; // Ensure UserProfile is imported
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const App = () => {
//   // Create a QueryClient instance
//   const queryClient = new QueryClient();

//   return (
//     // Wrap your app with QueryClientProvider and pass the queryClient
//     <QueryClientProvider client={queryClient}>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           {/* Ensure the UserProfile route is within the QueryClientProvider */}
//           <Route path="/*" element={<HomeScreen />} />
//           <Route path="/auth" element={<Authentication />} />
//           <Route path="/profile" element={<UserProfile />} />
//         </Routes>
//       </Suspense>
//       {/* Add the ToastContainer for notifications */}
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       {/* Add React Query DevTools for easier debugging */}
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// export default App;






// import React, { Suspense } from "react";
// import { Route, Routes } from "react-router-dom";
// import { Authentication, HomeScreen, UserProfile } from "../pages";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import PrivateRoute from "../components/PrivateRoute"; // Import PrivateRoute

// const App = () => {
//   // Create a QueryClient instance
//   const queryClient = new QueryClient();

//   return (
//     // Wrap your app with QueryClientProvider and pass the queryClient
//     <QueryClientProvider client={queryClient}>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           {/* Public route */}
//           <Route path="/auth" element={<Authentication />} />

//           {/* Private routes */}
//           <Route path="/*" element={<PrivateRoute element={HomeScreen} />} />
//           <Route path="/profile" element={<PrivateRoute element={UserProfile} />} />
//         </Routes>
//       </Suspense>
//       {/* Add the ToastContainer for notifications */}
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       {/* Add React Query DevTools for easier debugging */}
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// export default App;

// import React, { Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { AuthProvider } from '../context/AuthContext';
// import PrivateRoute from '../components/PrivateRoute';
// import { Authentication, HomeScreen, UserProfile } from '../pages';

// const App = () => {
//   // Create a QueryClient instance
//   const queryClient = new QueryClient();

//   return (
//     <QueryClientProvider client={queryClient}>
//       <AuthProvider>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             {/* Public route */}
//             <Route path="/auth" element={<Authentication />} />

//             {/* Private routes */}
//             <Route path="/*" element={<PrivateRoute element={HomeScreen} />} />
//             <Route path="/profile" element={<PrivateRoute element={UserProfile} />} />
//           </Routes>
//         </Suspense>
//         <ToastContainer
//           position="top-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="dark"
//         />
//         <ReactQueryDevtools initialIsOpen={false} />
//       </AuthProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;










// import React, { Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { AuthProvider } from '../context/AuthContext';
// import PrivateRoute from '../components/PrivateRoute';
// import { Authentication, HomeScreen, UserProfile } from '../pages';

// const App = () => {
//   // Create a QueryClient instance
//   const queryClient = new QueryClient();

//   return (
//     <QueryClientProvider client={queryClient}>
//       <AuthProvider>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             {/* Public route, but restricted to logged-in users */}
//             <Route path="/auth" element={<PrivateRoute element={Authentication} restricted={true} />} />

//             {/* Private routes */}
//             <Route path="/*" element={<PrivateRoute element={HomeScreen} restricted={false} />} />
//             <Route path="/profile" element={<PrivateRoute element={UserProfile} restricted={false} />} />
//           </Routes>
//         </Suspense>
//         <ToastContainer
//           position="top-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="dark"
//         />
//         <ReactQueryDevtools initialIsOpen={false} />
//       </AuthProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;




// // import { Suspense } from "react";
// // import React from "react";
// // import { Route, Routes, Navigate } from "react-router-dom";
// // import { Authentication, HomeScreen } from "../pages";
// // import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// // import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// // import { ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import useAuth from "../hooks/useAuth"; // Assuming you have a useAuth hook

// // const App = () => {
// //   const queryClient = new QueryClient();
// //   const { user, isLoading } = useAuth(); // Use the hook to get authentication status

// //   if (isLoading) return <div>Loading...</div>; // Optional: show loading spinner while authentication state is being determined

// //   return (
// //     <QueryClientProvider client={queryClient}>
// //       <Suspense fallback={<div>Loading...</div>}>
// //         <Routes>
// //           <Route path="/" element={<HomeScreen />} />
// //           <Route
// //             path="/auth"
// //             element={user ? <Navigate to="/" replace /> : <Authentication />}
// //           />
// //         </Routes>
// //       </Suspense>
// //       <ToastContainer
// //         position="top-right"
// //         autoClose={5000}
// //         hideProgressBar={false}
// //         newestOnTop={false}
// //         closeOnClick
// //         rtl={false}
// //         pauseOnFocusLoss
// //         draggable
// //         pauseOnHover
// //         theme="dark"
// //       />
// //       <ReactQueryDevtools initialIsOpen={false} />
// //     </QueryClientProvider>
// //   );
// // };

// // export default App;

// // import { Suspense, useEffect, useState } from "react";
// // import React from "react";
// // import { Route, Routes, Navigate } from "react-router-dom";
// // import { Authentication, HomeScreen, UserProfile } from "../pages";
// // import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// // import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// // import { ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import { onAuthStateChanged } from "firebase/auth";
// // import { auth } from "../config/firebase.config"; // Ensure this path is correct

// // const App = () => {
// //   const queryClient = new QueryClient();
// //   const [user, setUser] = useState(null);
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// //       setUser(user);
// //       setIsLoading(false);
// //     });

// //     return () => unsubscribe();
// //   }, []);

// //   if (isLoading) return <div>Loading...</div>;

// //   return (
// //     <QueryClientProvider client={queryClient}>
// //       <Suspense fallback={<div>Loading...</div>}>
// //         <Routes>
// //           <Route path="/" element={<HomeScreen />} />
// //           <Route
// //             path="/auth"
// //             element={user ? <Navigate to="/" replace /> : <Authentication />}
// //           />
// //            <Route path="/profile/:userId" element={<UserProfile />} />
// //            <Route path="*" element={<Navigate to="/" replace />} />
// //         </Routes>
// //       </Suspense>
// //       <ToastContainer
// //         position="top-right"
// //         autoClose={5000}
// //         hideProgressBar={false}
// //         newestOnTop={false}
// //         closeOnClick
// //         rtl={false}
// //         pauseOnFocusLoss
// //         draggable
// //         pauseOnHover
// //         theme="dark"
// //       />
// //       <ReactQueryDevtools initialIsOpen={false} />
// //     </QueryClientProvider>
// //   );
// // };

// // export default App;

// // import { Suspense } from "react";
// // import React from "react";
// // import { Route, Routes } from "react-router-dom";
// // import { Authentication, HomeScreen } from "../pages";
// // import ProtectedRoute from "../components/ProtectedRoute"; // Ensure correct path
// // import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// // import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// // import { ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const App = () => {
// //   const queryClient = new QueryClient();

// //   return (
// //     <QueryClientProvider client={queryClient}>
// //       <Suspense fallback={<div>Loading...</div>}>
// //         <Routes>
// //           {/* Use ProtectedRoute for routes that require authentication */}
// //           <Route
// //             path="/"
// //             element={<ProtectedRoute element={<HomeScreen />} />}
// //           />
// //           <Route path="/auth" element={<Authentication />} />

// //         </Routes>
// //       </Suspense>
// //       <ToastContainer
// //         position="top-right"
// //         autoClose={5000}
// //         hideProgressBar={false}
// //         newestOnTop={false}
// //         closeOnClick
// //         rtl={false}
// //         pauseOnFocusLoss
// //         draggable
// //         pauseOnHover
// //         theme="dark"
// //       />
// //       <ReactQueryDevtools initialIsOpen={false} />
// //     </QueryClientProvider>
// //   );
// // };

// // export default App;

// // import { Suspense } from "react";
// // import React from "react";
// // import { Route, Routes, Navigate } from "react-router-dom";
// // import { Authentication, HomeScreen, Profile } from "../pages";
// // import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// // import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// // import { ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import useAuth from "../hooks/useAuth";

// // const App = () => {
// //   const queryClient = new QueryClient();
// //   const { user, isLoading } = useAuth();

// //   if (isLoading) return <div>Loading...</div>;

// //   return (
// //     <QueryClientProvider client={queryClient}>
// //       <Suspense fallback={<div>Loading...</div>}>
// //         <Routes>
// //           <Route path="/" element={<HomeScreen />} />
// //           <Route
//             path="/auth"
//             element={user ? <Navigate to="/" replace /> : <Authentication />}
//           />
//           {/* Example Profile route, adjust as needed */}
//           <Route path="/profile/:userId" element={<Profile />} />
//           {/* Catch-all route for nested paths */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </Suspense>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// export default App;

// import React from "react";
// import { Suspense } from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import { Authentication, HomeScreen, Profile } from "../pages";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import useAuth from "../hooks/useAuth";

// const App = () => {
//   const queryClient = new QueryClient();
//   const { user, isLoading } = useAuth();

//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<HomeScreen />} />
//           <Route
//             path="/auth"
//             element={user ? <Navigate to="/" replace /> : <Authentication />}
//           />
//           <Route path="/profile/:userId" element={<Profile />} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </Suspense>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// export default App;

// import React from "react";
// import { Suspense } from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import { Authentication, CreateTemplate, HomeScreen, Profile, UserProfile } from "../pages";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import useAuth from "../hooks/useAuth";
// // import useAuth from "../hooks/useAuth"; // Import your useAuth hook

// const App = () => {
//   const queryClient = new QueryClient();
//   const { user, isLoading } = useAuth(); // Use the hook to get user and loading state

//   if (isLoading) {
//     return <div>Loading...</div>; // Show loading state while checking authentication
//   }

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<HomeScreen />} />
//           <Route
//             path="/auth"
//             element={user ? <Navigate to="/" replace /> : <Authentication />}
//           />
//           <Route path="/profile/:userId" element={<UserProfile />} />
//           // Example route definition
//           <Route
//             path="/profile/:userId/add-template"
//             element={<CreateTemplate />}
//           />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </Suspense>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// // export default App;
// import React, { Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { AuthProvider } from '../context/AuthContext';
// import PrivateRoute from '../components/PrivateRoute';
// import { Authentication, HomeScreen, UserProfile } from '../pages';

// const App = () => {
//   // Create a QueryClient instance
//   const queryClient = new QueryClient();

//   return (
//     <QueryClientProvider client={queryClient}>
//       <AuthProvider>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             {/* Route for authentication, restricted to logged-in users */}
//             <Route path="/auth" element={<PrivateRoute element={Authentication} restricted={true} />} />
            
//             {/* Routes for authenticated users */}
//             <Route path="/*" element={<PrivateRoute element={HomeScreen} restricted={false} />} />
//             <Route path="/profile" element={<PrivateRoute element={UserProfile} restricted={false} />} />
//           </Routes>
//         </Suspense>
//         <ToastContainer
//           position="top-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="dark"
//         />
//         <ReactQueryDevtools initialIsOpen={false} />
//       </AuthProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;
// import { Suspense } from "react";
// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { Authentication, HomeScreen, UserProfile } from "../pages"; // Ensure UserProfile is imported
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const App = () => {
//   // Create a QueryClient instance
//   const queryClient = new QueryClient();

//   return (
//     // Wrap your app with QueryClientProvider and pass the queryClient
//     <QueryClientProvider client={queryClient}>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           {/* Ensure the UserProfile route is within the QueryClientProvider */}
//           <Route path="/*" element={<HomeScreen />} />
//           <Route path="/auth" element={<Authentication />} />
//           <Route path="/profile" element={<UserProfile />} />
//         </Routes>
//       </Suspense>
//       {/* Add the ToastContainer for notifications */}
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       {/* Add React Query DevTools for easier debugging */}
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// export default App;





// import { Suspense, useState } from "react";
// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { Authentication, HomeScreen, UserProfile } from "../pages"; // Ensure UserProfile is imported
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Header } from "../components";
// import HomeContainer from "./HomeContainer";
// import { FilterProvider } from "../context/filterContext";

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearchTermChange = (term) => {
//     setSearchTerm(term);
//   };

//   // Create a QueryClient instance
//   const queryClient = new QueryClient();

//   return (
//     // Wrap your app with QueryClientProvider and pass the queryClient
//     <QueryClientProvider client={queryClient}>
//        {/* <Header onSearchTermChange={handleSearchTermChange} /> */}
      
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           {/* Ensure the UserProfile route is within the QueryClientProvider */}
//           <Route path="/*" element={<HomeScreen />} />
//           <Route path="/auth" element={<Authentication />} />
//           <Route path="/profile" element={<UserProfile />} />
//         </Routes>
//       </Suspense>
//       {/* Add the ToastContainer for notifications */}
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <FilterProvider/>
//       {/* Add React Query DevTools for easier debugging */}
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// export default App;import { Suspense, useState } from "react";
// import React, { Suspense, useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import { Authentication, HomeScreen, UserProfile } from "../pages";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Header } from "../components";
// import HomeContainer from "./HomeContainer";
// import { FilterProvider } from "../context/filterContext"; // Import FilterProvider

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearchTermChange = (term) => {
//     setSearchTerm(term);
//   };

//   // Create a QueryClient instance
//   const queryClient = new QueryClient();

//   return (
//     // Wrap your app with QueryClientProvider and pass the queryClient
//     <QueryClientProvider client={queryClient}>
//       {/* Wrap the components that need filter context with FilterProvider */}
//       <FilterProvider>
//         {/* <Header onSearchTermChange={handleSearchTermChange} /> */}
        
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             {/* Ensure the UserProfile route is within the FilterProvider */}
//             <Route path="/*" element={<HomeScreen />} />
//             <Route path="/auth" element={<Authentication />} />
//             <Route path="/profile" element={<UserProfile />} />
//           </Routes>
//         </Suspense>
//       </FilterProvider>

//       {/* Add the ToastContainer for notifications */}
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       {/* Add React Query DevTools for easier debugging */}
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// // export default App;
// import React, { Suspense, useState, useEffect } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import { Authentication, HomeScreen, UserProfile } from "../pages";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Header } from "../components";
// import HomeContainer from "./HomeContainer";
// import { FilterProvider } from "../context/filterContext";
// import { auth } from "../config/firebase.config";
// import { onAuthStateChanged } from "firebase/auth"; // Import for Firebase Auth

// const PrivateRoute = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setIsAuthenticated(true);
//         navigate("/"); // Redirect to profile when user is authenticated
//       } else {
//         setIsAuthenticated(false);
//         setLoading(false);
//       }
//     });

//     return () => unsubscribe();
//   }, [navigate]);

//   if (loading) {
//     return <div>Loading...</div>; // Spinner can be added here
//   }

//   return isAuthenticated ? children : <Authentication />; // Show authentication if not authenticated
// };

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearchTermChange = (term) => {
//     setSearchTerm(term);
//   };

//   // Create a QueryClient instance
//   const queryClient = new QueryClient();

//   return (
//     <QueryClientProvider client={queryClient}>
//       <FilterProvider>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             {/* HomeScreen is now behind PrivateRoute */}
//             <Route
//               path="/*"
//               element={
//                 <PrivateRoute>
//                   <HomeScreen />
//                 </PrivateRoute>
//               }
//             />
//             {/* Authentication Route */}
//             <Route path="/auth" element={<Authentication />} />
//             <Route path="/profile" element={<UserProfile />} />
//           </Routes>
//         </Suspense>
//       </FilterProvider>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// // export default App;
// import React, { Suspense, useState, useEffect } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import { Authentication, HomeScreen, UserProfile } from "../pages";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Header } from "../components";
// import HomeContainer from "./HomeContainer";
// import { FilterProvider } from "../context/filterContext";
// import { auth } from "../config/firebase.config";
// import { onAuthStateChanged } from "firebase/auth";

// const PrivateRoute = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log("Setting up Firebase Auth listener...");
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log("User is authenticated: ", user);
//         setIsAuthenticated(true);
//         navigate("/"); // Redirect to profile when user is authenticated
//       } else {
//         console.log("User is not authenticated.");
//         setIsAuthenticated(false);
//         setLoading(false);
//       }
//     });

//     return () => unsubscribe();
//   }, [navigate]);

//   if (loading) {
//     return <div>Loading...</div>; // Spinner can be added here
//   }

//   return isAuthenticated ? children : <Authentication />;
// };

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearchTermChange = (term) => {
//     setSearchTerm(term);
//   };

//   const queryClient = new QueryClient();

//   return (
//     <QueryClientProvider client={queryClient}>
//       <FilterProvider>
//         <Suspense fallback={<div>Loading App...</div>}>
//           <Routes>
//             <Route
//               path="/*"
//               element={
//                 <PrivateRoute>
//                   <HomeScreen />
//                 </PrivateRoute>
//               }
//             />
//             <Route path="/auth" element={<Authentication />} />
//             <Route path="/profile" element={<UserProfile />} />
//           </Routes>
//         </Suspense>
//       </FilterProvider>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// // export default App;
// import React, { Suspense, useState } from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import { Authentication, HomeScreen, UserProfile } from "../pages";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FilterProvider } from "../context/filterContext";
// import  useAuth  from "../hooks/useAuth"; // Custom hook to get auth state

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const queryClient = new QueryClient();
//   const { isAuthenticated } = useAuth(); // Get user's auth status

//   return (
//     <QueryClientProvider client={queryClient}>
//       <FilterProvider>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route
//               path="/auth"
//               element={
//                 isAuthenticated ? <Navigate to="/" replace /> : <Authentication />
//               }
//             />
//             <Route path="/*" element={<HomeScreen />} />
//             <Route path="/profile" element={<UserProfile />} />
//           </Routes>
//         </Suspense>
//       </FilterProvider>

//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// export default App;
import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Authentication, HomeScreen, UserProfile } from "../pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FilterProvider } from "../context/filterContext";
import useAuth from "../hooks/useAuth"; // Import useAuth

const App = () => {
  const queryClient = new QueryClient();
  const { user, isLoading } = useAuth(); // Get user and isLoading state

  if (isLoading) {
    return <div>Loading...</div>; // Optional: Add spinner or loading component
  }

  return (
    <QueryClientProvider client={queryClient}>
      <FilterProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Home route is public */}
            <Route path="/*" element={<HomeScreen />} />
            
            {/* Protected Auth Route */}
            <Route
              path="/auth"
              element={!user ? <Authentication /> : <Navigate to="/" />} // If user is authenticated, redirect to home
            />

            {/* Protected Profile Route */}
            <Route
              path="/profile"
              element={user ? <UserProfile /> : <Navigate to="/auth" />} // If user is not authenticated, redirect to auth
            />
          </Routes>
        </Suspense>
      </FilterProvider>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
