// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { slideUpDownWithScale } from "../animations";
// import { MdLayersClear } from "react-icons/md";
// import { FiltersData, item } from "../utils/helpers";
// import useFilters from "../hooks/useFilters";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// // import {MdLadayersClear} from "react-icons/md";
// const Filters = () => {
//   const [isClearHovered, setIsClearHovered] = useState(false);

//   const { data: filterData, isLoading, isError } = useFilters();
//   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");
//   const queryclient = useQueryClient();

//   const handleFilterValue = (value) => {
//     queryclient.setQueryData("globalFilter", {
//       ...queryclient.getQueryData("globalFilter"),
//       searchTerm: value,
//     });
//   };

//   const clearFilter = () => {
//     setSearchTerm(""); // Clear the local state
//     queryclient.setQueryData("globalFilter", {
//       ...queryclient.getQueryData("globalFilter"),
//       searchTerm: "",
//     });
//   };

//   return (
//     <div className="w-full flex items-center justify-start py-4">
//       <div
//         className="border border-gray-300 rounded-md px-3 py-2 mr-2 cursor-pointer group hover:shadow-md bg-gray-200 relative"
//         onMouseEnter={() => setIsClearHovered(true)}
//         onMouseLeave={() => setIsClearHovered(false)}
//         onClick={clearFilter}
//       >
//         <MdLayersClear className="text-xl" />
//         <AnimatePresence>
//           {isClearHovered && (
//             <motion.div
//               {...slideUpDownWithScale}
//               className="absolute -top-8 -left-2 bg-white shadow-md rounded-md px-2 py-1"
//             >

//               <p className="whitespace-nowrap text-xs">Clear all</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       <div className="w-full flex items-center justify-start overflow-x-scroll gap-6 scrollbar-none">
//         {FiltersData &&
//           FiltersData.map((item) => (
//             <div
//               onClick={() => handleFilterValue(item.value)}
//               key={item.id}
//               className={`border border-gray-300 rounded-md px-6 py-2 cursor-pointer group hover:shadow-md ${
//                 filterData?.searchTerm === item.value && "bg-gray-800 shadow-md"
//               }`}
//             >
//               <p className="text-sm text-txtPrimary group-hover:text-txtDark whitespace-nowrap">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Filters;

// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { slideUpDownWithScale } from "../animations";
// import { MdLayersClear } from "react-icons/md";
// import { FiltersData } from "../utils/helpers";
// import useFilters from "../hooks/useFilters";
// import { useQueryClient } from "@tanstack/react-query";

// const Filters = () => {
//   const [isClearHovered, setIsClearHovered] = useState(false);

//   const { data: filterData, isLoading, isError } = useFilters();
//   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");
//   const queryClient = useQueryClient();

//   const handleFilterValue = (value) => {
//     setSearchTerm(value); // Update the local state
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

//   return (
//     <div className="w-full flex items-center justify-start py-4">
//       <div
//         className="border border-gray-300 rounded-md px-3 py-2 mr-2 cursor-pointer group hover:shadow-md bg-gray-200 relative"
//         onMouseEnter={() => setIsClearHovered(true)}
//         onMouseLeave={() => setIsClearHovered(false)}
//         onClick={clearFilter}
//       >
//         <MdLayersClear className="text-xl" />
//         <AnimatePresence>
//           {isClearHovered && (
//             <motion.div
//               {...slideUpDownWithScale}
//               className="absolute -top-8 -left-2 bg-white shadow-md rounded-md px-2 py-1"
//             >
//               <p className="whitespace-nowrap text-xs">Clear all</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       <div className="w-full flex items-center justify-start overflow-x-scroll gap-6 scrollbar-none">
//         {FiltersData &&
//           FiltersData.map((item) => (
//             <div
//               onClick={() => handleFilterValue(item.value)}
//               key={item.id}
//               className={`border border-gray-300 rounded-md px-6 py-2 cursor-pointer group hover:shadow-md ${
//                 searchTerm === item.value
//                   ? "bg-gray-800 text-white shadow-md"
//                   : ""
//               }`}
//             >
//               <p className="text-sm text-txtPrimary group-hover:text-txtDark whitespace-nowrap">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Filters;

// import React, { useState, useMemo } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { slideUpDownWithScale } from "../animations";
// import { MdLayersClear } from "react-icons/md";
// import useFilters from "../hooks/useFilters";
// import { useQueryClient } from "@tanstack/react-query";

// const Filters = () => {
//   const [isClearHovered, setIsClearHovered] = useState(false);
//   const { data: templates, isLoading, isError } = useFilters();
//   const [searchTerm, setSearchTerm] = useState("");
//   const queryClient = useQueryClient();

//   const handleFilterValue = (value) => {
//     setSearchTerm(value);
//     queryClient.setQueryData("globalFilter", {
//       searchTerm: value,
//     });
//   };

//   const clearFilter = () => {
//     setSearchTerm("");
//     queryClient.setQueryData("globalFilter", {
//       searchTerm: "",
//     });
//   };

//   // Filter templates based on search term
//   const filteredTemplates = useMemo(() => {
//     if (!templates || !searchTerm) return templates;
//     return templates.filter((template) =>
//       template.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
//     );
//   }, [templates, searchTerm]);

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error loading templates</p>;

//   return (
//     <div className="w-full flex items-center justify-start py-4">
//       <div
//         className="border border-gray-300 rounded-md px-3 py-2 mr-2 cursor-pointer group hover:shadow-md bg-gray-200 relative"
//         onMouseEnter={() => setIsClearHovered(true)}
//         onMouseLeave={() => setIsClearHovered(false)}
//         onClick={clearFilter}
//       >
//         <MdLayersClear className="text-xl" />
//         <AnimatePresence>
//           {isClearHovered && (
//             <motion.div
//               {...slideUpDownWithScale}
//               className="absolute -top-8 -left-2 bg-white shadow-md rounded-md px-2 py-1"
//             >
//               <p className="whitespace-nowrap text-xs">Clear all</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       <input
//         value={searchTerm}
//         onChange={(e) => handleFilterValue(e.target.value)}
//         type="text"
//         placeholder="Search by tags..."
//         className="border px-4 py-2 rounded-md w-full"
//       />
//       <div className="w-full flex flex-wrap gap-4">
//         {filteredTemplates && filteredTemplates.map((template) => (
//           <div key={template.id} className="border rounded-md p-4">
//             <h3>{template.title}</h3>
//             <p>{template.description}</p>
//             <div className="tags">
//               {template.tags.map((tag) => (
//                 <span key={tag} className="tag">{tag}</span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Filters;

