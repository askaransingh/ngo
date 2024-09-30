// import React, { useState } from "react";
// import { FaTrash, FaUpload } from "react-icons/fa6";
// import { PuffLoader } from "react-spinners";

// import {
//   deleteObject,
//   getDownloadURL,
//   ref,
//   uploadBytesResumable,
// } from "firebase/storage";
// import { db, storage } from "../config/firebase.config";
// import { toast } from "react-toastify";
// import { initialTags } from "../utils/helpers";
// import { doc, serverTimestamp, setDoc } from "firebase/firestore";
// import useTemplates from "../hooks/useTemplates";

// const CreateTemplate = async () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     imageURL: null,
//   });

//   const [imageAsset, setImageAsset] = useState({
//     isImageLoading: false,
//     uri: null,
//     progress: 0,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((preRec) => ({ ...preRec, [name]: value }));
//   };

//   const [selectTags, setselectTags] = useState([]);

//   const {
//     data: templates,
//     isError: templatesIsError,
//     isLoading: templatesIsLoading,
//     refetch: templatesRefetch,
//   } = useTemplates();

//   const handleFileSelect = async (e) => {
//     setImageAsset((prevAsset) => ({ ...prevAsset, isImageLoading: true }));
//     const file = e.target.files[0];
//     console.log(file);

//     if (file && isAllowed(file)) {
//       const storageRef = ref(storage, `Templates/${Date.now()}-${file.name}`);

