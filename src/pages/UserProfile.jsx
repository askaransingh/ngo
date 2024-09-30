// import React, { useEffect, useState } from "react";
// import useUser from "../hooks/useUser";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import { NoData } from "../assets-20240903T162903Z-001/assets";
// import { useQuery } from "@tanstack/react-query";
// import { getSaveResumes } from "../api";

// import { useQuery } from "react-query";
// import useTemplates from "../hooks/useTemplates";
// import useUser from "../hooks/useUser";
// import { getSaveResumes } from "../api";

// const UserProfile = () => {
//   const { data: user } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");
//   const navigate = useNavigate();
//   const {
//     data: templates,
//     isLoading: temp_isLoading,
//     isError: temp_isError,
//   } = useTemplates();

// const {data : savedResumes}= useQuery(["savedResumes"], ()=>
// getSaveResumes(user?.uid)
// )

//   // useEffect(() => {
//   //   if (!user) {
//   //     navigate("/auth", { replace: true });
//   //   }
//   // },[]);

// if(temp_isLoading){
//   return <MainSpinner/>;
// }

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12 ">
//       <div className="w-full h-72 bg-blue-50">
//         <img src="" className="w-full h-full object-cover" />

//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <React.Fragment>
//               <img
//                 src={user?.photoURL}
//                 className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//                 alt=""
//                 referrerPolicy="no-referrer"
//                 loading="lazy"
//               />
//             </React.Fragment>
//           ) : (
//             <React.Fragment>
//               <img
//                 src={
//                   "https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//                 }
//                 className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//                 alt=""
//                 referrerPolicy="no-referrer"
//                 loading="lazy"
//               />
//             </React.Fragment>
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>
//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" &&
//                 "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <React.Fragment>
//                 {user?.Collections?.length > 0 && user?.Collections ? (
//                   <RenderATemplate
//                     templates={templates?.filter((temp) =>
//                       user?.Collections?.includes(temp?._id)
//                     )}
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">

//                     <img src={NoData}
//                     className="w-32 h-auto object-contain"
//                     alt="" />
//                   </div>
//                 )}
//               </React.Fragment>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   return (
//     <React.Fragment>
//       {templates && templates.length > 0 && (
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
//       )}
//     </React.Fragment>
//   );
// };
// export default UserProfile;

// import React, { useState } from "react";
// import useUser from "../hooks/useUser";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import { NoData } from "../assets-20240903T162903Z-001/assets";
// import { useQuery } from "@tanstack/react-query";
// import { getSaveResumes } from "../api";

// const UserProfile = () => {
//   const { data: user } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");
//   const navigate = useNavigate();
//   const {
//     data: templates,
//     isLoading: temp_isLoading,
//     isError: temp_isError,
//   } = useTemplates();

//   // Fetch saved resumes using React Query v5
//   const { data: savedResumes } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid, // Prevent query execution if user is not defined
//   });

//   if (temp_isLoading) {
//     return <MainSpinner />;
//   }

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12 ">
//       <div className="w-full h-72 bg-blue-50">
//         <img src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg" className="w-full h-full object-cover" alt="Cover" />

//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt=""
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src={
//                 "https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               }
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt=""
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>
//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" &&
//                 "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <React.Fragment>
//                 {user?.Collections?.length > 0 ? (
//                   <RenderATemplate
//                     templates={templates?.filter((temp) =>
//                       user?.Collections?.includes(temp?._id)
//                     )}
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </React.Fragment>
//             )}
//             {activeTab === "resumes" && (
//               <React.Fragment>
//                 {savedResumes?.length > 0 && savedResumes ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </React.Fragment>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   return (
//     <React.Fragment>
//       {templates && templates.length > 0 && (
//         <React.Fragment>
//           <AnimatePresence>
//             {templates?.map((template, index) => (
//               <TemplateDesignPin
//                 key={template?._id}
//                 data={template}
//                 index={index}
//               />
//             ))}
//           </AnimatePresence>
//         </React.Fragment>
//       )}
//     </React.Fragment>
//   );
// };

// export default UserProfile;

// import React, { useState } from "react";
// import useUser from "../hooks/useUser";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import { NoData } from "../assets-20240903T162903Z-001/assets";
// import { useQuery } from "@tanstack/react-query";
// import { getSaveResumes } from "../api";

// const UserProfile = () => {
//   const { data: user } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");
//   const navigate = useNavigate();
//   const { data: templates, isLoading: temp_isLoading } = useTemplates();

//   // Fetch saved resumes using React Query v5
//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid, // Prevent query execution if user is not defined
//   });

//   if (temp_isLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12 ">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />

//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" &&
//                 "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <React.Fragment>
//                 {user?.Collections?.length > 0 ? (
//                   <RenderATemplate
//                     templates={templates?.filter((temp) =>
//                       user?.Collections?.includes(temp?._id)
//                     )}
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </React.Fragment>
//             )}
//             {activeTab === "Resumes" && (
//               <React.Fragment>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </React.Fragment>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   return (
//     <React.Fragment>
//       {templates && templates.length > 0 && (
//         <React.Fragment>
//           <AnimatePresence>
//             {templates?.map((template, index) => (
//               <TemplateDesignPin
//                 key={template?._id}
//                 data={template}
//                 index={index}
//               />
//             ))}
//           </AnimatePresence>
//         </React.Fragment>
//       )}
//     </React.Fragment>
//   );
// };

// export default UserProfile;











// import React, { useState } from "react";
// import useUser from "../hooks/useUser";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import { NoData } from "../assets-20240903T162903Z-001/assets";
// import { useQuery } from "@tanstack/react-query";
// import { getSaveResumes } from "../api";

// const UserProfile = () => {
//   const { data: user } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");
//   const navigate = useNavigate();
//   const { data: templates, isLoading: temp_isLoading } = useTemplates();

//   // Fetch saved resumes using React Query v5
//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid, // Prevent query execution if user is not defined
//   });

//   console.log("User Collections: ", user?.Collections);
//   console.log("Templates: ", templates);

//   if (temp_isLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12 ">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />

//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <React.Fragment>
//                 {user?.Collections?.length > 0 ? (
//                   <RenderATemplate
//                     templates={templates?.filter((temp) =>
//                       user?.Collections?.includes(temp?._id)
//                     )}
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </React.Fragment>
//             )}
//             {activeTab === "Resumes" && (
//               <React.Fragment>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </React.Fragment>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   console.log("Templates in RenderATemplate: ", templates);
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
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </React.Fragment>
//   );
// };

// export default UserProfile;



// import React, { useState } from "react";
// import useUser from "../hooks/useUser";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import { NoData } from "../assets-20240903T162903Z-001/assets";
// import { useQuery } from "@tanstack/react-query";
// import { getSaveResumes } from "../api";

// const UserProfile = () => {
//   const { data: user } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");
//   const navigate = useNavigate();
//   const { data: templates, isLoading: temp_isLoading } = useTemplates();

//   // Fetch saved resumes using React Query v5
//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid, // Prevent query execution if user is not defined
//   });

//   console.log("User Collections: ", user?.Collections || []);
//   console.log("Templates: ", templates);

//   if (temp_isLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   // Default to empty array if user?.Collections is undefined
//   const userCollections = user?.Collections || [];

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12 ">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />

//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <React.Fragment>
//                 {userCollections.length > 0 ? (
//                   <RenderATemplate
//                     templates={templates?.filter((temp) =>
//                       userCollections.includes(temp?._id)
//                     )}
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </React.Fragment>
//             )}
//             {activeTab === "Resumes" && (
//               <React.Fragment>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </React.Fragment>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   console.log("Templates in RenderATemplate: ", templates);
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
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </React.Fragment>
//   );
// };

// export default UserProfile;




// // UserProfile.jsx
// import React, { useState } from "react";
// import useUser from "../hooks/useUser";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { useNavigate } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import { NoData } from "../assets-20240903T162903Z-001/assets";
// import { useQuery } from "@tanstack/react-query";
// import { getSaveResumes } from "../api";

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, error: userError } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");
//   const navigate = useNavigate();
//   const { data: templates, isLoading: temp_isLoading } = useTemplates();

//   // Fetch saved resumes using React Query v5
//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid, // Prevent query execution if user is not defined
//   });

//   console.log("User Data: ", user);
//   console.log("User Collections: ", user?.collections);
//   console.log("Templates: ", templates);

//   if (userLoading || temp_isLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//   }

//   // Default to empty array if user?.collections is undefined
//   const userCollections = user?.collections || [];

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12 ">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />

//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <React.Fragment>
//                 {userCollections.length > 0 ? (
//                   <RenderATemplate
//                     templates={templates?.filter((temp) =>
//                       userCollections.includes(temp?._id)
//                     )}
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </React.Fragment>
//             )}
//             {activeTab === "Resumes" && (
//               <React.Fragment>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </React.Fragment>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   console.log("Templates in RenderATemplate: ", templates);
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
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </React.Fragment>
//   );
// };

// export default UserProfile;
// UserProfile.jsx
// import React, { useState, useEffect } from "react";
// import useUser from "../hooks/useUser";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { NoData } from "../assets-20240903T162903Z-001/assets";
// import { useQuery } from "@tanstack/react-query";
// import { getSaveResumes } from "../api";
// import { AnimatePresence } from "framer-motion";

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, error: userError } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");

//   const { data: templates, isLoading: temp_isLoading } = useTemplates();

//   // Fetch saved resumes using React Query v5
//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid, // Prevent query execution if user is not defined
//   });

//   console.log("User Data: ", user);
//   console.log("User Collections: ", user?.collections); // Check if user?.collections is undefined
//   console.log("Templates: ", templates);

//   if (userLoading || temp_isLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//   }

//   // Default to empty array if user?.collections is undefined
//   const userCollections = user?.collections || [];

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12 ">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <React.Fragment>
//                 {userCollections.length > 0 ? (
//                   <RenderATemplate
//                     templates={templates?.filter((temp) =>
//                       userCollections.includes(temp?._id)
//                     )}
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </React.Fragment>
//             )}
//             {activeTab === "Resumes" && (
//               <React.Fragment>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </React.Fragment>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates }) => {
//   console.log("Templates in RenderATemplate: ", templates);
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
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </React.Fragment>
//   );
// };

// export default UserProfile;





// import React, { useState } from "react";
// import useUser from "../hooks/useUser";
// import useTemplates from "../hooks/useTemplates";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import { NoData } from "../assets-20240903T162903Z-001/assets";
// import { useQuery } from "@tanstack/react-query";
// import { getSaveResumes, addToCollection, addToFavourites } from "../api";
// import { AnimatePresence } from "framer-motion";

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, error: userError, refetch: userRefetch } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");

//   const { data: templates, isLoading: temp_isLoading, refetch: refetchTemplates } = useTemplates();

//   // Fetch saved resumes using React Query v5
//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid, // Prevent query execution if user is not defined
//   });

//   // Logging to ensure data is correctly fetched
//   console.log("User Data: ", user);
//   console.log("User Collections: ", user?.collections); // Check if user?.collections is undefined
//   console.log("Templates: ", templates);

//   if (userLoading || temp_isLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//   }

//   // Default to empty array if user?.collections is undefined
//   const userCollections = user?.collections || [];

//   const handleAddToCollection = async (template) => {
//     console.log("Adding to collection:", user, template);
//     await addToCollection(user, template);
//     userRefetch(); // Refetch to get updated user data
//     refetchTemplates(); // Refresh the templates list
//   };

//   const handleAddToFavourites = async (template) => {
//     console.log("Adding to favourites:", user, template);
//     await addToFavourites(user, template);
//     refetchTemplates(); // Refresh templates list
//     userRefetch(); // Refresh user data
//   };

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12 ">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <React.Fragment>
//                 {userCollections.length > 0 ? (
//                   <RenderATemplate
//                     templates={templates?.filter((temp) =>
//                       userCollections.includes(temp?._id)
//                     )}
//                     handleAddToCollection={handleAddToCollection}
//                     handleAddToFavourites={handleAddToFavourites}
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </React.Fragment>
//             )}
//             {activeTab === "Resumes" && (
//               <React.Fragment>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate
//                     templates={savedResumes}
//                     handleAddToCollection={handleAddToCollection}
//                     handleAddToFavourites={handleAddToFavourites}
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </React.Fragment>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates, handleAddToCollection, handleAddToFavourites }) => {
//   console.log("Templates in RenderATemplate: ", templates);

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
//                 handleAddToCollection={() => handleAddToCollection(template)}
//                 handleAddToFavourites={() => handleAddToFavourites(template)}
//               />
//             ))}
//           </AnimatePresence>
//         </React.Fragment>
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </React.Fragment>
//   );
// };

// export default UserProfile;



// import React, { useState } from "react";
// import useUser from "../hooks/useUser";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { NoData } from "../assets-20240903T162903Z-001/assets";
// import { useQuery } from "@tanstack/react-query";
// import { getSaveResumes } from "../api";
// import { addToCollection } from "../api"; // Ensure you import your API function
// import { AnimatePresence } from "framer-motion";

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, error: userError } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");

//   const { data: templates, isLoading: tempIsLoading } = useTemplates();

//   // Fetch saved resumes using React Query v5
//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid, // Prevent query execution if user is not defined
//   });

//   console.log("User Data: ", user);
//   console.log("User Collections: ", user?.collections); // Check if user?.collections is undefined
//   console.log("Templates: ", templates);

//   if (userLoading || tempIsLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//   }

//   // Default to empty array if user?.collections is undefined
//   const userCollections = user?.collections || [];

//   // Handle collection addition/removal
//   const handleCollectionToggle = async (template) => {
//     try {
//       await addToCollection(user, template);
//       // Refetch user data or update state to reflect changes
//     } catch (error) {
//       console.error("Error updating collection: ", error);
//     }
//   };

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <>
//                 {userCollections.length > 0 ? (
//                   <RenderATemplate
//                     templates={templates?.filter((temp) =>
//                       userCollections.includes(temp?._id)
//                     )}
//                     onCollectionToggle={handleCollectionToggle} // Pass the handler
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//             {activeTab === "Resumes" && (
//               <>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates, onCollectionToggle }) => {
//   console.log("Templates in RenderATemplate: ", templates);
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template?._id}
//               data={template}
//               index={index}
//               onCollectionToggle={onCollectionToggle} // Pass the handler
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default UserProfile;







// import React, { useState } from "react";
// import useUser from "../hooks/useUser";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { NoData } from "../assets-20240903T162903Z-001/assets";
// import { useQuery } from "@tanstack/react-query";
// import { getSaveResumes } from "../api";
// import { addToCollection } from "../api"; // Ensure you import your API function
// import { AnimatePresence } from "framer-motion";

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, error: userError, refetch } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");

//   const { data: templates, isLoading: tempIsLoading } = useTemplates();

//   // Fetch saved resumes using React Query v5
//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid, // Prevent query execution if user is not defined
//   });

//   console.log("User Data: ", user);
//   console.log("User Collections: ", user?.collections); // Check if user?.collections is undefined
//   console.log("Templates: ", templates);

//   if (userLoading || tempIsLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//   }

//   // Default to empty array if user?.collections is undefined
//   const userCollections = user?.collections || [];

//   // Handle collection addition/removal
//   const handleCollectionToggle = async (template) => {
//     try {
//       await addToCollection(user, template);
//       refetch(); // Refetch user data or update state to reflect changes
//     } catch (error) {
//       console.error("Error updating collection: ", error);
//     }
//   };

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <>
//                 {userCollections.length > 0 ? (
//                   <RenderATemplate
//                     templates={templates?.filter((temp) =>
//                       userCollections.includes(temp?._id)
//                     )}
//                     onCollectionToggle={handleCollectionToggle} // Pass the handler
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//             {activeTab === "Resumes" && (
//               <>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates, onCollectionToggle }) => {
//   console.log("Templates in RenderATemplate: ", templates);
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template?._id}
//               data={template}
//               index={index}
//               onCollectionToggle={onCollectionToggle} // Pass the handler
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default UserProfile;










// import React, { useState, useEffect } from "react";
// import useUser from "../hooks/useUser";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { NoData } from "../assets-20240903T162903Z-001/assets";
// import { useQuery } from "@tanstack/react-query";
// import { getSaveResumes, addToCollection } from "../api";
// import { AnimatePresence } from "framer-motion";

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, isError: userError, refetch } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");

//   const { data: templates, isLoading: tempIsLoading } = useTemplates();

//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid,
//   });

//   console.log("User Data: ", user);
//   console.log("User Collections: ", user?.collections); // Check if user?.collections is undefined
//   console.log("Templates: ", templates);

//   if (userLoading || tempIsLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//   }

//   // Default to empty array if user?.collections is undefined
//   const userCollections = user?.collections || [];

//   const handleCollectionToggle = async (template) => {
//     try {
//       await addToCollection(user, template);
//       refetch(); // Refetch user data to reflect changes
//     } catch (error) {
//       console.error("Error updating collection: ", error);
//     }
//   };

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <>
//                 {userCollections.length > 0 ? (
//                   <RenderATemplate
//                     templates={templates?.filter((temp) =>
//                       userCollections.includes(temp?._id)
//                     )}
//                     onCollectionToggle={handleCollectionToggle} // Pass the handler
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//             {activeTab === "Resumes" && (
//               <>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates, onCollectionToggle }) => {
//   console.log("Templates in RenderATemplate: ", templates);
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template?._id}
//               data={template}
//               index={index}
//               onCollectionToggle={onCollectionToggle} // Pass the handler
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default UserProfile;



// import React, { useState } from 'react';
// import useUser from '../hooks/useUser';
// import { MainSpinner, TemplateDesignPin } from '../components';
// import useTemplates from '../hooks/useTemplates';
// import { NoData } from '../assets-20240903T162903Z-001/assets';
// import { useQuery } from '@tanstack/react-query';
// import { getSaveResumes, addToCollection } from '../api'; // Ensure this import is correct
// import { AnimatePresence } from 'framer-motion';

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, isError: userError, refetch } = useUser();
//   const [activeTab, setActiveTab] = useState('Collections');

//   const { data: templates, isLoading: tempIsLoading } = useTemplates();
//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ['savedResumes', user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid,
//   });

//   if (userLoading || tempIsLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error('Error fetching user data: ', userError);
//   }

//   const userCollections = user?.collections || [];

//   const handleCollectionToggle = async (template) => {
//     try {
//       await addToCollection(user, template);
//       refetch(); // Refetch user data to reflect changes
//     } catch (error) {
//       console.error('Error updating collection: ', error);
//       // Optionally show an error message to the user
//     }
//   };

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab('Collections')}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === 'Collections' && 'bg-white shadow-md text-blue-600'
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab('Resumes')}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === 'Resumes' && 'bg-white shadow-md text-blue-600'
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === 'Collections' && (
//               <>
//                 {userCollections.length > 0 ? (
//                   <RenderATemplate
//                     templates={templates?.filter((temp) =>
//                       userCollections.includes(temp?._id)
//                     )}
//                     onCollectionToggle={handleCollectionToggle} // Pass the handler
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//             {activeTab === 'Resumes' && (
//               <>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates, onCollectionToggle }) => {
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template?._id}
//               data={template}
//               index={index}
//               onCollectionToggle={onCollectionToggle} // Pass the handler
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default UserProfile;





// import React, { useState, useEffect } from "react";
// import useUser from "../hooks/useUser";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { NoData } from "../assets-20240903T162903Z-001/assets";
// import { useQuery } from "@tanstack/react-query";
// import { getSaveResumes, addToCollection } from "../api";
// import { AnimatePresence } from "framer-motion";

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, isError: userError, refetch } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");

//   const { data: templates, isLoading: tempIsLoading } = useTemplates();

//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid,
//   });

//   if (userLoading || tempIsLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//   }

//   // Default to empty array if user?.collections is undefined
//   const userCollections = user?.collections || [];

//   // Ensure userCollections contains the correct IDs
//   console.log("User Collections IDs: ", userCollections);

//   // Filter templates based on user collections
//   const filteredTemplates = templates?.filter(template =>
//     userCollections.includes(template?._id)
//   ) || [];

//   console.log("Filtered Templates: ", filteredTemplates);

//   const handleCollectionToggle = async (template) => {
//     try {
//       await addToCollection(user, template);
//       refetch(); // Refetch user data to reflect changes
//     } catch (error) {
//       console.error("Error updating collection: ", error);
//     }
//   };

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <>
//                 {filteredTemplates.length > 0 ? (
//                   <RenderATemplate
//                     templates={filteredTemplates}
//                     onCollectionToggle={handleCollectionToggle}
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//             {activeTab === "Resumes" && (
//               <>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates, onCollectionToggle }) => {
//   console.log("Templates in RenderATemplate: ", templates);
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template?._id}
//               data={template}
//               index={index}
//               onCollectionToggle={onCollectionToggle}
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default UserProfile;







// import React, { useState, useEffect } from "react";
// import useUser from "../hooks/useUser";
// import { MainSpinner, TemplateDesignPin } from "../components";
// import useTemplates from "../hooks/useTemplates";
// import { NoData } from "../assets-20240903T162903Z-001/assets";
// import { useQuery } from "@tanstack/react-query";
// import { getSaveResumes, addToCollection } from "../api";
// import { AnimatePresence } from "framer-motion";

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, isError: userError, refetch } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");

//   const { data: templates, isLoading: tempIsLoading } = useTemplates();

//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid,
//   });

//   if (userLoading || tempIsLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//   }

//   // Default to empty array if user?.collections is undefined
//   const userCollections = user?.collections || [];
  
//   console.log("User Collections Data from Firestore: ", userCollections);

//   // Filter templates based on user collections
//   const filteredTemplates = templates?.filter(template =>
//     userCollections.includes(template?._id)
//   ) || [];

//   console.log("Filtered Templates: ", filteredTemplates);

//   const handleCollectionToggle = async (template) => {
//     try {
//       await addToCollection(user, template);
//       refetch(); // Refetch user data to reflect changes
//     } catch (error) {
//       console.error("Error updating collection: ", error);
//     }
//   };

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <>
//                 {filteredTemplates.length > 0 ? (
//                   <RenderATemplate
//                     templates={filteredTemplates}
//                     onCollectionToggle={handleCollectionToggle}
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//             {activeTab === "Resumes" && (
//               <>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates, onCollectionToggle }) => {
//   console.log("Templates in RenderATemplate: ", templates);
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template?._id}
//               data={template}
//               index={index}
//               onCollectionToggle={onCollectionToggle}
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default UserProfile;












// import { firestore } from '../firebase'; // Adjust the path as necessary

// import { useState } from 'react';
// import MainSpinner from '../components/MainSpinner'; // Adjust the path as necessary
// import { addToCollection } from '../utils/collectionUtils'; // Adjust the path as necessary
// import NoData from '../assets/NoData.png'; // Adjust the path as necessary
// import TemplateDesignPin from '../components/TemplateDesignPin'; // Adjust the path as necessary

// import { AnimatePresence } from 'framer-motion';


// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, isError: userError, refetch } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");
//   const { data: templates, isLoading: tempIsLoading } = useTemplates();

//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid,
//   });

//   console.log("User Data: ", user);
//   console.log("User Collections Data from Firestore: ", user?.collections); // Debugging line
//   console.log("Templates: ", templates);

//   if (userLoading || tempIsLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//   }

//   const userCollections = user?.collections || [];
//   const filteredTemplates = templates?.filter(template => userCollections.includes(template._id)) || [];

//   console.log("Filtered Templates: ", filteredTemplates);

//   const handleCollectionToggle = async (template) => {
//     try {
//       await addToCollection(user, template);
//       refetch(); // Refetch user data to reflect changes
//     } catch (error) {
//       console.error("Error updating collection: ", error);
//     }
//   };

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <>
//                 {filteredTemplates.length > 0 ? (
//                   <RenderATemplate
//                     templates={filteredTemplates}
//                     onCollectionToggle={handleCollectionToggle} // Pass the handler
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//             {activeTab === "Resumes" && (
//               <>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates, onCollectionToggle }) => {
//   console.log("Templates in RenderATemplate: ", templates);
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template?._id}
//               data={template}
//               index={index}
//               onCollectionToggle={onCollectionToggle} // Pass the handler
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default UserProfile;




// import { firestore } from '../firebase'; // Check if the file path is correct

// import React, { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import MainSpinner from '../components/MainSpinner'; // Adjust path as necessary
// import { addToCollection } from '../utils/collectionUtils'; // Adjust path as necessary
// import NoData from '../assets-20240903T162903Z-001/assets/img/nodata.gif'; 
// import TemplateDesignPin from '../components/TemplateDesignPin'; // Adjust path as necessary
// // import useUser from '../hooks/useUser';
// // import useTemplates from '../hooks/useTemplates';
// // import { useQuery } from 'react-query';
// // import { getSaveResumes } from '../utils/resumeUtils'; // Adjust path as necessary

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, isError: userError, refetch } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");
//   const { data: templates, isLoading: tempIsLoading } = useTemplates();

//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid,
//   });

//   console.log("User Data: ", user);
//   console.log("User Collections Data from Firestore: ", user?.collections); // Debugging line
//   console.log("Templates: ", templates);

//   if (userLoading || tempIsLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//   }

//   const userCollections = user?.collections || [];
//   const filteredTemplates = templates?.filter(template => userCollections.includes(template._id)) || [];

//   console.log("Filtered Templates: ", filteredTemplates);

//   const handleCollectionToggle = async (template) => {
//     try {
//       await addToCollection(user, template);
//       refetch(); // Refetch user data to reflect changes
//     } catch (error) {
//       console.error("Error updating collection: ", error);
//     }
//   };

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <>
//                 {filteredTemplates.length > 0 ? (
//                   <RenderATemplate
//                     templates={filteredTemplates}
//                     onCollectionToggle={handleCollectionToggle} // Pass the handler
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//             {activeTab === "Resumes" && (
//               <>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates, onCollectionToggle }) => {
//   console.log("Templates in RenderATemplate: ", templates);
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template?._id}
//               data={template}
//               index={index}
//               onCollectionToggle={onCollectionToggle} // Pass the handler
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default UserProfile;






// import React, { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import MainSpinner from '../components/MainSpinner'; // Adjust path as necessary
// // import { addToCollection } from '../utils/collectionUtils'; // Adjust path as necessary
// import NoData from '../assets-20240903T162903Z-001/assets/img/nodata.gif'; 
// import TemplateDesignPin from '../components/TemplateDesignPin'; // Adjust path as necessary
// import useUser from '../hooks/useUser'; // Ensure path is correct
// import useTemplates from '../hooks/useTemplates'; // Ensure path is correct
// import { useQuery } from 'react-query'; // Ensure useQuery is imported
// import { addToCollection, getSaveResumes } from '../api';
// // import { getSaveResumes } from '../utils/resumeUtils'; // Ensure path is correct

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, isError: userError, refetch } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");
//   const { data: templates, isLoading: tempIsLoading } = useTemplates();

//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid,
//   });

//   console.log("User Data: ", user);
//   console.log("User Collections Data from Firestore: ", user?.collections); // Debugging line
//   console.log("Templates: ", templates);

