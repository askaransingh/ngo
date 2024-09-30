// import { doc, onSnapshot, setDoc } from "firebase/firestore";
// import { auth, db } from "../config/firebase.config";

// export const getUserDetail = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = auth.onAuthStateChanged((userCred) => {
//       if (userCred) {
//         const userData = userCred.providerData[0];
//         console.log(userData);

//         // const unsubscribe = onSnapshot(
//         //     doc(db,"users",userData?.uid),
//         //     (_doc)=>{
//         //         if (_doc.exists()) {
//         //             resolve(_doc.data());
//         //         }else {
//         //             setDoc(doc(db,"users", userData?.uid),userData).then(()=>{
//         //                 resolve(userData);
//         //             })
//         //         }
//         //     }
//         // );
//         // return unsubscribe;
//       } else {
//         reject(new Error("User is not authenticated"));
//       }
//       // unsubscribe();
//     });
//     // return unsubscribe;
//   });
// };

// index.js
// import { doc, onSnapshot, setDoc } from "firebase/firestore";
// import { auth, db } from "../config/firebase.config";

// export const getUserDetail = () => {
//   return new Promise((resolve, reject) => {
//     // Set up authentication listener
//     const unsubscribe = auth.onAuthStateChanged((userCred) => {
//       if (userCred) {
//         const userData = userCred.providerData[0];
//         console.log(userData);

//         // Attempt to fetch user data from Firestore
//         const userDocRef = doc(db, "users", userCred.uid);
//         const unsubscribeUserDoc = onSnapshot(
//           userDocRef,
//           (docSnapshot) => {
//             if (docSnapshot.exists()) {
//               // Resolve with existing user data
//               resolve(docSnapshot.data());
//             } else {
//               // Create a new user document in Firestore if it doesn't exist
//               setDoc(userDocRef, userData)
//                 .then(() => {
//                   resolve(userData); // Resolve with new user data
//                 })
//                 .catch((error) => {
//                   reject(new Error("Failed to create user document: " + error.message));
//                 });
//             }
//           },
//           (error) => {
//             // Handle onSnapshot error
//             reject(new Error("Error fetching user document: " + error.message));
//           }
//         );

//         // Return the unsubscribe function for onSnapshot
//         return unsubscribeUserDoc;
//       } else {
//         reject(new Error("User is not authenticated"));
//       }
//     });

//     // Return the unsubscribe function for auth listener
//     return unsubscribe;
//   });
// };

// // index.js
// import { doc, onSnapshot, setDoc } from "firebase/firestore";
// import { auth, db } from "../config/firebase.config";

// export const getUserDetail = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribeAuth = auth.onAuthStateChanged((userCred) => {
//       if (userCred) {
//         const userData = userCred.providerData[0];
//         console.log("User data retrieved from provider:", userData);

//         const userDocRef = doc(db, "users", userCred.uid);
//         const unsubscribeUserDoc = onSnapshot(
//           userDocRef,
//           (docSnapshot) => {
//             if (docSnapshot.exists()) {
//               console.log("User document data:", docSnapshot.data());
//               resolve(docSnapshot.data());
//             } else {
//               console.log("No existing user document found, creating a new one...");
//               setDoc(userDocRef, userData)
//                 .then(() => {
//                   console.log("User document created successfully.");
//                   resolve(userData);
//                 })
//                 .catch((error) => {
//                   console.error("Error creating user document:", error);
//                   reject(new Error("Failed to create user document: " + error.message));
//                 });
//             }
//           },
//           (error) => {
//             console.error("Error fetching user document from Firestore:", error);
//             reject(new Error("Error fetching user document: " + error.message));
//           }
//         );

//         // Return the unsubscribe function for onSnapshot
//         return unsubscribeUserDoc;
//       } else {
//         console.error("User is not authenticated.");
//         reject(new Error("User is not authenticated"));
//       }
//     });

//     // Return the unsubscribe function for the auth listener
//     return unsubscribeAuth;
//   });
// };

// import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
// import { auth, db } from "../config/firebase.config";

// export const getUserDetail = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = auth.onAuthStateChanged((userCred) => {
//       if (userCred) {
//         const userData = userCred.providerData[0];
//         const unsubscribe = onSnapshot(
//           doc(db, "users", userCred?.uid),
//           (_doc)=>{
//             if(_doc.exists()) {
//               resolve(_doc.data());
//             }else{
//               setDoc(doc(db, "users", userCred?.uid), userData).then(()=>{
//                 resolve(userData);
//               });
//             }
//           }
//         );

//         // console.log("Authenticated User Data:", userData);

//         // Assuming you want to fetch user details from Firestore
//         // const userDocRef = doc(db, "users", userData.uid);
//         // getDoc(userDocRef)
//         //   .then((docSnap) => {
//         //     if (docSnap.exists()) {
//         //       resolve(docSnap.data());
//         //     } else {
//         //       // Create document if it doesn't exist
//         //       setDoc(userDocRef, userData).then(() => {
//         //         resolve(userData);
//         //       });
//         //     }
//         //   })
//         //   .catch((error) => {
//         //     reject(new Error("Failed to fetch user data"));
//         //   });
//       } else {
//         reject(new Error("User is not authenticated"));
//       }
//       unsubscribe();
//     });
//   });
// };

