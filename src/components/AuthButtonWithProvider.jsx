// import React from "react";
// import { FaChevronRight } from "react-icons/fa6";
// import {
//   GoogleAuthProvider,
//   GithubAuthProvider,
//   signInWithRedirect,
// } from "firebase/auth";
// import { auth } from "../config/firebase.config";
// const AuthButtonWithProvider = ({ Icon, label, provider }) => {
//   const googleAuthProvider = new GoogleAuthProvider();
//   const gitHubAuthProvider = new GithubAuthProvider();
//   const handleClick = async () => {
//     switch (provider) {
//       case "GoogleAuthProvider":
//         await signInWithRedirect(auth, googleAuthProvider)
//           .then((result) => {
//             console.log(result);
//           })
//           .catch((err) => {
//             console.log(`Error : ${err.Message}`);
//           });
//         break;
//       case "GithubAuthProvider":
//         console.log("Inside the GitHUb auth");
//         break;
//       default:
//         console.log("Inside the Google Auth");
//         break;
//     }
//   };
//   return (
//     <div
//       onClick={handleClick}
//       className="w-full px-4 py-3 rounded-md border-2 border-blue-700 flex items-center justify-between cursor-pointer group hover:bg-blue-700 active:scale-95 duration-150 hover:shadow-md"
//     >
//       <Icon className="text-txtPrimary text-xl group-hover:text-white" />
//       <p className="text-txtPrimary text-lg group-hover:text-white">{label}</p>

//       <FaChevronRight className="text-txtPrimary text-base group-hover:text-white" />
//     </div>
//   );
// };

// export default AuthButtonWithProvider;

// import React from "react";
// import { FaChevronRight } from "react-icons/fa6";
// import { GoogleAuthProvider, GithubAuthProvider, signInWithRedirect } from "firebase/auth";
// import { auth } from "../config/firebase.config";

// const AuthButtonWithProvider = ({ Icon, label, provider }) => {
//   const googleAuthProvider = new GoogleAuthProvider();
//   const gitHubAuthProvider = new GithubAuthProvider();
//   const handleClick = async () => {
//     try {
//       switch (provider) {
//         case "GoogleAuthProvider":
//           await signInWithRedirect(auth, googleAuthProvider).then((result)=> {
//             console.log(result);
//           }).catch((err) => {
//             console.log(`Error : ${err.Message}`);
//           });
//           break;
//         case "GithubAuthProvider":
//           await signInWithRedirect(auth, new GithubAuthProvider());
//           break;
//         default:
//           console.error("Unsupported provider");
//           break;
//       }
//     } catch (err) {
//       console.error(`Error: ${err.message}`);
//     }
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className="w-full px-4 py-3 rounded-md border-2 border-blue-700 flex items-center justify-between cursor-pointer group hover:bg-blue-700 active:scale-95 duration-150 hover:shadow-md"
//     >
//       <Icon className="text-txtPrimary text-xl group-hover:text-white" />
//       <p className="text-txtPrimary text-lg group-hover:text-white">{label}</p>
//       <FaChevronRight className="text-txtPrimary text-base group-hover:text-white" />
//     </div>
//   );
// };

// export default AuthButtonWithProvider;

// import React from "react";
// import { FaChevronRight } from "react-icons/fa6";
// import {
//   GoogleAuthProvider,
//   GithubAuthProvider,
//   signInWithRedirect,
//   signInWithPopup,
// } from "firebase/auth";
// import { auth } from "../config/firebase.config";

// const AuthButtonWithProvider = ({ Icon, label, provider }) => {
//   // Initialize providers outside the handleClick function for efficiency.
//   const googleAuthProvider = new GoogleAuthProvider();
//   const gitHubAuthProvider = new GithubAuthProvider();

//   const handleClick = async () => {
//     try {
//       switch (provider) {
//         case "GoogleAuthProvider":
//           await signInWithPopup(auth, new GoogleAuthProvider())
//             .then((result) => {
//               console.log(result);
//             })
//             .catch((err) => {
//               console.log(`Error: ${err.message}`); // Fixed err.Message to err.message
//             });
//           break;

//         case "GithubAuthProvider":
//           await signInWithRedirect(auth, gitHubAuthProvider)
//             .then((result) => {
//               console.log(result);
//             })
//             .catch((err) => {
//               console.log(`Error: ${err.message}`);
//             });
//           break;

//         default:
//           console.error("Unsupported provider");
//           break;
//       }
//     } catch (err) {
//       console.error(`Error: ${err.message}`);
//     }
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className="w-full px-4 py-3 rounded-md border-2 border-blue-700 flex items-center justify-between cursor-pointer group hover:bg-blue-700 active:scale-95 duration-150 hover:shadow-md"
//     >
//       <Icon className="text-txtPrimary text-xl group-hover:text-white" />
//       <p className="text-txtPrimary text-lg group-hover:text-white">{label}</p>
//       <FaChevronRight className="text-txtPrimary text-base group-hover:text-white" />
//     </div>
//   );
// };

// export default AuthButtonWithProvider;
 


import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaChevronRight } from "react-icons/fa6";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebase.config";

const AuthButtonWithProvider = ({ Icon, label, provider }) => {
  // Initialize providers outside the handleClick function for efficiency.
  const googleAuthProvider = new GoogleAuthProvider();
  const gitHubAuthProvider = new GithubAuthProvider();
  
  // Initialize useNavigate hook
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      switch (provider) {
        case "GoogleAuthProvider":
          await signInWithPopup(auth, googleAuthProvider)
            .then((result) => {
              console.log(result);
              // Redirect to the home screen upon successful sign-in
              navigate('/'); // Redirect to home screen
            })
            .catch((err) => {
              console.log(`Error: ${err.message}`);
            });
          break;

        case "GithubAuthProvider":
          await signInWithRedirect(auth, gitHubAuthProvider)
            .then((result) => {
              console.log(result);
              // You might want to handle redirection after successful sign-in with redirect
            })
            .catch((err) => {
              console.log(`Error: ${err.message}`);
            });
          break;

        default:
          console.error("Unsupported provider");
          break;
      }
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="w-full px-4 py-3 rounded-md border-2 border-blue-700 flex items-center justify-between cursor-pointer group hover:bg-blue-700 active:scale-95 duration-150 hover:shadow-md"
    >
      <Icon className="text-txtPrimary text-xl group-hover:text-white" />
      <p className="text-txtPrimary text-lg group-hover:text-white">{label}</p>
      <FaChevronRight className="text-txtPrimary text-base group-hover:text-white" />
    </div>
  );
};

export default AuthButtonWithProvider;