//   if (userLoading || tempIsLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//   }

//   const userCollections = user?.collections || [];
//   const filteredTemplates = templates?.filter(template => userCollections.includes(template._id)) || [];

//   console.log("Filtered Templates: ", filteredTemplates);

//   const handleCollectionToggle = async (template) => {
//     try {
//       await addToCollection(user, template);
//       refetch(); // Refetch user data to reflect changes
//     } catch (error) {
//       console.error("Error updating collection: ", error);
//     }
//   };

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <>
//                 {filteredTemplates.length > 0 ? (
//                   <RenderATemplate
//                     templates={filteredTemplates}
//                     onCollectionToggle={handleCollectionToggle} // Pass the handler
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//             {activeTab === "Resumes" && (
//               <>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates, onCollectionToggle }) => {
//   console.log("Templates in RenderATemplate: ", templates);
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template?._id}
//               data={template}
//               index={index}
//               onCollectionToggle={onCollectionToggle} // Pass the handler
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default UserProfile;





// import React, { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import MainSpinner from '../components/MainSpinner'; // Adjust path as necessary
// import NoData from '../assets-20240903T162903Z-001/assets/img/nodata.gif'; 
// import TemplateDesignPin from '../components/TemplateDesignPin'; // Adjust path as necessary
// import useUser from '../hooks/useUser'; // Ensure path is correct
// import useTemplates from '../hooks/useTemplates'; // Ensure path is correct
// // import { useQuery } from 'react-query'; // Ensure useQuery is imported
// import { useQuery } from '@tanstack/react-query'; 
// import { addToCollection, getSaveResumes, getUserTemplates } from '../api'; // Adjust paths as necessary

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, isError: userError, refetch } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");
//   const { data: templates, isLoading: tempIsLoading } = useTemplates();

//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid,
//   });

//   const { data: userTemplates, isLoading: templatesIsLoading } = useQuery({
//     queryKey: ["userTemplates", user?.uid],
//     queryFn: () => getUserTemplates(user?.uid),
//     enabled: !!user?.uid, // Run query only when userId is available
//   });
//   const handleCollectionToggle = async (template) => {
//     try {
//       await addToCollection(user, template);
//       refetch(); // Refetch user data to reflect changes
//     } catch (error) {
//       console.error("Error updating collection: ", error);
//     }
//   };
  
//   console.log("User Data: ", user);
//   console.log("User Collections Data from Firestore: ", user?.collections);
//   console.log("Templates: ", templates);

//   if (userLoading ||templatesIsLoading|| resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//   }

//   const userCollections = user?.collections || [];
//   const filteredTemplates = templates?.filter(template => userCollections.includes(template._id)) || [];

//   console.log("Filtered Templates: ", filteredTemplates);

  

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <>
//                 {filteredTemplates.length > 0 ? (
//                   <RenderATemplate
//                     templates={userTemplates}
//                     onCollectionToggle={handleCollectionToggle} // Pass the handler
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//             {activeTab === "Resumes" && (
//               <>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates, onCollectionToggle }) => {
//   console.log("Templates in RenderATemplate: ", templates);
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template?._id}
//               data={template}
//               index={index}
//               onCollectionToggle={onCollectionToggle} // Pass the handler
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default UserProfile;



// import React, { useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import MainSpinner from "../components/MainSpinner"; // Adjust path as necessary
// import NoData from "../assets-20240903T162903Z-001/assets/img/nodata.gif"; 
// import TemplateDesignPin from "../components/TemplateDesignPin"; // Adjust path as necessary
// import useUser from "../hooks/useUser"; // Ensure path is correct
// import { useQuery } from "@tanstack/react-query";
// import { getUserTemplates } from "../api"; // Adjust path as necessary

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, isError: userError, refetch } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");

//   // Query for user templates
//   const { data: templates, isLoading: templatesIsLoading } = useQuery({
//     queryKey: ["userTemplates", user?.uid],
//     queryFn: () => getUserTemplates(user?.uid),
//     enabled: !!user?.uid, // Fetch only if user is available
//   });

//   if (userLoading || templatesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//   }

//   // Filter templates based on user collections
//   const userCollections = user?.collections || [];
//   const filteredTemplates = templates?.filter(template => userCollections.includes(template._id)) || [];

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50">
//         {/* User profile and navigation code here */}
//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <>
//                 {filteredTemplates.length > 0 ? (
//                   filteredTemplates.map((template, index) => (
//                     <TemplateDesignPin
//                       key={template._id}
//                       data={template}
//                       index={index}
//                     />
//                   ))
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//             {activeTab === "Resumes" && (
//               <>
//                 {/* Code to display saved resumes */}
//               </>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default UserProfile;
// import React, { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import MainSpinner from '../components/MainSpinner'; // Adjust path as necessary
// import NoData from '../assets-20240903T162903Z-001/assets/img/nodata.gif'; 
// import TemplateDesignPin from '../components/TemplateDesignPin'; // Adjust path as necessary
// import useUser from '../hooks/useUser'; // Ensure path is correct
// import useTemplates from '../hooks/useTemplates'; // Ensure path is correct
// import { useQuery } from '@tanstack/react-query'; 
// import { addToCollection, getSaveResumes, getUserTemplates } from '../api'; // Adjust paths as necessary

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, isError: userError, refetch } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");
//   const { data: templates, isLoading: tempIsLoading } = useTemplates();

//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid,
//   });

//   const { data: userTemplates, isLoading: templatesIsLoading } = useQuery({
//     queryKey: ["userTemplates", user?.uid],
//     queryFn: () => getUserTemplates(user?.uid),
//     enabled: !!user?.uid, // Run query only when userId is available
//   });

//   const handleCollectionToggle = async (template) => {
//     try {
//       await addToCollection(user, template);
//       refetch(); // Refetch user data to reflect changes
//     } catch (error) {
//       console.error("Error updating collection: ", error);
//     }
//   };

//   console.log("User Data: ", user);
//   console.log("User Collections Data from Firestore: ", user?.collections);
//   console.log("Templates: ", templates);

//   if (userLoading || tempIsLoading || resumesIsLoading || templatesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//   }

//   const userCollections = user?.collections || [];
//   const filteredTemplates = templates?.filter(template => userCollections.includes(template._id)) || [];

//   console.log("Filtered Templates: ", filteredTemplates);

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" ? "bg-white shadow-md text-blue-600" : ""
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" ? "bg-white shadow-md text-blue-600" : ""
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <>
//                 {filteredTemplates.length > 0 ? (
//                   <RenderATemplate
//                     templates={filteredTemplates}
//                     onCollectionToggle={handleCollectionToggle} // Pass the handler
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//             {activeTab === "Resumes" && (
//               <>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates, onCollectionToggle }) => {
//   console.log("Templates in RenderATemplate: ", templates);
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template?._id}
//               data={template}
//               index={index}
//               onCollectionToggle={onCollectionToggle} // Pass the handler
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// // export default UserProfile;
// import React, { useEffect, useState } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../config/firebase.config'; // Import your Firestore instance
// import TemplatesData from '../utils/helpers'; // Your templates data

// const UserProfile = ({ user }) => {
//   const [userCollections, setUserCollections] = useState([]);
//   const [templates, setTemplates] = useState([]);
  
//   // Function to fetch user collections from Firestore
//   const fetchUserCollections = async (userId) => {
//     try {
//       const userRef = doc(db, 'users', userId);
//       const userDoc = await getDoc(userRef);

//       if (userDoc.exists()) {
//         const userData = userDoc.data();
//         const collections = userData.collections || [];
//         console.log("User Collections Data from Firestore: ", collections);
//         return collections;
//       } else {
//         console.error("No user data found!");
//         return [];
//       }
//     } catch (error) {
//       console.error("Error fetching user collections: ", error);
//       return [];
//     }
//   };

//   // Fetch user collections and filter templates based on collection data
//   useEffect(() => {
//     const fetchCollections = async () => {
//       if (user) {
//         const collectionsData = await fetchUserCollections(user.uid);
//         setUserCollections(collectionsData);

//         // Filter templates based on the user's collections
//         const filteredTemplates = TemplatesData.filter(template => 
//           collectionsData.includes(template._id)
//         );

//         console.log("Filtered Templates: ", filteredTemplates);
//         setTemplates(filteredTemplates);
//       }
//     };

//     fetchCollections();
//   }, [user]);

//   return (
//     <div>
//       <h2>User Profile</h2>
//       <p>{user?.displayName}</p>
//       <p>{user?.email}</p>
//       <div>
//         <h3>Your Templates</h3>
//         {templates.length > 0 ? (
//           templates.map((template) => (
//             <div key={template._id}>
//               <h4>{template.name}</h4>
//               <img src={template.imageUrl} alt={template.name} />
//             </div>
//           ))
//         ) : (
//           <p>No templates in your collection.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserProfile;


// import React, { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import MainSpinner from '../components/MainSpinner'; // Adjust path as necessary
// import NoData from '../assets-20240903T162903Z-001/assets/img/nodata.gif'; 
// import TemplateDesignPin from '../components/TemplateDesignPin'; // Adjust path as necessary
// import useUser from '../hooks/useUser'; // Ensure path is correct
// import useTemplates from '../hooks/useTemplates'; // Ensure path is correct
// import { useQuery } from '@tanstack/react-query'; 
// import { addToCollection, getSaveResumes, getUserTemplates } from '../api'; // Adjust paths as necessary

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, isError: userError, refetch } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");