// // index.js (api file)
// import { doc, onSnapshot, setDoc } from "firebase/firestore";
// import { auth, db } from "../config/firebase.config";

// export const getUserDetail = () => {
//   return new Promise((resolve, reject) => {
//     // Listen for authentication state changes
//     const unsubscribeAuth = auth.onAuthStateChanged((userCred) => {
//       if (userCred) {
//         const userData = userCred.providerData[0]; // Get user data from provider

//         // Reference to the user document in Firestore
//         const userDocRef = doc(db, "users", userCred.uid);

//         // Listen to changes in the user's document
//         const unsubscribeSnapshot = onSnapshot(userDocRef, (docSnapshot) => {
//           if (docSnapshot.exists()) {
//             // If the document exists, resolve with the document data
//             resolve(docSnapshot.data());
//           } else {
//             // If the document doesn't exist, create it and resolve with the new data
//             setDoc(userDocRef, userData)
//               .then(() => {
//                 resolve(userData);
//               })
//               .catch((error) => {
//                 reject(new Error("Failed to create user document: " + error.message));
//               });
//           }
//         });

//         // Clean up both listeners when done
//         return () => {
//           unsubscribeAuth();
//           unsubscribeSnapshot();
//         };
//       } else {
//         // Reject if no user is authenticated
//         reject(new Error("User is not authenticated"));
//         unsubscribeAuth();
//       }
//     });
//   });
// };

// import {
//   collection,
//   doc,
//   onSnapshot,
//   orderBy,
//   query,
//   setDoc,
// } from "firebase/firestore";
// import { auth, db } from "../config/firebase.config";

// export const getUserDetail = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribeAuth = auth.onAuthStateChanged((userCred) => {
//       if (userCred) {
//         const userData = userCred.providerData[0];
//         const userDocRef = doc(db, "users", userCred.uid);

//         const unsubscribeSnapshot = onSnapshot(userDocRef, (docSnapshot) => {
//           if (docSnapshot.exists()) {
//             resolve(docSnapshot.data());
//           } else {
//             setDoc(userDocRef, userData)
//               .then(() => {
//                 resolve(userData);
//               })
//               .catch((error) => {
//                 reject(
//                   new Error("Failed to create user document: " + error.message)
//                 );
//               });
//           }
//         });

//         return () => {
//           unsubscribeAuth();
//           unsubscribeSnapshot();
//         };
//       } else {
//         reject(new Error("User is not authenticated"));
//         unsubscribeAuth();
//       }
//     });
//   });
// };

// export const getTemplates = () => {
//   return new Promise((resolve, reject) => {
//     const templateQuery = query(
//       collection(db, "templates"),
//       orderBy("timestamp", "asc")
//     );
//     const unsubscribe = onSnapshot(templateQuery, (querySnap) => {
//       const templates = querySnap.docs.map((doc) => doc.data);
//       resolve(templates);
//     });
//   });

//     return unsubscribe;

// };

// import {
//   arrayRemove,
//   arrayUnion,
//   collection,
//   doc,
//   onSnapshot,
//   orderBy,
//   query,
//   setDoc,
//   updateDoc,
// } from "firebase/firestore";
// import { auth, db } from "../config/firebase.config";
// import { toast } from "react-toastify";

// export const getUserDetail = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribeAuth = auth.onAuthStateChanged((userCred) => {
//       if (userCred) {
//         const userData = userCred.providerData[0];
//         const userDocRef = doc(db, "users", userCred.uid);

//         const unsubscribeSnapshot = onSnapshot(userDocRef, (docSnapshot) => {
//           if (docSnapshot.exists()) {
//             resolve(docSnapshot.data());
//           } else {
//             setDoc(userDocRef, userData)
//               .then(() => {
//                 resolve(userData);
//               })
//               .catch((error) => {
//                 reject(
//                   new Error("Failed to create user document: " + error.message)
//                 );
//               });
//           }
//         });

//         // Return a function that unsubscribes from both auth and snapshot
//         return () => {
//           unsubscribeAuth();
//           unsubscribeSnapshot();
//         };
//       } else {
//         reject(new Error("User is not authenticated"));
//         unsubscribeAuth();
//       }
//     });
//   });
// };

// export const getTemplates = () => {
//   return new Promise((resolve, reject) => {
//     try {
//       const templateQuery = query(
//         collection(db, "templates"),
//         orderBy("timestamp", "asc")
//       );

//       // Declare unsubscribe variable outside to handle it correctly
//       const unsubscribe = onSnapshot(
//         templateQuery,
//         (querySnap) => {
//           const templates = querySnap.docs.map((doc) => doc.data());
//           resolve(templates);
//         },
//         (error) => {
//           // reject(new Error("Failed to fetch templates: " + error.message));
//         }
//       );

//       // Return the unsubscribe function to clean up the snapshot listener
//       return unsubscribe;
//     } catch (error) {
//       reject(new Error("Error in fetching templates: " + error.message));
//     }
//   });
// };

