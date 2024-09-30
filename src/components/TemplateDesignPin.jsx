// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { FadeInOutWithOpacity, scaleInOut } from "../animations";
// import { BiFolderPlus, BifolderPlus, BiHeart } from "react-icons/bi";
// import { saveToCollections } from "../api";
// import useUser from "../hooks/useUser";
// const TemplateDesignPin = ({ data, index }) => {
//   const { data: user, refetch: useRefetch } = useUser();

//   const addToCollection = async (e) => {
//     e.stopPropagation();
//     await saveToCollections(user, data);
//     userRefetch();
//   };

//   const addToFavourites = async () => {};

//   return (
//     <motion.div key={data?._id} {...scaleInOut(index)}>
//       <div className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative">
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt=""
//         />
//         <AnimatePresence>
//           <motion.div
//             {...FadeInOutWithOpacity}
//             className="absolute insert-0 bg-[rgba(0,0,0,0.4)] flex flex-col items-center justify-start px-4 py-3 z-50 cursor-pointer"
//           >
//             <div className="flex flex-col items-end justify-start w-full gap-8">
//               <InnerBoxCard
//                 label={"Addto Collection"}
//                 Icon={BiFolderPlus}
//                 onHandle={addToCollection}
//               />

//               <InnerBoxCard
//                 label={"Addto Favourties"}
//                 Icon={BiHeart}
//                 onHandle={addToFavourites}
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// const InnerBoxCard = ({ label, Icon, onHandle }) => {
//   const [isHovered, setHovered] = useState(false);
//   return (
//     <div
//       onclick={onHandle}
//       className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center hover:shadow-md relative"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <Icon className="text-txtPrimary text-base" />
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.6, x: 50 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             exit={{ opacity: 0, scale: 0.6, x: 50 }}
//             className="px-3 py-2 rounded-md bg-gray-200 absolute-left-44 after:w-2 after:h-2 after:bg-gray-200 after:absolute after:right-1 after:top-[14px] after:rotate-45"
//           >
//             <p className="text-sm text-txtPrimary whitespace-nowrap">{label}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default TemplateDesignPin;

// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { FadeInOutWithOpacity, scaleInOut } from "../animations";
// import { BiFolderPlus, BiHeart } from "react-icons/bi";
// import { saveToCollections } from "../api";
// import useUser from "../hooks/useUser";

// const TemplateDesignPin = ({ data, index }) => {
//   const { data: user, refetch: useRefetch } = useUser();

//   const addToCollection = async (e) => {
//     e.stopPropagation();
//     await saveToCollections(user, data);
//     useRefetch(); // Corrected refetch call
//   };

//   const addToFavourites = async () => {};

//   return (
//     <motion.div key={data?._id} {...scaleInOut(index)}>
//       <div className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative">
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt=""
//         />
//         <AnimatePresence>
//           <motion.div
//             {...FadeInOutWithOpacity}
//             className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex flex-col items-center justify-start px-4 py-3 z-50 cursor-pointer"
//           >
//             <div className="flex flex-col items-end justify-start w-full gap-8">
//               <InnerBoxCard
//                 label={"Add to Collection"}
//                 Icon={BiFolderPlus}
//                 onHandle={addToCollection}
//               />

//               <InnerBoxCard
//                 label={"Add to Favourites"}
//                 Icon={BiHeart}
//                 onHandle={addToFavourites}
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// const InnerBoxCard = ({ label, Icon, onHandle }) => {
//   const [isHovered, setHovered] = useState(false);
//   return (
//     <div
//       onClick={onHandle} // Corrected `onclick` to `onClick`
//       className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center hover:shadow-md relative"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <Icon className="text-txtPrimary text-base" />
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.6, x: 50 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             exit={{ opacity: 0, scale: 0.6, x: 50 }}
//             className="px-3 py-2 rounded-md bg-gray-200 absolute left-44 after:w-2 after:h-2 after:bg-gray-200 after:absolute after:right-1 after:top-[14px] after:rotate-45" // Corrected class names
//           >
//             <p className="text-sm text-txtPrimary whitespace-nowrap">{label}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default TemplateDesignPin;

// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut } from "../animations";
// import { FadeInOutWIthOpacity } from "../animations";
// import {
//   BiFolderPlus,
//   BiHeart,
//   BiSolidFolderPlus,
//   BiSolidHeart,
// } from "react-icons/bi";
// // import { saveToCollections, saveToFavourites } from "../api";
// import useUser from "../hooks/useUser";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { addToCollection, addToFavourites } from "../api";
// const TemplateDesignPin = ({ data, index }) => {
//   const { data: user, refetch } = useUser(); // Destructured refetch from useUser
//   const { refetch: temp_refetch } = useTemplates();

//   const [isHoverred, setisHoverred] = useState(false);

//   const navigate = useNavigate();

//   const addToCollection = async (e) => {
//     e.stopPropagation();
//     await addToCollection(user, data);
//     refetch(); // Call refetch directly here
//   };

//   const addToFavourites = async (e) => {
//     e.stopPropagation();
//     await addToFavourites(user, data);
//     // temp_refetch();
//     userRefetch();
//   };

//   const handleRouteNavigation = () => {
//     navigate(`/resumeDetail/${data?._id}`, { replace: true });
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut(index)}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setisHoverred(true)}
//         onMouseLeave={() => setisHoverred(false)}
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt=""
//         />
//         <AnimatePresence>
//           {isHoverred && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               onClick={handleRouteNavigation}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex flex-col items-center justify-start px-4 py-3 z-50 cursor-pointer"
//             >
//               <div className="flex flex-col items-end justify-start w-full gap-8">
//                 <InnerBoxCard
//                   label={
//                     user?.collections?.includes(data?._id)
//                       ? "Added to collections "
//                       : "Add to collections "
//                   }
//                   Icon={
//                     user?.collections?.includes(data?._id)
//                       ? BiSolidFolderPlus
//                       : BiFolderPlus
//                   }
//                   onHandle={addToCollection}
//                 />

//                 <InnerBoxCard
//                   label={
//                     data?.favourites?.includes(user?.uid)
//                       ? "Added to Favourites"
//                       : "Add to Favourites"
//                   }
//                   Icon={
//                     data?.favourites?.includes(user?.uid)
//                       ? BiSolidHeart
//                       : BiHeart
//                   }
//                   onHandle={addToFavourites}
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// const InnerBoxCard = ({ label, Icon, onHandle }) => {
//   const [isHovered, setHovered] = useState(false);
//   return (
//     <div
//       onClick={onHandle} // Corrected `onclick` to `onClick`
//       className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center hover:shadow-md relative"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <Icon className="text-txtPrimary text-base" />
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.6, x: 50 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             exit={{ opacity: 0, scale: 0.6, x: 50 }}
//             className="px-3 py-2 rounded-md bg-gray-200 absolute left-44 after:w-2 after:h-2 after:bg-gray-200 after:absolute after:right-1 after:top-[14px] after:rotate-45" // Corrected class names
//           >
//             <p className="text-sm text-txtPrimary whitespace-nowrap">{label}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default TemplateDesignPin;

// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import {
//   BiFolderPlus,
//   BiHeart,
//   BiSolidFolderPlus,
//   BiSolidHeart,
// } from "react-icons/bi";
// // Ensure you import the correct functions from '../api'
// import useUser from "../hooks/useUser";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { addToCollection, addToFavourites } from "../api";

// const TemplateDesignPin = ({ data, index }) => {
//   const { data: user, refetch } = useUser(); // Destructured refetch from useUser
//   const { refetch: temp_refetch } = useTemplates();

//   const [isHoverred, setisHoverred] = useState(false);

//   const navigate = useNavigate();

//   const handleAddToCollection = async (e) => {
//     e.stopPropagation();
//     await addToCollection(user, data);
//     refetch(); // Call refetch directly here
//   };

//   const handleAddToFavourites = async (e) => {
//     e.stopPropagation();
//     await addToFavourites(user, data);
//     temp_refetch(); // Uncomment if temp_refetch is necessary
//     refetch(); // Call refetch directly here
//   };