// filter

// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { slideUpDownWithScale } from "../animations";
// import { MdLayersClear } from "react-icons/md";
// import { FiltersData } from "../utils/helpers";
// import useFilters from "../hooks/useFilters";
// import { useQueryClient } from "@tanstack/react-query";

// const Filters = () => {
//   const [isClearHovered, setIsClearHovered] = useState(false);

//   const { data: filterData, isLoading, isError } = useFilters();
//   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");
//   const queryClient = useQueryClient();

//   const handleFilterValue = (value) => {
//     setSearchTerm(value); // Update the local state
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

//   return (
//     <div className="w-full flex items-center justify-start py-4">
//       <div
//         className="border border-gray-300 rounded-md px-3 py-2 mr-2 cursor-pointer group hover:shadow-md bg-gray-200 relative"
//         onMouseEnter={() => setIsClearHovered(true)}
//         onMouseLeave={() => setIsClearHovered(false)}
//         onClick={clearFilter}
//       >
//         <MdLayersClear className="text-xl" />
//         <AnimatePresence>
//           {isClearHovered && (
//             <motion.div
//               {...slideUpDownWithScale}
//               className="absolute -top-8 -left-2 bg-white shadow-md rounded-md px-2 py-1"
//             >
//               <p className="whitespace-nowrap text-xs">Clear all</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       <div className="w-full flex items-center justify-start overflow-x-scroll gap-6 scrollbar-none">
//         {FiltersData &&
//           FiltersData.map((item) => (
//             <div
//               onClick={() => handleFilterValue(item.value)}
//               key={item.id}
//               className={`border border-gray-300 rounded-md px-6 py-2 cursor-pointer group hover:shadow-md ${
//                 searchTerm === item.value
//                   ? "bg-gray-800 text-white shadow-md"
//                   : ""
//               }`}
//             >
//               <p className="text-sm text-txtPrimary group-hover:text-txtDark whitespace-nowrap">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Filters;

// import React, { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { slideUpDownWithScale } from "../animations";
// import { MdLayersClear } from "react-icons/md";
// import { FiltersData } from "../utils/helpers";
// import useFilters from "../hooks/useFilters";
// import { useQueryClient } from "@tanstack/react-query";

// const Filters = () => {
//   const [isClearHovered, setIsClearHovered] = useState(false);
//   const { data: filterData, isLoading, isError } = useFilters();
//   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");
//   const [filteredFilters, setFilteredFilters] = useState(FiltersData);
//   const queryClient = useQueryClient();

//   useEffect(() => {
//     if (searchTerm) {
//       setFilteredFilters(
//         FiltersData.filter((item) =>
//           item.label.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       );
//     } else {
//       setFilteredFilters(FiltersData);
//     }
//   }, [searchTerm]);

//   const handleFilterValue = (value) => {
//     setSearchTerm(value); // Update the local state
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

//   return (
//     <div className="w-full flex items-center justify-start py-4">
//       <div
//         className="border border-gray-300 rounded-md px-3 py-2 mr-2 cursor-pointer group hover:shadow-md bg-gray-200 relative"
//         onMouseEnter={() => setIsClearHovered(true)}
//         onMouseLeave={() => setIsClearHovered(false)}
//         onClick={clearFilter}
//       >
//         <MdLayersClear className="text-xl" />
//         <AnimatePresence>
//           {isClearHovered && (
//             <motion.div
//               {...slideUpDownWithScale}
//               className="absolute -top-8 -left-2 bg-white shadow-md rounded-md px-2 py-1"
//             >
//               <p className="whitespace-nowrap text-xs">Clear all</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       <div className="w-full flex items-center justify-start overflow-x-scroll gap-6 scrollbar-none">
//         {filteredFilters &&
//           filteredFilters.map((item) => (
//             <div
//               onClick={() => handleFilterValue(item.value)}
//               key={item.id}
//               className={`border border-gray-300 rounded-md px-6 py-2 cursor-pointer group hover:shadow-md ${
//                 searchTerm === item.value
//                   ? "bg-gray-800 text-white shadow-md"
//                   : ""
//               }`}
//             >
//               <p className="text-sm text-txtPrimary group-hover:text-txtDark whitespace-nowrap">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Filters;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { slideUpDownWithScale } from "../animations";
// import { MdLayersClear } from "react-icons/md";
// import { FiltersData, TemplatesData } from "../utils/helpers";
// import useFilters from "../hooks/useFilters";
// import { useQueryClient } from "@tanstack/react-query";

// const Filters = () => {
//   const [isClearHovered, setIsClearHovered] = useState(false);

//   const { data: filterData, isLoading, isError } = useFilters();
//   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");
//   const queryClient = useQueryClient();

//   const handleFilterValue = (value) => {
//     setSearchTerm(value); // Update the local state
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

//   // Filter the templates based on the search term
//   const filteredTemplates = TemplatesData.filter((template) =>
//     template.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="w-full flex items-center justify-start py-4">
//       <div
//         className="border border-gray-300 rounded-md px-3 py-2 mr-2 cursor-pointer group hover:shadow-md bg-gray-200 relative"
//         onMouseEnter={() => setIsClearHovered(true)}
//         onMouseLeave={() => setIsClearHovered(false)}
//         onClick={clearFilter}
//       >
//         <MdLayersClear className="text-xl" />
//         <AnimatePresence>
//           {isClearHovered && (
//             <motion.div
//               {...slideUpDownWithScale}
//               className="absolute -top-8 -left-2 bg-white shadow-md rounded-md px-2 py-1"
//             >
//               <p className="whitespace-nowrap text-xs">Clear all</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Display filtered templates */}
//       <div className="w-full flex items-center justify-start overflow-x-scroll gap-6 scrollbar-none">
//         {filteredTemplates.map((template) => (
//           <div
//             key={template.id}
//             className="border border-gray-300 rounded-md px-6 py-2 cursor-pointer group hover:shadow-md"
//           >
//             <p className="text-sm text-txtPrimary group-hover:text-txtDark whitespace-nowrap">
//               {template.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Filters;





// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { slideUpDownWithScale } from "../animations";
// import { MdLayersClear } from "react-icons/md";
// import { FiltersData, TemplatesData } from "../utils/helpers";
// import useFilters from "../hooks/useFilters";
// import { useQueryClient } from "@tanstack/react-query";

// const Filters = () => {
//   const [isClearHovered, setIsClearHovered] = useState(false);
//   const { data: filterData } = useFilters();
//   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");
//   const [selectedTag, setSelectedTag] = useState(""); // Store the selected tag
//   const queryClient = useQueryClient();

//   const handleFilterValue = (value) => {
//     setSelectedTag(value); // Update the selected tag
//     setSearchTerm(""); // Clear search term when a tag is selected
//     queryClient.setQueryData("globalFilter", {
//       searchTerm: "",
//       selectedTag: value, // Store the selected tag in the query data
//     });
//   };

//   const clearFilter = () => {
//     setSearchTerm(""); // Clear the local state
//     setSelectedTag(""); // Clear selected tag
//     queryClient.setQueryData("globalFilter", {
//       searchTerm: "",
//       selectedTag: "",
//     });
//   };

//   // Filter templates based on selected tag or search term
//   const filteredTemplates = TemplatesData.filter((template) => {
//     if (selectedTag) {
//       return template.tags.includes(selectedTag);
//     } else if (searchTerm) {
//       return template.name.toLowerCase().includes(searchTerm.toLowerCase());
//     }
//     return true;
//   });

//   return (
//     <div className="w-full flex flex-col py-4">
//       <div className="w-full flex items-center justify-start">
//         <div
//           className="border border-gray-300 rounded-md px-3 py-2 mr-2 cursor-pointer group hover:shadow-md bg-gray-200 relative"
//           onMouseEnter={() => setIsClearHovered(true)}
//           onMouseLeave={() => setIsClearHovered(false)}
//           onClick={clearFilter}
//         >
//           <MdLayersClear className="text-xl" />
//           <AnimatePresence>
//             {isClearHovered && (
//               <motion.div
//                 {...slideUpDownWithScale}
//                 className="absolute -top-8 -left-2 bg-white shadow-md rounded-md px-2 py-1"
//               >
//                 <p className="whitespace-nowrap text-xs">Clear all</p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Tag Scroll */}
//         <div className="w-full flex items-center justify-start overflow-x-scroll gap-6 scrollbar-thin scrollbar-thumb-gray-400">
//           {FiltersData.map((item) => (
//             <div
//               onClick={() => handleFilterValue(item.value)}
//               key={item.id}
//               className={`border border-gray-300 rounded-md px-6 py-2 cursor-pointer group hover:shadow-md ${
//                 selectedTag === item.value ? "bg-gray-800 text-white shadow-md" : ""
//               }`}
//             >
//               <p className="text-sm text-txtPrimary group-hover:text-txtDark whitespace-nowrap">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Template Display */}
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//         {filteredTemplates.map((template) => (
//           <div
//             key={template.id}
//             className="border border-gray-300 rounded-md p-4"
//           >
//             <p className="text-base font-semibold">{template.name}</p>
//             {/* Additional template details can be displayed here */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Filters;

// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { slideUpDownWithScale } from "../animations";
// import { MdLayersClear } from "react-icons/md";
// import { FiltersData, TemplatesData } from "../utils/helpers";
// import useFilters from "../hooks/useFilters";
// import { useQueryClient } from "@tanstack/react-query";

// const Filters = () => {
//   const [isClearHovered, setIsClearHovered] = useState(false);
//   const { data: filterData } = useFilters();
//   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");
//   const [selectedTag, setSelectedTag] = useState(""); // Store the selected tag
//   const queryClient = useQueryClient();

//   const handleFilterValue = (value) => {
//     setSelectedTag(value); // Update the selected tag
//     setSearchTerm(""); // Clear search term when a tag is selected
//     queryClient.setQueryData("globalFilter", {
//       searchTerm: "",
//       selectedTag: value, // Store the selected tag in the query data
//     });
//   };

//   const clearFilter = () => {
//     setSearchTerm(""); // Clear the local state
//     setSelectedTag(""); // Clear selected tag
//     queryClient.setQueryData("globalFilter", {
//       searchTerm: "",
//       selectedTag: "",
//     });
//   };

//   // Filter templates based on selected tag or search term
//   const filteredTemplates = TemplatesData.filter((template) => {
//     // Ensure template.tags is defined and is an array before calling includes
//     const tags = template.tags || [];
//     if (selectedTag) {
//       return tags.includes(selectedTag);
//     } else if (searchTerm) {
//       return template.name?.toLowerCase().includes(searchTerm.toLowerCase());
//     }
//     return true;
//   });

