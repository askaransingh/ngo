// // import { useQuery } from "@tanstack/react-query";
// // import React from "react";
// // import { Link, useParams } from "react-router-dom";
// // import {
// //   getTemplateDetails,
// //   getTemplates,
// //   saveToCollections,
// //   saveToFavourites,
// // } from "../api";
// // import { MainSpinner, TemplateDesignPin } from "../components";
// // import { FaHouse } from "react-icons/fa6";
// // import useUser from "../hooks/useUser";
// // import { BiFolderPlus, BiSolidFolderPlus, BiSolidHeart } from "react-icons/bi";
// // import useTemplates from "../hooks/useTemplates";
// // import { AnimatePresence } from "framer-motion";

// // const TemplateDesignPinDetails = () => {
// //   const { templateID } = useParams();
// //   const { data, isError, isLoading, refetch } = useQuery(
// //     ["template", templateID],
// //     () => getTemplateDetails(templateID)
// //   );

// //   const { data: user, refetch: userRefetch } = useUser();

// //   const {
// //     data: template,
// //     refetch: temp_refetch,
// //     isLoading: temp_isLoading,
// //   } = useTemplates();

// //   const addToCollection = async (e) => {
// //     e.stopPropagation();
// //     await saveToCollections(user, data);
// //     refetch(); // Call refetch directly here
// //   };

// //   const addToFavourites = async (e) => {
// //     e.stopPropagation();
// //     await saveToFavourites(user, data);
// //     temp_refetch();
// //     refetch();
// //   };

// //   if (isLoading) return <MainSpinner />;

// //   if (isError) {
// //     <div className="w-full h-[60vh] flex flex-col items-center justify-center">
// //       <p className="text-lg text-txtPrimary font-semibold">
// //         Error while fetching the data...Please try again later
// //       </p>
// //     </div>;
// //   }

// //   return (
// //     <div className="w-full flex items-center justify-start flex-col px-4 py-12">
// //       <div className="w-full flex items-center pb-8 gap-2">
// //         <link
// //           to={"/"}
// //           className="flex items-center justify-center gap-2 text-txtPrimary"
// //         >
// //           <FaHouse />
// //           Home
// //         </link>
// //         <p>/</p>
// //         <p>{data?.name}</p>
// //       </div>
// //       <div className="w-full grid grid-cols-1 lg:grid-cols-12">
// //         <div className="col-span-1 lg:col-span-8 flex flex-col items-start justify-start gap-4">
// //           <img
// //             className="w-full h-auto object-contain rounded-md"
// //             src={data?.imageURL}
// //             alt=""
// //           />
// //           <div className="w-full flex flex-col items-start justify-start gap-2">
// //             <div className="w-full flex items-center justify-between">
// //               <p className="text-base text-txtPrimary font-semibold">
// //                 {data?.title}
// //               </p>
// //               {data?.favourites?.length > 0 && (
// //                 <div className="flex items-center justify-center gap-1">
// //                   <BiSolidHeart className="text-base text-red-500" />
// //                   <p className="text-base text-txtPrimary font-semibold">
// //                     {data?.favourites?.length} likes
// //                   </p>
// //                 </div>
// //               )}
// //             </div>

// //             {user && (
// //               <div className="flex items-center justify-center gap-3">
// //                 {user?.collections?.includes(data?._id) ? (
// //                   <React.Fragment>
// //                     <div
// //                       onClick={addToFavourites}
// //                       className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 gap-2 hover:bg-gray-200 cursor-pointer"
// //                     >
// //                       <BiSolidFolderPlus className="text-base text-txtPrimary" />
// //                       <p className="text-sm text-txtPrimary whitespace-nowrap">
// //                         Remove From Collections
// //                       </p>
// //                     </div>
// //                   </React.Fragment>
// //                 ) : (
// //                   <React.Fragment>
// //                     <div
// //                       onClick={addToCollection}
// //                       className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 gap-2 hover:bg-gray-200 cursor-pointer"
// //                     >
// //                       <BiFolderPlus className="text-base text-txtPrimary" />
// //                       <p className="text-sm text-txtPrimary whitespace-nowrap">
// //                         Add to Collections
// //                       </p>
// //                     </div>
// //                   </React.Fragment>
// //                 )}
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         <div className="col-span-1 lg:col-span-4 w-full flex flex-col items-center justify-start px-3 gap-6">
// //           <div
// //             className="w-full h-72 bg-blue-200 rounded-md overflow-x-hidden relative"
// //             style={{
// //               background:
// //                 "url(https://cdn.pixabay.com/photo/2023/10/04/03/ai-generated-8292699_1280.jpg)",
// //               backgroundPosition: "center",
// //               backgroundSize: "cover",
// //             }}
// //           >
// //             <div className="absolute insert-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
// //               <Link
// //                 to={"/"}
// //                 className="px-4 py-2 rounded-md border-2 border-gray-50 text-white"
// //               >
// //                 Discover More
// //               </Link>
// //             </div>
// //           </div>

// //           {user && (
// //             <Link
// //               className="w-full px-4 py-3 rounded-md flex items-center justify-center bg-emerald-500 cursor-pointer"
// //               to={`/resume/${data?.name}?templateId=${templateID}`}
// //             >
// //               <p className="text-white fomt-semibold text-lg">
// //                 Edit this Template
// //               </p>
// //             </Link>
// //           )}
// //           <div className="w-full flex items-center justify-start flex-wrap gap-2">
// //             {data?.tags?.map((tag, index) => (
// //               <p
// //                 className="text-xs border border-gray-300 px-2 py-1 rounded-md whitespace-nowrap"
// //                 key={index}
// //               >
// //                 {tag}
// //               </p>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //       {template?.filter((temp) => temp._id !== data?._id).length > 0 && (
// //         <div className="w-full py-8 flex flex-col items-start justify-start gap-4">
// //           <p className="text-lg font-semibold text-txtDark">
// //             You might also like
// //           </p>
// //           <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
// //             <React.Fragment>
// //               <AnimatePresence>
// //                 {template
// //                   ?.filter((temp) => temp._id !== data?._id)
// //                   .map((template, index) => (
// //                     <TemplateDesignPin
// //                       key={template?._id}
// //                       data={template}
// //                       index={index}
// //                     />
// //                   ))}
// //               </AnimatePresence>
// //             </React.Fragment>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default TemplateDesignPinDetails;

// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import {
//   getTemplateDetails,
//   getTemplates,
//   saveToCollections,
//   saveToFavourites,
// } from "../api";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import { FaHouse } from "react-icons/fa6";
// import useUser from "../hooks/useUser";
// import { BiFolderPlus, BiSolidFolderPlus, BiSolidHeart } from "react-icons/bi";
// import useTemplates from "../hooks/useTemplates";
// import { AnimatePresence } from "framer-motion";

// const TemplateDesignPinDetails = () => {
//   const { templateID } = useParams();
//   const { data, isError, isLoading, refetch } = useQuery(
//     ["template", templateID],
//     () => getTemplateDetails(templateID)
//   );

//   const { data: user, refetch: userRefetch } = useUser();

//   const {
//     data: template,
//     refetch: refetchTemplates,
//     isLoading: tempIsLoading,
//   } = useTemplates();

//   const addToCollection = async (e) => {
//     e.stopPropagation();
//     await saveToCollections(user, data);
//     refetch(); // Call refetch directly here
//   };

//   const addToFavourites = async (e) => {
//     e.stopPropagation();
//     await saveToFavourites(user, data);
//     refetchTemplates(); // Use a clearer name for refetch
//     refetch();
//   };

//   if (isLoading) return <MainSpinner />;

//   if (isError) {
//     return (
//       <div className="w-full h-[60vh] flex flex-col items-center justify-center">
//         <p className="text-lg text-txtPrimary font-semibold">
//           Error while fetching the data...Please try again later
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full flex items-center justify-start flex-col px-4 py-12">
//       <div className="w-full flex items-center pb-8 gap-2">
//         <Link
//           to={"/"}
//           className="flex items-center justify-center gap-2 text-txtPrimary"
//         >
//           <FaHouse />
//           Home
//         </Link>
//         <p>/</p>
//         <p>{data?.name}</p>
//       </div>
//       <div className="w-full grid grid-cols-1 lg:grid-cols-12">
//         <div className="col-span-1 lg:col-span-8 flex flex-col items-start justify-start gap-4">
//           <img
//             className="w-full h-auto object-contain rounded-md"
//             src={data?.imageURL}
//             alt=""
//           />
//           <div className="w-full flex flex-col items-start justify-start gap-2">
//             <div className="w-full flex items-center justify-between">
//               <p className="text-base text-txtPrimary font-semibold">
//                 {data?.title}
//               </p>
//               {data?.favourites?.length > 0 && (
//                 <div className="flex items-center justify-center gap-1">
//                   <BiSolidHeart className="text-base text-red-500" />
//                   <p className="text-base text-txtPrimary font-semibold">
//                     {data?.favourites?.length} likes
//                   </p>
//                 </div>
//               )}
//             </div>

//             {user && (
//               <div className="flex items-center justify-center gap-3">
//                 {user?.collections?.includes(data?._id) ? (
//                   <React.Fragment>
//                     <div
//                       onClick={addToFavourites}
//                       className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 gap-2 hover:bg-gray-200 cursor-pointer"
//                     >
//                       <BiSolidFolderPlus className="text-base text-txtPrimary" />
//                       <p className="text-sm text-txtPrimary whitespace-nowrap">
//                         Remove From Collections
//                       </p>
//                     </div>
//                   </React.Fragment>
//                 ) : (
//                   <React.Fragment>
//                     <div
//                       onClick={addToCollection}
//                       className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 gap-2 hover:bg-gray-200 cursor-pointer"
//                     >
//                       <BiFolderPlus className="text-base text-txtPrimary" />
//                       <p className="text-sm text-txtPrimary whitespace-nowrap">
//                         Add to Collections
//                       </p>
//                     </div>
//                   </React.Fragment>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="col-span-1 lg:col-span-4 w-full flex flex-col items-center justify-start px-3 gap-6">
//           <div
//             className="w-full h-72 bg-blue-200 rounded-md overflow-x-hidden relative"
//             style={{
//               background:
//                 "url(https://cdn.pixabay.com/photo/2023/10/04/03/ai-generated-8292699_1280.jpg)",
//               backgroundPosition: "center",
//               backgroundSize: "cover",
//             }}
//           >
//             <div className="absolute insert-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
//               <Link
//                 to={"/"}
//                 className="px-4 py-2 rounded-md border-2 border-gray-50 text-white"
//               >
//                 Discover More
//               </Link>
//             </div>
//           </div>

//           {user && (
//             <Link
//               className="w-full px-4 py-3 rounded-md flex items-center justify-center bg-emerald-500 cursor-pointer"
//               to={`/resume/${data?.name}?templateId=${templateID}`}
//             >
//               <p className="text-white fomt-semibold text-lg">
//                 Edit this Template
//               </p>
//             </Link>
//           )}
//           <div className="w-full flex items-center justify-start flex-wrap gap-2">
//             {data?.tags?.map((tag, index) => (
//               <p
//                 className="text-xs border border-gray-300 px-2 py-1 rounded-md whitespace-nowrap"
//                 key={index}
//               >
//                 {tag}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//       {template?.filter((temp) => temp._id !== data?._id).length > 0 && (
//         <div className="w-full py-8 flex flex-col items-start justify-start gap-4">
//           <p className="text-lg font-semibold text-txtDark">
//             You might also like
//           </p>
//           <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//             <React.Fragment>
//               <AnimatePresence>
//                 {template
//                   ?.filter((temp) => temp._id !== data?._id)
//                   .map((template, index) => (
//                     <TemplateDesignPin
//                       key={template?._id}
//                       data={template}
//                       index={index}
//                     />
//                   ))}
//               </AnimatePresence>
//             </React.Fragment>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TemplateDesignPinDetails;

// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import {
//   getTemplateDetails,
//   getTemplates,
//   saveToCollections,
//   saveToFavourites,
// } from "../api";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import { FaHouse } from "react-icons/fa6";
// import useUser from "../hooks/useUser";
// import { BiFolderPlus, BiSolidFolderPlus, BiSolidHeart } from "react-icons/bi";
// import useTemplates from "../hooks/useTemplates";
// import { AnimatePresence } from "framer-motion";

// const TemplateDesignPinDetails = () => {
//   const { templateID } = useParams();

//   // Fetching template details
//   const { data, isError, isLoading, refetch } = useQuery({
//     queryKey: ['template', templateID],
//     queryFn: () => getTemplateDetails(templateID),
//   });

//   // Fetching user data
//   const { data: user, refetch: userRefetch } = useUser();