//   // Fetch templates from the user's collections subcollection
//   const { data: userTemplates, isLoading: templatesIsLoading } = useQuery({
//     queryKey: ["userTemplates", user?.uid],
//     queryFn: () => getUserTemplates(user?.uid), // Ensure this function fetches from collections subcollection
//     enabled: !!user?.uid, // Run query only when userId is available
//   });

//   // Fetch saved resumes
//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid,
//   });

//   const handleCollectionToggle = async (template) => {
//     try {
//       await addToCollection(user, template);
//       refetch(); // Refetch user data to reflect changes
//     } catch (error) {
//       console.error("Error updating collection: ", error);
//     }
//   };

//   console.log("User Data: ", user);
//   console.log("User Collections Data from Firestore: ", user?.collections);
//   console.log("Templates: ", userTemplates);

//   if (userLoading || templatesIsLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//   }

//   const userCollections = user?.collections || [];
//   const filteredTemplates = userTemplates?.filter(template => userCollections.includes(template._id)) || [];

//   console.log("Filtered Templates: ", filteredTemplates);

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={"px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer"}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={"px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer"}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <>
//                 {filteredTemplates.length > 0 ? (
//                   <RenderATemplate
//                     templates={filteredTemplates} // Pass filtered templates
//                     onCollectionToggle={handleCollectionToggle} // Pass the handler
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//             {activeTab === "Resumes" && (
//               <>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates, onCollectionToggle }) => {
//   console.log("Templates in RenderATemplate: ", templates);
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template?._id}
//               data={template}
//               index={index}
//               onCollectionToggle={onCollectionToggle} // Pass the handler
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default UserProfile;






// import React, { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import MainSpinner from '../components/MainSpinner'; // Adjust path as necessary
// import NoData from '../assets-20240903T162903Z-001/assets/img/nodata.gif'; 
// import TemplateDesignPin from '../components/TemplateDesignPin'; // Adjust path as necessary
// import useUser from '../hooks/useUser'; // Ensure path is correct
// import { useQuery } from '@tanstack/react-query'; 
// import { addToCollection, getSaveResumes, getUserTemplates } from '../api'; // Adjust paths as necessary

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, isError: userError, refetch } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");

//   // Fetch templates from the user's collections subcollection
//   const { data: userTemplates, isLoading: templatesIsLoading } = useQuery({
//     queryKey: ["userTemplates", user?.uid],
//     queryFn: () => getUserTemplates(user?.uid), // Ensure this function fetches from collections subcollection
//     enabled: !!user?.uid, // Run query only when userId is available
//   });

//   // Fetch saved resumes
//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid,
//   });

//   // Debugging logs
//   console.log("User Data: ", user); // Check user data after fetching
//   console.log("User Collections Data from Firestore: ", user?.collections); // Verify user collections

//   const handleCollectionToggle = async (template) => {
//     try {
//       await addToCollection(user, template);
//       refetch(); // Refetch user data to reflect changes
//     } catch (error) {
//       console.error("Error updating collection: ", error);
//     }
//   };

//   if (userLoading || templatesIsLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//   }

//   const userCollections = user?.collections || [];
//   const filteredTemplates = userTemplates?.filter(template => userCollections.includes(template._id)) || [];

//   console.log("Templates: ", userTemplates); // Check fetched templates
//   console.log("Filtered Templates: ", filteredTemplates); // Verify filtered templates

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={"px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer"}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={"px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer"}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <>
//                 {filteredTemplates.length > 0 ? (
//                   <RenderATemplate
//                     templates={filteredTemplates} // Pass filtered templates
//                     onCollectionToggle={handleCollectionToggle} // Pass the handler
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//             {activeTab === "Resumes" && (
//               <>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates, onCollectionToggle }) => {
//   console.log("Templates in RenderATemplate: ", templates); // Log templates in RenderATemplate
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template?._id}
//               data={template}
//               index={index}
//               onCollectionToggle={onCollectionToggle} // Pass the handler
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// // export default UserProfile;
// import React, { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import MainSpinner from '../components/MainSpinner'; // Adjust path as necessary
// import NoData from '../assets-20240903T162903Z-001/assets/img/nodata.gif'; 
// import TemplateDesignPin from '../components/TemplateDesignPin'; // Adjust path as necessary
// import useUser from '../hooks/useUser'; // Ensure path is correct
// import { useQuery } from '@tanstack/react-query'; 
// import { addToCollection, getSaveResumes, getUserTemplates } from '../api'; // Adjust paths as necessary

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, isError: userError, refetch } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");

//   // Fetch templates from the user's collections subcollection
//   const { data: userTemplates, isLoading: templatesIsLoading } = useQuery({
//     queryKey: ["userTemplates", user?.uid],
//     queryFn: () => getUserTemplates(user?.uid),
//     enabled: !!user?.uid, // Run query only when userId is available
//   });

//   // Fetch saved resumes
//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid,
//   });

//   // Debugging logs
//   console.log("User Data: ", user); // Check user data after fetching
//   console.log("User Collections Data from Firestore: ", userTemplates); // Verify user collections

//   const handleCollectionToggle = async (template) => {
//     try {
//       await addToCollection(user, template);
//       refetch(); // Refetch user data to reflect changes
//     } catch (error) {
//       console.error("Error updating collection: ", error);
//     }
//   };

//   if (userLoading || templatesIsLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//     return <div className="text-red-500">Error loading user data.</div>;
//   }

//   // Since getUserTemplates fetches the templates in collections, we can use them directly
//   const filteredTemplates = userTemplates || [];

//   console.log("Templates: ", userTemplates); // Check fetched templates
//   console.log("Filtered Templates: ", filteredTemplates); // Verify filtered templates

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50 relative">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="absolute inset-0 bg-black opacity-20"></div> {/* Optional overlay */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>
//       </div>

//       <div className="flex items-center justify-center mt-12">
//         <button
//           className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer ${
//             activeTab === "Collections" ? "bg-white shadow-md text-blue-600" : "text-txtPrimary group-hover:text-blue-600"
//           }`}
//           onClick={() => setActiveTab("Collections")}
//         >
//           <p className="text-base">Collections</p>
//         </button>
//         <button
//           className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer ml-4 ${
//             activeTab === "Resumes" ? "bg-white shadow-md text-blue-600" : "text-txtPrimary group-hover:text-blue-600"
//           }`}
//           onClick={() => setActiveTab("Resumes")}
//         >
//           <p className="text-base">My Resumes</p>
//         </button>
//       </div>

//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//         <AnimatePresence>
//           {activeTab === "Collections" && (
//             <>
//               {filteredTemplates.length > 0 ? (
//                 <RenderATemplate
//                   templates={filteredTemplates} // Pass filtered templates
//                   onCollectionToggle={handleCollectionToggle} // Pass the handler
//                 />
//               ) : (
//                 <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                   <img
//                     src={NoData}
//                     className="w-32 h-auto object-contain"
//                     alt="No Data"
//                   />
//                   <p className="text-gray-500">No templates in your collections.</p>
//                 </div>
//               )}
//             </>
//           )}
//           {activeTab === "Resumes" && (
//             <>
//               {savedResumes?.length > 0 ? (
//                 <RenderATemplate templates={savedResumes} />
//               ) : (
//                 <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                   <img
//                     src={NoData}
//                     className="w-32 h-auto object-contain"
//                     alt="No Data"
//                   />
//                   <p className="text-gray-500">No resumes saved.</p>
//                 </div>
//               )}
//             </>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates, onCollectionToggle }) => {
//   console.log("Templates in RenderATemplate: ", templates); // Log templates in RenderATemplate
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template._id} // Use _id directly as it's now ensured to be present
//               data={template}
//               index={index}
//               onCollectionToggle={onCollectionToggle} // Pass the handler if needed
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//           <p className="text-gray-500">No templates available.</p>
//         </div>
//       )}
//     </>
//   );
// };

// // export default UserProfile;
// import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import MainSpinner from '../components/MainSpinner'; // Adjust path as necessary
// import NoData from '../assets-20240903T162903Z-001/assets/img/nodata.gif'; // Adjust path as necessary
// import TemplateDesignPin from '../components/TemplateDesignPin'; // Adjust path as necessary
// import { getUserTemplates } from '../api'; // Adjust path as necessary

// const UserProfile = () => {
//   const [activeTab, setActiveTab] = useState("Collections");

//   // Fetch templates directly from the 'templates' collection
//   const { data: templates, isLoading: templatesIsLoading } = useQuery({
//     queryKey: ["templates"],
//     queryFn: getUserTemplates,
//   });

//   if (templatesIsLoading) {
//     return <MainSpinner />;
//   }