//   return (
//     <div className="w-full flex flex-col py-4">
//       <div className="w-full flex items-center justify-start">
//         <div
//           className="border border-gray-300 rounded-md px-3 py-2 mr-2 cursor-pointer group hover:shadow-md bg-gray-200 relative"
//           onMouseEnter={() => setIsClearHovered(true)}
//           onMouseLeave={() => setIsClearHovered(false)}
//           onClick={clearFilter}
//         >
//           <MdLayersClear className="text-xl" />
//           <AnimatePresence>
//             {isClearHovered && (
//               <motion.div
//                 {...slideUpDownWithScale}
//                 className="absolute -top-8 -left-2 bg-white shadow-md rounded-md px-2 py-1"
//               >
//                 <p className="whitespace-nowrap text-xs">Clear all</p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Tag Scroll */}
//         <div className="w-full flex items-center justify-start overflow-x-scroll gap-6 scrollbar-thin scrollbar-thumb-gray-400">
//           {FiltersData.map((item) => (
//             <div
//               onClick={() => handleFilterValue(item.value)}
//               key={item.id}
//               className={`border border-gray-300 rounded-md px-6 py-2 cursor-pointer group hover:shadow-md ${
//                 selectedTag === item.value ? "bg-gray-800 text-white shadow-md" : ""
//               }`}
//             >
//               <p className="text-sm text-txtPrimary group-hover:text-txtDark whitespace-nowrap">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Template Display */}
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//         {filteredTemplates.map((template) => (
//           <div
//             key={template.id}
//             className="border border-gray-300 rounded-md p-4"
//           >
//             <p className="text-base font-semibold">{template.name}</p>
//             {/* Additional template details can be displayed here */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Filters;

// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { slideUpDownWithScale } from "../animations";
// import { MdLayersClear } from "react-icons/md";
// import { FiltersData } from "../utils/helpers";
// import useFilters from "../hooks/useFilters";
// import { useQueryClient } from "@tanstack/react-query";

// const Filters = () => {
//   const [isClearHovered, setIsClearHovered] = useState(false);
//   const { data: filterData = {}, isLoading, isError } = useFilters(); // Default to empty object
//   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");
//   const queryClient = useQueryClient();

//   const handleFilterValue = (value) => {
//     setSearchTerm(value);
//     queryClient.setQueryData("globalFilter", {
//       ...queryClient.getQueryData("globalFilter"),
//       searchTerm: value,
//     });
//   };

//   const clearFilter = () => {
//     setSearchTerm("");
//     queryClient.setQueryData("globalFilter", {
//       ...queryClient.getQueryData("globalFilter"),
//       searchTerm: "",
//     });
//   };

//   const filteredTemplates = FiltersData.filter((item) =>
//     item.value.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="w-full flex items-center justify-start py-4">
//       <div
//         className="border border-gray-300 rounded-md px-3 py-2 mr-2 cursor-pointer group hover:shadow-md bg-gray-200 relative"
//         onMouseEnter={() => setIsClearHovered(true)}
//         onMouseLeave={() => setIsClearHovered(false)}
//         onClick={clearFilter}
//       >
//         <MdLayersClear className="text-xl" />
//         <AnimatePresence>
//           {isClearHovered && (
//             <motion.div
//               {...slideUpDownWithScale}
//               className="absolute -top-8 -left-2 bg-white shadow-md rounded-md px-2 py-1"
//             >
//               <p className="whitespace-nowrap text-xs">Clear all</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       <div className="w-full flex items-center justify-start overflow-x-scroll gap-6 scrollbar-none">
//         {filteredTemplates.map((item) => (
//           <div
//             onClick={() => handleFilterValue(item.value)}
//             key={item.id}
//             className={`border border-gray-300 rounded-md px-6 py-2 cursor-pointer group hover:shadow-md ${
//               searchTerm === item.value
//                 ? "bg-gray-800 text-white shadow-md"
//                 : ""
//             }`}
//           >
//             <p className="text-sm text-txtPrimary group-hover:text-txtDark whitespace-nowrap">
//               {item.label}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Filters;




// import React, { useState } from "react";
// // import TemplatesData from "../utils/helpers"; // Assuming you have your templates data here
// import { TemplatesData, initialTags } from "../utils/helpers"; 

// const Filters = () => {
//   const [searchTerm, setSearchTerm] = useState(""); // Search bar input
//   const [selectedTag, setSelectedTag] = useState(""); // For clicked tags

//   // Filter templates based on the searchTerm or selected tag
//   const filteredTemplates = TemplatesData.filter(template => {
//     // If search bar is empty and no tag is selected, show all templates
//     if (searchTerm.trim() === "" && selectedTag === "") return true;

//     // Check if any tag matches the searchTerm
//     const matchesSearch = template.tags.some(tag => 
//       tag.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     // Check if the template matches the selected tag from the scroll bar
//     const matchesTag = selectedTag
//       ? template.tags.includes(selectedTag.toLowerCase())
//       : true;

//     // Show template if it matches the search term or the selected tag
//     return matchesSearch || matchesTag;
//   });

//   return (
//     <div>
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search templates..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm
//         />
//       </div>

//       <div className="tags-scroll-bar">
//         {TemplatesData.flatMap(template => template.tags).map((tag, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedTag(tag)} // Set selected tag on click
//             className={selectedTag === tag ? "selected" : ""}
//           >
//             {tag}
//           </button>
//         ))}
//       </div>

//       <div className="template-list">
//         {filteredTemplates.map((template, index) => (
//           <div key={`template-${template.id}`} className="template-item">
//             <h3>{template.name}</h3>
//             {/* Render the rest of the template data */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // export default Filters;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { slideUpDownWithScale } from "../animations";
// import { MdLayersClear } from "react-icons/md";
// import { FiltersData, TemplatesData, initialTags } from "../utils/helpers"; // Ensure these are correctly exported
// import useFilters from "../hooks/useFilters";
// import { useQueryClient } from "@tanstack/react-query";

// const Filters = () => {
//   const [isClearHovered, setIsClearHovered] = useState(false);
//   const { data: filterData, isLoading, isError } = useFilters();
//   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");
//   const [selectedTag, setSelectedTag] = useState(null); // Track selected tag
//   const queryClient = useQueryClient();

//   const handleFilterValue = (value) => {
//     setSearchTerm(""); // Clear search term when selecting a tag
//     setSelectedTag(value); // Set selected tag
//     queryClient.setQueryData("globalFilter", {
//       ...queryClient.getQueryData("globalFilter"),
//       searchTerm: "",
//       selectedTag: value,
//     });
//   };