//   // Fetching all templates
//   const {
//     data: templates,
//     refetch: refetchTemplates,
//     isLoading: tempIsLoading,
//   } = useTemplates();

//   const addToCollection = async (e) => {
//     e.stopPropagation();
//     await addToCollection(user, data);
//     refetch(); // Refresh the current template data
//   };

//   const addToFavourites = async (e) => {
//     e.stopPropagation();
//     await addToFavourites(user, data);
//     refetchTemplates(); // Refresh the templates list
//     refetch(); // Refresh the current template data
//   };

//   if (isLoading) return <MainSpinner />;

//   if (isError) {
//     return (
//       <div className="w-full h-[60vh] flex flex-col items-center justify-center">
//         <p className="text-lg text-txtPrimary font-semibold">
//           Error while fetching the data... Please try again later.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full flex items-center justify-start flex-col px-4 py-12">
//       <div className="w-full flex items-center pb-8 gap-2">
//         <Link
//           to={"/"}
//           className="flex items-center justify-center gap-2 text-txtPrimary"
//         >
//           <FaHouse />
//           Home
//         </Link>
//         <p>/</p>
//         <p>{data?.name}</p>
//       </div>
//       <div className="w-full grid grid-cols-1 lg:grid-cols-12">
//         <div className="col-span-1 lg:col-span-8 flex flex-col items-start justify-start gap-4">
//           <img
//             className="w-full h-auto object-contain rounded-md"
//             src={data?.imageURL}
//             alt=""
//           />
//           <div className="w-full flex flex-col items-start justify-start gap-2">
//             <div className="w-full flex items-center justify-between">
//               <p className="text-base text-txtPrimary font-semibold">
//                 {data?.title}
//               </p>
//               {data?.favourites?.length > 0 && (
//                 <div className="flex items-center justify-center gap-1">
//                   <BiSolidHeart className="text-base text-red-500" />
//                   <p className="text-base text-txtPrimary font-semibold">
//                     {data?.favourites?.length} likes
//                   </p>
//                 </div>
//               )}
//             </div>

//             {user && (
//               <div className="flex items-center justify-center gap-3">
//                 {user?.collections?.includes(data?._id) ? (
//                   <div
//                     onClick={addToFavourites}
//                     className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 gap-2 hover:bg-gray-200 cursor-pointer"
//                   >
//                     <BiSolidFolderPlus className="text-base text-txtPrimary" />
//                     <p className="text-sm text-txtPrimary whitespace-nowrap">
//                       Remove From Collections
//                     </p>
//                   </div>
//                 ) : (
//                   <div
//                     onClick={addToCollection}
//                     className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 gap-2 hover:bg-gray-200 cursor-pointer"
//                   >
//                     <BiFolderPlus className="text-base text-txtPrimary" />
//                     <p className="text-sm text-txtPrimary whitespace-nowrap">
//                       Add to Collections
//                     </p>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="col-span-1 lg:col-span-4 w-full flex flex-col items-center justify-start px-3 gap-6">
//           <div
//             className="w-full h-72 bg-blue-200 rounded-md overflow-x-hidden relative"
//             style={{
//               background:
//                 "url(https://cdn.pixabay.com/photo/2023/10/04/03/ai-generated-8292699_1280.jpg)",
//               backgroundPosition: "center",
//               backgroundSize: "cover",
//             }}
//           >
//             <div className="absolute insert-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
//               <Link
//                 to={"/"}
//                 className="px-4 py-2 rounded-md border-2 border-gray-50 text-white"
//               >
//                 Discover More
//               </Link>
//             </div>
//           </div>

//           {user && (
//             <Link
//               className="w-full px-4 py-3 rounded-md flex items-center justify-center bg-emerald-500 cursor-pointer"
//               to={`/resume/${data?.name}?templateId=${templateID}`}
//             >
//               <p className="text-white font-semibold text-lg">
//                 Edit this Template
//               </p>
//             </Link>
//           )}
//           <div className="w-full flex items-center justify-start flex-wrap gap-2">
//             {data?.tags?.map((tag, index) => (
//               <p
//                 className="text-xs border border-gray-300 px-2 py-1 rounded-md whitespace-nowrap"
//                 key={index}
//               >
//                 {tag}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//       {templates?.filter((temp) => temp._id !== data?._id).length > 0 && (
//         <div className="w-full py-8 flex flex-col items-start justify-start gap-4">
//           <p className="text-lg font-semibold text-txtDark">
//             You might also like
//           </p>
//           <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//             <React.Fragment>
//               <AnimatePresence>
//                 {templates
//                   ?.filter((temp) => temp._id !== data?._id)
//                   .map((template, index) => (
//                     <TemplateDesignPin
//                       key={template?._id}
//                       data={template}
//                       index={index}
//                     />
//                   ))}
//               </AnimatePresence>
//             </React.Fragment>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TemplateDesignPinDetails;

// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import {
//   getTemplateDetails,
//   getTemplates,
//   addToCollection as apiSaveToCollections,
//   addToFavourites as apiSaveToFavourites,
// } from "../api";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import { FaHouse } from "react-icons/fa6";
// import useUser from "../hooks/useUser";
// import { BiFolderPlus, BiSolidFolderPlus, BiSolidHeart } from "react-icons/bi";
// import useTemplates from "../hooks/useTemplates";
// import { AnimatePresence } from "framer-motion";

// const TemplateDesignPinDetails = () => {
//   const { templateID } = useParams();

//   // Fetching template details
//   const { data, isError, isLoading, refetch } = useQuery({
//     queryKey: ["template", templateID],
//     queryFn: () => getTemplateDetails(templateID),
//   });

//   // Fetching user data
//   const { data: user, refetch: userRefetch } = useUser();

//   // Fetching all templates
//   const {
//     data: templates,
//     refetch: refetchTemplates,
//     isLoading: tempIsLoading,
//   } = useTemplates();

//   const handleAddToCollection = async (e) => {
//     e.stopPropagation();
//     try {
//       await apiSaveToCollections(user, data);
//       refetch(); // Refresh the current template data
//     } catch (error) {
//       console.error("Error adding to collection:", error);
//     }
//   };

//   const handleAddToFavourites = async (e) => {
//     e.stopPropagation();
//     try {
//       await apiSaveToFavourites(user, data);
//       refetchTemplates(); // Refresh the templates list
//       refetch(); // Refresh the current template data
//     } catch (error) {
//       console.error("Error adding to favourites:", error);
//     }
//   };

