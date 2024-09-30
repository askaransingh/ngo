// import React from "react";
// import { Logo } from "../assets-20240903T162903Z-001/assets";
// import { Footer } from "../containers";
// import { AuthButtonWithProvider, MainSpinner } from "../components";
// // import { toast } from 'react-toastify';

// import { FaGoogle, FaGithub } from "react-icons/fa6";
// import useUser from "../hooks/useUser";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// const Authentication = () => {
//   const { data, isLoading, isError } = useUser();

//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!isLoading && data) {
//       navigate("/", { replace: true });
//     }
//   }, [isLoading, data]);

//   if (isLoading) {
//     return <MainSpinner />;
//   }
//   return (
//     <div className="auth-section">
//       <img src={Logo} className="w-12 h-auto object-contain" alt="" />
//       <div className="w-full flex flex-1 flex-col items-center justify-center gap-6 ">
//         <h1 className="text-3xl lg:text-4xl text-blue-700">
//           Welcome to Expressume
//         </h1>
//         <p className="text-base text-gray-600">express way to create resume</p>
//         <h2 className="text-2xl text-gray-600">Authenticate</h2>
//         <div className="w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6">
//           <AuthButtonWithProvider
//             Icon={FaGoogle}
//             label={"Signin with Google"}
//             provider={"GoogleAuthProvider"}
//           />
//           <AuthButtonWithProvider
//             Icon={FaGithub}
//             label={"Signin with Github"}
//             provider={"GithubAuthProvider"}
//           />
//         </div>
//       </div>
//       {/* <button onClick={()=>toast.success("Woo its too eay to integrate")}>
//       Click me
//       </button> */}
//       <Footer />
//     </div>
//   );
// };

// export default Authentication;









// import React, { useEffect } from "react";
// import { Logo } from "../assets-20240903T162903Z-001/assets";
// import { Footer } from "../containers";
// import { AuthButtonWithProvider, MainSpinner } from "../components";
// import { FaGoogle, FaGithub } from "react-icons/fa6";
// import useUser from "../hooks/useUser";
// import { useNavigate } from "react-router-dom";

// const Authentication = () => {
//   const { data, isLoading, isError } = useUser();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isLoading && data) {
//       navigate("/", { replace: true });
//     }
//   }, [isLoading, data, navigate]);

//   if (isLoading) {
//     return <MainSpinner />;
//   }
 
//   return (
//     <div className="auth-section">
//       <img src={Logo} className="w-12 h-auto object-contain" alt="" />
//       <div className="w-full flex flex-1 flex-col items-center justify-center gap-6 ">
//         <h1 className="text-3xl lg:text-4xl text-blue-700">Welcome to Expressume</h1>
//         <p className="text-base text-gray-600">Express way to create resume</p>
//         <h2 className="text-2xl text-gray-600">Authenticate</h2>
//         <div className="w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6">
//           <AuthButtonWithProvider
//             Icon={FaGoogle}
//             label={"Signin with Google"}
//             provider={"GoogleAuthProvider"}
//           />
//           <AuthButtonWithProvider
//             Icon={FaGithub}
//             label={"Signin with Github"}
//             provider={"GithubAuthProvider"}
//           />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Authentication;




// import React, { useEffect, useState } from "react";
// import { Logo } from "../assets-20240903T162903Z-001/assets";
// import { Footer } from "../containers";
// import { AuthButtonWithProvider, MainSpinner } from "../components";
// import { FaGoogle, FaGithub } from "react-icons/fa6";
// import useUser from "../hooks/useUser";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../config/firebase.config";
// import { onAuthStateChanged } from "firebase/auth";

// const Authentication = () => {
//   const { data: user,isLoading, isError } = useUser();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Redirect if the user is signed in
//     if (!user?.email?.[0]) {
//       // Redirect to the home page or a different route
//       navigate("/auth", { replace: true });
//     }
//   }, [isLoading, user, navigate]);
  
  
  

//   if (isLoading) {
//     // Show a spinner or loading indicator while the user data is being fetched
//     return <MainSpinner />;
//   }

//   if (isError) {
//     // Handle the error state if user fetching failed
//     return <div>Error loading user data.</div>;
//   }