//   const handleRouteNavigation = () => {
//     navigate(`/resumeDetail/${data?._id}`, { replace: true });
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut(index)}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setisHoverred(true)}
//         onMouseLeave={() => setisHoverred(false)}
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt=""
//         />
//         <AnimatePresence>
//           {isHoverred && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               onClick={handleRouteNavigation}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex flex-col items-center justify-start px-4 py-3 z-50 cursor-pointer"
//             >
//               <div className="flex flex-col items-end justify-start w-full gap-8">
//                 <InnerBoxCard
//                   label={
//                     user?.collections?.includes(data?._id)
//                       ? "Added to collections"
//                       : "Add to collections"
//                   }
//                   Icon={
//                     user?.collections?.includes(data?._id)
//                       ? BiSolidFolderPlus
//                       : BiFolderPlus
//                   }
//                   onHandle={handleAddToCollection}
//                 />

//                 <InnerBoxCard
//                   label={
//                     data?.favourites?.includes(user?.uid)
//                       ? "Added to Favourites"
//                       : "Add to Favourites"
//                   }
//                   Icon={
//                     data?.favourites?.includes(user?.uid)
//                       ? BiSolidHeart
//                       : BiHeart
//                   }
//                   onHandle={handleAddToFavourites}
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// const InnerBoxCard = ({ label, Icon, onHandle }) => {
//   const [isHovered, setHovered] = useState(false);
//   return (
//     <div
//       onClick={onHandle} // Corrected `onclick` to `onClick`
//       className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center hover:shadow-md relative"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <Icon className="text-txtPrimary text-base" />
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.6, x: 50 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             exit={{ opacity: 0, scale: 0.6, x: 50 }}
//             className="px-3 py-2 rounded-md bg-gray-200 absolute left-44 after:w-2 after:h-2 after:bg-gray-200 after:absolute after:right-1 after:top-[14px] after:rotate-45" // Corrected class names
//           >
//             <p className="text-sm text-txtPrimary whitespace-nowrap">{label}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // export default TemplateDesignPimport React, { useState } from "react";
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import {
//   BiFolderPlus,
//   BiHeart,
//   BiSolidFolderPlus,
//   BiSolidHeart,
// } from "react-icons/bi";
// import useUser from "../hooks/useUser";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { addToCollection, addToFavourites } from "../api";

// const TemplateDesignPin = ({ data, index }) => {
//   const { data: user, refetch } = useUser(); // Destructured refetch from useUser
//   const { refetch: temp_refetch } = useTemplates();

//   const [isHovered, setIsHovered] = useState(false);

//   const navigate = useNavigate();

//   // const handleAddToCollection = async (e) => {
//   //   e.stopPropagation();
//   //   await addToCollection(user, data);
//   //   temp_refetch();
//   //   refetch(); // Call refetch directly here
//   // };

//   const handleAddToCollection = async (e) => {
//     e.stopPropagation();
//     try {
//       await addToCollection(user, data);
//       refetch(); // Update UI after adding to collection
//     } catch (error) {
//       console.error("Failed to add to collection:", error);
//     }
//   };

//   const handleAddToFavourites = async (e) => {
//     e.stopPropagation();
//     await addToFavourites(user, data);
//     temp_refetch(); // Uncomment if temp_refetch is necessary
//     refetch(); // Call refetch directly here
//   };

//   const handleRouteNavigation = () => {
//     navigate(`/resumeDetail/${data?._id}`, { replace: true });
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut(index)}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt=""
//         />
//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               onClick={handleRouteNavigation}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//             >
//               <div className="flex flex-col items-end gap-4">
//                 <InnerBoxCard
//                   label={
//                     user?.collections?.includes(data?._id)
//                       ? "Added to collections"
//                       : "Add to collections"
//                   }
//                   Icon={
//                     user?.collections?.includes(data?._id)
//                       ? BiSolidFolderPlus
//                       : BiFolderPlus
//                   }
//                   onHandle={handleAddToCollection}
//                 />

//                 <InnerBoxCard
//                   label={
//                     data?.favourites?.includes(user?.uid)
//                       ? "Added to Favourites"
//                       : "Add to Favourites"
//                   }
//                   Icon={
//                     data?.favourites?.includes(user?.uid)
//                       ? BiSolidHeart
//                       : BiHeart
//                   }
//                   onHandle={handleAddToFavourites}
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// const InnerBoxCard = ({ label, Icon, onHandle }) => {
//   const [isHovered, setHovered] = useState(false);

//   return (
//     <div
//       onClick={onHandle}
//       className="relative flex items-center"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <Icon className="text-txtPrimary text-xl cursor-pointer" />
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -10 }}
//             className="absolute right-full top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-md mr-2"
//           >
//             <p className="text-sm">{label}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // export default TemplateDesignPin;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import {
//   BiFolderPlus,
//   BiHeart,
//   BiSolidFolderPlus,
//   BiSolidHeart,
// } from "react-icons/bi";
// import useUser from "../hooks/useUser";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { addToCollection, addToFavourites } from "../api";

// const TemplateDesignPin = ({ data, index ,onCollectionToggle}) => {
//   const { data: user, refetch } = useUser(); // Destructured refetch from useUser
//   const { refetch: tempRefetch } = useTemplates();

//   const [isHovered, setIsHovered] = useState(false);

//   const navigate = useNavigate();

//   const handleAddToCollection = async (e) => {
//     e.stopPropagation();
//     try {
//       await onCollectionToggle(data); // Use the passed callback
//     } catch (error) {
//       console.error("Failed to add to collection:", error);
//     }
//   };

//   const handleAddToFavourites = async (e) => {
//     e.stopPropagation();
//     try {
//       await addToFavourites(user, data);
//       tempRefetch(); // Refetch templates if necessary
//       refetch(); // Refetch user data
//     } catch (error) {
//       console.error("Failed to add to favourites:", error);
//     }
//   };

//   const handleRouteNavigation = () => {
//     navigate(`/resumeDetail/${data?._id}`, { replace: true });
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut(index)}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt=""
//         />
//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               onClick={handleRouteNavigation}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//             >
//               <div className="flex flex-col items-end gap-4">
//                 <InnerBoxCard
//                   label={
//                     user?.collections?.includes(data?._id)
//                       ? "Added to collections"
//                       : "Add to collections"
//                   }
//                   Icon={
//                     user?.collections?.includes(data?._id)
//                       ? BiSolidFolderPlus
//                       : BiFolderPlus
//                   }
//                   onHandle={handleAddToCollection}
//                 />

//                 <InnerBoxCard
//                   label={
//                     data?.favourites?.includes(user?.uid)
//                       ? "Added to Favourites"
//                       : "Add to Favourites"
//                   }
//                   Icon={
//                     data?.favourites?.includes(user?.uid)
//                       ? BiSolidHeart
//                       : BiHeart
//                   }
//                   onHandle={handleAddToFavourites}
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// const InnerBoxCard = ({ label, Icon, onHandle }) => {
//   const [isHovered, setHovered] = useState(false);

//   return (
//     <div
//       onClick={onHandle}
//       className="relative flex items-center"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <Icon className="text-txtPrimary text-xl cursor-pointer" />
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -10 }}
//             className="absolute right-full top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-md mr-2"
//           >
//             <p className="text-sm">{label}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // export default TemplateDesignPin;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import {
//   BiFolderPlus,
//   BiHeart,
//   BiSolidFolderPlus,
//   BiSolidHeart,
// } from "react-icons/bi";
// import useUser from "../hooks/useUser";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { addToCollection, addToFavourites } from "../api";

// const TemplateDesignPin = ({ data, index, onCollectionToggle }) => {
//   const { data: user, refetch } = useUser(); // Destructured refetch from useUser
//   const { refetch: tempRefetch } = useTemplates();

//   const [isHovered, setIsHovered] = useState(false);

//   const navigate = useNavigate();

//   const handleAddToCollection = async (e) => {
//     e.stopPropagation();
//     if (typeof onCollectionToggle === "function") {
//       try {
//         await onCollectionToggle(data); // Use the passed callback
//         await addToCollection(user, data);
//         tempRefetch(); // Refetch templates if necessary
//         refetch();
//       } catch (error) {
//         console.error("Failed to add to collection:", error);
//       }
//     } else {
//       console.error("onCollectionToggle is not a function");
//     }
//   };

//   const handleAddToFavourites = async (e) => {
//     e.stopPropagation();
//     try {
//       await addToFavourites(user, data);
//       tempRefetch(); // Refetch templates if necessary
//       refetch(); // Refetch user data
//     } catch (error) {
//       console.error("Failed to add to favourites:", error);
//     }
//   };