//   const clearFilter = () => {
//     setSearchTerm(""); // Clear search term
//     setSelectedTag(null); // Clear selected tag
//     queryClient.setQueryData("globalFilter", {
//       ...queryClient.getQueryData("globalFilter"),
//       searchTerm: "",
//       selectedTag: null,
//     });
//   };

//   const filteredTemplates = (TemplatesData || []).filter((template) => {
//     const matchesSearch = searchTerm
//       ? template.name.toLowerCase().includes(searchTerm.toLowerCase())
//       : true;
//     const matchesTag = selectedTag
//       ? template.tags?.includes(selectedTag) // Ensure tags exist
//       : true;
//     return matchesSearch && matchesTag;
//   });

//   return (
//     <div className="w-full flex items-center justify-start py-4">
//       <div
//         className="border border-gray-300 rounded-md px-3 py-2 mr-2 cursor-pointer group hover:shadow-md bg-gray-200 relative"
//         onMouseEnter={() => setIsClearHovered(true)}
//         onMouseLeave={() => setIsClearHovered(false)}
//         onClick={clearFilter}
//       >
//         <MdLayersClear className="text-xl" />
//         <AnimatePresence>
//           {isClearHovered && (
//             <motion.div
//               {...slideUpDownWithScale}
//               className="absolute -top-8 -left-2 bg-white shadow-md rounded-md px-2 py-1"
//             >
//               <p className="whitespace-nowrap text-xs">Clear all</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       <div className="w-full flex items-center justify-start overflow-x-scroll gap-6 scrollbar-none">
//         {FiltersData &&
//           FiltersData.map((item) => (
//             <div
//               onClick={() => handleFilterValue(item.value)}
//               key={item.id}
//               className={`border border-gray-300 rounded-md px-6 py-2 cursor-pointer group hover:shadow-md ${
//                 selectedTag === item.value ? "bg-gray-800 text-white shadow-md" : ""
//               }`}
//             >
//               <p className="text-sm text-txtPrimary group-hover:text-txtDark whitespace-nowrap">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//       </div>
//       <div className="w-full mt-4">
//         <input
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           type="text"
//           placeholder="Search templates..."
//           className="w-full px-4 py-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="w-full mt-4">
//         {filteredTemplates.length === 0 ? (
//           <p>No templates found</p>
//         ) : (
//           <ul>
//             {filteredTemplates.map((template) => (
//               <li key={template.id}>{template.name}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Filters;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { slideUpDownWithScale } from "../animations";
// import { MdLayersClear } from "react-icons/md";
// import { FiltersData, TemplatesData, initialTags } from "../utils/helpers"; // Ensure these are correctly exported
// import useFilters from "../hooks/useFilters";
// import { useQueryClient } from "@tanstack/react-query";

// const Filters = () => {
//   const [isClearHovered, setIsClearHovered] = useState(false);
//   const { data: filterData, isLoading, isError } = useFilters();
//   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");
//   const [selectedTag, setSelectedTag] = useState(null); // Track selected tag
//   const queryClient = useQueryClient();

//   const handleFilterValue = (value) => {
//     setSearchTerm(""); // Clear search term when selecting a tag
//     setSelectedTag(value); // Set selected tag
//     queryClient.setQueryData("globalFilter", {
//       ...queryClient.getQueryData("globalFilter"),
//       searchTerm: "",
//       selectedTag: value,
//     });
//   };

//   const clearFilter = () => {
//     setSearchTerm(""); // Clear search term
//     setSelectedTag(null); // Clear selected tag
//     queryClient.setQueryData("globalFilter", {
//       ...queryClient.getQueryData("globalFilter"),
//       searchTerm: "",
//       selectedTag: null,
//     });
//   };

//   const filteredTemplates = (TemplatesData || []).filter((template) => {
//     const matchesSearch = searchTerm
//       ? template.name.toLowerCase().includes(searchTerm.toLowerCase())
//       : true;
//     const matchesTag = selectedTag
//       ? template.tags?.includes(selectedTag) // Ensure tags exist
//       : true;
//     return matchesSearch && matchesTag;
//   });

//   return (
//     <div className="w-full flex items-center justify-start py-4">
//       <div
//         className="border border-gray-300 rounded-md px-3 py-2 mr-2 cursor-pointer group hover:shadow-md bg-gray-200 relative"
//         onMouseEnter={() => setIsClearHovered(true)}
//         onMouseLeave={() => setIsClearHovered(false)}
//         onClick={clearFilter}
//       >
//         <MdLayersClear className="text-xl" />
//         <AnimatePresence>
//           {isClearHovered && (
//             <motion.div
//               {...slideUpDownWithScale}
//               className="absolute -top-8 -left-2 bg-white shadow-md rounded-md px-2 py-1"
//             >
//               <p className="whitespace-nowrap text-xs">Clear all</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       <div className="w-full flex items-center justify-start overflow-x-scroll gap-6 scrollbar-none">
//         {FiltersData &&
//           FiltersData.map((item) => (
//             <div
//               onClick={() => handleFilterValue(item.value)}
//               key={`filter-${item.value}`} // Ensure key is unique
//               className={`border border-gray-300 rounded-md px-6 py-2 cursor-pointer group hover:shadow-md ${
//                 selectedTag === item.value ? "bg-gray-800 text-white shadow-md" : ""
//               }`}
//             >
//               <p className="text-sm text-txtPrimary group-hover:text-txtDark whitespace-nowrap">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//       </div>
//       <div className="w-full mt-4">
//         <input
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           type="text"
//           placeholder="Search templates..."
//           className="w-full px-4 py-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="w-full mt-4">
//         {filteredTemplates.length === 0 ? (
//           <p>No templates found</p>
//         ) : (
//           <ul>
//             {filteredTemplates.map((template) => (
//               <li key={`template-${template.id}`}>{template.name}</li> // Ensure key is unique
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default Filters;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { slideUpDownWithScale } from "../animations";
// import { MdLayersClear } from "react-icons/md";
// import { FiltersData, TemplatesData, initialTags } from "../utils/helpers"; // Ensure these are correctly exported
// import useFilters from "../hooks/useFilters";
// import { useQueryClient } from "@tanstack/react-query";