//   if (isLoading) return <MainSpinner />;

//   if (isError) {
//     return (
//       <div className="w-full h-[60vh] flex flex-col items-center justify-center">
//         <p className="text-lg text-txtPrimary font-semibold">
//           Error while fetching the data... Please try again later.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full flex items-center justify-start flex-col px-4 py-12">
//       <div className="w-full flex items-center pb-8 gap-2">
//         <Link
//           to={"/"}
//           className="flex items-center justify-center gap-2 text-txtPrimary"
//         >
//           <FaHouse />
//           Home
//         </Link>
//         <p>/</p>
//         <p>{data?.name}</p>
//       </div>
//       <div className="w-full grid grid-cols-1 lg:grid-cols-12">
//         <div className="col-span-1 lg:col-span-8 flex flex-col items-start justify-start gap-4">
//           <img
//             className="w-full h-auto object-contain rounded-md"
//             src={data?.imageURL}
//             alt=""
//           />
//           <div className="w-full flex flex-col items-start justify-start gap-2">
//             <div className="w-full flex items-center justify-between">
//               <p className="text-base text-txtPrimary font-semibold">
//                 {data?.title}
//               </p>
//               {data?.favourites?.length > 0 && (
//                 <div className="flex items-center justify-center gap-1">
//                   <BiSolidHeart className="text-base text-red-500" />
//                   <p className="text-base text-txtPrimary font-semibold">
//                     {data?.favourites?.length} likes
//                   </p>
//                 </div>
//               )}
//             </div>

//             {user && (
//               <div className="flex items-center justify-center gap-3">
//                 {user?.collections?.includes(data?._id) ? (
//                   <div
//                     onClick={handleAddToFavourites} // Updated function name
//                     className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 gap-2 hover:bg-gray-200 cursor-pointer"
//                   >
//                     <BiSolidFolderPlus className="text-base text-txtPrimary" />
//                     <p className="text-sm text-txtPrimary whitespace-nowrap">
//                       Remove From Collections
//                     </p>
//                   </div>
//                 ) : (
//                   <div
//                     onClick={handleAddToCollection} // Updated function name
//                     className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 gap-2 hover:bg-gray-200 cursor-pointer"
//                   >
//                     <BiFolderPlus className="text-base text-txtPrimary" />
//                     <p className="text-sm text-txtPrimary whitespace-nowrap">
//                       Add to Collections
//                     </p>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="col-span-1 lg:col-span-4 w-full flex flex-col items-center justify-start px-3 gap-6">
//           <div
//             className="w-full h-72 bg-blue-200 rounded-md overflow-x-hidden relative"
//             style={{
//               background:
//                 "url(https://dorsettravelguide.com/wp-content/uploads/2021/01/AdobeStock_84334249-1024x683.jpeg)",
//               backgroundPosition: "center",
//               backgroundSize: "cover",
//             }}
//           >
//             <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
//               <Link
//                 to={"/"}
//                 className="px-4 py-2 rounded-md border-2 border-gray-50 text-white  "
//                 style={{
//                   marginTop: "10px",
//                   marginLeft: "100px",
//                   marginRight: "100px",
//                 }}
//               >
//                 Discover More
//               </Link>
//             </div>
//           </div>
//           {/* mt-7 mx-50 */}
//           {user && (
//             <Link
//               className="w-full px-4 py-3 rounded-md flex items-center justify-center bg-emerald-500 cursor-pointer"
//               to={`/resume/${data?.name}?templateId=${templateID}`}
//             >
//               <p className="text-white font-semibold text-lg">
//                 Edit this Template
//               </p>
//             </Link>
//           )}
//           <div className="w-full flex items-center justify-start flex-wrap gap-2">
//             {data?.tags?.map((tag, index) => (
//               <p
//                 className="text-xs border border-gray-300 px-2 py-1 rounded-md whitespace-nowrap"
//                 key={index}
//               >
//                 {tag}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//       {templates?.filter((temp) => temp._id !== data?._id).length > 0 && (
//         <div className="w-full py-8 flex flex-col items-start justify-start gap-4">
//           <p className="text-lg font-semibold text-txtDark">
//             You might also like
//           </p>
//           <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//             <React.Fragment>
//               <AnimatePresence>
//                 {templates
//                   ?.filter((temp) => temp._id !== data?._id)
//                   .map((template, index) => (
//                     <TemplateDesignPin
//                       key={template?._id}
//                       data={template}
//                       index={index}
//                     />
//                   ))}
//               </AnimatePresence>
//             </React.Fragment>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // export default TemplateDesignPinDetails;
// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import {
//   getTemplateDetails,
//   addToCollection as apiSaveToCollections,
//   addToFavourites as apiSaveToFavourites,
// } from "../api";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import { FaHouse } from "react-icons/fa6";
// import useUser from "../hooks/useUser";
// import { BiFolderPlus, BiSolidFolderPlus, BiSolidHeart } from "react-icons/bi";
// import { toast } from "react-toastify"; // Import toast for notifications
// import useTemplates from "../hooks/useTemplates";
// import { AnimatePresence } from "framer-motion";

// const TemplateDesignPinDetails = () => {
//   const { templateID } = useParams();

//   // Fetching template details
//   const { data, isError, isLoading, refetch } = useQuery({
//     queryKey: ["template", templateID],
//     queryFn: () => getTemplateDetails(templateID),
//   });

//   // Fetching user data
//   const { data: user, refetch: userRefetch } = useUser();

//   // Fetching all templates
//   const {
//     data: templates,
//     refetch: refetchTemplates,
//     isLoading: tempIsLoading,
//   } = useTemplates();

//   const handleAddToCollection = async (e) => {
//     e.stopPropagation();

//     if (!user || !user.uid) {
//       // If the user is not signed in, show a toast message
//       toast.error("Please log in first to add to collections");
//       return;
//     }

//     //   try {
//     //     await apiSaveToCollections(user, data);
//     //     refetch(); // Refresh the current template data
//     //   } catch (error) {
//     //     console.error("Please create your account ");
//     //   }
//     // };
//     try {
//       await apiSaveToCollections(user, data);
//       toast.success("Added to collections!");
//       refetch(); // Refresh the current template data
//     } catch (error) {
//       console.error("Error adding to collection:", error);
//       toast.error("Failed to add to collections");
//     }
//   };
//   const handleAddToFavourites = async (e) => {
//     e.stopPropagation();