//   const handleRouteNavigation = () => {
//     navigate(`/resumeDetail/${data?._id}`, { replace: true });
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut(index)}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt=""
//         />
//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               onClick={handleRouteNavigation}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//             >
//               <div className="flex flex-col items-end gap-4">
//                 <InnerBoxCard
//                   label={
//                     user?.collections?.includes(data?._id)
//                       ? "Added to collections"
//                       : "Add to collections"
//                   }
//                   Icon={
//                     user?.collections?.includes(data?._id)
//                       ? BiSolidFolderPlus
//                       : BiFolderPlus
//                   }
//                   onHandle={handleAddToCollection}
//                 />

//                 <InnerBoxCard
//                   label={
//                     data?.favourites?.includes(user?.uid)
//                       ? "Added to Favourites"
//                       : "Add to Favourites"
//                   }
//                   Icon={
//                     data?.favourites?.includes(user?.uid)
//                       ? BiSolidHeart
//                       : BiHeart
//                   }
//                   onHandle={handleAddToFavourites}
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// const InnerBoxCard = ({ label, Icon, onHandle }) => {
//   const [isHovered, setHovered] = useState(false);

//   return (
//     <div
//       onClick={onHandle}
//       className="relative flex items-center"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <Icon className="text-txtPrimary text-xl cursor-pointer" />
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -10 }}
//             className="absolute right-full top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-md mr-2"
//           >
//             <p className="text-sm">{label}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // export default TemplateDesignPin;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import {
//   BiFolderPlus,
//   BiHeart,
//   BiSolidFolderPlus,
//   BiSolidHeart,
// } from "react-icons/bi";
// import useUser from "../hooks/useUser";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { addToCollection, addToFavourites } from "../api";

// const TemplateDesignPin = ({ data, index, onCollectionToggle }) => {
//   const { data: user, refetch } = useUser(); // Destructured refetch from useUser
//   const { refetch: tempRefetch } = useTemplates();

//   const [isHovered, setIsHovered] = useState(false);

//   const navigate = useNavigate();

//   const handleAddToCollection = async (e) => {
//     e.stopPropagation();
//     if (typeof onCollectionToggle === "function") {
//       try {
//         await onCollectionToggle(data); // Use the passed callback
//         await addToCollection(user, data); // Add to collection
//         tempRefetch(); // Refetch templates if necessary
//         refetch(); // Refetch user data
//       } catch (error) {
//         console.error("Failed to add to collection:", error);
//       }
//     } else {
//       console.warn("onCollectionToggle is not a function or not provided");
//     }
//   };

//   const handleAddToFavourites = async (e) => {
//     e.stopPropagation();
//     try {
//       await addToFavourites(user, data);
//       tempRefetch(); // Refetch templates if necessary
//       refetch(); // Refetch user data
//     } catch (error) {
//       console.error("Failed to add to favourites:", error);
//     }
//   };

//   const handleRouteNavigation = () => {
//     navigate(`/resumeDetail/${data?._id}`, { replace: true });
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut(index)}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt=""
//         />
//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               onClick={handleRouteNavigation}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//             >
//               <div className="flex flex-col items-end gap-4">
//                 <InnerBoxCard
//                   label={
//                     user?.collections?.includes(data?._id)
//                       ? "Added to collections"
//                       : "Add to collections"
//                   }
//                   Icon={
//                     user?.collections?.includes(data?._id)
//                       ? BiSolidFolderPlus
//                       : BiFolderPlus
//                   }
//                   onHandle={handleAddToCollection}
//                 />

//                 <InnerBoxCard
//                   label={
//                     data?.favourites?.includes(user?.uid)
//                       ? "Added to Favourites"
//                       : "Add to Favourites"
//                   }
//                   Icon={
//                     data?.favourites?.includes(user?.uid)
//                       ? BiSolidHeart
//                       : BiHeart
//                   }
//                   onHandle={handleAddToFavourites}
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// const InnerBoxCard = ({ label, Icon, onHandle }) => {
//   const [isHovered, setHovered] = useState(false);

//   return (
//     <div
//       onClick={onHandle}
//       className="relative flex items-center"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <Icon className="text-txtPrimary text-xl cursor-pointer" />
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -10 }}
//             className="absolute right-full top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-md mr-2"
//           >
//             <p className="text-sm">{label}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // export default TemplateDesignPin;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import {
//   BiFolderPlus,
//   BiHeart,
//   BiSolidFolderPlus,
//   BiSolidHeart,
// } from "react-icons/bi";
// import useUser from "../hooks/useUser";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { addToCollection, addToFavourites } from "../api";

// const TemplateDesignPin = ({ data, index, onCollectionToggle = () => {} }) => {
//   const { data: user, refetch } = useUser(); // Destructured refetch from useUser
//   const { refetch: tempRefetch } = useTemplates();

//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   const handleAddToCollection = async (e) => {
//     e.stopPropagation();
//     if (typeof onCollectionToggle === "function") {
//       try {
//         onCollectionToggle(data); // Use the passed callback
//         await addToCollection(user, data); // Add to collection
//         tempRefetch(); // Refetch templates if necessary
//         refetch(); // Refetch user data
//       } catch (error) {
//         console.error("Failed to add to collection:", error);
//       }
//     } else {
//       console.warn("onCollectionToggle is not a function or not provided");
//     }
//   };

//   const handleAddToFavourites = async (e) => {
//     e.stopPropagation();
//     try {
//       await addToFavourites(user, data);
//       tempRefetch(); // Refetch templates if necessary
//       refetch(); // Refetch user data
//     } catch (error) {
//       console.error("Failed to add to favourites:", error);
//     }
//   };

//   const handleRouteNavigation = () => {
//     navigate(`/resumeDetail/${data?._id}`, { replace: true });
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut(index)}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt=""
//         />
//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               onClick={handleRouteNavigation}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//             >
//               <div className="flex flex-col items-end gap-4">
//                 <InnerBoxCard
//                   label={
//                     user?.collections?.includes(data?._id)
//                       ? "Added to collections"
//                       : "Add to collections"
//                   }
//                   Icon={
//                     user?.collections?.includes(data?._id)
//                       ? BiSolidFolderPlus
//                       : BiFolderPlus
//                   }
//                   onHandle={handleAddToCollection}
//                 />

//                 <InnerBoxCard
//                   label={
//                     data?.favourites?.includes(user?.uid)
//                       ? "Added to Favourites"
//                       : "Add to Favourites"
//                   }
//                   Icon={
//                     data?.favourites?.includes(user?.uid)
//                       ? BiSolidHeart
//                       : BiHeart
//                   }
//                   onHandle={handleAddToFavourites}
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// const InnerBoxCard = ({ label, Icon, onHandle }) => {
//   const [isHovered, setHovered] = useState(false);

//   return (
//     <div
//       onClick={onHandle}
//       className="relative flex items-center"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <Icon className="text-txtPrimary text-xl cursor-pointer" />
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -10 }}
//             className="absolute right-full top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-md mr-2"
//           >
//             <p className="text-sm">{label}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // export default TemplateDesignPin;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import {
//   BiFolderPlus,
//   BiHeart,
//   BiSolidFolderPlus,
//   BiSolidHeart,
// } from "react-icons/bi";
// import { doc, updateDoc, arrayUnion } from "firebase/firestore"; // Firestore imports
// import { db } from "../config/firebase.config"; // Your Firestore configuration
// import useUser from "../hooks/useUser";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { addToFavourites } from "../api"; // Assuming this already exists

// const TemplateDesignPin = ({ data, index, onCollectionToggle = () => {} }) => {
//   const { data: user, refetch } = useUser(); // Destructured refetch from useUser
//   const { refetch: tempRefetch } = useTemplates();

//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   // Function to handle adding a template to the user's collection
//   const handleAddToCollection = async (e) => {
//     e.stopPropagation();
//     if (typeof onCollectionToggle === "function") {
//       try {
//         const userRef = doc(db, "users", user?.uid); // Reference to the user document
//         await updateDoc(userRef, {
//           collections: arrayUnion(data?._id), // Add the template ID to the collections
//         });
//         onCollectionToggle(data); // Use the passed callback
//         tempRefetch(); // Refetch templates if necessary
//         refetch(); // Refetch user data
//         console.log("Template added to collection!");
//       } catch (error) {
//         console.error("Error adding template to collection:", error);
//       }
//     } else {
//       console.warn("onCollectionToggle is not a function or not provided");
//     }
//   };