// const Filters = () => {
//   const [isClearHovered, setIsClearHovered] = useState(false);
//   const { data: filterData, isLoading, isError } = useFilters();
//   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");
//   const [selectedTag, setSelectedTag] = useState(null); // Track selected tag
//   const queryClient = useQueryClient();

//   const handleFilterValue = (value) => {
//     setSearchTerm(""); // Clear search term when selecting a tag
//     setSelectedTag(value); // Set selected tag
//     queryClient.setQueryData("globalFilter", {
//       ...queryClient.getQueryData("globalFilter"),
//       searchTerm: "",
//       selectedTag: value,
//     });
//   };

//   const clearFilter = () => {
//     setSearchTerm(""); // Clear search term
//     setSelectedTag(null); // Clear selected tag
//     queryClient.setQueryData("globalFilter", {
//       ...queryClient.getQueryData("globalFilter"),
//       searchTerm: "",
//       selectedTag: null,
//     });
//   };

//   const filteredTemplates = (TemplatesData || []).filter((template) => {
//     const matchesSearch = searchTerm
//       ? template.name.toLowerCase().includes(searchTerm.toLowerCase())
//       : true;
//     const matchesTag = selectedTag
//       ? template.tags?.includes(selectedTag) // Ensure tags exist
//       : true;
//     return matchesSearch && matchesTag;
//   });

//   // Debugging: Log templates to check for duplicate ids
//   console.log("Filtered Templates:", filteredTemplates);

//   return (
//     <div className="w-full flex items-center justify-start py-4">
//       <div
//         className="border border-gray-300 rounded-md px-3 py-2 mr-2 cursor-pointer group hover:shadow-md bg-gray-200 relative"
//         onMouseEnter={() => setIsClearHovered(true)}
//         onMouseLeave={() => setIsClearHovered(false)}
//         onClick={clearFilter}
//       >
//         <MdLayersClear className="text-xl" />
//         <AnimatePresence>
//           {isClearHovered && (
//             <motion.div
//               {...slideUpDownWithScale}
//               className="absolute -top-8 -left-2 bg-white shadow-md rounded-md px-2 py-1"
//             >
//               <p className="whitespace-nowrap text-xs">Clear all</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       <div className="w-full flex items-center justify-start overflow-x-scroll gap-6 scrollbar-none">
//         {FiltersData &&
//           FiltersData.map((item) => (
//             <div
//               onClick={() => handleFilterValue(item.value)}
//               key={`filter-${item.value}`} // Ensure key is unique
//               className={`border border-gray-300 rounded-md px-6 py-2 cursor-pointer group hover:shadow-md ${
//                 selectedTag === item.value ? "bg-gray-800 text-white shadow-md" : ""
//               }`}
//             >
//               <p className="text-sm text-txtPrimary group-hover:text-txtDark whitespace-nowrap">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//       </div>
//       <div className="w-full mt-4">
//         <input
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           type="text"
//           placeholder="Search templates..."
//           className="w-full px-4 py-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="w-full mt-4">
//         {filteredTemplates.length === 0 ? (
//           <p>No templates found</p>
//         ) : (
//           <ul>
//             {filteredTemplates.map((template, index) => (
//               <li key={`template-${template.id}-${index}`}>{template.name}</li> // Ensure key is unique
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default Filters;
// import React, { useState } from "react";
// import { initialTags, FiltersData } from "../utils/helpers";