// export const saveToFavourites = async (user, data) => {
//   if (!data?.favourites?.includes(user?.uid)) {
//     const docRef = doc(db, "templates", data?._id);

//     await updateDoc(docRef, {
//       favourites: arrayUnion(user?.uid),
//     })
//       .then(() => toast.success("Added To Favourites"))
//       .catch((error) => toast.error(`Error : ${error.message}`));
//   }else{
//     const docRef = doc(db, "templates", data?._id);

//     await updateDoc(docRef, {
//       favourites: arrayRemove(user?.uid),
//     })
//       .then(() => toast.success("Removed from Favourites"))
//       .catch((error) => toast.error(`Error : ${error.message}`));
//   }
// };

// export const saveToCollections = async (user, data) => {
//   if (!user?.collections?.includes(data?._id)) {
//     const docRef = doc(db, "users", user?.uid);

//     await updateDoc(docRef, {
//       collections: arrayUnion(data?._id),
//     })
//       .then(() => toast.success("Saved To Collections"))
//       .catch((error) => toast.error(`Error : ${error.message}`));
//   }else{
//     const docRef = doc(db, "users", user?.uid);

//     await updateDoc(docRef, {
//       collections: arrayRemove(data?._id),
//     })
//       .then(() => toast.success("Removed from Collections"))
//       .catch((error) => toast.error(`Error : ${error.message}`));
//   }
// };

// export const getTemplateDetails = async (templateID)=> {
// return new Promise((resolve,reject)=> {
//   const unsubscribe = onSnapshot(doc(db,"templates",templateID),(doc)=>{
//     resolve(doc.data());
//   });
//   return unsubscribe;
// });

// };

import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  Firestore,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,

} from "firebase/firestore";
import { auth, db } from "../config/firebase.config";
import { toast } from "react-toastify";
import { useState } from "react";
// const db = getFirestore(app);
export const getUserDetail = () => {
  return new Promise((resolve, reject) => {
    const unsubscribeAuth = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        const userData = userCred.providerData[0];
        const userDocRef = doc(db, "users", userCred.uid);
        
        const unsubscribeSnapshot = onSnapshot(userDocRef, (docSnapshot) => {
          if (docSnapshot.exists()) {
            resolve(docSnapshot.data());
          } else {
            setDoc(userDocRef, userData)
            .then(() => {
                resolve(userData);
              })
              .catch((error) => {
                reject(
                  new Error("Failed to create user document: " + error.message)
                );
              });
            }
          });
          
          // Return a function that unsubscribes from both auth and snapshot
          return () => {
            unsubscribeAuth();
            unsubscribeSnapshot();
          };
        } else {
          reject(new Error("User is not authenticated"));
        unsubscribeAuth();
      }
    });
  });
};
// const [userCollection, setUserCollection] = useState([]);

// export const getTemplates = () => {
  //   return new Promise((resolve, reject) => {
    //     try {
      //       const templateQuery = query(
//         collection(db, "templates"),
//         orderBy("timestamp", "asc")
//       );

//       // Declare unsubscribe variable outside to handle it correctly
//       const unsubscribe = onSnapshot(
//         templateQuery,
//         (querySnap) => {
//           const templates = querySnap.docs.map((doc) => doc.data());
//           resolve(templates);
//         },
//         (error) => {
//           // reject(new Error("Failed to fetch templates: " + error.message));
//         }
//       );

//       // Return the unsubscribe function to clean up the snapshot listener
//       return unsubscribe;
//     } catch (error) {
//       reject(new Error("Error in fetching templates: " + error.message));
//     }
//   });
// };
// export const getTemplates = async () => {
//   const templatesCollection = collection(db, 'templates');
//   const templatesSnapshot = await getDocs(templatesCollection);
//   const templatesList = templatesSnapshot.docs.map(doc => ({
//     _id: doc.id,
//     ...doc.data(),
//   }));
//   return templatesList;
// };
// export const getTemplates = async () => {
//   try {
//     // Access the 'templates' collection in Firestore
//     const templatesCollection = collection(db, 'templates');
//     // Fetch all documents in the 'templates' collection
//     const templatesSnapshot = await getDocs(templatesCollection);
    
//     // Map the documents to a list
//     const templatesList = templatesSnapshot.docs.map(doc => ({
//       _id: doc.id,  // Assign the document ID as '_id'
//       ...doc.data(),  // Spread the rest of the document data
//     }));
    
//     // Log the fetched templates
//     console.log("Templates fetched from Firestore:", templatesList);
    
//     // Return the list of templates
//     return templatesList;
    
//   } catch (error) {
//     // Log the error in case something goes wrong during fetching
//     console.error("Error fetching templates from Firestore:", error);
//     // Rethrow the error to ensure it is handled elsewhere
//     throw error;
   
//   }
// };
export const getTemplates = async () => {
  try {
    const templatesCollection = collection(db, 'templates');
    const templatesSnapshot = await getDocs(templatesCollection);
    
    console.log("Firestore Snapshot:", templatesSnapshot); // Add this to check raw snapshot
    
    const templatesList = templatesSnapshot.docs.map(doc => ({
      _id: doc.id,  // Assign the document ID as '_id'
      ...doc.data(),  // Spread the rest of the document data
    }));
    
    console.log("Templates fetched from Firestore:", templatesList); // Check templatesList output
    return templatesList;
    
  } catch (error) {
    console.error("Error fetching templates from Firestore:", error);
    throw error;
  }
};