//   const filteredTemplates = templates || [];

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50 relative">
//         {/* User profile header */}
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
//           <img
//             src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//             className="w-24 h-24 rounded-full border-2 border-white shadow-md"
//             alt="Profile"
//           />
//           <p className="text-2xl text-txtDark">User Name</p>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex items-center justify-center mt-12">
//         <button
//           className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer ${
//             activeTab === "Collections" ? "bg-white shadow-md text-blue-600" : "text-txtPrimary group-hover:text-blue-600"
//           }`}
//           onClick={() => setActiveTab("Collections")}
//         >
//           <p className="text-base">Collections</p>
//         </button>
//       </div>

//       {/* Template Grid */}
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//         {activeTab === "Collections" && (
//           filteredTemplates.length > 0 ? (
//             <RenderATemplate templates={filteredTemplates} />
//           ) : (
//             <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//               <img src={NoData} className="w-32 h-auto object-contain" alt="No Data" />
//               <p className="text-gray-500">No templates available.</p>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// // Template Rendering Component
// const RenderATemplate = ({ templates }) => {
//   return (
//     <>
//       {templates.map((template, index) => (
//         <TemplateDesignPin
//           key={template?._id} // Ensure _id is present in the template object
//           data={template}
//           index={index}
//         />
//       ))}
//     </>
//   );
// };

// // export default UserProfile;
// import React, { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import MainSpinner from '../components/MainSpinner';
// import NoData from '../assets-20240903T162903Z-001/assets/img/nodata.gif';  // Adjust path
// import TemplateDesignPin from '../components/TemplateDesignPin';
// import useUser from '../hooks/useUser'; // Ensure path is correct
// import { useQuery } from '@tanstack/react-query'; 
// import { addToCollection, getSaveResumes, getUserTemplates } from '../api'; // Adjust paths as necessary

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, isError: userError, refetch } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");

//   // Fetch templates from the user's collections subcollection
//   const { data: userTemplates, isLoading: templatesIsLoading } = useQuery({
//     queryKey: ["userTemplates", user?.uid],
//     queryFn: () => getUserTemplates(user?.uid),
//     enabled: !!user?.uid, // Run query only when userId is available
//   });

//   // Fetch saved resumes
//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid,
//   });

//   const handleCollectionToggle = async (template) => {
//     try {
//       await addToCollection(user, template); // Add template to collection
//       await refetch(); // Refetch templates to update UI
//     } catch (error) {
//       console.error("Error updating collection: ", error);
//     }
//   };
  




//   if (userLoading || templatesIsLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//     return <div className="text-red-500">Error loading user data.</div>;
//   }

//   const filteredTemplates = userTemplates || [];

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50 relative">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>
//       </div>

//       <div className="flex items-center justify-center mt-12">
//         <button
//           className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer ${
//             activeTab === "Collections" ? "bg-white shadow-md text-blue-600" : "text-txtPrimary group-hover:text-blue-600"
//           }`}
//           onClick={() => setActiveTab("Collections")}
//         >
//           <p className="text-base">Collections</p>
//         </button>
//         <button
//           className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer ml-4 ${
//             activeTab === "Resumes" ? "bg-white shadow-md text-blue-600" : "text-txtPrimary group-hover:text-blue-600"
//           }`}
//           onClick={() => setActiveTab("Resumes")}
//         >
//           <p className="text-base">My Resumes</p>
//         </button>
//       </div>