//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           setImageAsset((prevAsset) => ({
//             ...prevAsset,
//             progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
//           }));
//         },
//         (error) => {
//           if (error.message.includes("storage/unauthorized")) {
//             toast.error(`Error : ${error.message}`);
//           } else {
//             toast.error(`Error : ${error.message}`);
//           }
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             setImageAsset((prevAsset) => ({
//               ...prevAsset,
//               uri: downloadURL,
//             }));
//           });
//           toast.success("Image uploaded");
//           setInterval(() => {
//             setImageAsset((prevAsset) => ({
//               ...prevAsset,
//               isImageLoading: false,
//             }));
//           }, 2000);
//         }
//       );
//     } else {
//       toast.info("Invalid File Format");
//     }
//   };

//   const deleteAnImageObject = async () => {
//     // setImageAsset((prevAsset)=> ({...prevAsset, isImageLoading:true}));
//     setInterval(() => {
//       setImageAsset((prevAsset) => ({
//         ...prevAsset,
//         progress: 0,
//         uri: null,
//         // isImageLoading: false,
//       }));
//     }, 2000);
//     const deleteRef = ref(storage, imageAsset.uri);
//     deleteObject(deleteRef).then(() => {
//       toast.success("Image removed");
//     });
//   };

//   const isAllowed = (file) => {
//     const allowedTypes = ["image/jpeg", "image/jpeg", "image/png"];
//     return allowedTypes.includes(file.type);
//   };

//   const handleSelectTags = (tag) => {
//     if (selectTags.includes(tag)) {
//       setselectTags(selectTags.filter((selected) => selected !== tag));
//     } else {
//       setselectTags([...selectTags, tag]);
//     }
//   };

//   const pushToCloud = async () => {
//     const timestamp = serverTimestamp();
//     const id = `${Date.now()}`;
//     const _doc = {
//       _id: id,
//       title: formData.title,
//       imageURL: imageAsset.uri,
//       tags: selectTags,
//       name:
//         templates && templates.length > 0
//           ? `Template${templates.length + 1}`
//           : "Template1",
//       timestamp: timestamp,
//     };
//     console.log(_doc);
//   };

//   await setDoc(doc(db, "templates", id), _doc)
//   .then(()=>{
//     setFormData((prevData)=>({...prevData,title:"", imageURL:""}));
//     setImageAsset((prevAsset) =>({...prevAsset,uri:null}));
//     setselectTags([]);
//     templatesRefetch();
//     toast.success("Data pushed to the cloud");
//   }).catch(error=> {
//     console.log(`Error : ${error.message}`);
//   })

//   return (
//     <div className="w-full px-4 lg:px-10 2xl:px32 py-4 grid grid-cols-1 lg:grid-cols-12">
//       <div className="col-span-12 lg:col-span-4 2xl:col-span-3 w-full flex-1 flex items-center justify-start flex-col gap-4 px-2">
//         <div className="w-full">
//           <p className="text-lg text-txtPrimary">Create a new Template</p>
//         </div>
//         <div className="w-full flex items-center justify-end">
//           <p className="text-base text-txtLight uppercase font-semibold">
//             TempID :{" "}
//           </p>
//           <p className="text-sm text-txtDark capitalize font-bold">
//             {templates && templates.length > 0
//               ? `Template${templates.length + 1}`
//               : "Template1"}{" "}
//           </p>
//         </div>

//         <input
//           className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-300 text-lg text-txtPrimary focus:text-txtDark focus:shadow-md outline-none"
//           type="text"
//           name="title"
//           placeholder="Template Title"
//           value={formData.title}
//           onChange={handleInputChange}
//         />

//         <div className="w-full bg-gray-60 backdrop-blur-md h-[420px] lg:h-[620] 2xl:h-[740px] rounded-md border-2 border-dotted border-gray-300 cursor-pointer flex items-center justify-center">
//           {imageAsset.isImageLoading ? (
//             <React.Fragment>
//               <div className="flex flex-col items-center justify-center gap-4">
//                 <PuffLoader color="#498FCD" size={40} />
//                 <p>{imageAsset?.progress.toFixed(2)}%</p>
//               </div>
//             </React.Fragment>
//           ) : (
//             <React.Fragment>
//               {!imageAsset?.uri ? (
//                 <React.Fragment>
//                   <label className="w-full cursor-pointer h-full">
//                     <div className="flex flex-col items-center justify-center h-full w-full">
//                       <div className="flex items-center justify-center cursor-pointer flex-col gap-4">
//                         <FaUpload className="text-2xl" />
//                         <p className="text-lg text-txtLight">Click to upload</p>
//                       </div>
//                     </div>
//                     <input
//                       type="file"
//                       className="w-0 h-0"
//                       accept=".jpeg,.jpg,.png"
//                       onChange={handleFileSelect}
//                     />
//                   </label>
//                 </React.Fragment>
//               ) : (
//                 <React.Fragment>
//                   <div className="relative w-full h-full overflow-hidden rounded-md">
//                     <img
//                       src={imageAsset?.uri}
//                       className="w-full h-full object-cover"
//                       loading="lazy"
//                       alt=""
//                     />
//                     <div
//                       className="absolute top-4 right-4 w-8 h-8 rounded-md flex items-center justify-center bg-red-500 cursor-pointer"
//                       onClick={deleteAnImageObject}
//                     >
//                       <FaTrash className="text-sm text-white" />
//                     </div>
//                   </div>
//                 </React.Fragment>
//               )}
//             </React.Fragment>
//           )}
//         </div>
//         <div className="w-full flex items-center flex-wrap gap-2">
//           {initialTags.map((tag, i) => (
//             <div
//               key={i}
//               className={`border border-gray-300 px-2 py-1 rounded-md cursor-pointer ${
//                 selectTags.includes(tag) ? "bg-blue-500 text-white" : " "
//               }`}
//               onClick={() => handleSelectTags(tag)}
//             >
//               <p className="text-xs">{tag}</p>
//             </div>
//           ))}
//         </div>
//         <button
//           type="button"
//           className="w-full bg-blue-700 text-white rounded-md py-3"
//           onClick={pushToCloud}
//         >
//           Save
//         </button>
//       </div>

//       <div className="col-span-12 lg:col-span-8 2xl:col-span-9bg-red-200">
//         2
//       </div>
//     </div>
//   );
// };

// export default CreateTemplate;

import React, { useEffect, useState } from "react";
import { FaTrash, FaUpload } from "react-icons/fa6";
import { PuffLoader } from "react-spinners";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { db, storage } from "../config/firebase.config";
import { toast } from "react-toastify";
import { adminIds, initialTags } from "../utils/helpers";
import { deleteDoc, doc, serverTimestamp, setDoc } from "firebase/firestore";
import useTemplates from "../hooks/useTemplates";
import { useNavigate } from "react-router-dom";

const CreateTemplate = () => {
  // const [templatesIsLoading, setTemplatesIsLoading] = useState(false);
  const [formData, setFormData] = useState({ title: "", imageURL: null });
  const [imageAsset, setImageAsset] = useState({
    isImageLoading: false,
    uri: null,
    progress: 0,
  });
  const [selectTags, setSelectTags] = useState([]);

  const {
    data: templates,
    isError: templatesIsError,
    isLoading: templatesIsLoading,
    refetch: templatesRefetch,
  } = useTemplates();

  const { data: user, isLoading } = useState();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileSelect = async (e) => {
    setImageAsset((prevAsset) => ({ ...prevAsset, isImageLoading: true }));
    const file = e.target.files[0];

    if (file && isAllowed(file)) {
      const storageRef = ref(storage, `Templates/${Date.now()}-${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setImageAsset((prevAsset) => ({
            ...prevAsset,
            progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          }));
        },
        (error) => {
          toast.error(`Error: ${error.message}`);
          setImageAsset((prevAsset) => ({
            ...prevAsset,
            isImageLoading: false,
          }));
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageAsset((prevAsset) => ({
              ...prevAsset,
              uri: downloadURL,
              isImageLoading: false,
            }));
            toast.success("Image uploaded");
          });
        }
      );
    } else {
      toast.info("Invalid File Format");
      setImageAsset((prevAsset) => ({ ...prevAsset, isImageLoading: false }));
    }
  };

  // const deleteAnImageObject = async () => {
  //   if (!imageAsset.uri) return;
  //   const deleteRef = ref(storage, imageAsset.uri);

  //   deleteObject(deleteRef)
  //     .then(() => {
  //       toast.success("Image removed");
  //       setImageAsset((prevAsset) => ({
  //         ...prevAsset,
  //         uri: null,
  //         progress: 0,
  //       }));
  //     })
  //     .catch((error) => toast.error(`Error: ${error.message}`));
  // };



  const deleteAnImageObject = async () => {
    if (!imageAsset.uri) return;
  
    // Extract file path from the URL if needed (assuming URI is a full URL)
    const filePath = imageAsset.uri.split('/o/')[1]?.split('?')[0];
    
    if (filePath) {
      const deleteRef = ref(storage, decodeURIComponent(filePath));
      try {
        await deleteObject(deleteRef);
        toast.success("Image removed");
        setImageAsset((prevAsset) => ({
          ...prevAsset,
          uri: null,
          progress: 0,
        }));
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      }
    } else {
      toast.error("Error: Invalid file path");
    }
  };
  













  const isAllowed = (file) => {
    const allowedTypes = ["image/jpeg", "image/png"];
    return allowedTypes.includes(file.type);
  };

  const handleSelectTags = (tag) => {
    if (selectTags.includes(tag)) {
      setSelectTags(selectTags.filter((selected) => selected !== tag));
    } else {
      setSelectTags([...selectTags, tag]);
    }
  };

  // const pushToCloud = async () => {
  //   const timestamp = serverTimestamp();
  //   const id = `${Date.now()}`;
  //   const _doc = {
  //     _id: id,
  //     title: formData.title,
  //     imageURL: imageAsset.uri,
  //     tags: selectTags,
  //     name:
  //       templates && templates.length > 0
  //         ? `Template${templates.length + 1}`
  //         : "Template1",
  //     timestamp: timestamp,
  //   };
  //   console.log(_doc);
  //   if (!templates) {  // Check if no image is uploaded
  //     toast.error('Please upload an image before saving.'); // Display toast message
  //     return; // Prevent saving the template
  //   }

  //   await setDoc(doc(db, "templates", id), _doc)
  //     .then(() => {
  //       setFormData((prevData) => ({ ...prevData, title: "", imageURL: "" }));
  //       setImageAsset((prevAsset) => ({ ...prevAsset, uri: null }));
  //       setSelectTags([]);
  //       templatesRefetch();
  //       toast.success("Data pushed to the cloud");
  //     })
  //     .catch((error) => {
  //       toast.error(`Error: ${error.message}`);
  //     });

  //   //   try {
  //   //     await setDoc(doc(db, "templates", id), _doc);
  //   //     setFormData({ title: "", imageURL: null });
  //   //     setImageAsset({ isImageLoading: false, uri: null, progress: 0 });
  //   //     setSelectTags([]);
  //   //     templatesRefetch();
  //   //     toast.success("Data pushed to the cloud");
  //   //   } catch (error) {
  //   //     toast.error(`Error: ${error.message}`);
  //   //   }
  // };
  const pushToCloud = async () => {
    if (!imageAsset.uri) {
      toast.error("Please upload an image before saving the template");
      return;
    }
  
    const timestamp = serverTimestamp();
    const id = `${Date.now()}`;
    const _doc = {
      _id: id,
      title: formData.title,
      imageURL: imageAsset.uri,
      tags: selectTags,
      name:
        templates && templates.length > 0
          ? `Template${templates.length + 1}`
          : "Template1",
      timestamp: timestamp,
    };
  
    console.log(_doc);
  
    await setDoc(doc(db, "templates", id), _doc)
      .then(() => {
        setFormData((prevData) => ({ ...prevData, title: "", imageURL: "" }));
        setImageAsset((prevAsset) => ({ ...prevAsset, uri: null }));
        setSelectTags([]);
        templatesRefetch();
        toast.success("Data pushed to the cloud");
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };
  
  // const removeTemplate = async () => {
  //   const deleteRef = ref(storage, templates?.imageURL);
  //   await deleteObject(deleteRef).then(async () => {
  //     await deleteDoc(doc(db, "tmeplates", templates?._id))
  //       .then(() => {
  //         toast.success("Template delted from the cloud");
  //         templatesRefetch();
  //       })
  //       .catch((err) => {
  //         toast.error(`Error : ${err.message}`);
  //       });
  //   });
  // };
  // const removeTemplate = async (template) => {
  //   if (!template?.imageURL) return;
  
  //   // Extract file path from the URL
  //   const filePath = template.imageURL.split('/o/')[1]?.split('?')[0];
    
  //   if (filePath) {
  //     const deleteRef = ref(storage, decodeURIComponent(filePath));
  //     try {
  //       await deleteObject(deleteRef);
  //       await deleteDoc(doc(db, "templates", template._id));
  //       toast.success("Template deleted from the cloud");
  //       templatesRefetch();
  //     } catch (error) {
  //       toast.error(`Error: ${error.message}`);
  //     }
  //   } else {
  //     toast.error("Error: Invalid file path");
  //   }
  // };
  
  const removeTemplate = async (template) => {
    // If there's no image, delete only the document in Firestore
    if (!template?.imageURL) {
      try {
        await deleteDoc(doc(db, "templates", template._id));
        toast.success("Template without an image deleted from the cloud");
        templatesRefetch();
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      }
      return;
    }
  
    // If an image exists, delete the image and the template document
    const filePath = template.imageURL.split('/o/')[1]?.split('?')[0];
    
    if (filePath) {
      const deleteRef = ref(storage, decodeURIComponent(filePath));
      try {
        // Delete image from storage
        await deleteObject(deleteRef);
        
        // Delete the template document from Firestore
        await deleteDoc(doc(db, "templates", template._id));
        
        toast.success("Template with image deleted from the cloud");
        templatesRefetch();
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      }
    } else {
      toast.error("Error: Invalid file path");
    }
  };
  





  useEffect(() => {
    if (!isLoading) {
      if (adminIds.includes(user?.uid)) {
        // Redirect non-admin users to the home page
        navigate("/", { replace: true });
      }
    }
  }, [user, isLoading, navigate]);
  


  // useEffect(() => {
  //   if (!isLoading && !adminIds.includes(user?.uid)) {
  //     navigate("/template/create", { replace: true });
  //   }
  // }, [user, isLoading]);

  return (
    <div className="w-full px-4 lg:px-10 2xl:px-32 py-4 grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-12 lg:col-span-4 2xl:col-span-3 w-full flex-1 flex items-center justify-start flex-col gap-4 px-2">
        <div className="w-full">
          <p className="text-lg text-txtPrimary">Create a new Template</p>
        </div>
        <div className="w-full flex items-center justify-end">
          <p className="text-base text-txtLight uppercase font-semibold">
            TempID :
          </p>
          <p className="text-sm text-txtDark capitalize font-bold">
            {templates && templates.length > 0
              ? `Template${templates.length + 1}`
              : "Template1"}
          </p>
        </div>

        <input
          className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-300 text-lg text-txtPrimary focus:text-txtDark focus:shadow-md outline-none"
          type="text"
          name="title"
          placeholder="Template Title"
          value={formData.title}
          onChange={handleInputChange}
        />

        <div className="w-full bg-gray-60 backdrop-blur-md h-[420px] lg:h-[620px] 2xl:h-[740px] rounded-md border-2 border-dotted border-gray-300 cursor-pointer flex items-center justify-center">
          {imageAsset.isImageLoading ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <PuffLoader color="#498FCD" size={40} />
              <p>{imageAsset.progress.toFixed(2)}%</p>
            </div>
          ) : !imageAsset.uri ? (
            <label className="w-full cursor-pointer h-full">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <FaUpload className="text-2xl" />
                <p className="text-lg text-txtLight">Click to upload</p>
              </div>
              <input
                type="file"
                className="w-0 h-0"
                accept=".jpeg,.jpg,.png"
                onChange={handleFileSelect}
              />
            </label>
          ) : (
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <img
                src={imageAsset.uri}
                className="w-full h-full object-cover"
                loading="lazy"
                alt=""
              />
              <div
                className="absolute top-4 right-4 w-8 h-8 rounded-md flex items-center justify-center bg-red-500 cursor-pointer"
                onClick={deleteAnImageObject}
              >
                <FaTrash className="text-sm text-white" />
              </div>
            </div>
          )}
        </div>

        <div className="w-full flex items-center flex-wrap gap-2">
          {initialTags.map((tag, i) => (
            <div
              key={i}
              className={`border border-gray-300 px-2 py-1 rounded-md cursor-pointer ${
                selectTags.includes(tag) ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleSelectTags(tag)}
            >
              <p className="text-xs">{tag}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="w-full bg-blue-700 text-white rounded-md py-3"
          onClick={pushToCloud}
        >
          Save
        </button>
      </div>

      <div className="col-span-12 lg:col-span-8 2xl:col-span-9 px-2 w-full flex-1 py-4 ">
        {templatesIsLoading ? (
          <React.Fragment>
            <div className="w-full h-full flex items-center justify-center">
              <PuffLoader color="#498FCD" size={40} />
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {templates && templates.length > 0 ? (
              <React.Fragment>
                <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
                  {templates?.map((template) => (
                    <div
                      key={template._id}
                      className="w-full h-[500px] rounded-md overflow-hidden relative"
                    >
                      <img
                        src={template?.imageURL}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute top-4 right-4 w-8 h-8 rounded-md flex items-center justify-center bg-red-500 cursor-pointer"
                        onClick={() => removeTemplate(template)}
                      >
                        <FaTrash className="text-sm text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="w-full h-full flex flex-col gap-6 items-center justify-center">
                  <PuffLoader color="#498FCD" size={40} />
                  <p className="text-xl tracking-wider capitalize text-txtPrimary">
                    No data
                  </p>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default CreateTemplate;

// import React, { useState } from "react";
// import { FaTrash, FaUpload } from "react-icons/fa6";
// import { PuffLoader } from "react-spinners";
// import {
//   deleteObject,
//   getDownloadURL,
//   ref,
//   uploadBytesResumable,
// } from "firebase/storage";
// import { db, storage } from "../config/firebase.config";
// import { toast } from "react-toastify";
// import { initialTags } from "../utils/helpers";
// import { doc, serverTimestamp, setDoc } from "firebase/firestore";
// import useTemplates from "../hooks/useTemplates";

// const CreateTemplate = () => {
//   const [formData, setFormData] = useState({ title: "", imageURL: null });
//   const [imageAsset, setImageAsset] = useState({
//     isImageLoading: false,
//     uri: null,
//     progress: 0,
//   });
//   const [selectTags, setSelectTags] = useState([]);

//   const { data: templates, refetch: templatesRefetch } = useTemplates();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleFileSelect = async (e) => {
//     setImageAsset((prevAsset) => ({ ...prevAsset, isImageLoading: true }));
//     const file = e.target.files[0];

//     if (file && isAllowed(file)) {
//       const storageRef = ref(storage, `Templates/${Date.now()}-${file.name}`);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           setImageAsset((prevAsset) => ({
//             ...prevAsset,
//             progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
//           }));
//         },
//         (error) => {
//           toast.error(`Error: ${error.message}`);
//           setImageAsset((prevAsset) => ({
//             ...prevAsset,
//             isImageLoading: false,
//           }));
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             setImageAsset((prevAsset) => ({
//               ...prevAsset,
//               uri: downloadURL,
//               isImageLoading: false,
//             }));
//             toast.success("Image uploaded");
//           });
//         }
//       );
//     } else {
//       toast.info("Invalid File Format");
//       setImageAsset((prevAsset) => ({ ...prevAsset, isImageLoading: false }));
//     }
//   };

//   const deleteAnImageObject = async () => {
//     if (!imageAsset.uri) return;
//     const deleteRef = ref(storage, imageAsset.uri);

//     deleteObject(deleteRef)
//       .then(() => {
//         toast.success("Image removed");
//         setImageAsset((prevAsset) => ({
//           ...prevAsset,
//           uri: null,
//           progress: 0,
//         }));
//       })
//       .catch((error) => toast.error(`Error: ${error.message}`));
//   };

//   const isAllowed = (file) => {
//     const allowedTypes = ["image/jpeg", "image/png"];
//     return allowedTypes.includes(file.type);
//   };

//   const handleSelectTags = (tag) => {
//     if (selectTags.includes(tag)) {
//       setSelectTags(selectTags.filter((selected) => selected !== tag));
//     } else {
//       setSelectTags([...selectTags, tag]);
//     }
//   };

//   const pushToCloud = async () => {
//     const timestamp = serverTimestamp();
//     const id = `${Date.now()}`;
//     const _doc = {
//       _id: id,
//       title: formData.title,
//       imageURL: imageAsset.uri,
//       tags: selectTags,
//       name:
//         templates && templates.length > 0
//           ? `Template${templates.length + 1}`
//           : "Template1",
//       timestamp: timestamp,
//     };

//     try {
//       await setDoc(doc(db, "templates", id), _doc);
//       setFormData({ title: "", imageURL: null });
//       setImageAsset({ isImageLoading: false, uri: null, progress: 0 });
//       setSelectTags([]);
//       templatesRefetch();
//       toast.success("Data pushed to the cloud");
//     } catch (error) {
//       toast.error(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <div className="w-full px-4 lg:px-10 2xl:px-32 py-4 grid grid-cols-1 lg:grid-cols-12">
//       <div className="col-span-12 lg:col-span-4 2xl:col-span-3 w-full flex-1 flex items-center justify-start flex-col gap-4 px-2">
//         <div className="w-full">
//           <p className="text-lg text-txtPrimary">Create a new Template</p>
//         </div>
//         <div className="w-full flex items-center justify-end">
//           <p className="text-base text-txtLight uppercase font-semibold">
//             TempID :
//           </p>
//           <p className="text-sm text-txtDark capitalize font-bold">
//             {templates && templates.length > 0
//               ? `Template${templates.length + 1}`
//               : "Template1"}
//           </p>
//         </div>

//         <input
//           className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-300 text-lg text-txtPrimary focus:text-txtDark focus:shadow-md outline-none"
//           type="text"
//           name="title"
//           placeholder="Template Title"
//           value={formData.title}
//           onChange={handleInputChange}
//         />

//         <div className="w-full bg-gray-60 backdrop-blur-md h-[420px] lg:h-[620px] 2xl:h-[740px] rounded-md border-2 border-dotted border-gray-300 cursor-pointer flex items-center justify-center">
//           {imageAsset.isImageLoading ? (
//             <div className="flex flex-col items-center justify-center gap-4">
//               <PuffLoader color="#498FCD" size={40} />
//               <p>{imageAsset.progress.toFixed(2)}%</p>
//             </div>
//           ) : !imageAsset.uri ? (
//             <label className="w-full cursor-pointer h-full">
//               <div className="flex flex-col items-center justify-center h-full w-full">
//                 <FaUpload className="text-2xl" />
//                 <p className="text-lg text-txtLight">Click to upload</p>
//               </div>
//               <input
//                 type="file"
//                 className="w-0 h-0"
//                 accept=".jpeg,.jpg,.png"
//                 onChange={handleFileSelect}
//               />
//             </label>
//           ) : (
//             <div className="relative w-full h-full overflow-hidden rounded-md">
//               <img
//                 src={imageAsset.uri}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//                 alt=""
//               />
//               <div
//                 className="absolute top-4 right-4 w-8 h-8 rounded-md flex items-center justify-center bg-red-500 cursor-pointer"
//                 onClick={deleteAnImageObject}
//               >
//                 <FaTrash className="text-sm text-white" />
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="w-full flex items-center flex-wrap gap-2">
//           {initialTags.map((tag, i) => (
//             <div
//               key={i}
//               className={`border border-gray-300 px-2 py-1 rounded-md cursor-pointer ${
//                 selectTags.includes(tag) ? "bg-blue-500 text-white" : ""
//               }`}
//               onClick={() => handleSelectTags(tag)}
//             >
//               <p className="text-xs">{tag}</p>
//             </div>
//           ))}
//         </div>

//         <button
//           type="button"
//           className="w-full bg-blue-700 text-white rounded-md py-3"
//           onClick={pushToCloud}
//         >
//           Save
//         </button>
//       </div>

//       <div className="col-span-12 lg:col-span-8 2xl:col-span-9 px-2 w-full flex-1 py-4 ">
//          {templatesIsLoading ? (
//           <React.Fragment>
//             <div className="w-full h-full flex items-center justify-center">
//               <PuffLoader color="#498FCD" size={40} />
//             </div>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             {templates && templates.length > 0 ? (
//               <React.Fragment>
//                 {templates?.map((template) => (
//                   <div key={template._id}>{template?.title}</div>
//                 ))}
//               </React.Fragment>
//             ) : (
//               <React.Fragment>
//                 <div className="w-full h-full flex flex-col gap-6 items-center justify-center">
//                   <PuffLoader color="#498FCD" size={40} />
//                   <p className="text-xl tracking-wider capitalize text-txtPrimary">
//                     {" "}
//                     No data
//                   </p>
//                 </div>
//               </React.Fragment>
//             )}
//           </React.Fragment>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CreateTemplate;