// const getTemplates = async () => {
//   const templatesRef = firestore.collection('templates');
//   const snapshot = await templatesRef.get();
//   const templates = snapshot.docs.map(doc => doc.data());
//   return templates;
// };

// export const getTemplates = async () => {
//   const response = await fetch('https://your-api-endpoint.com/templates');
//   console.log(response); // Log the raw response

//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }

//   const contentType = response.headers.get("content-type");
//   if (contentType && contentType.includes("application/json")) {
//     const data = await response.json();
//     return data;
//   } else {
//     throw new Error("Received non-JSON response");
//   }
// };


export const addToFavourites = async (user, data) => {

  if (!data?.favourites?.includes(user?.uid)) {
    const docRef = doc(db, "templates", data?._id);

    await updateDoc(docRef, {
      favourites: arrayUnion(user?.uid),
    })
      .then(() => toast.success("Added To Favourites"))
      .catch((error) => toast.error(`Error : ${error.message}`));
  } else {
    const docRef = doc(db, "templates", data?._id);

    await updateDoc(docRef, {
      favourites: arrayRemove(user?.uid),
    })
      .then(() => toast.success("Removed from Favourites"))
      .catch((error) => toast.error(`Error : ${error.message}`));
  }
};

// export const addToCollection = async (user, data) => {
//   if (!user?.collections?.includes(data?._id)) {
//     const docRef = doc(db, "users", user?.uid);

//     await updateDoc(docRef, {
//       collections: arrayUnion(data?._id),
//     })
//       .then(() => toast.success("Saved To Collections"))
//       .catch((error) => toast.error(`Error : ${error.message}`));
//   } else {
//     const docRef = doc(db, "users", user?.uid);

//     await updateDoc(docRef, {
//       collections: arrayRemove(data?._id),
//     })
//       .then(() => toast.success("Removed from Collections"))
//       .catch((error) => toast.error(`Error : ${error.message}`));
//   }
// };




// import {   } from "firebase/firestore";
// import { toast } from "react-toastify";
// import { db } from "../config/firebase.config"; // Adjust path if necessary

// export const addToCollection = async (user, data) => {
//   try {
//     if (!user?.uid || !data?._id) {
//       throw new Error("User UID or Template ID is missing");
//     }

//     const docRef = doc(db, "users", user.uid);

//     if (!user.collections?.includes(data._id)) {
//       await updateDoc(docRef, {
//         collections: arrayUnion(data._id),
//       });
//       toast.success("Saved to Collections");
//     } else {
//       await updateDoc(docRef, {
//         collections: arrayRemove(data._id),
//       });
//       toast.success("Removed from Collections");
//     }
//   } catch (error) {
//     console.error("Error updating collection:", error);
//     toast.error(`Error: ${error.message}`);
//   }
// };


// import { doc, updateDoc, arrayUnion, arrayRemove, setDoc } from "firebase/firestore";
// import { toast } from "react-toastify";
// import { db } from "../config/firebase.config"; // Adjust path if necessary

// export const addToCollection = async (user, data) => {
//   try {
//     if (!user?.uid || !data?._id) {
//        toast.error("please login first...");
//     }

//     const docRef = doc(db, "users", user.uid);

//     // Check if the document exists
//     const docSnap = await getDoc(docRef);

//     if (!docSnap.exists()) {
//       // Create the document if it does not exist
//       await setDoc(docRef, {
//         collections: [],
//         // Add any other default fields as necessary
//       });
//     }

//     if (!user.collections?.includes(data._id)) {
//       await updateDoc(docRef, {
//         collections: arrayUnion(data._id),
//       });
//       toast.success("Saved to Collections");
//     } else {
//       await updateDoc(docRef, {
//         collections: arrayRemove(data._id),
//       });
//       toast.success("Removed from Collections");
//     }
//   } catch (error) {
//     console.error("Error updating collection:", error);
//     // toast.error(`Error: ${error.message}`);
//   }
// };




// addToCollection API function
// export const addToCollection = async (user, template) => {
//   const collectionRef = db
//     .collection('users')
//     .doc(user.uid)
//     .collection('collections'); // Ensure correct path

//   // Add the template to the collections subcollection
//   await collectionRef.doc(template._id).set(template);
// };



// export const addToCollection = async (user, template) => {
//   // Create a reference to the 'collections' subcollection for the specific user
//   const collectionRef = collection(db, 'users', user.uid, 'collections');

//   // Reference the specific document by the template ID
//   const docRef = doc(collectionRef, template._id);

//   // Add or update the template in the 'collections' subcollection
//   await setDoc(docRef, template);
// };





// export const addToCollection = async (user, template) => {
//   try {
//     // Reference the user's 'collections' subcollection
//     const collectionRef = collection(db, 'users', user.uid, 'collections');
//     const docRef = doc(collectionRef, template.id); // Use the template's id as the document id

