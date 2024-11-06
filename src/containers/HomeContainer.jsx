// import React from "react";
// import { Filters, MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { AnimatePresence } from "framer-motion";

// import React from "react";
// import { Filters, MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { AnimatePresence } from "framer-motion";

// const HomeContainer = () => {
//   const {
//     data: templates,
//     isError: temp_isError,
//     isLoading: temp_isLoading,
//     refetch: temp_refetch,
//   } = useTemplates();

//   if (temp_isLoading) {
//     return <MainSpinner />;
//   }
//   return (
//     <div className="w-full px-4 lg:px-12 py-6 flex flex-col items-center justify-start">
//       <Filters />
//       {temp_isError ? (
//         <React.Fragment>
//           <p className="text-lg text-txtDark">
//             Something went wrong...Please try again later
//           </p>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//             <RenderATemplate templates={templates} />
//           </div>
//         </React.Fragment>
//       )}
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   return (
//     <React.Fragment>
//       {templates && templates.length > 0 ? (
//         <React.Fragment>
//           <AnimatePresence>
//             {templates &&
//               templates.map((template, index) => (
//                 <TemplateDesignPin
//                   key={template?._id}
//                   data={template}
//                   index={index}
//                 />
//               ))}
//           </AnimatePresence>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <p> No Data found</p>
//         </React.Fragment>
//       )}
//     </React.Fragment>
//   );
// };

// // export default HomeContainer;
// import React, { useEffect, useState } from "react";
// import { Filters, MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import useFilters from "../hooks/useFilters"; // Import the hook
// import { AnimatePresence } from "framer-motion";

// const HomeContainer = () => {
//   const {
//     data: templates,
//     isError: temp_isError,
//     isLoading: temp_isLoading,
//     refetch: temp_refetch,
//   } = useTemplates();

//   const { data: filterData } = useFilters(); // Get search term from filters
//   const [filteredTemplates, setFilteredTemplates] = useState(templates || []);

//   // Use effect to filter templates based on the search term
//   useEffect(() => {
//     if (filterData?.searchTerm) {
//       const filtered = templates?.filter((template) =>
//         template.tags.includes(filterData.searchTerm.toLowerCase()) // Assuming templates have tags
//       );
//       setFilteredTemplates(filtered);
//     } else {
//       setFilteredTemplates(templates); // Reset to all templates if no search term
//     }
//   }, [templates, filterData?.searchTerm]);

//   if (temp_isLoading) {
//     return <MainSpinner />;
//   }

//   return (
//     <div className="w-full px-4 lg:px-12 py-6 flex flex-col items-center justify-start">
//       <Filters />
//       {temp_isError ? (
//         <p className="text-lg text-txtDark">
//           Something went wrong...Please try again later
//         </p>
//       ) : (
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//           <RenderATemplate templates={filteredTemplates} />
//         </div>
//       )}
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   return (
//     <React.Fragment>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin key={template?._id} data={template} index={index} />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <p>No Data found</p>
//       )}
//     </React.Fragment>
//   );
// };

// // export default HomeContainer;
// import React, { useEffect, useState } from "react";
// import { Filters, MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import useFilters from "../hooks/useFilters"; // Import the hook
// import { AnimatePresence } from "framer-motion";
// import HeaderSearchBar from "../components/Header";
// // import HeaderSearchBar from './Header'; // Importing HeaderSearchBar

// const HomeContainer = () => {
//   const {
//     data: templates,
//     isError: temp_isError,
//     isLoading: temp_isLoading,
//     refetch: temp_refetch,
//   } = useTemplates();

//   const { data: filterData } = useFilters(); // Get search term from filters
//   const [filteredTemplates, setFilteredTemplates] = useState(templates || []);
//   const [searchTerm, setSearchTerm] = useState(''); // New state for search

//   // Handle search term change from the search bar
//   const handleSearch = (term) => {
//     setSearchTerm(term.toLowerCase());
//   };

//   // Use effect to filter templates based on the search term
//   useEffect(() => {
//     let filtered = templates;

//     if (searchTerm) {
//       filtered = templates?.filter(template =>
//         template.tags.some(tag => tag.toLowerCase().includes(searchTerm))
//       );
//     } else if (filterData?.searchTerm) {
//       filtered = templates?.filter(template =>
//         template.tags.includes(filterData.searchTerm.toLowerCase())
//       );
//     }

//     setFilteredTemplates(filtered);
//   }, [templates, filterData?.searchTerm, searchTerm]);

//   if (temp_isLoading) {
//     return <MainSpinner />;
//   }

//   return (
//     <div className="w-full px-4 lg:px-12 py-6 flex flex-col items-center justify-start">
//       <HeaderSearchBar handleSearch={handleSearch} /> {/* Adding Search Bar */}
//       <Filters />
//       {temp_isError ? (
//         <p className="text-lg text-txtDark">
//           Something went wrong...Please try again later
//         </p>
//       ) : (
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//           <RenderATemplate templates={filteredTemplates} />
//         </div>
//       )}
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   return (
//     <React.Fragment>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin key={template?._id} data={template} index={index} />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <p>No Data found</p>
//       )}
//     </React.Fragment>
//   );
// };

// // export default HomeContainer;
// import React, { useEffect, useState } from "react";
// import { Filters, MainSpinner, TemplateDesignPin, HeaderSearchBar, Header } from "../components"; // Import HeaderSearchBar correctly
// import useTemplates from "../hooks/useTemplates";
// import useFilters from "../hooks/useFilters";
// import { AnimatePresence } from "framer-motion";

// const HomeContainer = () => {
//   const {
//     data: templates,
//     isError: temp_isError,
//     isLoading: temp_isLoading,
//     refetch: temp_refetch,
//   } = useTemplates();

//   const { data: filterData } = useFilters();
//   const [filteredTemplates, setFilteredTemplates] = useState(templates || []);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (term) => {
//     setSearchTerm(term.toLowerCase());
//   };

//   useEffect(() => {
//     let filtered = templates;

//     if (searchTerm) {
//       filtered = templates?.filter(template =>
//         template.tags.some(tag => tag.toLowerCase().includes(searchTerm))
//       );
//     } else if (filterData?.searchTerm) {
//       filtered = templates?.filter(template =>
//         template.tags.includes(filterData.searchTerm.toLowerCase())
//       );
//     }

//     setFilteredTemplates(filtered);
//   }, [templates, filterData?.searchTerm, searchTerm]);

//   if (temp_isLoading) {
//     return <MainSpinner />;
//   }

//   return (
//     <div className="w-full px-4 lg:px-12 py-6 flex flex-col items-center justify-start">
//       <Header handleSearch={handleSearch} /> {/* Use HeaderSearchBar */}
//       <Filters />
//       {temp_isError ? (
//         <p className="text-lg text-txtDark">
//           Something went wrong...Please try again later
//         </p>
//       ) : (
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//           <RenderATemplate templates={filteredTemplates} />
//         </div>
//       )}
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   return (
//     <React.Fragment>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin key={template?._id} data={template} index={index} />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <p>No Data found</p>
//       )}
//     </React.Fragment>
//   );
// };

// export default HomeContainer;
// HOmeCOntainer

// import React from "react";
// import { Filters, MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { AnimatePresence } from "framer-motion";

// const HomeContainer = () => {
//   const {
//     data: templates,
//     isError: temp_isError,
//     isLoading: temp_isLoading,
//     refetch: temp_refetch,
//   } = useTemplates();

//   if (temp_isLoading) {
//     return <MainSpinner />;
//   }
//   return (
//     <div className="w-full px-4 lg:px-12 py-6 flex flex-col items-center justify-start">
//       <Filters />
//       {temp_isError ? (
//         <React.Fragment>
//           <p className="text-lg text-txtDark">
//             Something went wrong...Please try again later
//           </p>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//             <RenderATemplate templates={templates} />
//           </div>
//         </React.Fragment>
//       )}
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   return (
//     <React.Fragment>
//       {templates && templates.length > 0 ? (
//         <React.Fragment>
//           <AnimatePresence>
//             {templates &&
//               templates.map((template, index) => (
//                 <TemplateDesignPin
//                   key={template?._id}
//                   data={template}
//                   index={index}
//                 />
//               ))}
//           </AnimatePresence>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <p> No Data found</p>
//         </React.Fragment>
//       )}
//     </React.Fragment>
//   );
// };

// export default HomeContainer;

// import React, { useEffect, useState } from "react";
// import { Filters, MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { AnimatePresence } from "framer-motion";

// const HomeContainer = ({ searchTerm }) => {
//   const {
//     data: templates,
//     isError: temp_isError,
//     isLoading: temp_isLoading,
//   } = useTemplates();

//   const [filteredTemplates, setFilteredTemplates] = useState([]);

//   useEffect(() => {
//     if (templates && templates.length > 0) {
//       // Filter templates based on search term matching tags
//       const filtered = templates.filter((template) =>
//         template?.tags?.some((tag) =>
//           tag.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       );
//       setFilteredTemplates(filtered);
//     } else {
//       setFilteredTemplates([]);
//     }
//   }, [searchTerm, templates]);

//   if (temp_isLoading) {
//     return <MainSpinner />;
//   }

//   return (
//     <div className="w-full px-4 lg:px-12 py-6 flex flex-col items-center justify-start">
//       <Filters />
//       {temp_isError ? (
//         <p className="text-lg text-txtDark">Something went wrong...Please try again later</p>
//       ) : (
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//           <RenderATemplate templates={filteredTemplates} />
//         </div>
//       )}
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   return (
//     <React.Fragment>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin key={template?._id} data={template} index={index} />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <p>No Data found</p>
//       )}
//     </React.Fragment>
//   );
// };

// export default HomeContainer;

// import React, { useEffect, useState } from "react";
// import { Filters, MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { AnimatePresence } from "framer-motion";

// const HomeContainer = ({ searchTerm }) => {
//   const {
//     data: templates,
//     isError: temp_isError,
//     isLoading: temp_isLoading,
//   } = useTemplates();

//   const [filteredTemplates, setFilteredTemplates] = useState([]);

//   // useEffect(() => {
//   //   if (templates && templates.length > 0) {
//   //     const filtered = templates.filter((template) =>
//   //       template?.tags?.some((tag) =>
//   //         typeof tag === "string" && tag.toLowerCase().includes(searchTerm.toLowerCase())
//   //       )
//   //     );
//   //     setFilteredTemplates(filtered);
//   //   } else {
//   //     setFilteredTemplates([]);
//   //   }
//   // }, [searchTerm, templates]);
//   useEffect(() => {
//     if (templates) {
//       const filtered = templates.filter((template) =>
//         template?.tags?.some((tag) =>
//           tag.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       );
//       setFilteredTemplates(filtered);
//     }
//   }, [searchTerm, templates]);

//   if (temp_isLoading) {
//     return <MainSpinner />;
//   }
//   if (temp_isError) return <p>Error loading templates.</p>;
//   return (
//     <div className="w-full px-4 lg:px-12 py-6 flex flex-col items-center justify-start">
//       <Filters />
//       {temp_isError ? (
//         <p className="text-lg text-txtDark">Something went wrong...Please try again later</p>
//       ) : (
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//           <RenderATemplate templates={filteredTemplates} />
//         </div>
//       )}
//     </div>
//   );
// };
// <div>
// {filteredTemplates.length > 0 ? (
//   filteredTemplates.map((template) => (
//     <div key={template.id}>{template.name}</div>
//   ))
// ) : (
//   <p>No templates found</p>
// )}
// </div>
// const RenderATemplate = ({ templates }) => {
//   return (
//     <React.Fragment>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin key={template?._id} data={template} index={index} />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <p>No Data found</p>
//       )}
//     </React.Fragment>
//   );
// };

// export default HomeContainer;

// import React from "react";
// import { Filters, MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { AnimatePresence } from "framer-motion";

// const HomeContainer = () => {
//   const {
//     data: templates,
//     isError: temp_isError,
//     isLoading: temp_isLoading,
//     refetch: temp_refetch,
//   } = useTemplates();

//   if (temp_isLoading) {
//     return <MainSpinner />;
//   }
//   return (
//     <div className="w-full px-4 lg:px-12 py-6 flex flex-col items-center justify-start">
//       <Filters />
//       {temp_isError ? (
//         <React.Fragment>
//           <p className="text-lg text-txtDark">
//             Something went wrong...Please try again later
//           </p>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//             <RenderATemplate templates={templates} />
//           </div>
//         </React.Fragment>
//       )}
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   return (
//     <React.Fragment>
//       {templates && templates.length > 0 ? (
//         <React.Fragment>
//           <AnimatePresence>
//             {templates &&
//               templates.map((template, index) => (
//                 <TemplateDesignPin
//                   key={template?._id}
//                   data={template}
//                   index={index}
//                 />
//               ))}
//           </AnimatePresence>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <p> No Data found</p>
//         </React.Fragment>
//       )}
//     </React.Fragment>
//   );
// };

// export default HomeContainer;

// import React from "react";
// import { Filters, MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import useFilters from "../hooks/useFilters";  // Hook to get global filters
// import { AnimatePresence } from "framer-motion";

// const HomeContainer = () => {
//   const {
//     data: templates,
//     isError: temp_isError,
//     isLoading: temp_isLoading,
//     refetch: temp_refetch,
//   } = useTemplates();

//   const { data: filterData } = useFilters();  // Get search term and selected tags

//   if (temp_isLoading) {
//     return <MainSpinner />;
//   }

//   // Apply filtering logic
//   // const filteredTemplates = templates.filter((template) => {
//   //   const searchMatch = filterData.searchTerm
//   //     ? template.tags.some((tag) =>
//   //         tag.toLowerCase().includes(filterData.searchTerm.toLowerCase())
//   //       )
//   //     : true;

//   //   const tagMatch = filterData.selectedTags.length > 0
//   //     ? filterData.selectedTags.some((selectedTag) =>
//   //         template.tags.includes(selectedTag)
//   //       )
//   //     : true;

//   //   return searchMatch && tagMatch;
//   // });
//   const filteredTemplates = templates.filter((template) => {
//     // Ensure template.tags is defined
//     const templateTags = template.tags || [];

//     // Ensure filterData.selectedTags is defined and it's an array
//     const selectedTags = Array.isArray(filterData.selectedTags) ? filterData.selectedTags : [];

//     const searchMatch = filterData.searchTerm
//       ? templateTags.some((tag) =>
//           tag.toLowerCase().includes(filterData.searchTerm.toLowerCase())
//         )
//       : true;

//     const tagMatch = selectedTags.length > 0
//       ? selectedTags.some((selectedTag) => templateTags.includes(selectedTag))
//       : true;

//     return searchMatch && tagMatch;
//   });

//   return (
//     <div className="w-full px-4 lg:px-12 py-6 flex flex-col items-center justify-start">
//       <Filters />
//       {temp_isError ? (
//         <React.Fragment>
//           <p className="text-lg text-txtDark">
//             Something went wrong...Please try again later
//           </p>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//             <RenderATemplate templates={filteredTemplates} />
//           </div>
//         </React.Fragment>
//       )}
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   return (
//     <React.Fragment>
//       {templates && templates.length > 0 ? (
//         <React.Fragment>
//           <AnimatePresence>
//             {templates.map((template, index) => (
//               <TemplateDesignPin
//                 key={template?._id}
//                 data={template}
//                 index={index}
//               />
//             ))}
//           </AnimatePresence>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <p>No Data found</p>
//         </React.Fragment>
//       )}
//     </React.Fragment>
//   );
// };

// export default HomeContainer;

// import React from "react";
// import { Filters, MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { AnimatePresence } from "framer-motion";
// import { useFilterContext } from "../context/filterContext"; // Ensure you import the context

// const HomeContainer = () => {
//   const {
//     data: templates,
//     isError: temp_isError,
//     isLoading: temp_isLoading,
//     refetch: temp_refetch,
//   } = useTemplates();

//   const { filterData } = useFilterContext(); // Get the filterData from context

//   // Apply filtering logic
//   const filteredTemplates = templates.filter((template) => {
//     const templateTags = template.tags || [];
//     const selectedTags = Array.isArray(filterData.selectedTags) ? filterData.selectedTags : [];

//     const searchMatch = filterData.searchTerm
//       ? templateTags.some((tag) =>
//           tag.toLowerCase().includes(filterData.searchTerm.toLowerCase())
//         )
//       : true;

//     const tagMatch = selectedTags.length > 0
//       ? selectedTags.some((selectedTag) => templateTags.includes(selectedTag))
//       : true;

//     return searchMatch && tagMatch;
//   });

//   if (temp_isLoading) {
//     return <MainSpinner />;
//   }

//   return (
//     <div className="w-full px-4 lg:px-12 py-6 flex flex-col items-center justify-start">
//       <Filters />
//       {temp_isError ? (
//         <p className="text-lg text-txtDark">
//           Something went wrong...Please try again later
//         </p>
//       ) : (
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//           <RenderATemplate templates={filteredTemplates} />
//         </div>
//       )}
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template._id}
//               data={template}
//               index={index}
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <p>No templates found</p>
//       )}
//     </>
//   );
// };

// // export default HomeContainer;
// const HomeContainer = () => {
//   const {
//     data: templates = [], // Default to an empty array if templates is undefined
//     isError: temp_isError,
//     isLoading: temp_isLoading,
//     refetch: temp_refetch,
//   } = useTemplates();
//   const { filterData } = useFilterContext();

//   console.log("Selected Tags:", filterData.selectedTags); // Check selected tags
//   console.log("Search Term:", filterData.searchTerm); // Check search term

//   const filteredTemplates = templates.filter((template) => {
//     return filterData.selectedTags.some((tag) => template.tags.includes(tag));
//   });

//   console.log("Filtered Templates:", filteredTemplates);
//   if (temp_isLoading) {
//     return <MainSpinner />;
//   }

//   return (
//     <div className="w-full px-4 lg:px-12 py-6 flex flex-col items-center justify-start">
//       <Filters />
//       {temp_isError ? (
//         <p className="text-lg text-txtDark">
//           Something went wrong...Please try again later
//         </p>
//       ) : (
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//           <RenderATemplate templates={templates || []} />
//         </div>
//       )}
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   return (
//     <React.Fragment>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template?._id}
//               data={template}
//               index={index}
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <p>No Data found</p>
//       )}
//     </React.Fragment>
//   );
// };

// export default HomeContainer;
// import useTemplates from "../hooks/useTemplates"; // Import the default export

// import React, { useEffect } from "react";
// // import { useTemplates } from "../hooks/useTemplates";
// import { useFilterContext } from "../context/filterContext";
// import MainSpinner from "../components/MainSpinner";
// import Filters from "../components/Filters"; // Assuming Filters component is needed
// import { AnimatePresence } from "framer-motion";
// import TemplateDesignPin from "../components/TemplateDesignPin"; // Assuming this is a component

// const HomeContainer = () => {
//   const {
//     data: templates = [], // Default to an empty array if templates is undefined
//     isError: temp_isError,
//     isLoading: temp_isLoading,
//     refetch: temp_refetch, // Refetch function from useTemplates
//   } = useTemplates();

//   const { filterData } = useFilterContext();

//   // Refetch templates when filterData changes
//   useEffect(() => {
//     console.log("Refetching templates based on filter data...");
//     temp_refetch();
//   }, [filterData, temp_refetch]);

//   // Apply filtering logic on templates
//   const filteredTemplates = templates.filter((template) => {
//     // Match tags from filterData with template tags
//     return filterData.selectedTags.some((tag) => template.tags.includes(tag));
//   });

//   if (temp_isLoading) {
//     return <MainSpinner />;
//   }

//   return (
//     <div className="w-full px-4 lg:px-12 py-6 flex flex-col items-center justify-start">
//       <Filters /> {/* Assuming Filters is necessary for tag selection */}
//       {temp_isError ? (
//         <p className="text-lg text-txtDark">
//           Something went wrong...Please try again later
//         </p>
//       ) : (
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//           <RenderATemplate templates={filteredTemplates || []} />
//         </div>
//       )}
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   return (
//     <React.Fragment>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template?._id}
//               data={template}
//               index={index}
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <p>No Data found</p>
//       )}
//     </React.Fragment>
//   );
// };

// // export default HomeContainer;
// import React, { useEffect } from "react";
// import { useTemplates } from "../hooks/useTemplates";

// import { useFilterContext } from "../context/filterContext";
// import MainSpinner from "../components/MainSpinner";

// const HomeContainer = () => {
//   const {
//     data: templates = [],
//     isError: temp_isError,
//     isLoading: temp_isLoading,
//     refetch: temp_refetch, // This is the refetch function
//   } = useTemplates();

//   const { filterData } = useFilterContext();

//   // UseEffect to refetch templates when filterData changes (tags or search term)
//   useEffect(() => {
//     temp_refetch(); // Force re-fetching of templates when filterData changes
//   }, [filterData]);

//   // Apply filtering logic
//   const filteredTemplates = templates.filter((template) => {
//     // Show all templates if no tags are selected and no search term is provided
//     if (filterData.selectedTags.length === 0 && !filterData.searchTerm) {
//       return true;
//     }

//     // Filter templates based on selected tags or search term
//     const matchesTags = filterData.selectedTags.some((tag) => template.tags.includes(tag));
//     const matchesSearchTerm = filterData.searchTerm
//       ? template.tags.some((tag) => tag.toLowerCase().includes(filterData.searchTerm.toLowerCase()))
//       : true;

//     return matchesTags || matchesSearchTerm;
//   });

//   if (temp_isLoading) {
//     return <MainSpinner />;
//   }

//   if (temp_isError) {
//     return <p>Error loading templates.</p>;
//   }

//   return (
//     <div>
//       <h1>Filtered Templates</h1>
//       {filteredTemplates.length > 0 ? (
//         filteredTemplates.map((template) => (
//           <div key={template.id}>{template.name}</div>
//         ))
//       ) : (
//         <p>No templates found</p>
//       )}
//     </div>
//   );
// };

// // export default HomeContainer;
// import React, { useEffect } from "react";
// import useTemplates from "../hooks/useTemplates"; // Corrected import
// import { useFilterContext } from "../context/filterContext";
// import MainSpinner from "../components/MainSpinner";

// const HomeContainer = () => {
//   const {
//     data: templates = [],
//     isError: temp_isError,
//     isLoading: temp_isLoading,
//     refetch: temp_refetch, // This is the refetch function
//   } = useTemplates(); // Ensure useTemplates is the default export

//   const { filterData } = useFilterContext();

//   // UseEffect to refetch templates when filterData changes (tags or search term)
//   useEffect(() => {
//     temp_refetch(); // Force re-fetching of templates when filterData changes
//   }, [filterData]);

//   // Apply filtering logic
//   const filteredTemplates = templates.filter((template) => {
//     // Show all templates if no tags are selected and no search term is provided
//     if (filterData.selectedTags.length === 0 && !filterData.searchTerm) {
//       return true;
//     }

//     // Filter templates based on selected tags or search term
//     const matchesTags = filterData.selectedTags.some((tag) => template.tags.includes(tag));
//     const matchesSearchTerm = filterData.searchTerm
//       ? template.tags.some((tag) => tag.toLowerCase().includes(filterData.searchTerm.toLowerCase()))
//       : true;

//     return matchesTags || matchesSearchTerm;
//   });

//   if (temp_isLoading) {
//     return <MainSpinner />;
//   }

//   if (temp_isError) {
//     return <p>Error loading templates.</p>;
//   }

//   return (
//     <div>
//       <h1>Filtered Templates</h1>
//       {filteredTemplates.length > 0 ? (
//         filteredTemplates.map((template) => (
//           <div key={template.id}>{template.name}</div>
//         ))
//       ) : (
//         <p>No templates found</p>
//       )}
//     </div>
//   );
// };

// // export default HomeContainer;
// import React, { useEffect } from "react";
// import useTemplates from "../hooks/useTemplates"; // Corrected import
// import { useFilterContext } from "../context/filterContext";
// import MainSpinner from "../components/MainSpinner";
// import Filters from "../components/Filters"; // Import the Filters component for the scroll bar
// import TemplateDesignPin from "../components/TemplateDesignPin"; // Import the template rendering component

// const HomeContainer = () => {
//   const {
//     data: templates = [],
//     isError: temp_isError,
//     isLoading: temp_isLoading,
//     refetch: temp_refetch,
//   } = useTemplates();

//   const { filterData } = useFilterContext();

//   // Refetch templates when filter data changes
//   useEffect(() => {
//     temp_refetch(); // Re-fetch templates when filter data changes
//   }, [filterData]);

//   // Apply filtering logic
//   const filteredTemplates = templates.filter((template) => {
//     if (filterData.selectedTags.length === 0 && !filterData.searchTerm) {
//       return true; // Show all templates if no tags or search term
//     }

//     const matchesTags = filterData.selectedTags.some((tag) =>
//       template.tags.includes(tag)
//     );
//     const matchesSearchTerm = filterData.searchTerm
//       ? template.tags.some((tag) =>
//           tag.toLowerCase().includes(filterData.searchTerm.toLowerCase())
//         )
//       : true;

//     return matchesTags || matchesSearchTerm;
//   });

//   if (temp_isLoading) {
//     return <MainSpinner />;
//   }

//   if (temp_isError) {
//     return <p>Error loading templates.</p>;
//   }

//   return (
//     <div className="w-full px-4 lg:px-12 py-6 flex flex-col items-center justify-start">
//       {/* Filters component to show the scroll bar */}
//       <Filters />

//       {/* Render templates */}
//       {filteredTemplates.length > 0 ? (
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//           {filteredTemplates.map((template, index) => (
//             <TemplateDesignPin key={template._id} data={template} index={index} />
//           ))}
//         </div>
//       ) : (
//         <p>No templates found</p>
//       )}
//     </div>
//   );
// };

// // export default HomeContainer;
// import React, { useEffect, useState } from "react";
// import useTemplates from "../hooks/useTemplates"; // Corrected import
// import { useFilterContext } from "../context/filterContext";
// import MainSpinner from "../components/MainSpinner";
// import Filters from "../components/Filters"; // Import the Filters component for the scroll bar
// import TemplateDesignPin from "../components/TemplateDesignPin"; // Import the template rendering component

// const HomeContainer = (user) => {
//   const {
//     data: templates = [],
//     isError: temp_isError,
//     isLoading: temp_isLoading,
//     refetch: temp_refetch,
//   } = useTemplates();
//   const [userCollection, setUserCollection] = useState([]); 
//   const { filterData } = useFilterContext();

//   // Refetch templates when filterData changes (tags or search term)
//   useEffect(() => {
//     temp_refetch(); // Re-fetch templates when filter data changes
//   }, [filterData]);

//   // Apply filtering logic based on selected tags or search term
//   const filteredTemplates = templates.filter((template) => {
//     const matchesTags = filterData.selectedTags.length
//       ? filterData.selectedTags.some((tag) => template.tags.includes(tag))
//       : true; // If no tags selected, allow all templates

//     const matchesSearchTerm = filterData.searchTerm
//       ? template.tags.some((tag) =>
//           tag.toLowerCase().includes(filterData.searchTerm.toLowerCase())
//         )
//       : true; // If no search term, allow all templates

//     return matchesTags && matchesSearchTerm; // Templates must match both tag and search term
//   });

//   if (temp_isLoading) {
//     return <MainSpinner />;
//   }

//   // if (temp_isError) {
//   //   return <p>Error loading templates.</p>;
//   // }


//   // useEffect(() => {
//   //   const fetchUserCollection = async () => {
//   //     if (user) {
//   //       const collection = await getUserCollection(user);
//   //       setUserCollection(collection);
//   //     }
//   //   };

//   //   fetchTemplates();
//   //   fetchUserCollection();
//   // }, [user]);



//   return (
//     <div className="w-full px-4 lg:px-12 py-6 flex flex-col items-center justify-start">
//       {/* Filters component to show the scroll bar for filtering */}
//       <Filters />

//       {/* Render templates */}
//       {filteredTemplates.length >0 ? (
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//           {filteredTemplates.map((template, index) => (
//             <TemplateDesignPin key={template._id} data={template} index={index} />
//           ))}
//         </div>
//       ) : (
//         <p>No templates found</p>
//       )}
//     </div>
//   );
// };

// export default HomeContainer;
// import React, { useEffect, useState } from "react";
// import useTemplates from "../hooks/useTemplates";
// import { useFilterContext } from "../context/filterContext";
// import MainSpinner from "../components/MainSpinner";
// import Filters from "../components/Filters";
// import TemplateDesignPin from "../components/TemplateDesignPin";
// import { getUserCollection } from "../api";
// import { fetchUserCollection } from "../api/useUserCollection";
// // import { getUserCollection } from "../components/TemplateDesignPin"; // Import your method to get user collection

// const HomeContainer = ({ user }) => {
//   const { data: templates = [], isError, isLoading, refetch } = useTemplates();
//   const [userCollection, setUserCollection] = useState([]);
//   const { filterData } = useFilterContext();

//   // Fetch the user's collection
//   // const fetchUserCollection = async () => {
//   //   if (user) {
//   //     try {
//   //       const collection = await getUserCollection(user.uid); // Pass user UID
//   //       setUserCollection(collection);
//   //     } catch (error) {
//   //       console.error("Error fetching user collection:", error);
//   //     }
//   //   }
//   // };

//   // Refetch templates when filterData changes (tags or search term)
//   useEffect(() => {
//     refetch();
//     if (user) {
//       fetchUserCollection(); // Fetch the collection once the user is available
//     }
//   }, [filterData, user]);

//   // Apply filtering logic based on selected tags or search term
//   const filteredTemplates = templates.filter((template) => {
//     const matchesTags = filterData.selectedTags.length
//       ? filterData.selectedTags.some((tag) => template.tags.includes(tag))
//       : true;

//     const matchesSearchTerm = filterData.searchTerm
//       ? template.tags.some((tag) =>
//           tag.toLowerCase().includes(filterData.searchTerm.toLowerCase())
//         )
//       : true;

//     return matchesTags && matchesSearchTerm;
//   });

//   // Helper to check if the template is already in the user's collection
//   // const isTemplateInCollection = (templateId) => {
//   //   return userCollection.some((item) => item._id === templateId);
//   // };

//   const isTemplateInCollection = (templateId) => {
//     return userCollection.some((item) => item._id === templateId); 
//   };
  
//   // After template is added/removed, refetch collection to trigger re-render
//   const handleCollectionUpdate = async () => {
//     await fetchUserCollection(); // Fetch updated collection
//     refetch(); // Refetch templates if necessary
//   };


//   if (isLoading) {
//     return <MainSpinner />;
//   }

//   // if (isError) {
//   //   return <p>Error loading templates.</p>;
//   // }

//   return (
//     <div className="w-full px-4 lg:px-12 py-6 flex flex-col items-center justify-start">
//       {/* Filters component to show the scroll bar for filtering */}
//       <Filters />

//       {/* Render templates */}
//       {filteredTemplates.length > 0 ? (
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//           {filteredTemplates.map((template, index) => (
//             <TemplateDesignPin
//               key={template._id}
//               data={template}
//               index={index}
//               isAdded={isTemplateInCollection(template._id)} // Pass the "isAdded" prop
//               user={user} // Pass the user prop if necessary
//             />
//           ))}
//         </div>
//       ) : (
//         <p>No templates found</p>
       
//       )}
//     </div>
//   );
// };

// // export default HomeContainer;
// import React, { useEffect, useState } from "react";
// import useTemplates from "../hooks/useTemplates";
// import { useFilterContext } from "../context/filterContext";
// import MainSpinner from "../components/MainSpinner";
// import Filters from "../components/Filters";
// import TemplateDesignPin from "../components/TemplateDesignPin";
// import { getUserCollection } from "../api";
// import { fetchUserCollection } from "../api/useUserCollection";

// const HomeContainer = ({ user }) => {
//   const { data: templates = [], isError, isLoading, refetch } = useTemplates();
//   const [userCollection, setUserCollection] = useState([]);
//   const { filterData } = useFilterContext();

//   // Fetch the user's collection when the user is logged in
//   useEffect(() => {
//     const fetchUserCollectionData = async () => {
//       if (user) {
//         try {
//           const collection = await getUserCollection(user.uid); // Fetch user's collection if logged in
//           setUserCollection(collection);
//         } catch (error) {
//           console.error("Error fetching user collection:", error);
//         }
//       }
//     };

//     fetchUserCollectionData();
//   }, [user]);

//   // Refetch templates when filterData changes (tags or search term)
//   useEffect(() => {
//     refetch();
//   }, [filterData]);

//   // Apply filtering logic based on selected tags or search term
//   const filteredTemplates = templates.filter((template) => {
//     const matchesTags = filterData.selectedTags.length
//       ? filterData.selectedTags.some((tag) => template.tags.includes(tag))
//       : true;

//     const matchesSearchTerm = filterData.searchTerm
//       ? template.tags.some((tag) =>
//           tag.toLowerCase().includes(filterData.searchTerm.toLowerCase())
//         )
//       : true;

//     return matchesTags && matchesSearchTerm;
//   });

//   // Helper to check if the template is already in the user's collection
//   const isTemplateInCollection = (templateId) => {
//     return userCollection.some((item) => item._id === templateId); 
//   };

//   if (isLoading) {
//     return <MainSpinner />;
//   }

//   // if (isError) {
//   //   return <p>Error loading templates.</p>;
//   // }

//   return (
//     <div className="w-full px-4 lg:px-12 py-6 flex flex-col items-center justify-start">
//       {/* Filters component to show the scroll bar for filtering */}
//       <Filters />

//       {/* Render templates */}
//       {filteredTemplates.length > 0 ? (
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
//           {filteredTemplates.map((template, index) => (
//             <TemplateDesignPin
//               key={template._id}
//               data={template}
//               index={index}
//               isAdded={user ? isTemplateInCollection(template._id) : false} // Check collection only if user is logged in
//               user={user} // Pass the user prop if necessary
//             />
//           ))}
//         </div>
//       ) : (
//         <p>No templates found</p>
//       )}
//     </div>
//   );
// };

// export default HomeContainer;
import React, { useEffect, useState } from "react";
import useTemplates from "../hooks/useTemplates";
import { useFilterContext } from "../context/filterContext";
import MainSpinner from "../components/MainSpinner";
import Filters from "../components/Filters";
import TemplateDesignPin from "../components/TemplateDesignPin";
import { getUserCollection } from "../api";
import { fetchUserCollection } from "../api/useUserCollection";
import { Header } from "../components";

const HomeContainer = ({ user }) => {
  const { data: templates = [], isError, isLoading, refetch } = useTemplates();
  const [userCollection, setUserCollection] = useState([]);
  const { filterData } = useFilterContext();

  // Fetch the user's collection when the user is logged in
  useEffect(() => {
    const fetchUserCollectionData = async () => {
      if (user) {
        try {
          const collection = await getUserCollection(user.uid); // Fetch user's collection if logged in
          setUserCollection(collection);
        } catch (error) {
          console.error("Error fetching user collection:", error);
        }
      }
    };

    fetchUserCollectionData();
  }, [user]);

  // Refetch templates when filterData changes (tags or search term)
  useEffect(() => {
    refetch();
  }, [filterData]);

  // Log the templates to check if they are being fetched correctly
  useEffect(() => {
    console.log("Templates fetched: ", templates);
  }, [templates]);

  // Apply filtering logic based on selected tags or search term
  const filteredTemplates = templates.filter((template) => {
    const matchesTags = filterData.selectedTags.length
      ? filterData.selectedTags.some((tag) => template.tags.includes(tag))
      : true;

    const matchesSearchTerm = filterData.searchTerm
      ? template.tags.some((tag) =>
          tag.toLowerCase().includes(filterData.searchTerm.toLowerCase())
        )
      : true;

    return matchesTags && matchesSearchTerm;
  });

  // Helper to check if the template is already in the user's collection
  const isTemplateInCollection = (templateId) => {
    return userCollection.some((item) => item._id === templateId); 
  };

  if (isLoading) {
    return <MainSpinner />;
  }

  // if (isError) {
  //   return <p>Error loading templates.</p>;
  // }
  if (isError) {
    console.error("Error details:", isError);
    return <p>Error loading templates.</p>;
  }
  
  // return (
  //   <div className="w-full">
  //      <div style={{ height: "40px", visibility: "hidden" }}></div>
  //      <Header/>
  //   <div className="px-0 lg:px-4 py-6 flex flex-col items-center justify-start">
  //     {/* Filters component to show the scroll bar for filtering */}
  //     <Filters />

  //     {/* Log filtered templates to see the filtering effect */}
  //     {console.log("Filtered templates: ", filteredTemplates)}

  //     {/* Render templates */}
  //     {filteredTemplates.length > 0 ? (
  //       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
  //         {filteredTemplates.map((template, index) => (
  //            <div className="transform scale-90">
  //           <TemplateDesignPin style={{}}
  //             key={template._id}
  //             data={template}
  //             index={index}
  //             isAdded={user ? isTemplateInCollection(template._id) : false} // Check collection only if user is logged in
  //             user={user} // Pass the user prop if necessary
  //           />
  //            </div>
  //         ))}
  //       </div>
  //     ) : (
  //       <p>No templates found</p>
  //     )}
  //   </div>
  //   </div>
  // );

  return (
    <div className="w-full">
        <div style={{ height: "40px", visibility: "hidden" }}></div>
        <Header />
        <div className="px-0 lg:px-4 py-6 flex flex-col items-center justify-start">
            {/* Filters component to show the scroll bar for filtering */}
            <Filters />

            {/* Log filtered templates to see the filtering effect */}
            {console.log("Filtered templates: ", filteredTemplates)}

            {/* Render templates */}
            {filteredTemplates.length > 0 ? (
                <div className="template-container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {filteredTemplates.map((template, index) => (
                        <div className="transform scale-90" key={template._id}>
                            <TemplateDesignPin
                                data={template}
                                index={index}
                                isAdded={user ? isTemplateInCollection(template._id) : false} // Check collection only if user is logged in
                                user={user} // Pass the user prop if necessary
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No templates found</p>
            )}
        </div>
    </div>
);

};

export default HomeContainer;