//   const handleAddToFavourites = async (e) => {
//     e.stopPropagation();
//     try {
//       await addToFavourites(user, data);
//       tempRefetch(); // Refetch templates if necessary
//       refetch(); // Refetch user data
//     } catch (error) {
//       console.error("Failed to add to favourites:", error);
//     }
//   };

//   const handleRouteNavigation = () => {
//     navigate(`/resumeDetail/${data?._id}`, { replace: true });
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut(index)}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt=""
//         />
//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               onClick={handleRouteNavigation}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//             >
//               <div className="flex flex-col items-end gap-4">
//                 <InnerBoxCard
//                   label={
//                     user?.collections?.includes(data?._id)
//                       ? "Added to collections"
//                       : "Add to collections"
//                   }
//                   Icon={
//                     user?.collections?.includes(data?._id)
//                       ? BiSolidFolderPlus
//                       : BiFolderPlus
//                   }
//                   onHandle={handleAddToCollection}
//                 />

//                 <InnerBoxCard
//                   label={
//                     data?.favourites?.includes(user?.uid)
//                       ? "Added to Favourites"
//                       : "Add to Favourites"
//                   }
//                   Icon={
//                     data?.favourites?.includes(user?.uid)
//                       ? BiSolidHeart
//                       : BiHeart
//                   }
//                   onHandle={handleAddToFavourites}
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// const InnerBoxCard = ({ label, Icon, onHandle }) => {
//   const [isHovered, setHovered] = useState(false);

//   return (
//     <div
//       onClick={onHandle}
//       className="relative flex items-center"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <Icon className="text-txtPrimary text-xl cursor-pointer" />
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -10 }}
//             className="absolute right-full top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-md mr-2"
//           >
//             <p className="text-sm">{label}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // export default TemplateDesignPin;
// import React from 'react';
// import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { db } from '../config/firebase.config'; // Import your Firestore instance

// const TemplateDesignPin = ({ user, template }) => {

//   // Function to add template to the user's collection
//   const handleAddToCollection = async () => {
//     if (!user || !template?._id) return;

//     const userRef = doc(db, 'users', user.uid);

//     try {
//       // Add template to Firestore collections
//       await updateDoc(userRef, {
//         collections: arrayUnion(template._id),
//       });
//       console.log('Template added to collection!');
//     } catch (error) {
//       console.error('Error adding template to collection: ', error);
//     }
//   };

//   return (
//     <div>
//       <h3>{template.name}</h3>
//       <img src={template.imageUrl} alt={template.name} />
//       <button onClick={handleAddToCollection}>Add to Collection</button>
//     </div>
//   );
// };

// // export default TemplateDesignPin;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import {
//   BiFolderPlus,
//   BiHeart,
//   BiSolidFolderPlus,
//   BiSolidHeart,
// } from "react-icons/bi";
// import useUser from "../hooks/useUser";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { addToCollection, addToFavourites } from "../api";

// const TemplateDesignPin = ({ data, index, onCollectionToggle = () => {} }) => {
//   const { data: user, refetch } = useUser(); // Destructured refetch from useUser
//   const { refetch: tempRefetch } = useTemplates();

//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   const handleAddToCollection = async (e) => {
//     e.stopPropagation();
//     if (typeof onCollectionToggle === "function") {
//       try {
//         await onCollectionToggle(data); // Use the passed callback
//         await addToCollection(user, data); // Add to collection
//         tempRefetch(); // Refetch templates if necessary
//         refetch(); // Refetch user data
//       } catch (error) {
//         console.error("Failed to add to collection:", error);
//       }
//     } else {
//       console.warn("onCollectionToggle is not a function or not provided");
//     }
//   };

//   const handleAddToFavourites = async (e) => {
//     e.stopPropagation();
//     try {
//       await addToFavourites(user, data);
//       tempRefetch(); // Refetch templates if necessary
//       refetch(); // Refetch user data
//     } catch (error) {
//       console.error("Failed to add to favourites:", error);
//     }
//   };

//   const handleRouteNavigation = () => {
//     navigate(`/resumeDetail/${data?._id}`, { replace: true });
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut(index)}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt=""
//         />
//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               onClick={handleRouteNavigation}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//             >
//               <div className="flex flex-col items-end gap-4">
//                 <InnerBoxCard
//                   label={
//                     user?.collections?.includes(data?._id)
//                       ? "Added to collections"
//                       : "Add to collections"
//                   }
//                   Icon={
//                     user?.collections?.includes(data?._id)
//                       ? BiSolidFolderPlus
//                       : BiFolderPlus
//                   }
//                   onHandle={handleAddToCollection}
//                 />

//                 <InnerBoxCard
//                   label={
//                     data?.favourites?.includes(user?.uid)
//                       ? "Added to Favourites"
//                       : "Add to Favourites"
//                   }
//                   Icon={
//                     data?.favourites?.includes(user?.uid)
//                       ? BiSolidHeart
//                       : BiHeart
//                   }
//                   onHandle={handleAddToFavourites}
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// const InnerBoxCard = ({ label, Icon, onHandle }) => {
//   const [isHovered, setHovered] = useState(false);

//   return (
//     <div
//       onClick={onHandle}
//       className="relative flex items-center"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <Icon className="text-txtPrimary text-xl cursor-pointer" />
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -10 }}
//             className="absolute right-full top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-md mr-2"
//           >
//             <p className="text-sm">{label}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // export default TemplateDesignPin;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import {
//   BiFolderPlus,
//   BiHeart,
//   BiSolidFolderPlus,
//   BiSolidHeart,
// } from "react-icons/bi";
// import useUser from "../hooks/useUser";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { db } from "../config/firebase.config"; // Firebase configuration import
// import { doc, setDoc } from "firebase/firestore"; // Firebase Firestore import
// import { addToFavourites } from "../api";

// const TemplateDesignPin = ({ data, index }) => {
//   const { data: user, refetch } = useUser(); // Destructured refetch from useUser
//   const { refetch: tempRefetch } = useTemplates();

//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   // Firebase Firestore Add to Collection Function
//   const handleAddToCollection = async (templateId) => {
//     try {
//       const userTemplateRef = doc(db, 'users', user.uid, 'templates', templateId);
//       await setDoc(userTemplateRef, { templateId });
//       console.log('Template added to collection');
//       tempRefetch(); // Refetch templates if necessary
//       refetch(); // Refetch user data if needed
//     } catch (error) {
//       console.error('Error adding template to collection:', error);
//     }
//   };

//   const handleAddToFavourites = async (e) => {
//     e.stopPropagation();
//     try {
//       await addToFavourites(user, data);
//       tempRefetch(); // Refetch templates if necessary
//       refetch(); // Refetch user data
//     } catch (error) {
//       console.error("Failed to add to favourites:", error);
//     }
//   };

//   const handleRouteNavigation = () => {
//     navigate(`/resumeDetail/${data?._id}`, { replace: true });
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut(index)}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt=""
//         />
//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               onClick={handleRouteNavigation}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//             >
//               <div className="flex flex-col items-end gap-4">
//                 {/* Add to Collection Button */}
//                 <InnerBoxCard
//                   label={
//                     user?.collections?.includes(data?._id)
//                       ? "Added to collections"
//                       : "Add to collections"
//                   }
//                   Icon={
//                     user?.collections?.includes(data?._id)
//                       ? BiSolidFolderPlus
//                       : BiFolderPlus
//                   }
//                   onHandle={() => handleAddToCollection(data?._id)} // Firebase add to collection
//                 />

//                 {/* Add to Favourites Button */}
//                 <InnerBoxCard
//                   label={
//                     data?.favourites?.includes(user?.uid)
//                       ? "Added to Favourites"
//                       : "Add to Favourites"
//                   }
//                   Icon={
//                     data?.favourites?.includes(user?.uid)
//                       ? BiSolidHeart
//                       : BiHeart
//                   }
//                   onHandle={handleAddToFavourites}
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// const InnerBoxCard = ({ label, Icon, onHandle }) => {
//   const [isHovered, setHovered] = useState(false);