//     // Save the template in the user's collections
//     await setDoc(docRef, template);

//     console.log(`Template ${template.id} added to user's collection.`);
//   } catch (error) {
//     console.error("Error adding template to collection:", error);
//   }
// };
// import { doc, setDoc, collection } from "firebase/firestore";
// import { db } from '../config/firebase.config'; // Ensure proper path

export const addToCollection = async (user, template) => {
  try {
    if (!template?.id) {
      throw new Error('Template ID is missing or invalid.');
    }

    // Reference the user's 'collections' subcollection
    const collectionRef = collection(db, 'users', user.uid, 'collections');
    const docRef = doc(collectionRef, template.id); // Use the template's id as the document id

    // Save the template in the user's collections
    await setDoc(docRef, template);

    console.log(`Template ${template.id} added to user's collection.`);
  } catch (error) {
    console.error("Error adding template to collection:", error);
  }
};

// export const addToCollection = async (user, template) => {
//   try {
//     const collectionRef = collection(db, 'users', user.uid, 'collections'); // Correct path
//     const docRef = doc(collectionRef, template._id); // Create document reference

//     // Add the template to the 'collections' subcollection
//     await setDoc(docRef, template);
//     console.log('Template added to collection successfully');
//   } catch (error) {
//     console.error('Error adding template to collection:', error);
//   }
// };




export const getTemplateDetails = async (templateID) => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onSnapshot(doc(db, "templates", templateID), (doc) => {
      resolve(doc.data());
    });
    return unsubscribe;
  });
};
// const handleAddToCollection = async (e) => {
//   e.stopPropagation();
  
//   // Check if the user is logged in
//   if (!user || !user.uid) {
//     toast.error("Please log in first!");
//     return; // Stop further execution if the user is not logged in
//   }

//   if (typeof onCollectionToggle === "function") {
//     try {
//       if (isAdded) {
//         // If already added, remove it from the collection
//         await removeFromCollection(user, data);
//         setIsAdded(false); // Update state to reflect that it is removed
//       } else {
//         // If not added, add it to the collection
//         await onCollectionToggle(data); // Toggle collection
//         await addToCollection(user, { ...data, id: data._id });
//         setIsAdded(true); // Update state to reflect that it is added
//       }
      
//       await fetchUserCollection(); // Refetch collection data
//       tempRefetch(); // Refetch templates if necessary
//       refetch(); // Refetch user data if necessary
//     } catch (error) {
//       toast.error("Failed to toggle collection.");
//     }
//   } else {
//     toast.warn("onCollectionToggle is not a function or not provided.");
//   }
// };

// export const getTemplateDetailEditByUser = (uid, id) => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = onSnapshot(
//       doc(db, "users", uid, "resumes", id),
//       (doc) => {
//         resolve(doc.data());
//       }
//     );

//     return unsubscribe;
//   });
// };

// export const getTemplateDetailEditByUser = (uid, id) => {
//   return new Promise((resolve, reject) => {
//     const docRef = doc(db, "users", uid, "resumes", id);

//     const unsubscribe = onSnapshot(
//       docRef,
//       (doc) => {
//         if (doc.exists()) {
//           const data = doc.data();
//           resolve(data || {}); // Ensure you return an object
//         } else {
//           resolve({}); // Return an empty object if no document
//         }
//       },
//       (error) => {
//         reject(new Error(`Snapshot error: ${error.message}`));
//       }
//     );

//     return unsubscribe;
//   });
// };

// export const getTemplateDetailEditByUser = (uid, id) => {
//   // Add logging to check the values of uid and id
//   console.log("getTemplateDetailEditByUser - uid:", uid, "id:", id);

//   if (!uid || !id) {
//     console.error("Error: uid or id is undefined!");
//     return Promise.reject(new Error("Invalid UID or ID"));
//   }

//   return new Promise((resolve, reject) => {
//     try {
//       const docRef = doc(db, "users", uid, "resumes", id);

//       const unsubscribe = onSnapshot(
//         docRef,
//         (doc) => {
//           if (doc.exists()) {
//             resolve(doc.data() || {});
//           } else {
//             resolve({}); // Return an empty object if no document
//           }
//         },
//         (error) => {
//           reject(new Error(`Snapshot error: ${error.message}`));
//         }
//       );

//       return unsubscribe;
//     } catch (error) {
//       console.error("Error in getTemplateDetailEditByUser:", error);
//       reject(error);
//     }
//   });
// };

export const getTemplateDetailEditByUser = (uid, id) => {
  if (!uid || !id) {
    console.error("Error: UID or ID is invalid", uid, id);
    return Promise.reject(new Error("Invalid UID or ID"));
  }

  return new Promise((resolve, reject) => {
    const unsubscribe = onSnapshot(
      doc(db, "users", uid, "resumes", id),
      (doc) => {
        if (doc.exists()) {
          resolve(doc.data());
        } else {
          reject(new Error("Document does not exist"));
        }
      },
      (error) => reject(new Error(`Snapshot error: ${error.message}`))
    );

    return unsubscribe;
  });
};

