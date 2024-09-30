// import { useState } from "react";
// import { getUserCollection } from ".";
// const [userCollection, setUserCollection] = useState([]);

// export const fetchUserCollection = async (user) => {
//     if (user) {
//       try {
//         const collection = await getUserCollection(user.uid); // Pass user UID
//         setUserCollection(collection);
//       } catch (error) {
//         console.error("Error fetching user collection:", error);
//       }
//     }
//   };

// src/hooks/useUserCollection.js
import { getUserCollection } from "../api"; // Adjust the path based on your project structure

export const fetchUserCollection = async (user) => {
  if (user) {
    try {
      const collection = await getUserCollection(user.uid);
      return collection; // Return the collection data
    } catch (error) {
      console.error("Error fetching user collection:", error);
      return []; // Return an empty array on error
    }
  } else {
    return []; // Return an empty array if no user is provided
  }
};