//   return (
//     <div
//       onClick={onHandle}
//       className="relative flex items-center"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <Icon className="text-txtPrimary text-xl cursor-pointer" />
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -10 }}
//             className="absolute right-full top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-md mr-2"
//           >
//             <p className="text-sm">{label}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // export default TemplateDesignPin;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import {
//   BiFolderPlus,
//   BiSolidFolderPlus,
// } from "react-icons/bi";
// import { useNavigate } from "react-router-dom";

// const TemplateDesignPin = ({ data, isAdded, onCollectionToggle }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   const handleRouteNavigation = () => {
//     navigate(`/resumeDetail/${data?._id}`, { replace: true });
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut()}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt="Template"
//         />
//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               onClick={handleRouteNavigation}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//             >
//               <div className="flex flex-col items-end gap-4">
//                 {/* Add to Collection Button */}
//                 <button onClick={() => onCollectionToggle(data)}>
//                   {isAdded ? (
//                     <BiSolidFolderPlus className="text-blue-600 text-2xl" /> // Solid icon when added
//                   ) : (
//                     <BiFolderPlus className="text-gray-500 text-2xl" /> // Outline icon when not added
//                   )}
//                 </button>
//                 {/* Template details */}
//                 <p className="text-white mt-2">{data?.title}</p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// // export default TemplateDesignPin;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import {
//   BiFolderPlus,
//   BiSolidFolderPlus,
// } from "react-icons/bi";
// import { useNavigate } from "react-router-dom";

// const TemplateDesignPin = ({ data, isAdded, onCollectionToggle = () => {} }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   const handleRouteNavigation = () => {
//     navigate(`/resumeDetail/${data?._id}`, { replace: true });
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut()}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt="Template"
//         />
//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               onClick={handleRouteNavigation}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//             >
//               <div className="flex flex-col items-end gap-4">
//                 {/* Add to Collection Button */}
//                 <button onClick={() => onCollectionToggle(data)}>
//                   {isAdded ? (
//                     <BiSolidFolderPlus className="text-blue-600 text-2xl" /> // Solid icon when added
//                   ) : (
//                     <BiFolderPlus className="text-gray-500 text-2xl" /> // Outline icon when not added
//                   )}
//                 </button>
//                 {/* Template details */}
//                 <p className="text-white mt-2">{data?.title}</p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// // export default TemplateDesignPin;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import {
//   BiFolderPlus,
//   BiSolidFolderPlus,
// } from "react-icons/bi";
// import { useNavigate } from "react-router-dom";

// const TemplateDesignPin = ({ data, isAddedToCollection, onCollectionToggle, isFavorited, onFavoriteToggle }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   // Navigate to the template's detailed page when the image or title is clicked
//   const handleRouteNavigation = () => {
//     navigate(`/resumeDetail/${data?._id}`, { replace: true });
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut()}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Template Image */}
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt="Template"
//         />

//         {/* Hovered Content */}
//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//             >
//               <div className="flex flex-col items-end gap-4">
//                 {/* Add to Collection Button */}
//                 <button onClick={(e) => {
//                   e.stopPropagation(); // Prevent triggering the navigation
//                   onCollectionToggle(data);
//                 }}>
//                   {isAddedToCollection ? (
//                     <BiSolidFolderPlus className="text-blue-600 text-2xl" /> // Solid icon when added
//                   ) : (
//                     <BiFolderPlus className="text-gray-500 text-2xl" /> // Outline icon when not added
//                   )}
//                 </button>

//                 {/* Add to Favorite Button */}
//                 <button onClick={(e) => {
//                   e.stopPropagation(); // Prevent triggering the navigation
//                   onFavoriteToggle(data);
//                 }}>
//                   {isFavorited ? (
//                     <BiSolidFolderPlus className="text-red-600 text-2xl" /> // Solid icon for favorite (you can replace this with a heart icon)
//                   ) : (
//                     <BiFolderPlus className="text-gray-500 text-2xl" /> // Outline icon for not favorited
//                   )}
//                 </button>

//                 {/* Clickable Title to Navigate to Details */}
//                 <p className="text-white mt-2 cursor-pointer" onClick={handleRouteNavigation}>
//                   {data?.title}
//                 </p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// // export default TemplateDesignPin;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import {
//   BiFolderPlus,
//   BiSolidFolderPlus,
// } from "react-icons/bi";
// import { useNavigate } from "react-router-dom";

// const TemplateDesignPin = ({ data, isAddedToCollection, onCollectionToggle, isFavorited, onFavoriteToggle }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   const handleRouteNavigation = () => {
//     navigate(`/resumeDetail/${data?._id}`, { replace: true });
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut()}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt="Template"
//         />

//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//             >
//               <div className="flex flex-col items-end gap-4">
//                 {/* Add to Collection Button */}
//                 <button onClick={(e) => {
//                   e.stopPropagation(); // Prevent unwanted navigation
//                   if (onCollectionToggle) {
//                     onCollectionToggle(data); // Call the toggle function passed as a prop
//                   }
//                 }}>
//                   {isAddedToCollection ? (
//                     <BiSolidFolderPlus className="text-blue-600 text-2xl" />
//                   ) : (
//                     <BiFolderPlus className="text-gray-500 text-2xl" />
//                   )}
//                 </button>

//                 {/* Add to Favorite Button */}
//                 <button onClick={(e) => {
//                   e.stopPropagation(); // Prevent unwanted navigation
//                   if (onFavoriteToggle) {
//                     onFavoriteToggle(data); // Call the toggle function passed as a prop
//                   }
//                 }}>
//                   {isFavorited ? (
//                     <BiSolidFolderPlus className="text-red-600 text-2xl" /> // You can replace with heart icon
//                   ) : (
//                     <BiFolderPlus className="text-gray-500 text-2xl" /> // Placeholder for favorite
//                   )}
//                 </button>

//                 <p className="text-white mt-2 cursor-pointer" onClick={handleRouteNavigation}>
//                   {data?.title}
//                 </p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// export default TemplateDesignPin;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import {
//   BiFolderPlus,
//   BiSolidFolderPlus,
// } from "react-icons/bi";
// import { useNavigate } from "react-router-dom";

// const TemplateDesignPin = ({ data, isAddedToCollection, onCollectionToggle, isFavorited, onFavoriteToggle }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   const handleRouteNavigation = () => {
//     navigate(`/resumeDetail/${data?._id}`, { replace: true });
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut()}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt="Template"
//         />

//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//             >
//               <div className="flex flex-col items-end gap-4">
//                 {/* Add to Collection Button */}
//                 <button onClick={(e) => {
//                   e.stopPropagation(); // Prevent unwanted navigation
//                   if (onCollectionToggle) {
//                     onCollectionToggle(data); // Call the toggle function passed as a prop
//                   }
//                 }}>
//                   {isAddedToCollection ? (
//                     <BiSolidFolderPlus className="text-blue-600 text-2xl" />
//                   ) : (
//                     <BiFolderPlus className="text-gray-500 text-2xl" />
//                   )}
//                 </button>

//                 {/* Add to Favorite Button */}
//                 <button onClick={(e) => {
//                   e.stopPropagation(); // Prevent unwanted navigation
//                   if (onFavoriteToggle) {
//                     onFavoriteToggle(data); // Call the toggle function passed as a prop
//                   }
//                 }}>
//                   {isFavorited ? (
//                     <BiSolidFolderPlus className="text-red-600 text-2xl" /> // You can replace with heart icon
//                   ) : (
//                     <BiFolderPlus className="text-gray-500 text-2xl" /> // Placeholder for favorite
//                   )}
//                 </button>

//                 <p className="text-white mt-2 cursor-pointer" onClick={handleRouteNavigation}>
//                   {data?.title}
//                 </p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// // export default TemplateDesignPin;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import { BiFolderPlus, BiSolidFolderPlus, BiHeart, BiSolidHeart } from "react-icons/bi";
// import { useNavigate } from "react-router-dom";