// export const getSaveResumes = (uid) => {
//   return new Promise((resolve, reject) => {
//     const templateQuery = query(
//       collection(db, "users", uid, "resumes"),
//       orderBy("timeStamp", "asc")
//     );
//     const unsubscribe = onSnapshot(templateQuery, (querySnap) => {
//       const templates = querySnap.docs.map((doc) => doc.data());
//       resolve(templates);
//     });
//     return unsubscribe;
//   });
// };


export const getSaveResumes = async (userId) => {
  if (!userId) return []; // Return an empty array if no user ID is provided

  try {
    const templateQuery = query(
      collection(db, "users", userId, "resumes"),
      orderBy("timeStamp", "asc")
    );
    
    const snapshot = await getDocs(templateQuery); // Fetch the documents

    if (!snapshot.empty) {
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // Return resume data
    }
    
    return []; // Return an empty array if no resumes are found
  } catch (error) {
    console.error("Error fetching saved resumes: ", error);
    return []; // Return an empty array in case of error
  }
};
// Example: API function to fetch templates for a specific user
// export const getUserTemplates = async (userId) => {
//   if (!userId) return [];
  
//   // Assume you have a Firestore collection named "templates"
//   const templatesRef = Firestore.collections("templates");
  
//   // Fetch only templates where the user has added them to their collection
//   const snapshot = await templatesRef.where("userId", "==", userId).get();
//   const templates = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

//   return templates;
// };

// export const getUserTemplates = async (userId) => {
//   const collectionRef = Firestore.collection('users').doc(userId).collection('collections');
//   const snapshot = await collectionRef.get();
//   return snapshot.docs.map(doc => doc.data());
// };








// export const getUserTemplates = async (userId) => {
//   if (!userId) return [];

//   // Define the Firestore collection path for user collections
//   const collectionRef = collection(db, `users/${userId}/collections`);
  
//   // Fetch documents from the 'collections' subcollection for the specified user
//   const snapshot = await getDocs(collectionRef);
  
//   // Map over the snapshot to return an array of templates with the document ID included
//   return snapshot.docs.map(doc => ({ _id: doc.id, ...doc.data() }));
// };

// getUserTemplates API function
export const getUserTemplates = async (userId) => {
  const collectionRef = db
    .collection('users')
    .doc(userId)
    .collection('collections'); // Ensure correct path

  const snapshot = await collectionRef.get();
  const templates = snapshot.docs.map((doc) => ({ _id: doc.id, ...doc.data() }));
  return templates;
};











// Define the function to fetch filters
export const fetchFilters = async () => {
  const response = await fetch('/api/filters'); // Adjust endpoint as needed
  if (!response.ok) {
    throw new Error('Failed to fetch filters');
  }
  return response.json(); // Assuming the response is in JSON format
};








export const getUserCollection = async (uid) => {
  try {
    const collectionRef = collection(db, 'users', uid, 'collections');
    const collectionSnapshot = await getDocs(collectionRef);
    const collectionData = collectionSnapshot.docs.map(doc => doc.data());
    return collectionData;
  } catch (error) {
    console.error("Error fetching user collection:", error);
    // return [];
  }
};
// const [userCollection, setUserCollection] = useState([]);
// export const fetchUserCollection = async (user) => {
//   if (user) {
//     try {
//       const collection = await getUserCollection(user.uid); // Pass user UID
//       setUserCollection(collection);
//     } catch (error) {
//       console.error("Error fetching user collection:", error);
//     }
//   }
// };

// import {
//   arrayRemove,
//   arrayUnion,
//   collection,
//   doc,
//   onSnapshot,
//   orderBy,
//   query,
//   setDoc,
//   updateDoc,
//   getDoc,
// } from "firebase/firestore";
// import { auth, db } from "../config/firebase.config";
// import { toast } from "react-toastify";

// // Get user details and create a document in "users" collection if it doesn't exist
// export const getUserDetail = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribeAuth = auth.onAuthStateChanged(async (userCred) => {
//       if (userCred) {
//         const userData = userCred.providerData[0]; // Basic user data from provider
//         const userDocRef = doc(db, "users", userCred.uid); // Reference to the user's document

//         try {
//           // Check if the user document already exists
//           const docSnapshot = await getDoc(userDocRef);
//           if (docSnapshot.exists()) {
//             // If document exists, resolve with the document data
//             resolve(docSnapshot.data());
//           } else {
//             // Create the user document if it doesn't exist
//             await setDoc(userDocRef, userData);
//             resolve(userData);
//           }
//         } catch (error) {
//           reject(
//             new Error(
//               "Failed to retrieve or create user document: " + error.message
//             )
//           );
//         }
//       } else {
//         reject(new Error("User is not authenticated"));
//       }
//     });

//     return () => unsubscribeAuth();
//   });
// };

// // Fetch templates collection and order by "timestamp"
// export const getTemplates = () => {
//   return new Promise((resolve, reject) => {
//     try {
//       const templateQuery = query(
//         collection(db, "templates"),
//         orderBy("timestamp", "asc")
//       );

//       const unsubscribe = onSnapshot(
//         templateQuery,
//         (querySnap) => {
//           const templates = querySnap.docs.map((doc) => doc.data());
//           resolve(templates);
//         },
//         (error) => {
//           reject(new Error("Failed to fetch templates: " + error.message));
//         }
//       );