//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//         <AnimatePresence>
//           {activeTab === "Collections" && (
//             <>
//               {filteredTemplates.length > 0 ? (
//                 <RenderATemplate
//                   templates={filteredTemplates} // Pass filtered templates
//                   onCollectionToggle={handleCollectionToggle} // Pass the handler
//                 />
//               ) : (
//                 <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                   <img
//                     src={NoData}
//                     className="w-32 h-auto object-contain"
//                     alt="No Data"
//                   />
//                   <p className="text-gray-500">No templates in your collections.</p>
//                 </div>
//               )}
//             </>
//           )}
//           {activeTab === "Resumes" && (
//             <>
//               {savedResumes?.length > 0 ? (
//                 <RenderATemplate templates={savedResumes} />
//               ) : (
//                 <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                   <img
//                     src={NoData}
//                     className="w-32 h-auto object-contain"
//                     alt="No Data"
//                   />
//                   <p className="text-gray-500">No resumes saved.</p>
//                 </div>
//               )}
//             </>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
// const RenderATemplate = ({ templates, onCollectionToggle }) => {
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         templates.map((template, index) => (
//           <TemplateDesignPin
//             key={template._id} // Ensure _id or a unique key is available
//             data={template}
//             index={index}
//             onCollectionToggle={onCollectionToggle}
//           />
//         ))
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//           <p className="text-gray-500">No templates available.</p>
//         </div>
//       )}
//     </>
//   );
// };
     


// import React, { useEffect, useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import MainSpinner from '../components/MainSpinner';
// import NoData from '../assets-20240903T162903Z-001/assets/img/nodata.gif';  // Adjust path  
// import TemplateDesignPin from '../components/TemplateDesignPin';
// import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
// import { db } from '../config/firebase.config'; // Firebase configuration file
// import useUser from '../hooks/useUser'; // Ensure path is correct

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, isError: userError } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");
//   const [userTemplates, setUserTemplates] = useState([]);
//   const [savedResumes, setSavedResumes] = useState([]);
//   const [isFetchingTemplates, setIsFetchingTemplates] = useState(true);
//   const [isFetchingResumes, setIsFetchingResumes] = useState(true);

//   // Fetch templates from Firebase Firestore
//   useEffect(() => {
//     const fetchUserTemplates = async () => {
//       if (user?.uid) {
//         try {
//           const templateCollection = collection(db, 'users', user.uid, 'templates');
//           const templateSnapshot = await getDocs(templateCollection);
//           const templateIds = templateSnapshot.docs.map(doc => doc.id);

//           const fetchedTemplates = [];
//           for (let id of templateIds) {
//             const templateRef = doc(db, 'templates', id);
//             const templateDoc = await getDoc(templateRef);
//             if (templateDoc.exists()) {
//               fetchedTemplates.push({ id: templateDoc.id, ...templateDoc.data() });
//             }
//           }

//           setUserTemplates(fetchedTemplates);
//           setIsFetchingTemplates(false);
//         } catch (error) {
//           console.error('Error fetching user templates:', error);
//         }
//       }
//     };

//     fetchUserTemplates();
//   }, [user]);

//   // Fetch saved resumes logic (optional, based on your previous setup)
//   useEffect(() => {
//     const fetchSavedResumes = async () => {
//       if (user?.uid) {
//         try {
//           // Similar logic as for fetching templates can be used here
//           // For example, collection(db, 'users', user.uid, 'resumes')
//           setIsFetchingResumes(false);
//         } catch (error) {
//           console.error('Error fetching saved resumes:', error);
//         }
//       }
//     };

//     fetchSavedResumes();
//   }, [user]);

//   if (userLoading || isFetchingTemplates || isFetchingResumes) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//     return <div className="text-red-500">Error loading user data.</div>;
//   }

//   const filteredTemplates = userTemplates || [];

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50 relative">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>
//       </div>

//       <div className="flex items-center justify-center mt-12">
//         <button
//           className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer ${
//             activeTab === "Collections" ? "bg-white shadow-md text-blue-600" : "text-txtPrimary group-hover:text-blue-600"
//           }`}
//           onClick={() => setActiveTab("Collections")}
//         >
//           <p className="text-base">Collections</p>
//         </button>
//         <button
//           className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer ml-4 ${
//             activeTab === "Resumes" ? "bg-white shadow-md text-blue-600" : "text-txtPrimary group-hover:text-blue-600"
//           }`}
//           onClick={() => setActiveTab("Resumes")}
//         >
//           <p className="text-base">My Resumes</p>
//         </button>
//       </div>

//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//         <AnimatePresence>
//           {activeTab === "Collections" && (
//             <>
//               {filteredTemplates.length > 0 ? (
//                 <RenderATemplate
//                   templates={filteredTemplates}
//                   onCollectionToggle={() => {}} // Define logic for toggling
//                 />
//               ) : (
//                 <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                   <img
//                     src={NoData}
//                     className="w-32 h-auto object-contain"
//                     alt="No Data"
//                   />
//                   <p className="text-gray-500">No templates in your collections.</p>
//                 </div>
//               )}
//             </>
//           )}
//           {activeTab === "Resumes" && (
//             <>
//               {savedResumes?.length > 0 ? (
//                 <RenderATemplate templates={savedResumes} />
//               ) : (
//                 <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                   <img
//                     src={NoData}
//                     className="w-32 h-auto object-contain"
//                     alt="No Data"
//                   />
//                   <p className="text-gray-500">No resumes saved.</p>
//                 </div>
//               )}
//             </>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates, onCollectionToggle }) => {
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         templates.map((template, index) => (
//           <TemplateDesignPin
//             key={template.id}
//             data={template}
//             index={index}
//             onCollectionToggle={onCollectionToggle}
//           />
//         ))
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//           <p className="text-gray-500">No templates available.</p>
//         </div>
//       )}
//     </>
//   );
// };

// export default UserProfile;






          // const RenderATemplate = ({ templates, onCollectionToggle }) => {
          //   return (
          //     <>
          //       {templates && templates.length > 0 ? (
          //         <AnimatePresence>
          //           {templates.map((template, index) => (
          //             <TemplateDesignPin
          //               key={template._id}
          //               data={template}
          //               index={index}
          //               onCollectionToggle={onCollectionToggle} // Pass the handler to toggle collection
          //             />
          //           ))}
          //         </AnimatePresence>
          //       ) : (
          //         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
          //           <img
          //             src={NoData}
          //             className="w-32 h-auto object-contain"
          //             alt="No Data"
          //           />
          //           <p className="text-gray-500">No templates available.</p>
          //         </div>
          //       )}
          //     </>
          //   );
          // // };
          // import React, { useEffect, useState } from 'react';
          // import { AnimatePresence } from 'framer-motion';
          // import MainSpinner from '../components/MainSpinner';
          // // import NoData from '../assets/no-data.png';  // Adjust path if necessary
          // import NoData from '../assets-20240903T162903Z-001/assets/img/nodata.gif';
          // import TemplateDesignPin from '../components/TemplateDesignPin';
          // import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
          // import { db } from '../config/firebase.config'; // Firebase configuration file
          // import useUser from '../hooks/useUser'; // Ensure path is correct
          // import { addToCollection } from '../api/index'; // Add your collection service logic
          
          // const UserProfile = () => {
          //   const { data: user, isLoading: userLoading, isError: userError } = useUser();
          //   const [activeTab, setActiveTab] = useState("Collections");
          //   const [userTemplates, setUserTemplates] = useState([]);
          //   const [savedResumes, setSavedResumes] = useState([]);
          //   const [isFetchingTemplates, setIsFetchingTemplates] = useState(true);
          //   const [isFetchingResumes, setIsFetchingResumes] = useState(true);
          //   const [addedTemplates, setAddedTemplates] = useState(new Set()); // Track added templates
          
          //   // Fetch templates from Firebase Firestore
          //   useEffect(() => {
          //     const fetchUserTemplates = async () => {
          //       if (user?.uid) {
          //         try {
          //           const templateCollection = collection(db, 'users', user.uid, 'templates');
          //           const templateSnapshot = await getDocs(templateCollection);
          //           const templateIds = templateSnapshot.docs.map(doc => doc.id);
          
          //           const fetchedTemplates = [];
          //           for (let id of templateIds) {
          //             const templateRef = doc(db, 'templates', id);
          //             const templateDoc = await getDoc(templateRef);
          //             if (templateDoc.exists()) {
          //               fetchedTemplates.push({ id: templateDoc.id, ...templateDoc.data() });
          //             }
          //           }
          
          //           setUserTemplates(fetchedTemplates);
          //           setIsFetchingTemplates(false);
          //         } catch (error) {
          //           console.error('Error fetching user templates:', error);
          //         }
          //       }
          //     };
          
          //     fetchUserTemplates();
          //   }, [user]);
          
          //   // Fetch saved resumes logic (optional, based on your previous setup)
          //   useEffect(() => {
          //     const fetchSavedResumes = async () => {
          //       if (user?.uid) {
          //         try {
          //           // Similar logic as for fetching templates can be used here
          //           // For example, collection(db, 'users', user.uid, 'resumes')
          //           setIsFetchingResumes(false);
          //         } catch (error) {
          //           console.error('Error fetching saved resumes:', error);
          //         }
          //       }
          //     };
          
          //     fetchSavedResumes();
          //   }, [user]);
          
          //   const handleCollectionToggle = async (template) => {
          //     try {
          //       await addToCollection(template); // Your collection logic
          //       setAddedTemplates((prevSet) => new Set(prevSet).add(template.id)); // Add the template ID to the set
          //       alert(`${template.title} has been added to your collection!`); // Confirmation message
          //     } catch (error) {
          //       console.error("Error adding to collection: ", error);
          //     }
          //   };
          
          //   if (userLoading || isFetchingTemplates || isFetchingResumes) {
          //     return <MainSpinner />;
          //   }
          
          //   if (userError) {
          //     console.error("Error fetching user data: ", userError);
          //     return <div className="text-red-500">Error loading user data.</div>;
          //   }
          
          //   const filteredTemplates = userTemplates || [];
          
          //   return (
          //     <div className="w-full flex flex-col items-center justify-start py-12">
          //       <div className="w-full h-72 bg-blue-50 relative">
          //         <img
          //           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
          //           className="w-full h-full object-cover"
          //           alt="Cover"
          //         />
          //         <div className="absolute inset-0 bg-black opacity-20"></div>
          //         <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          //           {user?.photoURL ? (
          //             <img
          //               src={user?.photoURL}
          //               className="w-24 h-24 rounded-full border-2 border-white shadow-md"
          //               alt="Profile"
          //               referrerPolicy="no-referrer"
          //               loading="lazy"
          //             />
          //           ) : (
          //             <img
          //               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
          //               className="w-24 h-24 rounded-full border-2 border-white shadow-md"
          //               alt="Default Profile"
          //               referrerPolicy="no-referrer"
          //               loading="lazy"
          //             />
          //           )}
          //           <p className="text-2xl text-txtDark">{user?.displayName}</p>
          //         </div>
          //       </div>
          
          //       <div className="flex items-center justify-center mt-12">
          //         <button
          //           className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer ${
          //             activeTab === "Collections" ? "bg-white shadow-md text-blue-600" : "text-txtPrimary group-hover:text-blue-600"
          //           }`}
          //           onClick={() => setActiveTab("Collections")}
          //         >
          //           <p className="text-base">Collections</p>
          //         </button>
          //         <button
          //           className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer ml-4 ${
          //             activeTab === "Resumes" ? "bg-white shadow-md text-blue-600" : "text-txtPrimary group-hover:text-blue-600"
          //           }`}
          //           onClick={() => setActiveTab("Resumes")}
          //         >
          //           <p className="text-base">My Resumes</p>
          //         </button>
          //       </div>
          
          //       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
          //         <AnimatePresence>
          //           {activeTab === "Collections" && (
          //             <>
          //               {filteredTemplates.length > 0 ? (
          //                 <RenderATemplate
          //                   templates={filteredTemplates}
          //                   onCollectionToggle={handleCollectionToggle} // Handle collection toggle
          //                   addedTemplates={addedTemplates} // Pass added templates
          //                 />
          //               ) : (
          //                 <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
          //                   <img
          //                     src={NoData}
          //                     className="w-32 h-auto object-contain"
          //                     alt="No Data"
          //                   />
          //                   <p className="text-gray-500">No templates in your collections.</p>
          //                 </div>
          //               )}
          //             </>
          //           )}
          //           {activeTab === "Resumes" && (
          //             <>
          //               {savedResumes?.length > 0 ? (
          //                 <RenderATemplate templates={savedResumes} />
          //               ) : (
          //                 <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
          //                   <img
          //                     src={NoData}
          //                     className="w-32 h-auto object-contain"
          //                     alt="No Data"
          //                   />
          //                   <p className="text-gray-500">No resumes saved.</p>
          //                 </div>
          //               )}
          //             </>
          //           )}
          //         </AnimatePresence>
          //       </div>
          //     </div>
          //   );
          // };
          
          // const RenderATemplate = ({ templates, onCollectionToggle, addedTemplates }) => {
          //   return (
          //     <>
          //       {templates && templates.length > 0 ? (
          //         templates.map((template, index) => (
          //           <TemplateDesignPin
          //             key={template.id}
          //             data={template}
          //             index={index}
          //             isAdded={addedTemplates.has(template.id)} // Track if the template is added
          //             onCollectionToggle={onCollectionToggle} // Handle the toggle functionality
          //           />
          //         ))
          //       ) : (
          //         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
          //           <img
          //             src={NoData}
          //             className="w-32 h-auto object-contain"
          //             alt="No Data"
          //           />
          //           <p className="text-gray-500">No templates available.</p>
          //         </div>
          //       )}
          //     </>
          //   );
          // };
          
//           // export default UserProfile;
//           import React, { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import MainSpinner from '../components/MainSpinner'; // Adjust path as necessary
// import NoData from '../assets-20240903T162903Z-001/assets/img/nodata.gif'; 
// import TemplateDesignPin from '../components/TemplateDesignPin'; // Adjust path as necessary
// import useUser from '../hooks/useUser'; // Ensure path is correct
// import useTemplates from '../hooks/useTemplates'; // Ensure path is correct
// import { useQuery } from '@tanstack/react-query'; 
// import { addToCollection, getSaveResumes, getTemplates, getUserTemplates } from '../api'; // Adjust paths as necessary

// const UserProfile = () => {
//   const { data: user, isLoading: userLoading, isError: userError, refetch } = useUser();
//   const [activeTab, setActiveTab] = useState("Collections");
//   const [templates, setTemplates] = useState([]);
//   // Fetch templates from the user's collections subcollection
//   const { data: userTemplates, isLoading: templatesIsLoading } = useQuery({
//     queryKey: ["userTemplates", user?.uid],
//     queryFn: () => getUserTemplates(user?.uid), // Ensure this function fetches from collections subcollection
//     enabled: !!user?.uid, // Run query only when userId is available
//   });
//   React.useEffect(() => {
//     const fetchTemplates = async () => {
//       try {
//         const fetchedTemplates = await getTemplates(); // Fetch templates from the 'templates' collection in Firebase
//         setTemplates(fetchedTemplates);
//       } catch (error) {
//         console.error("Error fetching templates:", error);
//       }
//     };
//     if (user) {
//       fetchTemplates(); // Fetch templates once the user is available
//     }
//   }, [user]);
//   // Fetch saved resumes
//   const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
//     queryKey: ["savedResumes", user?.uid],
//     queryFn: () => getSaveResumes(user?.uid),
//     enabled: !!user?.uid,
//   });

//   const handleCollectionToggle = async (template) => {
//     try {
//       await addToCollection(user, template);
//       refetch(); // Refetch user data to reflect changes
//     } catch (error) {
//       console.error("Error updating collection: ", error);
//     }
//   };

//   console.log("User Data: ", user);
//   console.log("User Collections Data from Firestore: ", user?.collections);
//   console.log("Templates: ", userTemplates);

//   if (userLoading || templatesIsLoading || resumesIsLoading) {
//     return <MainSpinner />;
//   }

//   if (userError) {
//     console.error("Error fetching user data: ", userError);
//   }

//   const userCollections = user?.collections || [];
//   const filteredTemplates = userTemplates?.filter(template => userCollections.includes(template._id)) || [];

//   console.log("Filtered Templates: ", filteredTemplates);

//   return (
//     <div className="w-full flex flex-col items-center justify-start py-12">
//       <div className="w-full h-72 bg-blue-50">
//         <img
//           src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
//           className="w-full h-full object-cover"
//           alt="Cover"
//         />
//         <div className="flex items-center justify-center flex-col gap-4">
//           {user?.photoURL ? (
//             <img
//               src={user?.photoURL}
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           ) : (
//             <img
//               src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
//               className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
//               alt="Default Profile"
//               referrerPolicy="no-referrer"
//               loading="lazy"
//             />
//           )}
//           <p className="text-2xl text-txtDark">{user?.displayName}</p>
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Collections")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Collections" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               Collections
//             </p>
//           </div>
//           <div
//             className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
//             onClick={() => setActiveTab("Resumes")}
//           >
//             <p
//               className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
//                 activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
//               }`}
//             >
//               My Resumes
//             </p>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
//           <AnimatePresence>
//             {activeTab === "Collections" && (
//               <>
//                 {filteredTemplates.length > 0 ? (
//                   <RenderATemplate
//                     templates={filteredTemplates} // Pass filtered templates
//                     onCollectionToggle={handleCollectionToggle} // Pass the handler
//                   />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//             {activeTab === "Resumes" && (
//               <>
//                 {savedResumes?.length > 0 ? (
//                   <RenderATemplate templates={savedResumes} />
//                 ) : (
//                   <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//                     <img
//                       src={NoData}
//                       className="w-32 h-auto object-contain"
//                       alt="No Data"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderATemplate = ({ templates, onCollectionToggle }) => {
//   console.log("Templates in RenderATemplate: ", templates);
//   return (
//     <>
//       {templates && templates.length > 0 ? (
//         <AnimatePresence>
//           {templates.map((template, index) => (
//             <TemplateDesignPin
//               key={template?._id}
//               data={template}
//               index={index}
//               onCollectionToggle={onCollectionToggle} // Pass the handler
//             />
//           ))}
//         </AnimatePresence>
//       ) : (
//         <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
//           <img
//             src={NoData}
//             className="w-32 h-auto object-contain"
//             alt="No Data"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default UserProfile;


import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MainSpinner from '../components/MainSpinner'; // Adjust path as necessary
import NoData from '../assets-20240903T162903Z-001/assets/img/nodata.gif'; 
import TemplateDesignPin from '../components/TemplateDesignPin'; // Adjust path as necessary
import useUser from '../hooks/useUser'; // Ensure path is correct
import { db } from '../config/firebase.config'; // Ensure Firestore is initialized properly
import { addToCollection, getSaveResumes } from '../api'; // Adjust paths as necessary
import { useQuery } from '@tanstack/react-query';
import { collection, doc, getDoc, getDocs } from '@firebase/firestore';

const UserProfile = () => {
  const { data: user, isLoading: userLoading, isError: userError, refetch } = useUser();
  const [activeTab, setActiveTab] = useState("Collections");
  const [templates, setTemplates] = useState([]);

  // Fetch template IDs from the user's collections subcollection
  useEffect(() => {
    const fetchUserCollections = async () => {
      if (user?.uid) {
        const userCollectionsRef = collection(db,`users/${user.uid}/collections`);
        const snapshot = await getDocs(userCollectionsRef);
        const templateIds = snapshot.docs.map(doc => doc.id); // Assuming each document in collections is a template ID
        fetchTemplates(templateIds); // Fetch templates based on those IDs
      }
    };

    const fetchTemplates = async (templateIds) => {
      if (templateIds.length > 0) {
        const templatesRef = collection(db,'templates');
        const templatesData = [];
        for (const templateId of templateIds) {
          const templateDoc = await getDoc(doc(templatesRef, templateId));
          if (templateDoc.exists) {
            templatesData.push({ id: templateDoc.id, ...templateDoc.data() });
          }
        }
        setTemplates(templatesData); // Update the templates state
      }
    };

    if (user) {
      fetchUserCollections(); // Fetch user's collection of templates when the user is available
    }
  }, [user]);

  // Fetch saved resumes
  const { data: savedResumes, isLoading: resumesIsLoading } = useQuery({
    queryKey: ["savedResumes", user?.uid],
    queryFn: () => getSaveResumes(user?.uid),
    enabled: !!user?.uid,
  });

  // const handleCollectionToggle = async (template) => {
  //   try {
  //     await addToCollection(user, template);
  //     refetch(); // Refetch user data to reflect changes
  //   } catch (error) {
  //     console.error("Error updating collection: ", error);
  //   }
  // };
 const handleCollectionToggle = async (template) => {
    if (template?.id) {
      try {
        await addToCollection(user, template);
        refetch(); // Refetch user data to reflect changes
      } catch (error) {
        console.error("Error updating collection: ", error);
      }
    } else {
      console.error("Template has no ID.");
    }
  };
  
  if (userLoading || resumesIsLoading) {
    return <MainSpinner />;
  }

  if (userError) {
    console.error("Error fetching user data: ", userError);
  }

  return (
    <div className="w-full flex flex-col items-center justify-start py-12">
      <div className="w-full h-72 bg-blue-50">
        <img
          src="https://images.303magazine.com/uploads/2017/10/108A9880-2048.jpg"
          className="w-full h-full object-cover"
          alt="Cover"
        />
        <div className="flex items-center justify-center flex-col gap-4">
          {user?.photoURL ? (
            <img
              src={user?.photoURL}
              className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
              alt="Profile"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          ) : (
            <img
              src="https://img.freeik.com/premium-vector/adorable-cyberpunk-dj-vector_868778-499.jpg"
              className="w-24 h-24 rounded-full border-2 border-white -mt-12 shadow-md"
              alt="Default Profile"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          )}
          <p className="text-2xl text-txtDark">{user?.displayName}</p>
        </div>

        <div className="flex items-center justify-center mt-12">
          <div
            className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
            onClick={() => setActiveTab("Collections")}
          >
            <p
              className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
                activeTab === "Collections" && "bg-white shadow-md text-blue-600"
              }`}
            >
              Collections
            </p>
          </div>
          <div
            className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
            onClick={() => setActiveTab("Resumes")}
          >
            <p
              className={`text-base text-txtPrimary group-hover:text-blue-600 px-4 py-1 rounded-full ${
                activeTab === "Resumes" && "bg-white shadow-md text-blue-600"
              }`}
            >
              My Resumes
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
          <AnimatePresence>
            {activeTab === "Collections" && (
              <>
                {templates.length > 0 ? (
                  <RenderATemplate
                    templates={templates} // Pass filtered templates
                    onCollectionToggle={handleCollectionToggle} // Pass the handler
                  />
                ) : (
                  <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
                    <img
                      src={NoData}
                      className="w-32 h-auto object-contain"
                      alt="No Data"
                    />
                    <p>No templates in your collection.</p>
                  </div>
                )}
              </>
            )}
            {activeTab === "Resumes" && (
              <>
                {savedResumes && savedResumes?.length > 0 ? (
                  <RenderATemplate templates={savedResumes} />
                ) : (
                  <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
                    <img
                      src={NoData}
                      className="w-32 h-auto object-contain"
                      alt="No Data"
                    />
                    <p>No saved resumes.</p>
                  </div>
                )}
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const RenderATemplate = ({ templates, onCollectionToggle }) => {
  return (
    <>
      {templates && templates.length > 0 ? (
        <AnimatePresence>
          {templates.map((template, index) => (
            <TemplateDesignPin
              key={template?.id || index}
              data={template}
              index={index}
              onCollectionToggle={onCollectionToggle} // Pass the handler
            />
          ))}
        </AnimatePresence>
      ) : (
        <div className="col-span-12 w-full flex flex-col items-center justify-center gap-3">
          <img
            src={NoData}
            className="w-32 h-auto object-contain"
            alt="No Data"
          />
        </div>
      )}
    </>
  );
};

export default UserProfile;