//   return (
//     <div className="auth-section">
//       <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
//       <div className="w-full flex flex-1 flex-col items-center justify-center gap-6">
//         <h1 className="text-3xl lg:text-4xl text-blue-700">Welcome to Expressume</h1>
//         <p className="text-base text-gray-600">Express way to create resume</p>
//         <h2 className="text-2xl text-gray-600">Authenticate</h2>
//         <div className="w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6">
//           <AuthButtonWithProvider
//             Icon={FaGoogle}
//             label={"Signin with Google"}
//             provider={"GoogleAuthProvider"}
//           />
//           <AuthButtonWithProvider
//             Icon={FaGithub}
//             label={"Signin with Github"}
//             provider={"GithubAuthProvider"}
//           />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Authentication;



// import React, { useEffect, useState } from "react";
// import { Logo } from "../assets-20240903T162903Z-001/assets";
// import { Footer } from "../containers";
// import { AuthButtonWithProvider, MainSpinner } from "../components";
// import { FaGoogle, FaGithub } from "react-icons/fa6";
// import useUser from "../hooks/useUser";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../config/firebase.config";
// import { onAuthStateChanged } from "firebase/auth";

// const Authentication = () => {
//   const { data: user, isLoading, isError } = useUser();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // If user is already signed in, redirect to profile
//         navigate("/profile", { replace: true });
//       }
//     });
//     return () => unsubscribe(); // Clean up the listener
//   }, [navigate]);

//   if (isLoading) {
//     return <MainSpinner />;
//   }

//   if (isError) {
//     return <div>Error loading user data.</div>;
//   }

//   return (
//     <div className="auth-section">
//       <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
//       <div className="w-full flex flex-1 flex-col items-center justify-center gap-6">
//         <h1 className="text-3xl lg:text-4xl text-blue-700">Welcome to Expressume</h1>
//         <p className="text-base text-gray-600">Express way to create resume</p>
//         <h2 className="text-2xl text-gray-600">Authenticate</h2>
//         <div className="w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6">
//           <AuthButtonWithProvider
//             Icon={FaGoogle}
//             label={"Signin with Google"}
//             provider={"GoogleAuthProvider"}
//           />
//           <AuthButtonWithProvider
//             Icon={FaGithub}
//             label={"Signin with Github"}
//             provider={"GithubAuthProvider"}
//           />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Authentication;





// import React, { useEffect } from "react";
// import { Logo } from "../assets-20240903T162903Z-001/assets";
// import { Footer } from "../containers";
// import { AuthButtonWithProvider, MainSpinner } from "../components";
// import { FaGoogle, FaGithub } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../config/firebase.config";
// import { onAuthStateChanged } from "firebase/auth";

// const Authentication = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log("Setting up Firebase Auth listener in Authentication...");
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log("User is already authenticated: ", user);
//         navigate("/", { replace: true });
//       } else {
//         console.log("No user is authenticated, showing login screen.");
//       }
//     });
//     return () => unsubscribe();
//   }, [navigate]);

//   return (
//     <div className="auth-section">
//       <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
//       <div className="w-full flex flex-1 flex-col items-center justify-center gap-6">
//         <h1 className="text-3xl lg:text-4xl text-blue-700">Welcome to Expressume</h1>
//         <p className="text-base text-gray-600">Express way to create resume</p>
//         <h2 className="text-2xl text-gray-600">Authenticate</h2>
//         <div className="w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6">
//           <AuthButtonWithProvider
//             Icon={FaGoogle}
//             label={"Signin with Google"}
//             provider={"GoogleAuthProvider"}
//           />
//           <AuthButtonWithProvider
//             Icon={FaGithub}
//             label={"Signin with Github"}
//             provider={"GithubAuthProvider"}
//           />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Authentication;



// import React, { useState } from "react";
// import { Logo } from "../assets";
// import { Footer } from "../containers";
// import { AuthButtonWithProvider, MainSpinner } from "../components";
// import { FaGoogle, FaGithub } from "react-icons/fa6";
// import useUser from "../hooks/useUser";

// const Authentication = () => {
//   const { data: user, isLoading, isError } = useUser();

//   if (isLoading) {
//     return <MainSpinner />;
//   }

//   if (isError) {
//     return <div>Error loading user data.</div>;
//   }

//   return (
//     <div className="auth-section">
//       <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
//       <div className="w-full flex flex-1 flex-col items-center justify-center gap-6">
//         <h1 className="text-3xl lg:text-4xl text-blue-700">Welcome to Expressume</h1>
//         <p className="text-base text-gray-600">Express way to create resume</p>
//         <h2 className="text-2xl text-gray-600">Authenticate</h2>
//         <div className="w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6">
//           <AuthButtonWithProvider
//             Icon={FaGoogle}
//             label={"Signin with Google"}
//             provider={"GoogleAuthProvider"}
//           />
//           <AuthButtonWithProvider
//             Icon={FaGithub}
//             label={"Signin with Github"}
//             provider={"GithubAuthProvider"}
//           />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Authentication;