// const TemplateDesignPin = ({ data, isAdded, isFavourite, onCollectionToggle, onFavouritesToggle }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   // Prevent navigation when clicking on buttons
//   const handleRouteNavigation = (e) => {
//     if (!e.target.closest(".action-button")) {
//       navigate(`/resumeDetail/${data?._id}`, { replace: true });
//     }
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut()}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt="Template"
//           onClick={handleRouteNavigation}
//         />
//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//             >
//               <div className="flex flex-col items-end gap-4">
//                 {/* Add to Collection Button */}
//                 <button
//                   className="action-button"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     onCollectionToggle(data);
//                   }}
//                 >
//                   {isAdded ? (
//                     <BiSolidFolderPlus className="text-blue-600 text-2xl" />
//                   ) : (
//                     <BiFolderPlus className="text-gray-500 text-2xl" />
//                   )}
//                 </button>

//                 {/* Add to Favourites Button */}
//                 <button
//                   className="action-button"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     onFavouritesToggle(data);
//                   }}
//                 >
//                   {isFavourite ? (
//                     <BiSolidHeart className="text-red-600 text-2xl" />
//                   ) : (
//                     <BiHeart className="text-gray-500 text-2xl" />
//                   )}
//                 </button>

//                 {/* Template details */}
//                 <p className="text-white mt-2">{data?.title}</p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// // export default TemplateDesignPin;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import { BiFolderPlus, BiSolidFolderPlus, BiHeart, BiSolidHeart } from "react-icons/bi";
// import { useNavigate } from "react-router-dom";

// const TemplateDesignPin = ({ data, isAdded, isFavourite, onCollectionToggle, onFavouritesToggle }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   // Handle template click for navigation
//   const handleRouteNavigation = (e) => {
//     // Only navigate when the template itself is clicked, not the buttons
//     if (!e.target.closest(".action-button")) {
//       navigate(`/resumeDetail/${data?._id}`, { replace: true });
//     }
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut()}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={handleRouteNavigation}  // Trigger navigation only on the main div
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt="Template"
//         />
//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//             >
//               <div className="flex flex-col items-end gap-4">
//                 {/* Add to Collection Button */}
//                 <button
//                   className="action-button"  // Mark this as an action button to stop event propagation
//                   onClick={(e) => {
//                     e.stopPropagation();  // Prevent navigation
//                     onCollectionToggle(data);
//                   }}
//                 >
//                   {isAdded ? (
//                     <BiSolidFolderPlus className="text-blue-600 text-2xl" />
//                   ) : (
//                     <BiFolderPlus className="text-gray-500 text-2xl" />
//                   )}
//                 </button>

//                 {/* Add to Favourites Button */}
//                 <button
//                   className="action-button"  // Mark this as an action button to stop event propagation
//                   onClick={(e) => {
//                     e.stopPropagation();  // Prevent navigation
//                     onFavouritesToggle(data);
//                   }}
//                 >
//                   {isFavourite ? (
//                     <BiSolidHeart className="text-red-600 text-2xl" />
//                   ) : (
//                     <BiHeart className="text-gray-500 text-2xl" />
//                   )}
//                 </button>

//                 {/* Template details */}
//                 <p className="text-white mt-2">{data?.title}</p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// // export default TemplateDesignPin;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import { BiFolderPlus, BiSolidFolderPlus, BiHeart, BiSolidHeart } from "react-icons/bi";
// import { useNavigate } from "react-router-dom";

// const TemplateDesignPin = ({
//   data,
//   isAdded,
//   isFavourite,
//   onCollectionToggle = () => {}, // Default to an empty function
//   onFavouritesToggle = () => {}, // Default to an empty function
// }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   const handleRouteNavigation = (e) => {
//     if (!e.target.closest(".action-button")) {
//       navigate(`/resumeDetail/${data?._id}`, { replace: true });
//     }
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut()}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={handleRouteNavigation}
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt="Template"
//         />
//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//             >
//               <div className="flex flex-col items-end gap-4">
//                 {/* Add to Collection Button */}
//                 <button
//                   className="action-button"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     onCollectionToggle(data);
//                   }}
//                 >
//                   {isAdded ? (
//                     <BiSolidFolderPlus className="text-blue-600 text-2xl" />
//                   ) : (
//                     <BiFolderPlus className="text-gray-500 text-2xl" />
//                   )}
//                 </button>

//                 {/* Add to Favourites Button */}
//                 <button
//                   className="action-button"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     onFavouritesToggle(data);
//                   }}
//                 >
//                   {isFavourite ? (
//                     <BiSolidHeart className="text-red-600 text-2xl" />
//                   ) : (
  //                     <BiHeart className="text-gray-500 text-2xl" />
  //                   )}
//                 </button>

//                 {/* Template details */}
//                 <p className="text-white mt-2">{data?.title}</p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// export default TemplateDesignPin;
// import React, { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import {
//   BiFolderPlus,
//   BiHeart,
//   BiSolidFolderPlus,
//   BiSolidHeart,
// } from "react-icons/bi";
// import useUser from "../hooks/useUser";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { addToCollection, addToFavourites,  getUserCollection } from "../api";
// import { collection, deleteDoc, doc, getDocs } from "@firebase/firestore";
// import { db } from "../config/firebase.config";
// import { fetchUserCollection } from "../api/useUserCollection";

// const TemplateDesignPin = ({ data, index, onCollectionToggle = () => {} }) => {
//   const { data: user, refetch } = useUser(); // Destructured refetch from useUser
//   const { refetch: tempRefetch } = useTemplates();
//   const [isAdded, setIsAdded] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();
  
   
    
//     useEffect(() => {
//       const checkTemplateInCollection = async () => {
//         if (user) {
//           try {
//             const userCollection = await getUserCollection(user.uid);
    
//             // Ensure userCollection is an array before calling .some()
//             if (userCollection && Array.isArray(userCollection)) {
//               const templateExists = userCollection.some((item) => item._id === data._id); // Ensure item._id exists
//               setIsAdded(templateExists);
//             } else {
//               setIsAdded(false); // Handle case when userCollection is not an array
//             }
//           } catch (error) {
//             console.error("Error fetching user collection: ", error);
//             setIsAdded(false); // Handle any errors that occur during the fetch
//           }
//         }
//       };
    
//       checkTemplateInCollection();
//     }, [user, data._id]);
    
  
//     const handleAddToCollection = async (e) => {
//       e.stopPropagation();
//       if (typeof onCollectionToggle === "function") {
//         try {
//           if (isAdded) {
//             // If already added, remove it from the collection
//             await removeFromCollection(user, data); // Implement this function to remove the template
//             setIsAdded(false); // Update state to reflect that it is removed
//           } else {
//             // If not added, add it to the collection
//             await onCollectionToggle(data); // Toggle collection
//             // await addToCollection(user, data); // Add template to user's collection
//             await addToCollection(user,{...data,id:data._id});
//             setIsAdded(true); // Update state to reflect that it is added
//           }
//           await fetchUserCollection();
//           tempRefetch(); // Refetch if necessary
//           refetch(); // Refetch user data if necessary
//         } catch (error) {
//           console.error("Failed to toggle collection:", error);
//         }
//       } else {
//         console.warn("onCollectionToggle is not a function or not provided");
//       }
//     };
  
  
  
  
  
  
  
  
//     const handleAddToFavourites = async (e) => {
//       e.stopPropagation();
//       try {
//         await addToFavourites(user, data);
//         tempRefetch(); // Refetch templates if necessary
//         refetch(); // Refetch user data
//       } catch (error) {
//         console.error("Failed to add to favourites:", error);
//       }
//     };
  
//     const handleRouteNavigation = () => {
//       navigate(`/resumeDetail/${data?._id}`, { replace: true });
//     };
  
//     return (
//       <motion.div key={data?._id} {...scaleInOut(index)}>
//         <div
//           className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <img
//             src={data?.imageURL}
//             className="w-full h-full object-cover"
//             alt=""
//           />
//           <AnimatePresence>
//             {isHovered && (
//               <motion.div
//                 {...FadeInOutWIthOpacity}
//                 onClick={handleRouteNavigation}
//                 className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//               >
//                 <div className="flex flex-col items-end gap-4">
//                   <InnerBoxCard
//                     label={
//                       // user?.collections?.includes(data?._id)
//                       //   ? "Added to collections"
//                       //   : "Add to collections"
//                       isAdded ? 'Added to Collection' : 'Add to Collection'
//                     }
//                     Icon={+
//                       // user?.collections?.includes(data?._id)
//                       //   ? BiSolidFolderPlus
//                       //   : BiFolderPlus
//                       isAdded ? BiSolidFolderPlus : BiFolderPlus
//                     }
//                     onHandle={handleAddToCollection}
//                   />
  