//       return unsubscribe;
//     } catch (error) {
//       reject(new Error("Error in fetching templates: " + error.message));
//     }
//   });
// };

// // Add or remove user from "favourites" in a template document
// export const saveToFavourites = async (user, data) => {
//   const docRef = doc(db, "templates", data?._id);

//   try {
//     if (!data?.favourites?.includes(user?.uid)) {
//       await updateDoc(docRef, {
//         favourites: arrayUnion(user?.uid),
//       });
//       toast.success("Added to Favourites");
//     } else {
//       await updateDoc(docRef, {
//         favourites: arrayRemove(user?.uid),
//       });
//       toast.success("Removed from Favourites");
//     }
//   } catch (error) {
//     toast.error(`Error: ${error.message}`);
//   }
// };

// // Add or remove a template from the user's "collections"
// export const saveToCollections = async (user, data) => {
//   const docRef = doc(db, "users", user?.uid);

//   try {
//     if (!user?.collections?.includes(data?._id)) {
//       await updateDoc(docRef, {
//         collections: arrayUnion(data?._id),
//       });
//       toast.success("Saved to Collections");
//     } else {
//       await updateDoc(docRef, {
//         collections: arrayRemove(data?._id),
//       });
//       toast.success("Removed from Collections");
//     }
//   } catch (error) {
//     toast.error(`Error: ${error.message}`);
//   }
// };

// // Get details of a specific template
// export const getTemplateDetails = async (templateID) => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = onSnapshot(doc(db, "templates", templateID), (doc) => {
//       if (doc.exists()) {
//         resolve(doc.data());
//       } else {
//         reject(new Error("Template not found"));
//       }
//     });

//     return unsubscribe;
//   });
// };

// import {
//   collection,
//   doc,
//   getDocs,
//   onSnapshot,
//   orderBy,
//   query,
//   setDoc,
// } from "firebase/firestore";
// import { auth, db } from "../config/firebase.config";
// import { useQuery } from "@tanstack/react-query"; // Importing useQuery for fetching data

// // Function to get user details
// export const getUserDetail = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribeAuth = auth.onAuthStateChanged((userCred) => {
//       if (userCred) {
//         const userData = userCred.providerData[0];
//         const userDocRef = doc(db, "users", userCred.uid);

//         const unsubscribeSnapshot = onSnapshot(userDocRef, (docSnapshot) => {
//           if (docSnapshot.exists()) {
//             resolve(docSnapshot.data());
//           } else {
//             setDoc(userDocRef, userData)
//               .then(() => {
//                 resolve(userData);
//               })
//               .catch((error) => {
//                 reject(
//                   new Error("Failed to create user document: " + error.message)
//                 );
//               });
//           }
//         });

//         // Returning unsubscribe functions for cleanup
//         return () => {
//           unsubscribeAuth();
//           unsubscribeSnapshot();
//         };
//       } else {
//         reject(new Error("User is not authenticated"));
//         unsubscribeAuth();
//       }
//     });
//   });
// };

// // Function to fetch templates data
// export const fetchTemplates = async () => {
//   try {
//     // Querying the templates collection with correct format
//     const templateQuery = query(
//       collection(db, "templates"),
//       orderBy("timestamp", "asc")
//     );

//     const querySnapshot = await getDocs(templateQuery);
//     const templates = querySnapshot.docs.map((doc) => doc.data());
//     return templates;
//   } catch (error) {
//     throw new Error("Failed to fetch templates: " + error.message);
//   }
// };

// // Hook to use templates data in components
// export const useTemplates = () => {
//   // Correcting the useQuery call to object format
//   const { data, error, isLoading } = useQuery({
//     queryKey: ["templates"], // Unique key for caching and tracking
//     queryFn: fetchTemplates,  // Function to fetch templates data
//   });

//   return { data, error, isLoading };
// };

// // import {
// //   collection,
// //   doc,
// //   onSnapshot,
// //   orderBy,
// //   query,
// //   setDoc,
// // } from "firebase/firestore";
// // import { auth, db } from "../config/firebase.config";

// // export const getUserDetail = () => {
// //   return new Promise((resolve, reject) => {
// //     const unsubscribeAuth = auth.onAuthStateChanged((userCred) => {
// //       if (userCred) {
// //         const userData = userCred.providerData[0];
// //         const userDocRef = doc(db, "users", userCred.uid);

//         const unsubscribeSnapshot = onSnapshot(
//           userDocRef,
//           (docSnapshot) => {
//             if (docSnapshot.exists()) {
//               resolve(docSnapshot.data());
//             } else {
//               setDoc(userDocRef, userData)
//                 .then(() => {
//                   resolve(userData);
//                 })
//                 .catch((error) => {
//                   reject(
//                     new Error("Failed to create user document: " + error.message)
//                   );
//                 });
//             }
//           },
//           (error) => {
//             // Error handler for onSnapshot
//             reject(new Error("Failed to get user document: " + error.message));
//           }
//         );