import React, { useState } from "react";
import  Logo  from "../assets-20240903T162903Z-001/assets/img/logo.png";
import { Footer } from "../containers";
import { AuthButtonWithProvider, MainSpinner } from "../components";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import useUser from "../hooks/useUser";

const Authentication = () => {
  const { data: user, isLoading, isError } = useUser();

  if (isLoading) {
    return <MainSpinner />;
  }

  if (isError) {
    return <div>Error loading user data.</div>;
  }

  return (
    <div className="auth-section">
      <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
      <div className="w-full flex flex-1 flex-col items-center justify-center gap-6">
        <h1 className="text-3xl lg:text-4xl text-blue-700">Welcome to Expressume</h1>
        <p className="text-base text-gray-600">Express way to create resume</p>
        <h2 className="text-2xl text-gray-600">Authenticate</h2>
        <div className="w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6">
          <AuthButtonWithProvider
            Icon={FaGoogle}
            label={"Signin with Google"}
            provider={"GoogleAuthProvider"}
          />
          <AuthButtonWithProvider
            Icon={FaGithub}
            label={"Signin with Github"}
            provider={"GithubAuthProvider"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Authentication;





// getUserDetail.js


// export default Authentication;





  // useEffect(() => {
  //   // If data is still loading, skip redirection
  //   if (isLoading) return;
  
  //   // Redirect to /auth if the user does not have an email address
  //   if (!user || !user.email) {
  //     navigate("/auth", { replace: true });
  //   }
  // }, [isLoading, user, navigate]);
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setIsLoading(false);
  //     if (auth) {
  //       // User is authenticated
  //       navigate("/");
  //     } 
     
  //   });

  //   return () => unsubscribe();
  // }, [navigate]);

  // return isLoading;








































// Authentication.jsx
// import React, { useEffect } from "react";
// import { Logo } from "../assets-20240903T162903Z-001/assets";
// import { Footer } from "../containers";
// import { AuthButtonWithProvider, MainSpinner } from "../components";
// import { FaGoogle, FaGithub } from "react-icons/fa6";
// import useUser from "../hooks/useUser";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../config/firebase.config"; // Ensure this is the correct path
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// const Authentication = () => {
//   // Destructure properties from useUser hook
//   const { data, isLoading, isError } = useUser();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Navigate to home when user data is available
//     if (!isLoading && data) {
//       navigate("/", { replace: true });
//     }
//   }, [isLoading, data, navigate]);

//   // Render loading spinner when data is loading
//   if (isLoading) {
//     return <MainSpinner />;
//   }

//   // Optional: Handle error state
//   if (isError) {
//     return <div className="error-message">Failed to load user data</div>;
//   }

//   const handleSignIn = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       await signInWithPopup(auth, provider);
//       console.log("User signed in successfully");
//     } catch (error) {
//       console.error("Error signing in: ", error);
//     }
//   };

//   return (
//     <div className="auth-section">
//       <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
//       <div className="w-full flex flex-1 flex-col items-center justify-center gap-6">
//         <h1 className="text-3xl lg:text-4xl text-blue-700">
//           Welcome to Expressume
//         </h1>
//         <p className="text-base text-gray-600">
//           Express way to create a resume
//         </p>
//         <h2 className="text-2xl text-gray-600">Authenticate</h2>
//         <div className="w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6">
//           <AuthButtonWithProvider
//             Icon={FaGoogle}
//             label={"Sign in with Google"}
//             provider={"GoogleAuthProvider"}
//           />
//           <AuthButtonWithProvider
//             Icon={FaGithub}
//             label={"Sign in with Github"}
//             provider={"GithubAuthProvider"}
//           />
//         </div>
//       </div>
//       <button onClick={handleSignIn}>Sign in with Google</button>
//       <Footer />
//     </div>
//   );
// };

// export default Authentication;

// import React, { useEffect } from "react";
// import { Logo } from "../assets-20240903T162903Z-001/assets";
// import { Footer } from "../containers";
// import { AuthButtonWithProvider } from "../components";
// // import { toast } from 'react-toastify';

// import { FaGoogle, FaGithub } from "react-icons/fa6";
// import useUser from "../hooks/useUser";
// import { useNavigate } from "react-router-dom";

// const Authentication = () => {
//   const { data, isLoading, isError } = useUser();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isLoading && data) {
//       navigate("/", { replace: true });
//     }
//   }, [isLoading, data, navigate]); // Added `navigate` to the dependency array

//   // Optional: Handle error state
//   if (isError) {
//     return <p className="text-red-500">Failed to load user data. Please try again later.</p>;
//   }

//   return (
//     <div className="auth-section">
//       <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
//       <div className="w-full flex flex-1 flex-col items-center justify-center gap-6 ">
//         <h1 className="text-3xl lg:text-4xl text-blue-700">Welcome to Expressume</h1>
//         <p className="text-base text-gray-600">express way to create resume</p>
//         <h2 className="text-2xl text-gray-600">Authenticate</h2>
//         <div className="w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6">
//           <AuthButtonWithProvider
//             Icon={FaGoogle}
//             label={"Signin with Google"}
//             provider={"GoogleAuthProvider"}
//           />
//           <AuthButtonWithProvider
//             Icon={FaGithub}
//             label={"Signin with GitHub"} // Corrected the label
//             provider={"GithubAuthProvider"}
//           />
//         </div>
//       </div>
//       {/* <button onClick={()=>toast.success("Woo its too easy to integrate")}> */}
//         {/* Click me  */}
//       {/* </button> */}
//       <Footer />
//     </div>
//   );
// };

// export default Authentication;

// import React, { useEffect } from "react";
// import { Logo } from "../assets-20240903T162903Z-001/assets";
// import { Footer } from "../containers";
// import { AuthButtonWithProvider } from "../components";
// import { FaGoogle, FaGithub } from "react-icons/fa6";
// import useUser from "../hooks/useUser";
// import { useNavigate } from "react-router-dom";

// const Authentication = () => {
//   const { data, isLoading, isError } = useUser();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Navigate when user data is successfully fetched
//     if (!isLoading && data) {
//       navigate("/", { replace: true });
//     }
//   }, [isLoading, data, navigate]); // Added `navigate` to the dependency array

//   // Optional: Handle error state
//   if (isError) {
//     return <p className="text-red-500">Failed to load user data. Please try again later.</p>;
//   }

//   return (
//     <div className="auth-section">
//       <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
//       <div className="w-full flex flex-1 flex-col items-center justify-center gap-6">
//         <h1 className="text-3xl lg:text-4xl text-blue-700">Welcome to Expressume</h1>
//         <p className="text-base text-gray-600">Express way to create a resume</p>
//         <h2 className="text-2xl text-gray-600">Authenticate</h2>
//         <div className="w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6">
//           <AuthButtonWithProvider
//             Icon={FaGoogle}
//             label={"Signin with Google"}
//             provider={"GoogleAuthProvider"}
//           />
//           <AuthButtonWithProvider
//             Icon={FaGithub}
//             label={"Signin with GitHub"}
//             provider={"GithubAuthProvider"}
//           />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Authentication;

// import React, { useEffect } from "react";
// import { Logo } from "../assets-20240903T162903Z-001/assets";
// import { Footer } from "../containers";
// import { AuthButtonWithProvider } from "../components";
// import { FaGoogle, FaGithub } from "react-icons/fa6";
// import useUser from "../hooks/useUser";
// import { useNavigate } from "react-router-dom";

// const Authentication = () => {
//   const { data, isLoading, isError, error } = useUser();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Navigate to home when user data is fetched successfully
//     if (!isLoading && data) {
//       navigate("/", { replace: true });
//     }
//   }, [isLoading, data, navigate]);

//   // Display the exact error message to help with debugging
//   if (isError) {
//     return <p className="text-red-500">Error: {error?.message || "Failed to load user data. Please try again later."}</p>;
//   }

//   return (
//     <div className="auth-section">
//       <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
//       <div className="w-full flex flex-1 flex-col items-center justify-center gap-6">
//         <h1 className="text-3xl lg:text-4xl text-blue-700">Welcome to Expressume</h1>
//         <p className="text-base text-gray-600">Express way to create a resume</p>
//         <h2 className="text-2xl text-gray-600">Authenticate</h2>
//         <div className="w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6">
//           <AuthButtonWithProvider
//             Icon={FaGoogle}
//             label={"Signin with Google"}
//             provider={"GoogleAuthProvider"}
//           />
//           <AuthButtonWithProvider
//             Icon={FaGithub}
//             label={"Signin with GitHub"}
//             provider={"GithubAuthProvider"}
//           />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Authentication;