//                   <InnerBoxCard
//                     label={
//                       data?.favourites?.includes(user?.uid)
//                         ? "Added to Favourites"
//                         : "Add to Favourites"
//                     }
//                     Icon={
//                       data?.favourites?.includes(user?.uid)
//                         ? BiSolidHeart
//                         : BiHeart
//                     }
//                     onHandle={handleAddToFavourites}
//                   />
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </motion.div>
//     );
//   };
  
//   const InnerBoxCard = ({ label, Icon, onHandle }) => {
//     const [isHovered, setHovered] = useState(false);
  
//     return (
//       <div
//         onClick={onHandle}
//         className="relative flex items-center"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         >
//         <Icon className="text-txtPrimary text-xl cursor-pointer" />
//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -10 }}
//               className="absolute right-full top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-md mr-2"
//             >
//               <p className="text-sm">{label}</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     );
//   };
  
  
  
//   const removeFromCollection = async (user, template) => {
//     try {
//       // Reference the user's 'collections' subcollection
//       const collectionRef = collection(db, 'users', user.uid, 'collections');
//       const docRef = doc(collectionRef, template._id); // Use the template's id as the document id
  
//       // Remove the template from the user's collections
//       await deleteDoc(docRef);
  
//       console.log(`Template ${template._id} removed from user's collection.`);
//     } catch (error) {
//       console.error("Error removing template from collection:", error);
//     }
//   };
  
  
  
  
  
  
  
  
// //   export default TemplateDesignPin;  
// import React, { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
// import {
//   BiFolderPlus,
//   BiHeart,
//   BiSolidFolderPlus,
//   BiSolidHeart,
// } from "react-icons/bi";
// import useUser from "../hooks/useUser";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { addToCollection, addToFavourites, getUserCollection } from "../api";
// import { collection, deleteDoc, doc } from "@firebase/firestore";
// import { db } from "../config/firebase.config";
// import { fetchUserCollection } from "../api/useUserCollection";
// import { toast } from "react-toastify"; // Import toast

// const TemplateDesignPin = ({ data, index, onCollectionToggle = () => {} }) => {
//   const { data: user, refetch } = useUser();
//   const { refetch: tempRefetch } = useTemplates();
//   const [isAdded, setIsAdded] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkTemplateInCollection = async () => {
//       if (user) {
//         try {
//           const userCollection = await getUserCollection(user.uid);
//           if (userCollection && Array.isArray(userCollection)) {
//             const templateExists = userCollection.some((item) => item._id === data._id);
//             setIsAdded(templateExists);
//           } else {
//             setIsAdded(false);
//           }
//         } catch (error) {
//           console.error("Error fetching user collection: ", error);
//           setIsAdded(false);
//         }
//       }
//     };

//     checkTemplateInCollection();
//   }, [user, data._id]);

//   const handleAddToCollection = async (e) => {
//     e.stopPropagation();
//     if (!user) {
//       toast.error("Login first . ."); // Show toast if user is not logged in
//       return;
//     }

//     if (typeof onCollectionToggle === "function") {
//       try {
//         if (isAdded) {
//           await removeFromCollection(user, data);
//           setIsAdded(false);
//         } else {
//           await onCollectionToggle(data);
//           await addToCollection(user, { ...data, id: data._id });
//           setIsAdded(true);
//         }
//         await fetchUserCollection();
//         tempRefetch();
//         refetch();
//       } catch (error) {
//         console.error("Failed to toggle collection:", error);
//       }
//     } else {
//       console.warn("onCollectionToggle is not a function or not provided");
//     }
//   };

//   const handleAddToFavourites = async (e) => {
//     e.stopPropagation();
//     if (!user) {
//       toast.error("Login first . ."); // Show toast if user is not logged in
//       return;
//     }
//     try {
//       await addToFavourites(user, data);
//       tempRefetch();
//       refetch();
//     } catch (error) {
//       console.error("Failed to add to favourites:", error);
//     }
//   };

//   const handleRouteNavigation = () => {
//     navigate(`/resumeDetail/${data?._id}`, { replace: true });
//   };

//   return (
//     <motion.div key={data?._id} {...scaleInOut(index)}>
//       <div
//         className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           src={data?.imageURL}
//           className="w-full h-full object-cover"
//           alt=""
//         />
//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               {...FadeInOutWIthOpacity}
//               onClick={handleRouteNavigation}
//               className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//             >
//               <div className="flex flex-col items-end gap-4">
//                 <InnerBoxCard
//                   label={isAdded ? 'Added to Collection' : 'Add to Collection'}
//                   Icon={isAdded ? BiSolidFolderPlus : BiFolderPlus}
//                   onHandle={handleAddToCollection}
//                 />
//                 <InnerBoxCard
//                   label={
//                     data?.favourites?.includes(user?.uid)
//                       ? "Added to Favourites"
//                       : "Add to Favourites"
//                   }
//                   Icon={
//                     data?.favourites?.includes(user?.uid)
//                       ? BiSolidHeart
//                       : BiHeart
//                   }
//                   onHandle={handleAddToFavourites}
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// const InnerBoxCard = ({ label, Icon, onHandle }) => {
//   const [isHovered, setHovered] = useState(false);

//   return (
//     <div
//       onClick={onHandle}
//       className="relative flex items-center"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <Icon className="text-txtPrimary text-xl cursor-pointer" />
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -10 }}
//             className="absolute right-full top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-md mr-2"
//           >
//             <p className="text-sm">{label}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const removeFromCollection = async (user, template) => {
//   try {
//     const collectionRef = collection(db, 'users', user.uid, 'collections');
//     const docRef = doc(collectionRef, template._id);
//     await deleteDoc(docRef);
//     console.log(`Template ${template._id} removed from user's collection.`);
//   } catch (error) {
//     console.error("Error removing template from collection:", error);
//   }
// };

// // export default TemplateDesignPin;
// import React, { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
// import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast
// import {
//   BiFolderPlus,
//   BiHeart,
//   BiSolidFolderPlus,
//   BiSolidHeart,
// } from "react-icons/bi";
// import useUser from "../hooks/useUser";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { addToCollection, addToFavourites, getUserCollection } from "../api";
// import { collection, deleteDoc, doc } from "@firebase/firestore";
// import { db } from "../config/firebase.config";
// import { fetchUserCollection } from "../api/useUserCollection";
// import { FadeInOutWIthOpacity, scaleInOut } from "../animations";

// const TemplateDesignPin = ({ data, index, onCollectionToggle = () => {} }) => {
//   const { data: user, refetch } = useUser(); // Destructured refetch from useUser
//   const { refetch: tempRefetch } = useTemplates();
//   const [isAdded, setIsAdded] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkTemplateInCollection = async () => {
//       if (user) {
//         try {
//           const userCollection = await getUserCollection(user.uid);

//           if (userCollection && Array.isArray(userCollection)) {
//             const templateExists = userCollection.some(
//               (item) => item._id === data._id
//             );
//             setIsAdded(templateExists);
//           } else {
//             setIsAdded(false);
//           }
//         } catch (error) {
//           console.error("Error fetching user collection: ", error);
//           setIsAdded(false);
//         }
//       }
//     };

//     checkTemplateInCollection();
//   }, [user, data._id]);

//   const handleAddToCollection = async (e) => {
//     e.stopPropagation();

//     if (!user) {
//       toast.error("Log in first to add to collection"); // Show toast if user is not logged in
//       return;
//     }

//     if (typeof onCollectionToggle === "function") {
//       try {
//         if (isAdded) {
//           await removeFromCollection(user, data); // Remove template
//           setIsAdded(false);
//         } else {
//           await onCollectionToggle(data);
//           await addToCollection(user, { ...data, id: data._id });
//           setIsAdded(true);
//         }
//         await fetchUserCollection();
//         tempRefetch();
//         refetch();
//       } catch (error) {
//         console.error("Failed to toggle collection:", error);
//       }
//     } else {
//       console.warn("onCollectionToggle is not a function or not provided");
//     }
//   };

//   const handleAddToFavourites = async (e) => {
//     e.stopPropagation();

//     if (!user) {
//       toast.error("Log in first to add to favourites"); // Show toast if user is not logged in
//       return;
//     }