//         // Cleanup function to unsubscribe when no longer needed
//         return () => {
//           unsubscribeSnapshot();
//         };
//       } else {
//         reject(new Error("User is not authenticated"));
//       }
//     });

//     // Cleanup function to unsubscribe auth when no longer needed
//     return () => {
//       unsubscribeAuth();
//     };
//   });
// };

// export const getTemplates = () => {
//   return new Promise((resolve, reject) => {
//     const templateQuery = query(
//       collection(db, "templates"),
//       orderBy("timestamp", "asc")
//     );
//     const unsubscribe = onSnapshot(
//       templateQuery,
//       (querySnap) => {
//         const templates = querySnap.docs.map((doc) => doc.data());
//         resolve(templates);
//       },
//       (error) => {
//         reject(new Error("Failed to get templates: " + error.message));
//       }
//     );

//     // Return unsubscribe to allow cleanup
//     return () => {
//       unsubscribe();
//     };
//   });
// };

// import {
//   collection,
//   doc,
//   onSnapshot,
//   orderBy,
//   query,
//   setDoc,
// } from "firebase/firestore";
// import { auth, db } from "../config/firebase.config";

// export const getUserDetail = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribeAuth = auth.onAuthStateChanged((userCred) => {
//       if (userCred) {
//         const userData = userCred.providerData[0];
//         const userDocRef = doc(db, "users", userCred.uid);

//         // Set up the onSnapshot listener
//         const unsubscribeSnapshot = onSnapshot(
//           userDocRef,
//           (docSnapshot) => {
//             if (docSnapshot.exists()) {
//               resolve(docSnapshot.data());
//             } else {
//               // If the document doesn't exist, create it
//               setDoc(userDocRef, userData)
//                 .then(() => {
//                   resolve(userData);
//                 })
//                 .catch((error) => {
//                   reject(
//                     new Error("Failed to create user document: " + error.message)
//                   );
//                 });
//             }
//           },
//           (error) => {
//             // Handle errors with onSnapshot
//             reject(new Error("Failed to get user document: " + error.message));
//           }
//         );

//         // Cleanup both auth and snapshot listeners when done
//         return () => {
//           unsubscribeSnapshot();
//           unsubscribeAuth();
//         };
//       } else {
//         // Handle the case where the user is not authenticated
//         reject(new Error("User is not authenticated"));
//         unsubscribeAuth();
//       }
//     });

//     // Return cleanup function to be used if needed
//     return () => {
//       unsubscribeAuth();
//     };
//   });
// };

// export const getTemplates = () => {
//   return new Promise((resolve, reject) => {
//     const templateQuery = query(
//       collection(db, "templates"),
//       orderBy("timestamp", "asc")
//     );

//     // Set up the onSnapshot listener for templates
//     const unsubscribe = onSnapshot(
//       templateQuery,
//       (querySnap) => {
//         const templates = querySnap.docs.map((doc) => doc.data());
//         resolve(templates);
//       },
//       (error) => {
//         // Handle errors with onSnapshot
//         reject(new Error("Failed to get templates: " + error.message));
//       }
//     );

//     // Return cleanup function to unsubscribe when done
//     return () => {
//       unsubscribe();
//     };
//   });
// };

// import { doc, onSnapshot, setDoc } from "firebase/firestore";
// import { auth, db } from "../config/firebase.config";

// export const getUserDetail = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = auth.onAuthStateChanged((userCred) => {
//       if (userCred) {
//         const userData = userCred.providerData[0];
//         console.log("User Data:", userData);

//         const userDocRef = doc(db, "users", userData?.uid);

//         const snapshotUnsubscribe = onSnapshot(userDocRef, (_doc) => {
//           if (_doc.exists()) {
//             resolve(_doc.data());
//           } else {
//             setDoc(userDocRef, userData).then(() => {
//               resolve(userData);
//             });
//           }
//         });

//         // Return this unsubscribe for cleanup if needed
//         return snapshotUnsubscribe;
//       } else {
//         reject(new Error("User is not authenticated"));
//       }
//     });

//     // The outer unsubscribe function for the auth state listener
//     return unsubscribe;
//   });
// };

// import { doc, onSnapshot, setDoc } from "firebase/firestore";
// import { auth, db } from "../config/firebase.config";

// export const getUserDetail = () => {
//   return new Promise((resolve, reject) => {
//     // Auth state change listener
//     const authUnsubscribe = auth.onAuthStateChanged((userCred) => {
//       if (userCred) {
//         const userData = userCred.providerData[0];

//         // Firestore snapshot listener for user data
//         const userDocRef = doc(db, "users", userData?.uid);
//         const snapshotUnsubscribe = onSnapshot(userDocRef, (_doc) => {
//           if (_doc.exists()) {
//             resolve(_doc.data());
//           } else {
//             setDoc(userDocRef, userData)
//               .then(() => resolve(userData))
//               .catch((error) => reject(error));
//           }
//         });

//         // Clean up Firestore listener
//         return () => snapshotUnsubscribe();
//       } else {
//         reject(new Error("User is not authenticated"));
//       }
//     });

//     // Clean up Auth listener
//     return () => authUnsubscribe();
//   });
// };