//     if (!user || !user.uid) {
//       // If the user is not signed in, show a toast message
//       toast.error("Please log in first to add to favourites");
//       return;
//     }

//     //   try {
//     //     await apiSaveToFavourites(user, data);
//     //     refetchTemplates(); // Refresh the templates list
//     //     refetch(); // Refresh the current template data
//     //   } catch (error) {
//     //     console.error("Error adding to favourites:", error);
//     //   }
//     // };
//     try {
//       await apiSaveToFavourites(user, data);
//       toast.success("Added to favourites!");
//       refetchTemplates(); // Refresh the templates list
//       refetch(); // Refresh the current template data
//     } catch (error) {
//       console.error("Error adding to favourites:", error);
//       toast.error("Failed to add to favourites");
//     }
//   };
//   if (isLoading) return <MainSpinner />;

//   if (isError) {
//     return (
//       <div className="w-full h-[60vh] flex flex-col items-center justify-center">
//         <p className="text-lg text-txtPrimary font-semibold">
//           Error while fetching the data... Please try again later.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full flex items-center justify-start flex-col px-4 py-12">
//       <div className="w-full flex items-center pb-8 gap-2">
//         <Link
//           to={"/"}
//           className="flex items-center justify-center gap-2 text-txtPrimary"
//         >
//           <FaHouse />
//           Home
//         </Link>
//         <p>/</p>
//         <p>{data?.name}</p>
//       </div>
//       <div className="w-full grid grid-cols-1 lg:grid-cols-12">
//         <div className="col-span-1 lg:col-span-8 flex flex-col items-start justify-start gap-4">
//           <img
//             className="w-full h-auto object-contain rounded-md"
//             src={data?.imageURL}
//             alt=""
//           />
//           <div className="w-full flex flex-col items-start justify-start gap-2">
//             <div className="w-full flex items-center justify-between">
//               <p className="text-base text-txtPrimary font-semibold">
//                 {data?.title}
//               </p>
//               {data?.favourites?.length > 0 && (
//                 <div className="flex items-center justify-center gap-1">
//                   <BiSolidHeart className="text-base text-red-500" />
//                   <p className="text-base text-txtPrimary font-semibold">
//                     {data?.favourites?.length} likes
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div className="flex items-center justify-center gap-3">
//               {user?.collections?.includes(data?._id) ? (
//                 <div
//                   onClick={handleAddToFavourites}
//                   className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 gap-2 hover:bg-gray-200 cursor-pointer"
//                 >
//                   <BiSolidFolderPlus className="text-base text-txtPrimary" />
//                   <p className="text-sm text-txtPrimary whitespace-nowrap">
//                     Remove From Collections
//                   </p>
//                 </div>
//               ) : (
//                 <div
//                   onClick={handleAddToCollection}
//                   className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 gap-2 hover:bg-gray-200 cursor-pointer"
//                 >
//                   <BiFolderPlus className="text-base text-txtPrimary" />
//                   <p className="text-sm text-txtPrimary whitespace-nowrap">
//                     Add to Collections
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="col-span-1 lg:col-span-4 w-full flex flex-col items-center justify-start px-3 gap-6">
//           <div
//             className="w-full h-72 bg-blue-200 rounded-md overflow-x-hidden relative"
//             style={{
//               background:
//                 "url(https://dorsettravelguide.com/wp-content/uploads/2021/01/AdobeStock_84334249-1024x683.jpeg)",
//               backgroundPosition: "center",
//               backgroundSize: "cover",
//             }}
//           >
//             <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
//               <Link
//                 to={"/"}
//                 className="px-4 py-2 rounded-md border-2 border-gray-50 text-white"
//                 style={{
//                   marginTop: "10px",
//                   marginLeft: "100px",
//                   marginRight: "100px",
//                 }}
//               >
//                 Discover More
//               </Link>
//             </div>
//           </div>
//           {user && (
//             <Link
//               className="w-full px-4 py-3 rounded-md flex items-center justify-center bg-emerald-500 cursor-pointer"
//               to={`/resume/${data?.name}?templateId=${templateID}`}
//             >
//               <p className="text-white font-semibold text-lg">
//                 Edit this Template
//               </p>
//             </Link>
//           )}
//           <div className="w-full flex items-center justify-start flex-wrap gap-2">
//             {data?.tags?.map((tag, index) => (
//               <p
//                 className="text-xs border border-gray-300 px-2 py-1 rounded-md whitespace-nowrap"
//                 key={index}
//               >
//                 {tag}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//       {templates?.filter((temp) => temp._id !== data?._id).length > 0 && (
//         <div className="w-full py-8 flex flex-col items-start justify-start gap-4">
//           <p className="text-lg font-semibold text-txtDark">
//             You might also like
//           </p>
//           <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//             <React.Fragment>
//               <AnimatePresence>
//                 {templates
//                   ?.filter((temp) => temp._id !== data?._id)
//                   .map((template, index) => (
//                     <TemplateDesignPin
//                       key={template?._id}
//                       data={template}
//                       index={index}
//                     />
//                   ))}
//               </AnimatePresence>
//             </React.Fragment>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // export default TemplateDesignPinDetails;
// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import {
//   getTemplateDetails,
//   addToCollection as apiSaveToCollections,
//   addToFavourites as apiSaveToFavourites,
// } from "../api";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import { FaHouse } from "react-icons/fa6";
// import useUser from "../hooks/useUser";
// import { BiFolderPlus, BiSolidFolderPlus, BiSolidHeart } from "react-icons/bi";
// import { toast } from "react-toastify"; // Import toast for notifications
// import useTemplates from "../hooks/useTemplates";
// import { AnimatePresence } from "framer-motion";

// const TemplateDesignPinDetails = () => {
//   const { templateID } = useParams();

//   // Fetching template details
//   const { data, isError, isLoading, refetch } = useQuery({
//     queryKey: ["template", templateID],
//     queryFn: () => getTemplateDetails(templateID),
//   });

//   // Fetching user data
//   const { data: user, refetch: userRefetch } = useUser();

//   // Fetching all templates
//   const {
//     data: templates,
//     refetch: refetchTemplates,
//     isLoading: tempIsLoading,
//   } = useTemplates();

//   const handleAddToCollection = async (e) => {
//     e.stopPropagation();

//     if (!user || !user.uid) {
//       // If the user is not signed in, show a toast message
//       toast.error("Please log in first to add to collections");
//       return;
//     }