// const Filters = ({ templates }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedTag, setSelectedTag] = useState("");

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const handleTagClick = (tag) => {
//     setSelectedTag(tag);
//   };

//   const filteredTemplates = templates.filter((template) => {
//     if (selectedTag) {
//       return template.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase());
//     } else if (searchTerm) {
//       return initialTags.some((tag) =>
//         tag.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     return true;
//   });

//   return (
//     <div>
//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search templates..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />

//       {/* Scrollable Tag List */}
//       <div style={{ overflowY: "scroll", maxHeight: "200px" }}>
//         {initialTags.map((tag) => (
//           <div
//             key={tag}
//             onClick={() => handleTagClick(tag)}
//             style={{
//               cursor: "pointer",
//               padding: "5px",
//               backgroundColor: selectedTag === tag ? "#ccc" : "#fff",
//             }}
//           >
//             {tag}
//           </div>
//         ))}
//       </div>

//       {/* Display Filtered Templates */}
//       <ul>
//         {filteredTemplates.map((template) => (
//           <li key={`template-${template.id}`}>{template.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // export default Filters;
// import React, { useState } from "react";
// import { initialTags } from "../utils/helpers";

// const Filters = ({ templates = [] }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedTag, setSelectedTag] = useState("");

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const handleTagClick = (tag) => {
//     setSelectedTag(tag);
//   };

//   const filteredTemplates = templates?.filter((template) => {
//     if (selectedTag) {
//       return template.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase());
//     } else if (searchTerm) {
//       return template.tags.some((tag) =>
//         tag.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     return true;
//   });

//   return (
//     <div>
//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search templates..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />

//       {/* Scrollable Tag List */}
//       <div style={{ overflowY: "scroll", maxHeight: "200px" }}>
//         {initialTags.map((tag) => (
//           <div
//             key={tag}
//             onClick={() => handleTagClick(tag)}
//             style={{
//               cursor: "pointer",
//               padding: "5px",
//               backgroundColor: selectedTag === tag ? "#ccc" : "#fff",
//             }}
//           >
//             {tag}
//           </div>
//         ))}
//       </div>

//       {/* Display Filtered Templates */}
//       <ul>
//         {filteredTemplates.map((template) => (
//           <li key={`template-${template.id}`}>{template.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Filters;






// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { slideUpDownWithScale } from "../animations";
// import { MdLayersClear } from "react-icons/md";
// import { FiltersData } from "../utils/helpers";
// import useFilters from "../hooks/useFilters";
// import { useQueryClient } from "@tanstack/react-query";

// const Filters = () => {
//   const [isClearHovered, setIsClearHovered] = useState(false);

//   const { data: filterData, isLoading, isError } = useFilters();
//   const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");
//   const queryClient = useQueryClient();

//   const handleFilterValue = (value) => {
//     setSearchTerm(value); // Update the local state
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

//   return (
//     <div className="w-full flex items-center justify-start py-4">
//       <div
//         className="border border-gray-300 rounded-md px-3 py-2 mr-2 cursor-pointer group hover:shadow-md bg-gray-200 relative"
//         onMouseEnter={() => setIsClearHovered(true)}
//         onMouseLeave={() => setIsClearHovered(false)}
//         onClick={clearFilter}
//       >
//         <MdLayersClear className="text-xl" />
//         <AnimatePresence>
//           {isClearHovered && (
//             <motion.div
//               {...slideUpDownWithScale}
//               className="absolute -top-8 -left-2 bg-white shadow-md rounded-md px-2 py-1"
//             >
//               <p className="whitespace-nowrap text-xs">Clear all</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       <div className="w-full flex items-center justify-start overflow-x-scroll gap-6 scrollbar-none">
//         {FiltersData &&
//           FiltersData.map((item) => (
//             <div
//               onClick={() => handleFilterValue(item.value)}
//               key={item.id}
//               className={`border border-gray-300 rounded-md px-6 py-2 cursor-pointer group hover:shadow-md ${
//                 searchTerm === item.value
//                   ? "bg-gray-800 text-white shadow-md"
//                   : ""
//               }`}
//             >
//               <p className="text-sm text-txtPrimary group-hover:text-txtDark whitespace-nowrap">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Filters;
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { slideUpDownWithScale } from "../animations";
// import { MdLayersClear } from "react-icons/md";
// import { FiltersData } from "../utils/helpers";
// import useFilters from "../hooks/useFilters";
// import { useQueryClient } from "@tanstack/react-query";

// const Filters = () => {
//   const [isClearHovered, setIsClearHovered] = useState(false);

//   const { data: filterData, isLoading, isError } = useFilters();
//   const [searchTerm, setSearchTerm] = useState(filterData?.searchTerm || "");
//   const queryClient = useQueryClient();

//   const handleFilterValue = (value) => {
//     setSearchTerm(value); // Update the local state
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

//   return (
//     <div className="w-full flex items-center justify-start py-4">
//       <div
//         className="border border-gray-300 rounded-md px-3 py-2 mr-2 cursor-pointer group hover:shadow-md bg-gray-200 relative"
//         onMouseEnter={() => setIsClearHovered(true)}
//         onMouseLeave={() => setIsClearHovered(false)}
//         onClick={clearFilter}
//       >
//         <MdLayersClear className="text-xl" />
//         <AnimatePresence>
//           {isClearHovered && (
//             <motion.div
//               {...slideUpDownWithScale}
//               className="absolute -top-8 -left-2 bg-white shadow-md rounded-md px-2 py-1"
//             >
//               <p className="whitespace-nowrap text-xs">Clear all</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       <div className="w-full flex items-center justify-start overflow-x-scroll gap-6 scrollbar-none">
//         {FiltersData &&
//           FiltersData.map((item) => (
//             <div
//               onClick={() => handleFilterValue(item.value)}
//               key={item.id}
//               className={`border border-gray-300 rounded-md px-6 py-2 cursor-pointer group hover:shadow-md ${
//                 searchTerm === item.value ? "bg-gray-800 text-white shadow-md" : ""
//               }`}
//             >
//               <p className="text-sm text-txtPrimary group-hover:text-txtDark whitespace-nowrap">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Filters;
// filter 





// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { slideUpDownWithScale } from "../animations";
// import { MdLayersClear } from "react-icons/md";
// import { FiltersData } from "../utils/helpers";
// import useFilters from "../hooks/useFilters";
// import { useQueryClient } from "@tanstack/react-query";

// const Filters = () => {
//   const [isClearHovered, setIsClearHovered] = useState(false);

//   const { data: filterData, isLoading, isError } = useFilters();
//   const { filterDatas, setFilterData } = useFilterContext();
//   // const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");
//   const queryClient = useQueryClient();

//   // const handleFilterValue = (value) => {
//   //   setSearchTerm(value); // Update the local state
//   //   queryClient.setQueryData("globalFilter", {
//   //     ...queryClient.getQueryData("globalFilter"),
//   //     searchTerm: value,
//   //   });
//   // };

//   const handleTagSelection = (tag) => {
//     const isTagSelected = filterDatas.selectedTags.includes(tag);

//     // Toggle the tag selection
//     const updatedTags = isTagSelected
//       ? filterDatas.selectedTags.filter((t) => t !== tag)
//       : [...filterDatas.selectedTags, tag];

//     setFilterData({
//       ...filterDatas,
//       selectedTags: updatedTags,
//     });
//   };
//   const clearFilter = () => {
//     setSearchTerm(""); // Clear the local state
//     queryClient.setQueryData("globalFilter", {
//       ...queryClient.getQueryData("globalFilter"),
//       searchTerm: "",
//     });
//   };

//   return (
//     <div className="w-full flex items-center justify-start py-4">
//       <div
//         className="border border-gray-300 rounded-md px-3 py-2 mr-2 cursor-pointer group hover:shadow-md bg-gray-200 relative"
//         onMouseEnter={() => setIsClearHovered(true)}
//         onMouseLeave={() => setIsClearHovered(false)}
//         onClick={clearFilter}
//       >
//         <MdLayersClear className="text-xl" />
//         <AnimatePresence>
//           {isClearHovered && (
//             <motion.div
//               {...slideUpDownWithScale}
//               className="absolute -top-8 -left-2 bg-white shadow-md rounded-md px-2 py-1"
//             >
//               <p className="whitespace-nowrap text-xs">Clear all</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       <div className="w-full flex items-center justify-start overflow-x-scroll gap-6 scrollbar-none">
//         {FiltersData &&
//           FiltersData.map((item) => (
//             <div
//               onClick={() => handleFilterValue(item.value)}
//               key={item.id}
//               className={`border border-gray-300 rounded-md px-6 py-2 cursor-pointer group hover:shadow-md ${
//                 searchTerm === item.value
//                   ? "bg-gray-800 text-white shadow-md"
//                   : ""
//               }`}
//             >
//               <p className="text-sm text-txtPrimary group-hover:text-txtDark whitespace-nowrap">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Filters;










// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { slideUpDownWithScale } from "../animations";
// import { MdLayersClear } from "react-icons/md";
// import { FiltersData } from "../utils/helpers";
// import { useQueryClient } from "@tanstack/react-query";
// import { useFilterContext } from "../context/filterContext"; // Ensure you import the context
// // import { useFilterContext } from '../context/filterContext';

// const Filters = () => {
//   const { filterData, setFilterData } = useFilterContext(); // Get filterData and setFilterData from context
//   const queryClient = useQueryClient();
//   const [isClearHovered, setIsClearHovered] = useState(false);

//   const handleTagSelection = (tag) => {
//     const isTagSelected = filterData.selectedTags.includes(tag);

//     // Toggle the tag selection
//     const updatedTags = isTagSelected
//       ? filterData.selectedTags.filter((t) => t !== tag)
//       : [...filterData.selectedTags, tag];

//     setFilterData({
//       ...filterData,
//       selectedTags: updatedTags,
//     });
//   };

//   const clearFilter = () => {
//     // Clear the selected tags and search term in global state
//     setFilterData({
//       ...filterData,
//       searchTerm: "",
//       selectedTags: [],
//     });
//     queryClient.setQueryData("globalFilter", {
//       ...queryClient.getQueryData("globalFilter"),
//       searchTerm: "",
//       selectedTags: [],
//     });
//   };

//   return (
//     <div className="w-full flex items-center justify-start py-4">
//       {/* Clear all button */}
//       <div
//         className="border border-gray-300 rounded-md px-3 py-2 mr-2 cursor-pointer group hover:shadow-md bg-gray-200 relative"
//         onMouseEnter={() => setIsClearHovered(true)}
//         onMouseLeave={() => setIsClearHovered(false)}
//         onClick={clearFilter}
//       >
//         <MdLayersClear className="text-xl" />
//         <AnimatePresence>
//           {isClearHovered && (
//             <motion.div
//               {...slideUpDownWithScale}
//               className="absolute -top-8 -left-2 bg-white shadow-md rounded-md px-2 py-1"
//             >
//               <p className="whitespace-nowrap text-xs">Clear all</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Scrollable tags */}
//       <div className="w-full flex items-center justify-start overflow-x-scroll gap-6 scrollbar-none tags-scrollbar">
//         {FiltersData &&
//           FiltersData.map((item) => (
//             <button
//               key={item.id}
//               className={`border border-gray-300 rounded-md px-6 py-2 cursor-pointer group hover:shadow-md ${
//                 filterData.selectedTags.includes(item.value)
//                   ? "bg-gray-800 text-white shadow-md"
//                   : ""
//               }`}
//               onClick={() => handleTagSelection(item.value)}
//             >
//               <p className="text-sm text-txtPrimary group-hover:text-txtDark whitespace-nowrap">
//                 {item.label}
//               </p>
//             </button>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Filters;



import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slideUpDownWithScale } from "../animations";
import { MdLayersClear } from "react-icons/md";
import { FiltersData } from "../utils/helpers";
import { useQueryClient } from "@tanstack/react-query";
import { useFilterContext } from "../context/filterContext"; // Ensure you import the context

const Filters = () => {
  const { filterData, setFilterData } = useFilterContext(); // Get filterData and setFilterData from context
  const queryClient = useQueryClient();
  const [isClearHovered, setIsClearHovered] = useState(false);

  const handleTagSelection = (tag) => {
    // Set the selected tag to be the only one selected
    const updatedTags = filterData.selectedTags.includes(tag)
      ? [] // If the tag is already selected, deselect it (make no selection)
      : [tag]; // Otherwise, select the new tag and deselect others

    setFilterData({
      ...filterData,
      selectedTags: updatedTags,
    });
  };

  const clearFilter = () => {
    // Clear the selected tags and search term in global state
    setFilterData({
      ...filterData,
      searchTerm: "",
      selectedTags: [],
    });
    queryClient.setQueryData("globalFilter", {
      ...queryClient.getQueryData("globalFilter"),
      searchTerm: "",
      selectedTags: [],
    });
  };

  return (
    <div className="w-full flex items-center justify-start py-4">
      {/* Clear all button */}
      <div
        className="border border-gray-300 rounded-md px-3 py-2 mr-2 cursor-pointer group hover:shadow-md bg-gray-200 relative"
        onMouseEnter={() => setIsClearHovered(true)}
        onMouseLeave={() => setIsClearHovered(false)}
        onClick={clearFilter}
      >
        <MdLayersClear className="text-xl" />
        <AnimatePresence>
          {isClearHovered && (
            <motion.div
              {...slideUpDownWithScale}
              className="absolute -top-8 -left-2 bg-white shadow-md rounded-md px-2 py-1"
            >
              <p className="whitespace-nowrap text-xs">Clear all</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scrollable tags */}
      <div className="w-full flex items-center justify-start overflow-x-scroll gap-6 scrollbar-none tags-scrollbar">
        {FiltersData &&
          FiltersData.map((item) => (
            <button
              key={item.id}
              className={`border border-gray-300 rounded-md px-6 py-2 cursor-pointer group hover:shadow-md ${
                filterData.selectedTags.includes(item.value)
                  ? "bg-gray-800 text-white shadow-md"
                  : ""
              }`}
              onClick={() => handleTagSelection(item.value)}
            >
              <p className="text-sm text-txtPrimary group-hover:text-txtDark whitespace-nowrap">
                {item.label}
              </p>
            </button>
          ))}
      </div>
    </div>
  );
};

export default Filters;