//     try {
//       await addToFavourites(user, data);
//       tempRefetch();
//       refetch();
//     } catch (error) {
//       console.error("Failed to add to favourites:", error);
//     }
//   };

//   const handleRouteNavigation = () => {
//     navigate(`/resumeDetail/${data?._id}`, { replace: true });
//   };

//   return (
//     <>
//       <ToastContainer /> {/* This will render the toast messages */}
//       <motion.div key={data?._id} {...scaleInOut(index)}>
//         <div
//           className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <img
//             src={data?.imageURL}
//             className="w-full h-full object-cover"
//             alt=""
//           />
//           <AnimatePresence>
//             {isHovered && (
//               <motion.div
//                 {...FadeInOutWIthOpacity}
//                 onClick={handleRouteNavigation}
//                 className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
//               >
//                 <div className="flex flex-col items-end gap-4">
//                   <InnerBoxCard
//                     label={isAdded ? "Added to Collection" : "Add to Collection"}
//                     Icon={isAdded ? BiSolidFolderPlus : BiFolderPlus}
//                     onHandle={handleAddToCollection}
//                   />

//                   <InnerBoxCard
//                     label={
//                       data?.favourites?.includes(user?.uid)
//                         ? "Added to Favourites"
//                         : "Add to Favourites"
//                     }
//                     Icon={data?.favourites?.includes(user?.uid) ? BiSolidHeart : BiHeart}
//                     onHandle={handleAddToFavourites}
//                   />
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// const InnerBoxCard = ({ label, Icon, onHandle }) => {
//   const [isHovered, setHovered] = useState(false);

//   return (
//     <div
//       onClick={onHandle}
//       className="relative flex items-center"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <Icon className="text-txtPrimary text-xl cursor-pointer" />
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -10 }}
//             className="absolute right-full top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-md mr-2"
//           >
//             <p className="text-sm">{label}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const removeFromCollection = async (user, template) => {
//   try {
//     const collectionRef = collection(db, "users", user.uid, "collections");
//     const docRef = doc(collectionRef, template._id);

//     await deleteDoc(docRef);

//     console.log(`Template ${template._id} removed from user's collection.`);
//   } catch (error) {
//     console.error("Error removing template from collection:", error);
//   }
// };

// export default TemplateDesignPin;
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { scaleInOut, FadeInOutWIthOpacity } from "../animations";
import {
  BiFolderPlus,
  BiHeart,
  BiSolidFolderPlus,
  BiSolidHeart,
} from "react-icons/bi";
import useUser from "../hooks/useUser";
import useTemplates from "../hooks/useTemplates";
import { useNavigate } from "react-router-dom";
import { addToCollection, addToFavourites,  getUserCollection } from "../api";
import { collection, deleteDoc, doc, getDocs } from "@firebase/firestore";
import { db } from "../config/firebase.config";
import { fetchUserCollection } from "../api/useUserCollection";
import { toast } from "react-toastify";

const TemplateDesignPin = ({ data, index, onCollectionToggle = () => {} }) => {
  const { data: user, refetch } = useUser(); // Destructured refetch from useUser
  const { refetch: tempRefetch } = useTemplates();
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
   
    
    useEffect(() => {
      const checkTemplateInCollection = async () => {
        if (user) {
          try {
            const userCollection = await getUserCollection(user.uid);
    
            // Ensure userCollection is an array before calling .some()
            if (userCollection && Array.isArray(userCollection)) {
              const templateExists = userCollection.some((item) => item._id === data._id); // Ensure item._id exists
              setIsAdded(templateExists);
            } else {
              setIsAdded(false); // Handle case when userCollection is not an array
            }
          } catch (error) {
            console.error("Error fetching user collection: ", error);
            setIsAdded(false); // Handle any errors that occur during the fetch
          }
        }
      };
    
      checkTemplateInCollection();
    }, [user, data._id]);
    
  
    // const handleAddToCollection = async (e) => {
    //   e.stopPropagation();
    //   if (typeof onCollectionToggle === "function") {
    //     try {
    //       if (isAdded) {
    //         // If already added, remove it from the collection
    //         await removeFromCollection(user, data); // Implement this function to remove the template
    //         setIsAdded(false); // Update state to reflect that it is removed
    //       } else {
    //         // If not added, add it to the collection
    //         await onCollectionToggle(data); // Toggle collection
    //         // await addToCollection(user, data); // Add template to user's collection
    //         await addToCollection(user,{...data,id:data._id});
    //         setIsAdded(true); // Update state to reflect that it is added
    //       }
    //       await fetchUserCollection();
    //       tempRefetch(); // Refetch if necessary
    //       refetch(); // Refetch user data if necessary
    //     } catch (error) {
    //       toast.error("Failed to toggle collection:", error);
    //     }
    //   } else {
    //     toast.warn("onCollectionToggle is not a function or not provided");
    //   }
    // };
    const handleAddToCollection = async (e) => {
      e.stopPropagation();
    
      // Assuming `user` is available from props or context
      if (!user || !user.uid) {
        toast.error("Please log in first!");
        return;
      }
    
      if (typeof onCollectionToggle === "function") {
        try {
          if (isAdded) {
            await removeFromCollection(user, data); // Ensure this function is imported or defined
            setIsAdded(false);
          } else {
            await onCollectionToggle(data);
            await addToCollection(user, { ...data, id: data._id }); // Ensure this function is available
            setIsAdded(true);
          }
    
          await fetchUserCollection(); // Make sure this is properly imported
          tempRefetch(); // Ensure this refetch function is defined or passed
          refetch(); // Make sure refetch is also accessible
        } catch (error) {
          toast.error("Failed to toggle collection.");
        }
      } else {
        toast.warn("onCollectionToggle is not a function or not provided.");
      }
    };
  
  
  
  
  
  
  
    const handleAddToFavourites = async (e) => {
      e.stopPropagation();
      try {
        await addToFavourites(user, data);
        tempRefetch(); // Refetch templates if necessary
        refetch(); // Refetch user data
      } catch (error) {
        toast.error("please login first ... ");
      }
    };
  
    const handleRouteNavigation = () => {
      navigate(`/resumeDetail/${data?._id}`, { replace: true });
    };
  
    return (
      <motion.div key={data?._id} {...scaleInOut(index)}>
        <div
          className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={data?.imageURL}
            className="w-full h-full object-cover"
            alt=""
          />
          <AnimatePresence>
            {isHovered && (
              <motion.div
                {...FadeInOutWIthOpacity}
                onClick={handleRouteNavigation}
                className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-end p-4 z-50"
              >
                <div className="flex flex-col items-end gap-4">
                  <InnerBoxCard
                    label={
                      // user?.collections?.includes(data?._id)
                      //   ? "Added to collections"
                      //   : "Add to collections"
                      isAdded ? 'Added to Collection' : 'Add to Collection'
                    }
                    Icon={+
                      // user?.collections?.includes(data?._id)
                      //   ? BiSolidFolderPlus
                      //   : BiFolderPlus
                      isAdded ? BiSolidFolderPlus : BiFolderPlus
                    }
                    onHandle={handleAddToCollection}
                  />
  
                  <InnerBoxCard
                    label={
                      data?.favourites?.includes(user?.uid)
                        ? "Added to Favourites"
                        : "Add to Favourites"
                    }
                    Icon={
                      data?.favourites?.includes(user?.uid)
                        ? BiSolidHeart
                        : BiHeart
                    }
                    onHandle={handleAddToFavourites}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };
  
  const InnerBoxCard = ({ label, Icon, onHandle }) => {
    const [isHovered, setHovered] = useState(false);
  
    return (
      <div
        onClick={onHandle}
        className="relative flex items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
        <Icon className="text-txtPrimary text-xl cursor-pointer" />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute right-full top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-md mr-2"
            >
              <p className="text-sm">{label}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  
  
  const removeFromCollection = async (user, template) => {
    try {
      // Reference the user's 'collections' subcollection
      const collectionRef = collection(db, 'users', user.uid, 'collections');
      const docRef = doc(collectionRef, template._id); // Use the template's id as the document id
  
      // Remove the template from the user's collections
      await deleteDoc(docRef);
  
      console.log(`Template ${template._id} removed from user's collection.`);
    } catch (error) {
      console.error("Error removing template from collection:", error);
    }
  };
  
  
  
  
  
  
  
  
  export default TemplateDesignPin;