//     //   try {
//     //     await apiSaveToCollections(user, data);
//     //     refetch(); // Refresh the current template data
//     //   } catch (error) {
//     //     console.error("Please create your account ");
//     //   }
//     // };
//     try {
//       await apiSaveToCollections(user, data);
//       toast.success("Added to collections!");
//       refetch(); // Refresh the current template data
//     } catch (error) {
//       console.error("Error adding to collection:", error);
//       toast.error("Failed to add to collections");
//     }
//   };
//   const handleAddToFavourites = async (e) => {
//     e.stopPropagation();

//     if (!user || !user.uid) {
//       // If the user is not signed in, show a toast message
//       toast.error("Please log in first to add to favourites");
//       return;
//     }

//     //   try {
//     //     await apiSaveToFavourites(user, data);
//     //     refetchTemplates(); // Refresh the templates list
//     //     refetch(); // Refresh the current template data
//     //   } catch (error) {
//     //     console.error("Error adding to favourites:", error);
//     //   }
//     // };
//     try {
//       await apiSaveToFavourites(user, data);
//       toast.success("Added to favourites!");
//       refetchTemplates(); // Refresh the templates list
//       refetch(); // Refresh the current template data
//     } catch (error) {
//       console.error("Error adding to favourites:", error);
//       toast.error("Failed to add to favourites");
//     }
//   };
//   if (isLoading) return <MainSpinner />;

//   if (isError) {
//     return (
//       <div className="w-full h-[60vh] flex flex-col items-center justify-center">
//         <p className="text-lg text-txtPrimary font-semibold">
//           Error while fetching the data... Please try again later.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full flex items-center justify-start flex-col px-4 py-12">
//       <div className="w-full flex items-center pb-8 gap-2">
//         <Link
//           to={"/"}
//           className="flex items-center justify-center gap-2 text-txtPrimary"
//         >
//           <FaHouse />
//           Home
//         </Link>
//         <p>/</p>
//         <p>{data?.name}</p>
//       </div>
//       <div className="w-full grid grid-cols-1 lg:grid-cols-12">
//         <div className="col-span-1 lg:col-span-8 flex flex-col items-start justify-start gap-4">
//           <img
//             className="w-full h-auto object-contain rounded-md"
//             src={data?.imageURL}
//             alt=""
//           />
//           <div className="w-full flex flex-col items-start justify-start gap-2">
//             <div className="w-full flex items-center justify-between">
//               <p className="text-base text-txtPrimary font-semibold">
//                 {data?.title}
//               </p>
//               {data?.favourites?.length > 0 && (
//                 <div className="flex items-center justify-center gap-1">
//                   <BiSolidHeart className="text-base text-red-500" />
//                   <p className="text-base text-txtPrimary font-semibold">
//                     {data?.favourites?.length} likes
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div className="flex items-center justify-center gap-3">
//               {user?.collections?.includes(data?._id) ? (
//                 <div
//                   onClick={handleAddToFavourites}
//                   className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 gap-2 hover:bg-gray-200 cursor-pointer"
//                 >
//                   <BiSolidFolderPlus className="text-base text-txtPrimary" />
//                   <p className="text-sm text-txtPrimary whitespace-nowrap">
//                     Remove From Collections
//                   </p>
//                 </div>
//               ) : (
//                 <div
//                   onClick={handleAddToCollection}
//                   className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 gap-2 hover:bg-gray-200 cursor-pointer"
//                 >
//                   <BiFolderPlus className="text-base text-txtPrimary" />
//                   <p className="text-sm text-txtPrimary whitespace-nowrap">
//                     Add to Collections
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="col-span-1 lg:col-span-4 w-full flex flex-col items-center justify-start px-3 gap-6">
//           <div
//             className="w-full h-72 bg-blue-200 rounded-md overflow-x-hidden relative"
//             style={{
//               background:
//                 "url(https://dorsettravelguide.com/wp-content/uploads/2021/01/AdobeStock_84334249-1024x683.jpeg)",
//               backgroundPosition: "center",
//               backgroundSize: "cover",
//             }}
//           >
//             <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
//               <Link
//                 to={"/"}
//                 className="px-4 py-2 rounded-md border-2 border-gray-50 text-white"
//                 style={{
//                   marginTop: "10px",
//                   marginLeft: "100px",
//                   marginRight: "100px",
//                 }}
//               >
//                 Discover More
//               </Link>
//             </div>
//           </div>
//           {user && (
//             <Link
//               className="w-full px-4 py-3 rounded-md flex items-center justify-center bg-emerald-500 cursor-pointer"
//               to={`/resume/${data?.name}?templateId=${templateID}`}
//             >
//               <p className="text-white font-semibold text-lg">
//                 Edit this Template
//               </p>
//             </Link>
//           )}
//           <div className="w-full flex items-center justify-start flex-wrap gap-2">
//             {data?.tags?.map((tag, index) => (
//               <p
//                 className="text-xs border border-gray-300 px-2 py-1 rounded-md whitespace-nowrap"
//                 key={index}
//               >
//                 {tag}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//       {templates?.filter((temp) => temp._id !== data?._id).length > 0 && (
//         <div className="w-full py-8 flex flex-col items-start justify-start gap-4">
//           <p className="text-lg font-semibold text-txtDark">
//             You might also like
//           </p>
//           <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//             <React.Fragment>
//               <AnimatePresence>
//                 {templates
//                   ?.filter((temp) => temp._id !== data?._id)
//                   .map((template, index) => (
//                     <TemplateDesignPin
//                       key={template?._id}
//                       data={template}
//                       index={index}
//                     />
//                   ))}
//               </AnimatePresence>
//             </React.Fragment>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TemplateDesignPinDetails;

// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import {
//   getTemplateDetails,
//   addToCollection as apiSaveToCollections,
//   addToFavourites as apiSaveToFavourites,
// } from "../api";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import { FaHouse } from "react-icons/fa6";
// import useUser from "../hooks/useUser";
// import { BiFolderPlus, BiSolidFolderPlus, BiSolidHeart } from "react-icons/bi";
// import { toast } from "react-toastify"; // Import toast for notifications
// import useTemplates from "../hooks/useTemplates";
// import { AnimatePresence } from "framer-motion";

// const TemplateDesignPinDetails = () => {
//   const { templateID } = useParams();

//   // Fetching template details
//   const { data, isError, isLoading, refetch } = useQuery({
//     queryKey: ["template", templateID],
//     queryFn: () => getTemplateDetails(templateID),
//   });

