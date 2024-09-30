// import {getApp, getApps, initializeApp} from "firebase/app"
// import {getAuth} from "firebase/auth";
// import {getFirestore} from "firebase/firestore";
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECTID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APPPID,
//     measurementId: process.env.REACT_APP_MEASUREMENT_ID
//   };

//   const app = getApps.length>0 ? getApp() : initializeApp(firebaseConfig)
//   const auth = getAuth(app);
//   const db = getFirestore(app);

//   export {auth,db};

import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC88JId4F6S8bu1_8G86Smqv5oXibC7NUk",
  authDomain: "cv-builder-56c39.firebaseapp.com",
  projectId: "cv-builder-56c39",
  storageBucket: "cv-builder-56c39.appspot.com",
  messagingSenderId: "478934624630",
  appId: "1:478934624630:web:90acacbb512f8f0a007257"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };
