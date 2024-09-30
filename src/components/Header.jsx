// // import React, { useState } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { FadeInOutWithOpacity, slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";

// // const Header = () => {
// //   const { data, isLoading, isError } = useUser();
// //   const [isMenu, setMenu] = useState(false);

// //   const queryClient = useQueryClient();

// //   const { data: filterData = {} } = useFilters();
// // //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");
// //   const signOutUser = async () => {
// //     await auth.signOut().then(() => {
// //       queryClient.setQueryData("user", null);
// //     });
// //   };

// //   const handleSearchTerm = (e) => {
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: e.target.value,
// //     });
// //   };

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={filterData.searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //       </div>

// //       <AnimatePresence>
// //         {isLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {data ? (
// //               <motion.div
// //                 {...FadeInOutWithOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {data?.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={data?.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt=""
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                     <p className="text-lg text-white">{data?.email}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {data?.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center  justify-center cursor-pointer">
// //                           <img
// //                             src={data?.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt=""
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                           <p className="text-3 text-white">{data?.email}</p>
// //                         </div>
// //                       )}
// //                       {data?.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {data?.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start  flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={"/profile"}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {/* {adminIds.includes(data?.uid) && ( */}
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={"/template/create"}
// //                         >
// //                           Add New Template
// //                         </Link>
// //                         {/* )} */}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout
// //                             className="group-hover:text-txtDark
// //                         text-txtLight"
// //                           />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWithOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { FadeInOutWithOpacity, slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";

// // const Header = () => {
// //   const { data, isLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   const signOutUser = async () => {
// //     await auth.signOut().then(() => {
// //       queryClient.setQueryData("user", null);
// //     });
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     queryClient.setQueryData("globalFilter",{
// //         ...queryClient.getQueryData("globalFilter"),
// //         searchTerm:"",
// //     })
// //   }
// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>

// //           {filterData.searchTerm?.length > 0 && (
// //             <motion.div
// //             onClick={clearFilter}
// //               {...FadeInOutWithOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-bloack">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {isLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {data ? (
// //               <motion.div
// //                 {...FadeInOutWithOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {data?.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={data?.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                     <p className="text-lg text-white">{data?.email}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {data?.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={data?.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                           <p className="text-3 text-white">{data?.email}</p>
// //                         </div>
// //                       )}
// //                       {data?.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {data?.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={"/profile"}
// //                         >
// //                           My Account
// //                         </Link>
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={"/template/create"}
// //                         >
// //                           Add New Template
// //                         </Link>
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWithOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import {  slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from '../animations';
// // const Header = () => {
// //   const { data, isLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // const signOutUser = async () => {
// //   //   await auth.signOut().then(() => {
// //   //     queryClient.setQueryData("user", null);
// //   //   });
// //   // };
// //   const signOutUser = async () => {
// //     await auth.signOut().then(() => {
// //       queryClient.invalidateQueries("user");
// //     });
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {isLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {data ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {data?.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={data?.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                     <p className="text-lg text-white">{data?.email}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {data?.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={data?.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                           <p className="text-3 text-white">{data?.email}</p>
// //                         </div>
// //                       )}
// //                       {data?.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {data?.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${data?.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                       {
// //                         adminIds.includes(data?.uid)&&(
// //                           <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={"/template/create"}
// //                         >
// //                           Add New Template
// //                         </Link>
// //                         )
// //                       }
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data, isLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   const signOutUser = async () => {
// //     await auth.signOut().then(() => {
// //       // Invalidate the user query to trigger a re-fetch or clear cache
// //       queryClient.setQueryData("user",null);
// //     });
// //   };
// //   // const signOutUser = async () => {
// //   //   try {
// //   //     await auth.signOut();
// //   //     queryClient.invalidateQueries("user"); // Mark query for refetching
// //   //     localStorage.clear(); // Clear local storage if needed
// //   //     window.location.reload(); // Reset the UI after sign out
// //   //   } catch (error) {
// //   //     console.error("Sign-out failed", error);
// //   //   }
// //   // };

// //   // const signOutUser = async () => {
// //   //   try {
// //   //     // Sign out from Firebase Auth
// //   //     await auth.signOut();

// //   //     // Clear React Query Cache for 'user' and other relevant queries
// //   //     queryClient.setQueryData("user", null);
// //   //     queryClient.invalidateQueries("user"); // Ensure data is re-fetched if needed

// //   //     // Clear local storage if you store any user-specific data there
// //   //     localStorage.removeItem("yourUserDataKey"); // Replace 'yourUserDataKey' with your actual key
// //   //     localStorage.clear(); // If you want to clear all local storage, use clear()

// //   //     // Optionally, navigate to login page or refresh the UI
// //   //     window.location.reload(); // To reset the app state and display login button
// //   //   } catch (error) {
// //   //     console.error("Sign-out failed", error);
// //   //   }
// //   // };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {isLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {data ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {data?.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={data?.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                     <p className="text-lg text-white">{data?.email}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {data?.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={data?.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                           <p className="text-3 text-white">{data?.email[0]}</p>
// //                         </div>
// //                       )}
// //                       {data?.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {data?.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${data?.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(data?.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };
// //
// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Function to sign out user
// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       // Invalidate the user query to trigger a re-fetch or clear cache
// //       queryClient.setQueryData("user", null);
// //       queryClient.invalidateQueries("user"); // Ensure data is re-fetched if needed
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {userLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {user ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {user?.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={user?.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                     <p className="text-lg text-white">{user?.email}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {user?.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={user?.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                           <p className="text-3 text-white">{user?.email[0]}</p>
// //                         </div>
// //                       )}
// //                       {user?.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {user?.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${user?.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(user?.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Function to sign out user
// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       // Invalidate the user query to trigger a re-fetch or clear cache
// //       queryClient.setQueryData("user", null);
// //       queryClient.invalidateQueries("user"); // Ensure data is re-fetched if needed
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {userLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {user ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {user?.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={user?.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                     <p className="text-lg text-white">{user?.email?.[0] || "U"}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {user?.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={user?.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                           <p className="text-3 text-white">{user?.email?.[0] || "U"}</p>
// //                         </div>
// //                       )}
// //                       {user?.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {user?.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${user?.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(user?.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Function to sign out user
// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       // Invalidate the user query to trigger a re-fetch or clear cache
// //       queryClient.setQueryData("user", null);
// //       queryClient.invalidateQueries("user"); // Ensure data is re-fetched if needed
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {userLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {user ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {user?.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={user?.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                     <p className="text-lg text-white">{user?.email?.[0] || "U"}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {user?.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={user?.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                           <p className="text-3 text-white">{user?.email?.[0] || "U"}</p>
// //                         </div>
// //                       )}
// //                       {user?.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {user?.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${user?.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(user?.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Function to sign out user
// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       // Invalidate the user query to trigger a re-fetch or clear cache
// //       queryClient.setQueryData("user", null);
// //       queryClient.invalidateQueries("user"); // Ensure data is re-fetched if needed
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {userLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {user ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {user.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={user.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                     <p className="text-lg text-white">{user.email?.[0] || "U"}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {user.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={user.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                           <p className="text-3 text-white">{user.email?.[0] || "U"}</p>
// //                         </div>
// //                       )}
// //                       {user.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {user.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${user.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(user.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Function to sign out user
// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       queryClient.setQueryData("user", null);
// //       queryClient.invalidateQueries("user");
// //       setUpdateTrigger(prev => !prev); // Toggle state to force re-render
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {userLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {user ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {user.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={user.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                     <p className="text-lg text-white">{user.email?.[0] || "U"}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {user.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={user.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                           <p className="text-3 text-white">{user.email?.[0] || "U"}</p>
// //                         </div>
// //                       )}
// //                       {user.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {user.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${user.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(user.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Function to sign out user
// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       queryClient.setQueryData("user", null);
// //       queryClient.invalidateQueries("user");
// //       setUpdateTrigger(prev => !prev); // Toggle state to force re-render
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   // Check user authentication status and update UI accordingly
// //   useEffect(() => {
// //     if (user === null) {
// //       setUpdateTrigger(prev => !prev); // Force re-render if user becomes null
// //     }
// //   }, [user]);

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {userLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {user ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {user.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={user.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                     <p className="text-lg text-white">{user.email?.[0] || "U"}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {user.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={user.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                           <p className="text-3 text-white">{user.email?.[0] || "U"}</p>
// //                         </div>
// //                       )}
// //                       {user.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {user.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${user.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(user.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Function to sign out user
// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       queryClient.setQueryData("user", null);
// //       queryClient.invalidateQueries("user");
// //       setUpdateTrigger(prev => !prev); // Toggle state to force re-render
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   // Check user authentication status and update UI accordingly
// //   useEffect(() => {
// //     if (user === null) {
// //       setUpdateTrigger(prev => !prev); // Force re-render if user becomes null
// //     }
// //   }, [user]);

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {userLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {user ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {user.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={user.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                     <p className="text-lg text-white">{user.email?.[0] || "U"}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {user.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={user.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                           <p className="text-3 text-white">{user.email?.[0] || "U"}</p>
// //                         </div>
// //                       )}
// //                       {user.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {user.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${user.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(user.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Function to sign out user
// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       queryClient.setQueryData("user", null);
// //       queryClient.invalidateQueries("user");
// //       setUpdateTrigger((prev) => !prev); // Toggle state to force re-render
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   // Check user authentication status and update UI accordingly
// //   useEffect(() => {
// //     if (user === null) {
// //       setUpdateTrigger((prev) => !prev); // Force re-render if user becomes null
// //     }
// //   }, [user]);

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm?.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {userLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {user.email?.[0] ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {user.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={user.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     {/* Remove the blue box and replace with a user icon or a placeholder */}
// //                     <p className="text-lg text-gray-500">{user.email ? user.email[0] : "?"}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {user.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={user.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <p className="text-3 text-gray-500">
// //                             {user.email?.[0] || (
// //                               <Link to={"/auth"}>
// //                                 <motion.button
// //                                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                                   type="button"
// //                                   {...FadeInOutWIthOpacity}
// //                                 >
// //                                   Login
// //                                 </motion.button>
// //                               </Link>
// //                             )}
// //                           </p>
// //                         </div>
// //                       )}
// //                       {user.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {user.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${user.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(user?.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Function to sign out user
// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       queryClient.setQueryData("user", null);
// //       queryClient.invalidateQueries("user");
// //       setUpdateTrigger((prev) => !prev); // Toggle state to force re-render
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   // Check user authentication status and update UI accordingly
// //   useEffect(() => {
// //     if (user === null) {
// //       setUpdateTrigger((prev) => !prev); // Force re-render if user becomes null
// //     }
// //   }, [user]);

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm?.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {userLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {user ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {user.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={user.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <p className="text-lg text-gray-500">{user.email?.[0]}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {user.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={user.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <p className="text-3 text-gray-500">
// //                             {user.email?.[0] || (
// //                               <Link to={"/auth"}>
// //                                 <motion.button
// //                                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                                   type="button"
// //                                   {...FadeInOutWIthOpacity}
// //                                 >
// //                                   Login
// //                                 </motion.button>
// //                               </Link>
// //                             )}
// //                           </p>
// //                         </div>
// //                       )}
// //                       {user.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {user.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${user.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(user?.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Function to sign out user
// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       queryClient.setQueryData("user", null);
// //       queryClient.invalidateQueries("user");
// //       setUpdateTrigger((prev) => !prev); // Toggle state to force re-render
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   // Check user authentication status and update UI accordingly
// //   useEffect(() => {
// //     if (user === null) {
// //       setUpdateTrigger((prev) => !prev); // Force re-render if user becomes null
// //     }
// //   }, [user]);

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200 relative">
// //         <input
// //           // value={filterData?.searchTerm ? filterData?.searchTerm: ""}
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150 absolute right-2"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {userLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {user ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {user.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={user.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <p className="text-lg text-gray-500">{user.email?.[0]}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {user.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={user.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <p className="text-3 text-gray-500">
// //                             {user.email?.[0] || (
// //                               <Link to={"/auth"}>
// //                                 <motion.button
// //                                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                                   type="button"
// //                                   {...FadeInOutWIthOpacity}
// //                                 >
// //                                   Login
// //                                 </motion.button>
// //                               </Link>
// //                             )}
// //                           </p>
// //                         </div>
// //                       )}
// //                       {user.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {user.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${user.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(user?.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Function to sign out user
// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       queryClient.setQueryData("user", null);
// //       queryClient.invalidateQueries("user");
// //       setUpdateTrigger((prev) => !prev); // Toggle state to force re-render
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   // Check user authentication status and update UI accordingly
// //   useEffect(() => {
// //     if (user === null) {
// //       setUpdateTrigger((prev) => !prev); // Force re-render if user becomes null
// //     }
// //   }, [user]);

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200 relative">
// //         <input
// //           // value={filterData?.searchTerm ? filterData?.searchTerm: ""}
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150 absolute right-2"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {userLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {user ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {user.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={user.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <p className="text-lg text-gray-500">{user.email?.[0]}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {user.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={user.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <p className="text-3 text-gray-500">
// //                             {user.email?.[0] || (
// //                               <Link to={"/auth"}>
// //                                 <motion.button
// //                                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                                   type="button"
// //                                   {...FadeInOutWIthOpacity}
// //                                 >
// //                                   Login
// //                                 </motion.button>
// //                               </Link>
// //                             )}
// //                           </p>
// //                         </div>
// //                       )}
// //                       {user.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {user.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${user.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(user?.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Function to sign out user
// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       queryClient.setQueryData("user", null);
// //       queryClient.invalidateQueries("user");
// //       setUpdateTrigger((prev) => !prev); // Toggle state to force re-render
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   // Check user authentication status and update UI accordingly
// //   useEffect(() => {
// //     if (user === null) {
// //       setUpdateTrigger((prev) => !prev); // Force re-render if user becomes null
// //     }
// //   }, [user]);

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200 relative">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150 absolute right-2"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {userLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {user ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {user.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={user.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <p className="text-lg text-gray-500">{user.email?.[0]}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {user.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={user.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <p className="text-3 text-gray-500">
// //                             {user.email?.[0] || (
// //                               <Link to={"/auth"}>
// //                                 <motion.button
// //                                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                                   type="button"
// //                                   {...FadeInOutWIthOpacity}
// //                                 >
// //                                   Login
// //                                 </motion.button>
// //                               </Link>
// //                             )}
// //                           </p>
// //                         </div>
// //                       )}
// //                       {user.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {user.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${user.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(user?.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data, isLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Sign out function to clear data from local storage and update UI
// //   // const signOutUser = async () => {
// //   //   try {
// //   //     // Sign out from Firebase Auth
// //   //     await auth.signOut();

// //   //     // Clear React Query Cache for 'user' and other relevant queries
// //   //     queryClient.setQueryData("user", null);
// //   //     queryClient.invalidateQueries("user"); // Ensure data is re-fetched if needed

// //   //     // Clear local storage
// //   //     localStorage.clear();

// //   //     // Reload the page or reset the app state to update the UI (show login button)
// //   //     window.location.reload();
// //   //   } catch (error) {
// //   //     console.error("Sign-out failed", error);
// //   //   }
// //   // };
// //   const signOutUser = async () => {
// //     try {
// //       console.log("Sign-out function called");  // Add this to check if the function runs
// //       await auth.signOut();
// //       queryClient.invalidateQueries("user"); // Invalidate the user query for refetch
// //       localStorage.clear(); // Clear local storage
// //       window.location.reload(); // Reset the UI
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {isLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {data ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {data?.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={data?.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                     <p className="text-lg text-white">{data?.email}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {data?.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={data?.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                           <p className="text-3 text-white">{data?.email[0]}</p>
// //                         </div>
// //                       )}
// //                       {data?.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {data?.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${data?.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(data?.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data, isLoading } = useUser();  // This should be null after sign-out
// //   const [isMenu, setMenu] = useState(false);
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Add this console log to check `data`
// //   useEffect(() => {
// //     console.log("User data:", data);
// //   }, [data]);

// //   // Sign-out function
// //   // const signOutUser = async () => {
// //   //   try {
// //   //     await auth.signOut();  // Sign out from Firebase
// //   //     queryClient.invalidateQueries("user");  // Invalidate the user query
// //   //     queryClient.setQueryData("user", null); // Explicitly set user data to null
// //   //     localStorage.clear();  // Clear localStorage if necessary
// //   //     setMenu(false);  // Close the menu after sign out
// //   //   } catch (error) {
// //   //     console.error("Sign-out failed", error);
// //   //   }
// //   // };

// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       queryClient.invalidateQueries("user"); // Clear user cache
// //       localStorage.clear(); // Clear local storage data
// //       console.log("User signed out, cache and local storage cleared.");

// //       // Check the value of `data`
// //       console.log(queryClient.getQueryData("user")); // Should be null after invalidation

// //       window.location.reload(); // Reload the page to reset the UI
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm("");
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {isLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {data ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {data?.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={data?.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                     <p className="text-lg text-white">{data?.email}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {data?.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={data?.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-blue-700 shadow-md cursor-pointer">
// //                           <p className="text-3 text-white">{data?.email[0]}</p>
// //                         </div>
// //                       )}
// //                       {data?.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {data?.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${data?.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(data?.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                       <div
// //                          className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                          onClick={signOutUser}
// //                        >
// //                          <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                            Sign Out
// //                          </p>
// //                          <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                        </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data, isLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       queryClient.invalidateQueries("user");
// //       localStorage.clear();
// //       window.location.reload();
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm("");
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {isLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {data ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {data?.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={data?.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer bg-gray-300">
// //                     <p className="text-lg text-black">{data?.email}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {data?.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={data?.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-gray-300 cursor-pointer">
// //                           <p className="text-3 text-black">{data?.email[0]}</p>
// //                         </div>
// //                       )}
// //                       {data?.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {data?.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${data?.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(data?.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data, isLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       queryClient.invalidateQueries("user"); // Mark query for refetching
// //       localStorage.clear(); // Clear local storage
// //       window.location.reload(); // Reset the UI after sign out
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {isLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {data ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {data.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={data.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center bg-gray-700 shadow-md cursor-pointer">
// //                     <p className="text-lg text-white">{data.email[0]}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {data.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={data.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-gray-700 shadow-md cursor-pointer">
// //                           <p className="text-3 text-white">{data.email[0]}</p>
// //                         </div>
// //                       )}
// //                       {data.displayName && (
// //                         <p className="text-lg text-txtDark">{data.displayName}</p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${data.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(data.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data, isLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       queryClient.invalidateQueries("user"); // Mark query for refetching
// //       localStorage.clear(); // Clear local storage
// //       window.location.reload(); // Reset the UI after sign out
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {isLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {data ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {data.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={data.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center bg-gray-700 shadow-md cursor-pointer">
// //                     <p className="text-lg text-white">{data.email ? data.email[0] : '?'}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {data.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={data.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-gray-700 shadow-md cursor-pointer">
// //                           <p className="text-3 text-white">{data.email ? data.email[0] : '?'}</p>
// //                         </div>
// //                       )}
// //                       {data.displayName && (
// //                         <p className="text-lg text-txtDark">{data.displayName}</p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${data.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(data.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link, useNavigate } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations"; // Corrected spelling

// // const Header = () => {
// //   const { data, isLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");
// //   const navigate = useNavigate(); // Added for navigation

// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   const signOutUser = async () => {
// //     await auth.signOut().then(() => {
// //       // Invalidate the user query to trigger a re-fetch or clear cache
// //       queryClient.setQueryData("user",null);
// //     });
// //   };

// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity} // Corrected spelling
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {isLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <>
// //             {data ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity} // Corrected spelling
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {data.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={data.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center bg-gray-700 shadow-md cursor-pointer">
// //                     <p className="text-lg text-white">{data.email ? data.email[0] : '?'}</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {data.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={data.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-gray-700 shadow-md cursor-pointer">
// //                           <p className="text-3 text-white">{data.email ? data.email[0] : '?'}</p>
// //                         </div>
// //                       )}
// //                       {data.displayName && (
// //                         <p className="text-lg text-txtDark">{data.displayName}</p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${data.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(data.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity} // Corrected spelling
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;
// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Function to sign out user
// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       queryClient.setQueryData("user", null);
// //       queryClient.invalidateQueries("user");
// //       setUpdateTrigger((prev) => !prev); // Toggle state to force re-render
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   // Check user authentication status and update UI accordingly
// //   useEffect(() => {
// //     if (user === null) {
// //       setUpdateTrigger((prev) => !prev); // Force re-render if user becomes null
// //     }
// //   }, [user]);

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={filterData?.searchTerm || ""}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm?.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {userLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {user ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {user.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={user.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     {/* Remove the blue box and replace with a user icon or a placeholder */}
// //                     <p className="text-lg text-gray-500">
// //                       {user.email ? user.email[0] : "?"}
// //                     </p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {user.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={user.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <p className="text-3 text-gray-500">
// //                             {user.email ? user.email[0] : "?"}
// //                           </p>
// //                         </div>
// //                       )}
// //                       {user.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {user.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${user.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(user?.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Function to sign out user
// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       queryClient.setQueryData("user", null);
// //       queryClient.invalidateQueries("user");
// //       setUpdateTrigger((prev) => !prev); // Toggle state to force re-render
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   // Check user authentication status and update UI accordingly
// //   useEffect(() => {
// //     if (user === null) {
// //       setUpdateTrigger((prev) => !prev); // Force re-render if user becomes null
// //     }
// //   }, [user]);

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={filterData?.searchTerm ? filterData?.searchTerm : ""}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm?.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {userLoading ? (
// //           <PuffLoader color="#498FCD" size={40} />
// //         ) : (
// //           <React.Fragment>
// //             {user.email?.[0] ? (
// //               <motion.div
// //                 {...FadeInOutWIthOpacity}
// //                 className="relative"
// //                 onClick={() => setMenu(!isMenu)}
// //               >
// //                 {user.photoURL ? (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     <img
// //                       src={user.photoURL}
// //                       className="w-12 full h-full object-cover rounded-md"
// //                       referrerPolicy="no-referrer"
// //                       alt="User"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                     {/* Remove the blue box and replace with a user icon or a placeholder */}
// //                     <p className="text-lg text-gray-500">{user.email?.[0] || "?" }</p>
// //                   </div>
// //                 )}
// //                 <AnimatePresence>
// //                   {isMenu && (
// //                     <motion.div
// //                       {...slideUpDownMenu}
// //                       className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                       onMouseLeave={() => setMenu(false)}
// //                     >
// //                       {user.photoURL ? (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <img
// //                             src={user.photoURL}
// //                             className="w-full h-full object-cover rounded-full"
// //                             referrerPolicy="no-referrer"
// //                             alt="User"
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                           <p className="text-3 text-gray-500">
// //                             {user.email?.[0] || (
// //                               <Link to={"/auth"}>
// //                                 <motion.button
// //                                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                                   type="button"
// //                                   {...FadeInOutWIthOpacity}
// //                                 >
// //                                   Login
// //                                 </motion.button>
// //                               </Link>
// //                             )}
// //                           </p>
// //                         </div>
// //                       )}
// //                       {user.displayName && (
// //                         <p className="text-lg text-txtDark">
// //                           {user.displayName}
// //                         </p>
// //                       )}

// //                       <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                         <Link
// //                           className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                           to={`/profile/${user.uid}`}
// //                         >
// //                           My Account
// //                         </Link>
// //                         {adminIds.includes(user?.uid) && (
// //                           <Link
// //                             className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                             to={"/template/create"}
// //                           >
// //                             Add New Template
// //                           </Link>
// //                         )}
// //                         <div
// //                           className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                           onClick={signOutUser}
// //                         >
// //                           <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                             Sign Out
// //                           </p>
// //                           <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ) : (
// //               <Link to={"/auth"}>
// //                 <motion.button
// //                   className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //                   type="button"
// //                   {...FadeInOutWIthOpacity}
// //                 >
// //                   Login
// //                 </motion.button>
// //               </Link>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Function to sign out user
// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       queryClient.setQueryData("user", null);
// //       queryClient.invalidateQueries("user");
// //       setUpdateTrigger((prev) => !prev); // Toggle state to force re-render
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   // Check user authentication status and update UI accordingly
// //   useEffect(() => {
// //     if (user === null) {
// //       setUpdateTrigger((prev) => !prev); // Force re-render if user becomes null
// //     }
// //   }, [user]);

// //   // Render a fallback UI or a loading state when user data is not yet available
// //   if (userLoading) {
// //     return <PuffLoader color="#498FCD" size={40} />;
// //   }

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={filterData?.searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm?.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {user ? (
// //           <motion.div
// //             {...FadeInOutWIthOpacity}
// //             className="relative"
// //             onClick={() => setMenu(!isMenu)}
// //           >
// //             {user.photoURL ? (
// //               <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                 <img
// //                   src={user.photoURL}
// //                   className="w-12 full h-full object-cover rounded-md"
// //                   referrerPolicy="no-referrer"
// //                   alt="User"
// //                 />
// //               </div>
// //             ) : (
// //               <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                 <p className="text-lg text-gray-500">
// //                   {user.email?.[0] || ( <Link to={"/auth"}>
// //             <motion.button
// //               className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //               type="button"
// //               {...FadeInOutWIthOpacity}
// //             >
// //               Login
// //             </motion.button>
// //           </Link>)}
// //                 </p>
// //               </div>
// //             )}
// //             <AnimatePresence>
// //               {isMenu && (
// //                 <motion.div
// //                   {...slideUpDownMenu}
// //                   className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                   onMouseLeave={() => setMenu(false)}
// //                 >
// //                   {user.photoURL ? (
// //                     <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                       <img
// //                         src={user.photoURL}
// //                         className="w-full h-full object-cover rounded-full"
// //                         referrerPolicy="no-referrer"
// //                         alt="User"
// //                       />
// //                     </div>
// //                   ) : (
// //                     <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                       <p className="text-3 text-gray-500">
// //                         {user.email?.[0] || "?"}
// //                       </p>
// //                     </div>
// //                   )}
// //                   {user.displayName && (
// //                     <p className="text-lg text-txtDark">{user.displayName}</p>
// //                   )}

// //                   <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                     <Link
// //                       className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                       to={`/profile/${user.uid}`}
// //                     >
// //                       My Account
// //                     </Link>
// //                     {adminIds.includes(user.uid) && (
// //                       <Link
// //                         className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                         to={"/template/create"}
// //                       >
// //                         Add New Template
// //                       </Link>
// //                     )}
// //                     <div
// //                       className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                       onClick={signOutUser}
// //                     >
// //                       <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                         Sign Out
// //                       </p>
// //                       <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </motion.div>
// //         ) : (
// //           <Link to={"/auth"}>
// //             <motion.button
// //               className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //               type="button"
// //               {...FadeInOutWIthOpacity}
// //             >
// //               Login
// //             </motion.button>
// //           </Link>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;



// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Function to sign out user
// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       queryClient.setQueryData("user", null);
// //       queryClient.invalidateQueries("user");
// //       setUpdateTrigger((prev) => !prev); // Toggle state to force re-render
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   // Check user authentication status and update UI accordingly
// //   useEffect(() => {
// //     if (user === null) {
// //       setUpdateTrigger((prev) => !prev); // Force re-render if user becomes null
// //     }
// //   }, [user]);

// //   // Render a fallback UI or a loading state when user data is not yet available
// //   if (userLoading) {
// //     return <PuffLoader color="#498FCD" size={40} />;
// //   }

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm?.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {user ? (
// //           <motion.div
// //             {...FadeInOutWIthOpacity}
// //             className="relative"
// //             onClick={() => setMenu(!isMenu)}
// //           >
// //             {user.photoURL ? (
// //               <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                 <img
// //                   src={user.photoURL}
// //                   className="w-12 full h-full object-cover rounded-md"
// //                   referrerPolicy="no-referrer"
// //                   alt="User"
// //                 />
// //               </div>
// //             ) : (
// //               <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                 <p className="text-lg text-gray-500">
// //                   {user.email?.[0] || ( <Link to={"/auth"}>
// //             <motion.button
// //               className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //               type="button"
// //               {...FadeInOutWIthOpacity}
// //             >
// //               Login
// //             </motion.button>
// //           </Link>)}
// //                 </p>
// //               </div>
// //             )}
// //             <AnimatePresence>
// //               {isMenu && (
// //                 <motion.div
// //                   {...slideUpDownMenu}
// //                   className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center w-48 shadow-md"
// //                 >
// //                   {adminIds.includes(user.uid) && (
// //                     <Link
// //                       to={"/admin"}
// //                       className="text-base text-gray-800 font-semibold mb-2"
// //                     >
// //                       Admin
// //                     </Link>
// //                   )}
// //                   <button
// //                     onClick={signOutUser}
// //                     className="text-base text-red-600 font-semibold"
// //                   >
// //                     <HiLogout className="text-xl mb-1" />
// //                     Logout
// //                   </button>
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </motion.div>
// //         ) : (
// //           <Link to={"/auth"}>
// //             <motion.button
// //               className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //               type="button"
// //               {...FadeInOutWIthOpacity}
// //             >
// //               Login
// //             </motion.button>
// //           </Link>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // // export default Header;
// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   if (userLoading) {
// //     return <PuffLoader color="#498FCD" size={40} />;
// //   }

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm?.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       {/* Rest of your Header code */}
// //     </header>
// //   );
// // };

// // // export default Header;
// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import  Logo  from "../assets-20240903T162903Z-001/assets/img/logo.png";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();
// //   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //       selectedTag: "", // Clear tag filter when using search bar
// //     });
// //   };

// //   const clearSearch = () => {
// //     setSearchTerm("");
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   if (userLoading) {
// //     return <PuffLoader color="#498FCD" size={40} />;
// //   }

// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       {/* Search Bar */}
// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         <input
// //           value={searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         />
// //         <AnimatePresence>
// //           {searchTerm?.length > 0 && (
// //             <motion.div
// //               onClick={clearSearch}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       {/* User Account Menu */}
// //       {/* Your existing user menu logic remains unchanged */}
// //     </header>
// //   );
// // };

// // export default Header;
// // import React, { useState, useEffect } from "react";
// // import useUser from "../hooks/useUser";
// // import { Link } from "react-router-dom";
// // import { Logo } from "../assets-20240903T162903Z-001/assets";
// // import { PuffLoader } from "react-spinners";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { HiLogout } from "react-icons/hi";
// // import { slideUpDownMenu } from "../animations";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { auth } from "../config/firebase.config";
// // import useFilters from "../hooks/useFilters";
// // import { adminIds } from "../utils/helpers";
// // import { FadeInOutWIthOpacity } from "../animations";

// // const Header = () => {
// //   const { data: user, isLoading: userLoading } = useUser();
// //   const [isMenu, setMenu] = useState(false);
// //   const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
// //   const queryClient = useQueryClient();
// //   const { data: filterData = {} } = useFilters();

// //   // Local state to handle search term input
// //   // const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

// //   // Synchronize searchTerm with filterData.searchTerm
// //   useEffect(() => {
// //     setSearchTerm(filterData.searchTerm || "");
// //   }, [filterData.searchTerm]);

// //   // Function to sign out user
// //   const signOutUser = async () => {
// //     try {
// //       await auth.signOut();
// //       queryClient.setQueryData("user", null);
// //       queryClient.invalidateQueries("user");
// //       setUpdateTrigger((prev) => !prev); // Toggle state to force re-render
// //     } catch (error) {
// //       console.error("Sign-out failed", error);
// //     }
// //   };

// //   // Handle changes in the search input
// //   const handleSearchTerm = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Update the global filter data in the query cache
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: value,
// //     });
// //   };

// //   const clearFilter = () => {
// //     setSearchTerm(""); // Clear the local state
// //     queryClient.setQueryData("globalFilter", {
// //       ...queryClient.getQueryData("globalFilter"),
// //       searchTerm: "",
// //     });
// //   };

// //   // Check user authentication status and update UI accordingly
// //   useEffect(() => {
// //     if (user === null) {
// //       setUpdateTrigger((prev) => !prev); // Force re-render if user becomes null
// //     }
// //   }, [user]);

// //   // Render a fallback UI or a loading state when user data is not yet available
// //   if (userLoading) {
// //     return <PuffLoader color="#498FCD" size={40} />;
// //   }
 
// //     const [searchTerm, setSearchTerm] = useState('');
  
// //     const handleInputChange = (e) => {
// //       const value = e.target.value;
// //       setSearchTerm(value);
// //       handleSearch(value); // Send search term to parent (HomeContainer)
// //     };
// //   return (
// //     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
// //       <Link to={"/"}>
// //         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
// //       </Link>

// //       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
// //         {/* <input
// //           value={filterData?.searchTerm}
// //           onChange={handleSearchTerm}
// //           type="text"
// //           placeholder="Search here..."
// //           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //         /> */}
// //           <div className="search-bar-container">
// //       <input
// //         type="text"
// //         value={searchTerm}
// //         onChange={(e) => handleSearch(e.target.value)}
// //         placeholder="Search templates..."
// //         // className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
// //          className="search-input"
// //       />
// //     </div>
// //         <AnimatePresence>
// //           {searchTerm?.length > 0 && (
// //             <motion.div
// //               onClick={clearFilter}
// //               {...FadeInOutWIthOpacity}
// //               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
// //             >
// //               <p className="text-2xl text-black">x</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <AnimatePresence>
// //         {user ? (
// //           <motion.div
// //             {...FadeInOutWIthOpacity}
// //             className="relative"
// //             onClick={() => setMenu(!isMenu)}
// //           >
// //             {user.photoURL ? (
// //               <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                 <img
// //                   src={user.photoURL}
// //                   className="w-12 full h-full object-cover rounded-md"
// //                   referrerPolicy="no-referrer"
// //                   alt="User"
// //                 />
// //               </div>
// //             ) : (
// //               <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
// //                 <p className="text-lg text-gray-500">
// //                   {user.email?.[0] || ( <Link to={"/auth"}>
// //             <motion.button
// //               className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //               type="button"
// //               {...FadeInOutWIthOpacity}
// //             >
// //               Login
// //             </motion.button>
// //           </Link>)}
// //                 </p>
// //               </div>
// //             )}
// //             <AnimatePresence>
// //               {isMenu && (
// //                 <motion.div
// //                   {...slideUpDownMenu}
// //                   className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
// //                   onMouseLeave={() => setMenu(false)}
// //                 >
// //                   {user.photoURL ? (
// //                     <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                       <img
// //                         src={user.photoURL}
// //                         className="w-full h-full object-cover rounded-full"
// //                         referrerPolicy="no-referrer"
// //                         alt="User"
// //                       />
// //                     </div>
// //                   ) : (
// //                     <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
// //                       <p className="text-3 text-gray-500">
// //                         {user.email?.[0] || "?"}
// //                       </p>
// //                     </div>
// //                   )}
// //                   {user.displayName && (
// //                     <p className="text-lg text-txtDark">{user.displayName}</p>
// //                   )}

// //                   <div className="w-full flex-col items-start flex gap-8 pt-6">
// //                     <Link
// //                       className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                       to={`/profile/${user.uid}`}
// //                     >
// //                       My Account
// //                     </Link>
// //                     {adminIds.includes(user.uid) && (
// //                       <Link
// //                         className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
// //                         to={"/template/create"}
// //                       >
// //                         Add New Template
// //                       </Link>
// //                     )}
// //                     <div
// //                       className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
// //                       onClick={signOutUser}
// //                     >
// //                       <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
// //                         Sign Out
// //                       </p>
// //                       <HiLogout className="group-hover:text-txtDark text-txtLight" />
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </motion.div>
// //         ) : (
// //           <Link to={"/auth"}>
// //             <motion.button
// //               className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
// //               type="button"
// //               {...FadeInOutWIthOpacity}
// //             >
// //               Login
// //             </motion.button>
// //           </Link>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;




// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Logo } from "../assets-20240903T162903Z-001/assets";
// import { PuffLoader } from "react-spinners";
// import { AnimatePresence, motion } from "framer-motion";
// import { HiLogout } from "react-icons/hi";
// import { slideUpDownMenu } from "../animations";
// import { useQueryClient } from "@tanstack/react-query";
// import { auth } from "../config/firebase.config";
// import useFilters from "../hooks/useFilters";
// import { adminIds } from "../utils/helpers";
// import { FadeInOutWIthOpacity } from "../animations";
// import useUser from "../hooks/useUser";

// const HeaderSearchBar = () => {
//   const { data: user, isLoading: userLoading } = useUser();
//   const [isMenu, setMenu] = useState(false);
//   const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
//   const [searchTerm, setSearchTerm] = useState(''); // Local state for search term
//   const queryClient = useQueryClient();
//   const { data: filterData = {} } = useFilters();

//   // Synchronize searchTerm with filterData.searchTerm
//   useEffect(() => {
//     setSearchTerm(filterData.searchTerm || "");
//   }, [filterData.searchTerm]);

//   // Function to sign out user
//   const signOutUser = async () => {
//     try {
//       await auth.signOut();
//       queryClient.setQueryData("user", null);
//       queryClient.invalidateQueries("user");
//       setUpdateTrigger((prev) => !prev); // Toggle state to force re-render
//     } catch (error) {
//       console.error("Sign-out failed", error);
//     }
//   };

//   // Handle changes in the search input
//   const handleSearch = (term) => {
//     setSearchTerm(term);

//     // Update the global filter data in the query cache
//     queryClient.setQueryData("globalFilter", {
//       ...queryClient.getQueryData("globalFilter"),
//       searchTerm: term,
//     });
//   };

//   const clearFilter = () => {
//     setSearchTerm(""); // Clear the local state
//     queryClient.setQueryData("globalFilter", {
//       ...queryClient.getQueryData("globalFilter"),
//       searchTerm: "",
//     });
//   };

//   // Check user authentication status and update UI accordingly
//   useEffect(() => {
//     if (user === null) {
//       setUpdateTrigger((prev) => !prev); // Force re-render if user becomes null
//     }
//   }, [user]);

//   // Render a fallback UI or a loading state when user data is not yet available
//   if (userLoading) {
//     return <PuffLoader color="#498FCD" size={40} />;
//   }

//   return (
//     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
//       <Link to={"/"}>
//         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
//       </Link>

//       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => handleSearch(e.target.value)}
//           placeholder="Search templates..."
//           className="search-input"
//         />
//         <AnimatePresence>
//           {searchTerm?.length > 0 && (
//             <motion.div
//               onClick={clearFilter}
//               {...FadeInOutWIthOpacity}
//               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
//             >
//               <p className="text-2xl text-black">x</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       <AnimatePresence>
//         {user ? (
//           <motion.div
//             {...FadeInOutWIthOpacity}
//             className="relative"
//             onClick={() => setMenu(!isMenu)}
//           >
//             {user.photoURL ? (
//               <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
//                 <img
//                   src={user.photoURL}
//                   className="w-12 full h-full object-cover rounded-md"
//                   referrerPolicy="no-referrer"
//                   alt="User"
//                 />
//               </div>
//             ) : (
//               <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
//                 <p className="text-lg text-gray-500">
//                   {user.email?.[0] || (
//                     <Link to={"/auth"}>
//                       <motion.button
//                         className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
//                         type="button"
//                         {...FadeInOutWIthOpacity}
//                       >
//                         Login
//                       </motion.button>
//                     </Link>
//                   )}
//                 </p>
//               </div>
//             )}
//             <AnimatePresence>
//               {isMenu && (
//                 <motion.div
//                   {...slideUpDownMenu}
//                   className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
//                   onMouseLeave={() => setMenu(false)}
//                 >
//                   {user.photoURL ? (
//                     <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
//                       <img
//                         src={user.photoURL}
//                         className="w-full h-full object-cover rounded-full"
//                         referrerPolicy="no-referrer"
//                         alt="User"
//                       />
//                     </div>
//                   ) : (
//                     <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
//                       <p className="text-3 text-gray-500">
//                         {user.email?.[0] || "?"}
//                       </p>
//                     </div>
//                   )}
//                   {user.displayName && (
//                     <p className="text-lg text-txtDark">{user.displayName}</p>
//                   )}

//                   <div className="w-full flex-col items-start flex gap-8 pt-6">
//                     <Link
//                       className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
//                       to={`/profile/${user.uid}`}
//                     >
//                       My Account
//                     </Link>
//                     {adminIds.includes(user.uid) && (
//                       <Link
//                         className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
//                         to={"/template/create"}
//                       >
//                         Add New Template
//                       </Link>
//                     )}
//                     <div
//                       className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
//                       onClick={signOutUser}
//                     >
//                       <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
//                         Sign Out
//                       </p>
//                       <HiLogout className="group-hover:text-txtDark text-txtLight" />
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         ) : (
//           <Link to={"/auth"}>
//             <motion.button
//               className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
//               type="button"
//               {...FadeInOutWIthOpacity}
//             >
//               Login
//             </motion.button>
//           </Link>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// // export default Header;
// // export default HeaderSearchBar;
// import React, { useState, useEffect } from "react";
// import useUser from "../hooks/useUser";
// import { Link } from "react-router-dom";
// import { Logo } from "../assets-20240903T162903Z-001/assets";
// import { PuffLoader } from "react-spinners";
// import { AnimatePresence, motion } from "framer-motion";
// import { HiLogout } from "react-icons/hi";
// import { slideUpDownMenu } from "../animations";
// import { useQueryClient } from "@tanstack/react-query";
// import { auth } from "../config/firebase.config";
// import useFilters from "../hooks/useFilters";
// import { adminIds } from "../utils/helpers";
// import { FadeInOutWIthOpacity } from "../animations";

// const Header = () => {
//   const { data: user, isLoading: userLoading } = useUser();
//   const [isMenu, setMenu] = useState(false);
//   const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
//   const queryClient = useQueryClient();
//   const { data: filterData = {} } = useFilters();

//   // Local state to handle search term input
//   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

//   // Synchronize searchTerm with filterData.searchTerm
//   useEffect(() => {
//     setSearchTerm(filterData.searchTerm || "");
//   }, [filterData.searchTerm]);

//   // Function to sign out user
//   const signOutUser = async () => {
//     try {
//       await auth.signOut();
//       queryClient.setQueryData("user", null);
//       queryClient.invalidateQueries("user");
//       setUpdateTrigger((prev) => !prev); // Toggle state to force re-render
//     } catch (error) {
//       console.error("Sign-out failed", error);
//     }
//   };

//   // Handle changes in the search input
//   const handleSearchTerm = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     // Update the global filter data in the query cache
//     queryClient.setQueryData("globalFilter", {
//       ...queryClient.getQueryData("globalFilter"),
//       searchTerm: value,
//     });
//   };

//   const clearFilter = () => {
//     setSearchTerm(""); // Clear the local state
//     queryClient.setQueryData("globalFilter", {
//       ...queryClient.getQueryData("globalFilter"),
//       searchTerm: "",
//     });
//   };

//   // Check user authentication status and update UI accordingly
//   useEffect(() => {
//     if (user === null) {
//       setUpdateTrigger((prev) => !prev); // Force re-render if user becomes null
//     }
//   }, [user]);

//   // Render a fallback UI or a loading state when user data is not yet available
//   if (userLoading) {
//     return <PuffLoader color="#498FCD" size={40} />;
//   }

//   return (
//     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
//       <Link to={"/"}>
//         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
//       </Link>

//       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
//         <input
//           value={searchTerm}
//           onChange={handleSearchTerm}
//           type="text"
//           placeholder="Search here..."
//           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
//         />
//         <AnimatePresence>
//           {searchTerm?.length > 0 && (
//             <motion.div
//               onClick={clearFilter}
//               {...FadeInOutWIthOpacity}
//               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
//             >
//               <p className="text-2xl text-black">x</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       <AnimatePresence>
//         {user ? (
//           <motion.div
//             {...FadeInOutWIthOpacity}
//             className="relative"
//             onClick={() => setMenu(!isMenu)}
//           >
//             {user.photoURL ? (
//               <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
//                 <img
//                   src={user.photoURL}
//                   className="w-12 full h-full object-cover rounded-md"
//                   referrerPolicy="no-referrer"
//                   alt="User"
//                 />
//               </div>
//             ) : (
//               <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
//                 <p className="text-lg text-gray-500">
//                   {user.email?.[0] || ( <Link to={"/auth"}>
//             <motion.button
//               className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
//               type="button"
//               {...FadeInOutWIthOpacity}
//             >
//               Login
//             </motion.button>
//           </Link>)}
//                 </p>
//               </div>
//             )}
//             <AnimatePresence>
//               {isMenu && (
//                 <motion.div
//                   {...slideUpDownMenu}
//                   className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
//                   onMouseLeave={() => setMenu(false)}
//                 >
//                   {user.photoURL ? (
//                     <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
//                       <img
//                         src={user.photoURL}
//                         className="w-full h-full object-cover rounded-full"
//                         referrerPolicy="no-referrer"
//                         alt="User"
//                       />
//                     </div>
//                   ) : (
//                     <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
//                       <p className="text-3 text-gray-500">
//                         {user.email?.[0] || "?"}
//                       </p>
//                     </div>
//                   )}
//                   {user.displayName && (
//                     <p className="text-lg text-txtDark">{user.displayName}</p>
//                   )}

//                   <div className="w-full flex-col items-start flex gap-8 pt-6">
//                     <Link
//                       className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
//                       to={`/profile/${user.uid}`}
//                     >
//                       My Account
//                     </Link>
//                     {adminIds.includes(user.uid) && (
//                       <Link
//                         className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
//                         to={"/template/create"}
//                       >
//                         Add New Template
//                       </Link>
//                     )}
//                     <div
//                       className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
//                       onClick={signOutUser}
//                     >
//                       <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
//                         Sign Out
//                       </p>
//                       <HiLogout className="group-hover:text-txtDark text-txtLight" />
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         ) : (
//           <Link to={"/auth"}>
//             <motion.button
//               className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
//               type="button"
//               {...FadeInOutWIthOpacity}
//             >
//               Login
//             </motion.button>
//           </Link>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;




// import React, { useState, useEffect } from "react";
// import useUser from "../hooks/useUser";
// import { Link } from "react-router-dom";
// import { Logo } from "../assets-20240903T162903Z-001/assets";
// import { PuffLoader } from "react-spinners";
// import { AnimatePresence, motion } from "framer-motion";
// import { HiLogout } from "react-icons/hi";
// import { slideUpDownMenu } from "../animations";
// import { useQueryClient } from "@tanstack/react-query";
// import { auth } from "../config/firebase.config";
// import useFilters from "../hooks/useFilters";
// import { adminIds } from "../utils/helpers";
// import { FadeInOutWIthOpacity } from "../animations";

// const Header = ({ onSearchTermChange }) => {
//   const { data: user, isLoading: userLoading } = useUser();
//   const [isMenu, setMenu] = useState(false);
//   const [searchTerm, setSearchTerm] = useState(""); // Local state for search term
//   const queryClient = useQueryClient();
//   const { data: filterData = {} } = useFilters();

//   useEffect(() => {
//     setSearchTerm(filterData.searchTerm || "");
//   }, [filterData.searchTerm]);

//   useEffect(() => {
//     onSearchTermChange(searchTerm); // Pass search term to parent component
//   }, [searchTerm, onSearchTermChange]);

//   const signOutUser = async () => {
//     try {
//       await auth.signOut();
//       queryClient.setQueryData("user", null);
//       queryClient.invalidateQueries("user");
//     } catch (error) {
//       console.error("Sign-out failed", error);
//     }
//   };

//   // const handleSearchTerm = (e) => {
//   //   const value = e.target.value;
//   //   setSearchTerm(value);
//   //   queryClient.setQueryData("globalFilter", {
//   //     ...queryClient.getQueryData("globalFilter"),
//   //     searchTerm: value,
//   //   });
//   // };
//   const handleSearchTerm = (e) => {
//     setSearchTerm(e.target.value);
//     onSearchTermChange(e.target.value); // Notify parent of search term change
//   };
//   const clearFilter = () => {
//     setSearchTerm("");
//     queryClient.setQueryData("globalFilter", {
//       ...queryClient.getQueryData("globalFilter"),
//       searchTerm: "",
//     });
//   };

//   if (userLoading) {
//     return <PuffLoader color="#498FCD" size={40} />;
//   }

//   return (
//     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
//       <Link to={"/"}>
//         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
//       </Link>

//       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
//         <input
//           value={searchTerm}
//           onChange={handleSearchTerm}
//           type="text"
//           placeholder="Search here..."
//           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
//         />
//         <AnimatePresence>
//           {searchTerm?.length > 0 && (
//             <motion.div
//               onClick={clearFilter}
//               {...FadeInOutWIthOpacity}
//               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
//             >
//               <p className="text-2xl text-black">x</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       <AnimatePresence>
//         {user ? (
//           <motion.div
//             {...FadeInOutWIthOpacity}
//             className="relative"
//             onClick={() => setMenu(!isMenu)}
//           >
//             {user.photoURL ? (
//               <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
//                 <img
//                   src={user.photoURL}
//                   className="w-12 full h-full object-cover rounded-md"
//                   referrerPolicy="no-referrer"
//                   alt="User"
//                 />
//               </div>
//             ) : (
//               <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
//                 <p className="text-lg text-gray-500">
//                   {user.email?.[0] || ( 
//                     <Link to={"/auth"}>
//                       <motion.button
//                         className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
//                         type="button"
//                         {...FadeInOutWIthOpacity}
//                       >
//                         Login
//                       </motion.button>
//                     </Link>
//                   )}
//                 </p>
//               </div>
//             )}
//             <AnimatePresence>
//               {isMenu && (
//                 <motion.div
//                   {...slideUpDownMenu}
//                   className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
//                   onMouseLeave={() => setMenu(false)}
//                 >
//                   {user.photoURL ? (
//                     <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
//                       <img
//                         src={user.photoURL}
//                         className="w-full h-full object-cover rounded-full"
//                         referrerPolicy="no-referrer"
//                         alt="User"
//                       />
//                     </div>
//                   ) : (
//                     <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
//                       <p className="text-3 text-gray-500">
//                         {user.email?.[0] || "?"}
//                       </p>
//                     </div>
//                   )}
//                   {user.displayName && (
//                     <p className="text-lg text-txtDark">{user.displayName}</p>
//                   )}

//                   <div className="w-full flex-col items-start flex gap-8 pt-6">
//                     <Link
//                       className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
//                       to={`/profile/${user.uid}`}
//                     >
//                       My Account
//                     </Link>
//                     {adminIds.includes(user.uid) && (
//                       <Link
//                         className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
//                         to={"/template/create"}
//                       >
//                         Add New Template
//                       </Link>
//                     )}
//                     <div
//                       className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
//                       onClick={signOutUser}
//                     >
//                       <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
//                         Sign Out
//                       </p>
//                       <HiLogout className="group-hover:text-txtDark text-txtLight" />
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         ) : (
//           <Link to={"/auth"}>
//             <motion.button
//               className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
//               type="button"
//               {...FadeInOutWIthOpacity}
//             >
//               Login
//             </motion.button>
//           </Link>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// // export default Header;
// import React, { useState, useEffect } from "react";
// import useUser from "../hooks/useUser";
// import { Link } from "react-router-dom";
// import { Logo } from "../assets-20240903T162903Z-001/assets";
// import { PuffLoader } from "react-spinners";
// import { AnimatePresence, motion } from "framer-motion";
// import { HiLogout } from "react-icons/hi";
// import { slideUpDownMenu } from "../animations";
// import { useQueryClient } from "@tanstack/react-query";
// import { auth } from "../config/firebase.config";
// import useFilters from "../hooks/useFilters";
// import { adminIds } from "../utils/helpers";
// import { FadeInOutWIthOpacity } from "../animations";
// import { useFilterContext } from "../context/filterContext";

// const Header = () => {
//   const { data: user, isLoading: userLoading } = useUser();
//   const [isMenu, setMenu] = useState(false);
//   const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
//   const queryClient = useQueryClient();
//   // const { data: filterData = {} } = useFilters();
//   const { filterData, setFilterData } = useFilterContext();
//   // Local state to handle search term input
//   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

//   // Synchronize searchTerm with filterData.searchTerm
//   useEffect(() => {
//     setSearchTerm(filterData.searchTerm || "");
//   }, [filterData.searchTerm]);

//   // Function to sign out user
//   const signOutUser = async () => {
//     try {
//       await auth.signOut();
//       queryClient.setQueryData("user", null);
//       queryClient.invalidateQueries("user");
//       setUpdateTrigger((prev) => !prev); // Toggle state to force re-render
//     } catch (error) {
//       console.error("Sign-out failed", error);
//     }
//   };

//   // Handle changes in the search input
//   // const handleSearchTerm = (e) => {
//   //   const value = e.target.value;
//   //   setSearchTerm(value);

//   //   // Update the global filter data in the query cache
//   //   queryClient.setQueryData("globalFilter", {
//   //     ...queryClient.getQueryData("globalFilter"),
//   //     searchTerm: value,
//   //   });
//   // };
//   // const handleSearchTerm = (event) => {
//   //   // Update the search term in filterData
//   //   setFilterData({
//   //     ...filterData,
//   //     searchTerm: event.target.value,
//   //   });
//   // };

//   const handleSearchTerm = (e) => {
//     const value = e.target.value;
//     console.log('Search Term:', value); // Log search term as it's typed
//     setFilterData({
//       ...filterData,
//       searchTerm: value,
//     });
//   };
  




//   const clearFilter = () => {
//     setSearchTerm(""); // Clear the local state
//     queryClient.setQueryData("globalFilter", {
//       ...queryClient.getQueryData("globalFilter"),
//       searchTerm: "",
//     });
//   };

//   // Check user authentication status and update UI accordingly
//   useEffect(() => {
//     if (user === null) {
//       setUpdateTrigger((prev) => !prev); // Force re-render if user becomes null
//     }
//   }, [user]);

//   // Render a fallback UI or a loading state when user data is not yet available
//   if (userLoading) {
//     return <PuffLoader color="#498FCD" size={40} />;
//   }

//   return (
//     <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
//       <Link to={"/"}>
//         <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
//       </Link>

//       <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
//         <input
//           value={filterData.searchTerm}
//           onChange={handleSearchTerm}
//           type="text"
//           placeholder="Search here..."
//           className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
//         />
//         <AnimatePresence>
//           {searchTerm?.length > 0 && (
//             <motion.div
//               onClick={clearFilter}
//               {...FadeInOutWIthOpacity}
//               className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
//             >
//               <p className="text-2xl text-black">x</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       <AnimatePresence>
//         {user ? (
//           <motion.div
//             {...FadeInOutWIthOpacity}
//             className="relative"
//             onClick={() => setMenu(!isMenu)}
//           >
//             {user.photoURL ? (
//               <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
//                 <img
//                   src={user.photoURL}
//                   className="w-12 full h-full object-cover rounded-md"
//                   referrerPolicy="no-referrer"
//                   alt="User"
//                 />
//               </div>
//             ) : (
//               <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
//                 <p className="text-lg text-gray-500">
//                   {user.email?.[0] || ( <Link to={"/auth"}>
//             <motion.button
//               className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
//               type="button"
//               {...FadeInOutWIthOpacity}
//             >
//               Login
//             </motion.button>
//           </Link>)}
//                 </p>
//               </div>
//             )}
//             <AnimatePresence>
//               {isMenu && (
//                 <motion.div
//                   {...slideUpDownMenu}
//                   className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
//                   onMouseLeave={() => setMenu(false)}
//                 >
//                   {user.photoURL ? (
//                     <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
//                       <img
//                         src={user.photoURL}
//                         className="w-full h-full object-cover rounded-full"
//                         referrerPolicy="no-referrer"
//                         alt="User"
//                       />
//                     </div>
//                   ) : (
//                     <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
//                       <p className="text-3 text-gray-500">
//                         {user.email?.[0] || "?"}
//                       </p>
//                     </div>
//                   )}
//                   {user.displayName && (
//                     <p className="text-lg text-txtDark">{user.displayName}</p>
//                   )}

//                   <div className="w-full flex-col items-start flex gap-8 pt-6">
//                     <Link
//                       className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
//                       to={`/profile/${user.uid}`}
//                     >
//                       My Account
//                     </Link>
//                     {adminIds.includes(user.uid) && (
//                       <Link
//                         className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
//                         to={"/template/create"}
//                       >
//                         Add New Template
//                       </Link>
//                     )}
//                     <div
//                       className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
//                       onClick={signOutUser}
//                     >
//                       <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
//                         Sign Out
//                       </p>
//                       <HiLogout className="group-hover:text-txtDark text-txtLight" />
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         ) : (
//           <Link to={"/auth"}>
//             <motion.button
//               className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
//               type="button"
//               {...FadeInOutWIthOpacity}
//             >
//               Login
//             </motion.button>
//           </Link>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;




import React, { useState, useEffect } from "react";
import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";
import { Logo } from "../assets-20240903T162903Z-001/assets";
import { PuffLoader } from "react-spinners";
import { AnimatePresence, motion } from "framer-motion";
import { HiLogout } from "react-icons/hi";
import { slideUpDownMenu } from "../animations";
import { useQueryClient } from "@tanstack/react-query";
import { auth } from "../config/firebase.config";
import useFilters from "../hooks/useFilters";
import { adminIds } from "../utils/helpers";
import { FadeInOutWIthOpacity } from "../animations";
import { useFilterContext } from "../context/filterContext";

const Header = () => {
  const { data: user, isLoading: userLoading } = useUser();
  const [isMenu, setMenu] = useState(false);
  const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
  const queryClient = useQueryClient();
  const { filterData, setFilterData } = useFilterContext();
  const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");

  // Synchronize searchTerm with filterData.searchTerm
  useEffect(() => {
    setSearchTerm(filterData.searchTerm || "");
  }, [filterData.searchTerm]);

  // Function to sign out user
  const signOutUser = async () => {
    try {
      await auth.signOut();
      queryClient.setQueryData("user", null);
      queryClient.invalidateQueries("user");
      setUpdateTrigger((prev) => !prev); // Toggle state to force re-render
    } catch (error) {
      console.error("Sign-out failed", error);
    }
  };

  // Handle changes in the search input
  const handleSearchTerm = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilterData({
      ...filterData,
      searchTerm: value,
    });
  };

  const clearFilter = () => {
    setSearchTerm(""); // Clear the local state
    setFilterData({
      ...filterData,
      searchTerm: "", // Clear the global filter data
    });
    queryClient.setQueryData("globalFilter", {
      ...queryClient.getQueryData("globalFilter"),
      searchTerm: "",
    });
  };

  // Check user authentication status and update UI accordingly
  useEffect(() => {
    if (user === null) {
      setUpdateTrigger((prev) => !prev); // Force re-render if user becomes null
    }
  }, [user]);

  // Render a fallback UI or a loading state when user data is not yet available
  if (userLoading) {
    return <PuffLoader color="#498FCD" size={40} />;
  }

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0">
      <Link to={"/"}>
        <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
      </Link>

      <div className="flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
        <input
          value={searchTerm} // Use local state for input value
          onChange={handleSearchTerm}
          type="text"
          placeholder="Search here..."
          className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
        />
        <AnimatePresence>
          {searchTerm.length > 0 && ( // Ensure the clear button appears when there's text
            <motion.div
              onClick={clearFilter}
              {...FadeInOutWIthOpacity}
              className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md cursor-pointer active:scale-95 duration-150"
            >
              <p className="text-2xl text-black">x</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {user ? (
          <motion.div
            {...FadeInOutWIthOpacity}
            className="relative"
            onClick={() => setMenu(!isMenu)}
          >
            {user.photoURL ? (
              <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
                <img
                  src={user.photoURL}
                  className="w-12 full h-full object-cover rounded-md"
                  referrerPolicy="no-referrer"
                  alt="User"
                />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
                <p className="text-lg text-gray-500">
                  {user.email?.[0] || (<Link to={"/auth"}>
            <motion.button
              className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
              type="button"
              {...FadeInOutWIthOpacity}
            >
              Login
            </motion.button>
          </Link>)}
                </p>
              </div>
            )}
            <AnimatePresence>
              {isMenu && (
                <motion.div
                  {...slideUpDownMenu}
                  className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
                  onMouseLeave={() => setMenu(false)}
                >
                  {user.photoURL ? (
                    <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
                      <img
                        src={user.photoURL}
                        className="w-full h-full object-cover rounded-full"
                        referrerPolicy="no-referrer"
                        alt="User"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
                      <p className="text-3 text-gray-500">
                        {user.email?.[0] || (<Link to={"/auth"}>
            <motion.button
              className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
              type="button"
              {...FadeInOutWIthOpacity}
            >
              Login
            </motion.button>
          </Link>)}
                      </p>
                    </div>
                  )}
                  {user.displayName && (
                    <p className="text-lg text-txtDark">{user.displayName}</p>
                  )}

                  <div className="w-full flex-col items-start flex gap-8 pt-6">
                    <Link
                      className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
                      to={`/profile/${user.uid}`}
                    >
                      My Account
                    </Link>
                    {adminIds.includes(user.uid) && (
                      <Link
                        className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
                        to={"/template/create"}
                      >
                        Add New Template
                      </Link>
                    )}
                    <div
                      className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
                      onClick={signOutUser}
                    >
                      <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
                        Sign Out
                      </p>
                      <HiLogout className="group-hover:text-txtDark text-txtLight" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <Link to={"/auth"}>
            <motion.button
              className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
              type="button"
              {...FadeInOutWIthOpacity}
            >
              Login
            </motion.button>
          </Link>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