//   // Fetching user data
//   const { data: user, refetch: userRefetch } = useUser();

//   // Fetching all templates
//   const {
//     data: templates,
//     refetch: refetchTemplates,
//     isLoading: tempIsLoading,
//   } = useTemplates();

//   const handleAddToCollection = async (e) => {
//     e.stopPropagation();

//     if (!user || !user.uid) {
//       // If the user is not signed in, show a toast message
//       toast.error("Please log in first to add to collections");
//       return;
//     }

//     //   try {
//     //     await apiSaveToCollections(user, data);
//     //     refetch(); // Refresh the current template data
//     //   } catch (error) {
//     //     console.error("Please create your account ");
//     //   }
//     // };
//     try {
//       await apiSaveToCollections(user, data);
//       toast.success("Added to collections!");
//       refetch(); // Refresh the current template data
//     } catch (error) {
//       console.error("Error adding to collection:", error);
//       toast.error("Failed to add to collections");
//     }
//   };
//   const handleAddToFavourites = async (e) => {
//     e.stopPropagation();

//     if (!user || !user.uid) {
//       // If the user is not signed in, show a toast message
//       toast.error("Please log in first to add to favourites");
//       return;
//     }

//     //   try {
//     //     await apiSaveToFavourites(user, data);
//     //     refetchTemplates(); // Refresh the templates list
//     //     refetch(); // Refresh the current template data
//     //   } catch (error) {
//     //     console.error("Error adding to favourites:", error);
//     //   }
//     // };
//     try {
//       await apiSaveToFavourites(user, data);
//       toast.success("Added to favourites!");
//       refetchTemplates(); // Refresh the templates list
//       refetch(); // Refresh the current template data
//     } catch (error) {
//       console.error("Error adding to favourites:", error);
//       toast.error("Failed to add to favourites");
//     }
//   };
//   if (isLoading) return <MainSpinner />;

//   if (isError) {
//     return (
//       <div className="w-full h-[60vh] flex flex-col items-center justify-center">
//         <p className="text-lg text-txtPrimary font-semibold">
//           Error while fetching the data... Please try again later.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full flex items-center justify-start flex-col px-4 py-12">
//       <div className="w-full flex items-center pb-8 gap-2">
//         <Link
//           to={"/"}
//           className="flex items-center justify-center gap-2 text-txtPrimary"
//         >
//           <FaHouse />
//           Home
//         </Link>
//         <p>/</p>
//         <p>{data?.name}</p>
//       </div>
//       <div className="w-full grid grid-cols-1 lg:grid-cols-12">
//         <div className="col-span-1 lg:col-span-8 flex flex-col items-start justify-start gap-4">
//           <img
//             className="w-full h-auto object-contain rounded-md"
//             src={data?.imageURL}
//             alt=""
//           />
//           <div className="w-full flex flex-col items-start justify-start gap-2">
//             <div className="w-full flex items-center justify-between">
//               <p className="text-base text-txtPrimary font-semibold">
//                 {data?.title}
//               </p>
//               {data?.favourites?.length > 0 && (
//                 <div className="flex items-center justify-center gap-1">
//                   <BiSolidHeart className="text-base text-red-500" />
//                   <p className="text-base text-txtPrimary font-semibold">
//                     {data?.favourites?.length} likes
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div className="flex items-center justify-center gap-3">
//               {user?.collections?.includes(data?._id) ? (
//                 <div
//                   onClick={handleAddToFavourites}
//                   className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 gap-2 hover:bg-gray-200 cursor-pointer"
//                 >
//                   <BiSolidFolderPlus className="text-base text-txtPrimary" />
//                   <p className="text-sm text-txtPrimary whitespace-nowrap">
//                     Remove From Collections
//                   </p>
//                 </div>
//               ) : (
//                 <div
//                   onClick={handleAddToCollection}
//                   className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 gap-2 hover:bg-gray-200 cursor-pointer"
//                 >
//                   <BiFolderPlus className="text-base text-txtPrimary" />
//                   <p className="text-sm text-txtPrimary whitespace-nowrap">
//                     Add to Collections
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="col-span-1 lg:col-span-4 w-full flex flex-col items-center justify-start px-3 gap-6">
//           <div
//             className="w-full h-72 bg-blue-200 rounded-md overflow-x-hidden relative"
//             style={{
//               background:
//                 "url(https://dorsettravelguide.com/wp-content/uploads/2021/01/AdobeStock_84334249-1024x683.jpeg)",
//               backgroundPosition: "center",
//               backgroundSize: "cover",
//             }}
//           >
//             <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
//               <Link
//                 to={"/"}
//                 className="px-4 py-2 rounded-md border-2 border-gray-50 text-white"
//                 style={{
//                   marginTop: "10px",
//                   marginLeft: "100px",
//                   marginRight: "100px",
//                 }}
//               >
//                 Discover More
//               </Link>
//             </div>
//           </div>
//           {user && (
//             <Link
//               className="w-full px-4 py-3 rounded-md flex items-center justify-center bg-emerald-500 cursor-pointer"
//               to={`/resume/${data?.name}?templateId=${templateID}`}
//             >
//               <p className="text-white font-semibold text-lg">
//                 Edit this Template
//               </p>
//             </Link>
//           )}
//           <div className="w-full flex items-center justify-start flex-wrap gap-2">
//             {data?.tags?.map((tag, index) => (
//               <p
//                 className="text-xs border border-gray-300 px-2 py-1 rounded-md whitespace-nowrap"
//                 key={index}
//               >
//                 {tag}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//       {templates?.filter((temp) => temp._id !== data?._id).length > 0 && (
//         <div className="w-full py-8 flex flex-col items-start justify-start gap-4">
//           <p className="text-lg font-semibold text-txtDark">
//             You might also like
//           </p>
//           <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//             <React.Fragment>
//               <AnimatePresence>
//                 {templates
//                   ?.filter((temp) => temp._id !== data?._id)
//                   .map((template, index) => (
//                     <TemplateDesignPin
//                       key={template?._id}
//                       data={template}
//                       index={index}
//                     />
//                   ))}
//               </AnimatePresence>
//             </React.Fragment>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TemplateDesignPinDetails;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  getTemplateDetails,
  addToCollection as apiSaveToCollections,
  addToFavourites as apiSaveToFavourites,
} from "../api";
import { MainSpinner, TemplateDesignPin } from "../components";
import { FaHouse } from "react-icons/fa6";
import useUser from "../hooks/useUser";
import { BiFolderPlus, BiSolidFolderPlus, BiSolidHeart } from "react-icons/bi";
import { toast } from "react-toastify"; // Import toast for notifications
import useTemplates from "../hooks/useTemplates";
import { AnimatePresence } from "framer-motion";

const TemplateDesignPinDetails = () => {
  const { templateID } = useParams();

  // Fetching template details
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["template", templateID],
    queryFn: () => getTemplateDetails(templateID),
  });

  // Fetching user data
  const { data: user, refetch: userRefetch } = useUser();

  // Fetching all templates
  const {
    data: templates,
    refetch: refetchTemplates,
    isLoading: tempIsLoading,
  } = useTemplates();

  const handleAddToCollection = async (e) => {
    e.stopPropagation();

    if (!user || !user.uid) {
      // If the user is not signed in, show a toast message
      toast.error("Please log in first to add to collections");
      return;
    }

    //   try {
    //     await apiSaveToCollections(user, data);
    //     refetch(); // Refresh the current template data
    //   } catch (error) {
    //     console.error("Please create your account ");
    //   }
    // };
    try {
      await apiSaveToCollections(user, data);
      toast.success("Added to collections!");
      refetch(); // Refresh the current template data
    } catch (error) {
      console.error("Error adding to collection:", error);
      toast.error("Failed to add to collections");
    }
  };
  const handleAddToFavourites = async (e) => {
    e.stopPropagation();

    if (!user || !user.uid) {
      // If the user is not signed in, show a toast message
      toast.error("Please log in first to add to favourites");
      return;
    }

    //   try {
    //     await apiSaveToFavourites(user, data);
    //     refetchTemplates(); // Refresh the templates list
    //     refetch(); // Refresh the current template data
    //   } catch (error) {
    //     console.error("Error adding to favourites:", error);
    //   }
    // };
    try {
      await apiSaveToFavourites(user, data);
      toast.success("Added to favourites!");
      refetchTemplates(); // Refresh the templates list
      refetch(); // Refresh the current template data
    } catch (error) {
      console.error("Error adding to favourites:", error);
      toast.error("Failed to add to favourites");
    }
  };
  if (isLoading) return <MainSpinner />;

  // if (isError) {
  //   return (
  //     <div className="w-full h-[60vh] flex flex-col items-center justify-center">
  //       <p className="text-lg text-txtPrimary font-semibold">
  //         ... Please try again later.
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <div className="w-full flex items-center justify-start flex-col px-4 py-12">
      <div className="w-full flex items-center pb-8 gap-2">
        <Link
          to={"/"}
          className="flex items-center justify-center gap-2 text-txtPrimary"
        >
          <FaHouse />
          Home
        </Link>
        <p>/</p>
        <p>{data?.name}</p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8 flex flex-col items-start justify-start gap-4">
          <img
            className="w-full h-auto object-contain rounded-md"
            src={data?.imageURL}
            alt=""
          />
          <div className="w-full flex flex-col items-start justify-start gap-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-base text-txtPrimary font-semibold">
                {data?.title}
              </p>
              {data?.favourites?.length > 0 && (
                <div className="flex items-center justify-center gap-1">
                  <BiSolidHeart className="text-base text-red-500" />
                  <p className="text-base text-txtPrimary font-semibold">
                    {data?.favourites?.length} likes
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-3">
              {user?.collections?.includes(data?._id) ? (
                <div
                  onClick={handleAddToFavourites}
                  className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 gap-2 hover:bg-gray-200 cursor-pointer"
                >
                  <BiSolidFolderPlus className="text-base text-txtPrimary" />
                  <p className="text-sm text-txtPrimary whitespace-nowrap">
                    Remove From Collections
                  </p>
                </div>
              ) : (
                <div
                  onClick={handleAddToCollection}
                  className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 gap-2 hover:bg-gray-200 cursor-pointer"
                >
                  <BiFolderPlus className="text-base text-txtPrimary" />
                  <p className="text-sm text-txtPrimary whitespace-nowrap">
                    Add to Collections
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-4 w-full flex flex-col items-center justify-start px-3 gap-6">
          <div
            className="w-full h-72 bg-blue-200 rounded-md overflow-x-hidden relative"
            style={{
              background:
                "url(https://dorsettravelguide.com/wp-content/uploads/2021/01/AdobeStock_84334249-1024x683.jpeg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
              <Link
                to={"/"}
                className="px-4 py-2 rounded-md border-2 border-gray-50 text-white"
                style={{
                  marginTop: "10px",
                  marginLeft: "100px",
                  marginRight: "100px",
                }}
              >
                Discover More
              </Link>
            </div>
          </div>
          {user && (
             user && user.uid ? (
              <Link
                className="w-full px-4 py-3 rounded-md flex items-center justify-center bg-emerald-500 cursor-pointer"
                to={`/resume/${data?.name}?templateId=${templateID}`}
              >
                <p className="text-white font-semibold text-lg">
                  Edit this Template
                </p>
              </Link>
            ) : (
              <div
                className="w-full px-4 py-3 rounded-md flex items-center justify-center bg-emerald-500 cursor-pointer"
                onClick={() => toast.error("Please log in first to edit this template")}
              >
                <p className="text-white font-semibold text-lg">
                  Edit this Template
                </p>
              </div>
            )
            
            // <Link
            //   className="w-full px-4 py-3 rounded-md flex items-center justify-center bg-emerald-500 cursor-pointer"
            //   to={`/resume/${data?.name}?templateId=${templateID}`}
            // >
            //   <p className="text-white font-semibold text-lg">
            //     Edit this Template
            //   </p>
            // </Link>
          )}
          <div className="w-full flex items-center justify-start flex-wrap gap-2">
            {data?.tags?.map((tag, index) => (
              <p
                className="text-xs border border-gray-300 px-2 py-1 rounded-md whitespace-nowrap"
                key={index}
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
      {templates?.filter((temp) => temp._id !== data?._id).length > 0 && (
        <div className="w-full py-8 flex flex-col items-start justify-start gap-4">
          <p className="text-lg font-semibold text-txtDark">
            You might also like
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
            <React.Fragment>
              <AnimatePresence>
                {templates
                  ?.filter((temp) => temp._id !== data?._id)
                  .map((template, index) => (
                    <TemplateDesignPin
                      key={template?._id}
                      data={template}
                      index={index}
                    />
                  ))}
              </AnimatePresence>
            </React.Fragment>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateDesignPinDetails;
