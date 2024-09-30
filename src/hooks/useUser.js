// import { useQuery } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { getUserDetail } from "../api";
// const useUser = () => {
//   const { data, isLoading, isError, refetch } = useQuery(
//     "user",
//     async () => {
//       try {
//         const userDetail = await getUserDetail();
//         return userDetail;
//       } catch (err) {
//         if (!err.message.includes("not authenticated")) {
//           toast.err("something went wrong....");
//         }
//       }
//     },
//     { refetchOnWindowFocus: false }
//   );
//   return { data, isLoading, isError, refetch };
// };

// export default useUser;

// import { useQuery } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { getUserDetail } from "../api";

// const useUser = () => {
//   const { data, isLoading, isError, refetch } = useQuery({
//     queryKey: ["user"],
//     queryFn: async () => {
//       try {
//         const userDetail = await getUserDetail();
//         return userDetail
//       } catch (err) {
//         if (!err.message.includes("not authenticated")) {
//           toast.err("something went wrong...."); // Fixed toast method from `toast.err` to `toast.error`
//         }
//         // Rethrow the error to ensure that isError is set properly
//         // throw err;
//       }
//     },
//     // refetchOnWindowFocus: false,
//   });

//   // return { data, isLoading, isError, refetch };
// };

// export default useUser;

// useUser.js
// import { useQuery } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { getUserDetail } from "../api";

// const useUser = () => {
//   const { data, isLoading, isError, refetch } = useQuery({
//     queryKey: ["user"],
//     queryFn: async () => {
//       try {
//         const userDetail = await getUserDetail();
//         return userDetail;
//       } catch (err) {
//         if (!err.message.includes("not authenticated")) {
//           toast.err("Something went wrong...."); // Corrected the toast method to `toast.error`
//         }
//       }
//     },
//     refetchOnWindowFocus: false,
//   });

//   return { data, isLoading, isError, refetch }; // Ensure the hook returns the data
// };

// export default useUser;

// import { useQuery } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { getUserDetail } from "../api";

// const useUser = () => {
//   const { data, isLoading, isError, refetch } = useQuery({
//     queryKey: ["user"],
//     queryFn: async () => {
//       try {
//         const userDetail = await getUserDetail();

//         // Check if userDetail is undefined and handle it
//         if (!userDetail) {
//           throw new Error("Fetched user detail is undefined");
//         }

//         return userDetail;
//       } catch (err) {
//         // Check if error message doesn't include "not authenticated"
//         if (!err.message.includes("not authenticated")) {
//           toast.error("Something went wrong....");
//         }

//         // Return an empty object or default value if there's an error
//         return {}; // Or return a default value suitable for your use case
//       }
//     },
//     refetchOnWindowFocus: false,
//   });

//   return { data, isLoading, isError, refetch }; // Ensure the hook returns the data
// };

// export default useUser;








import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getUserDetail } from "../api";

const useUser = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const userDetail = await getUserDetail();
        if (!userDetail) {
          throw new Error("Fetched user detail is undefined");
        }
        return userDetail;
      } catch (err) {
        if (!err.message.includes("not authenticated")) {
          toast.error("Something went wrong....");
        }
        return {}; // Or return a default value suitable for your use case
      }
    },
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError, refetch };
};

export default useUser;





// import { useQuery } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { getUserDetail } from "../api";

// const useUser = () => {
//   const { data, isLoading, isError, refetch } = useQuery({
//     queryKey: ["user"],
//     queryFn: async () => {
//       try {
//         const userDetail = await getUserDetail();
//         console.log("Fetched user detail:", userDetail); // Verify fetched data
//         if (!userDetail || Object.keys(userDetail).length === 0) {
//           throw new Error("Fetched user detail is empty or undefined");
//         }
//         return userDetail;
//       } catch (err) {
//         // console.error("Error in fetching user data:", err); // Log detailed error
//         if (!err.message.includes("not authenticated")) {
//           toast.error("Something went wrong....");
//         }
//         return {}; // Handle the error with a fallback return value
//       }
//     },
//     refetchOnWindowFocus: false,
//   });

//   return { data, isLoading, isError, refetch };
// };

// export default useUser;




// import { useQuery } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { getUserDetail } from "../api";

// const useUser = () => {
//   const { data = { collections: [] }, isLoading, isError, refetch } = useQuery({
//     queryKey: ["user"],
//     queryFn: async () => {
//       try {
//         const userDetail = await getUserDetail();
//         console.log("Fetched user detail:", userDetail); // Verify fetched data
//         if (!userDetail || Object.keys(userDetail).length === 0) {
//           throw new Error("Fetched user detail is empty or undefined");
//         }
//         return userDetail;
//       } catch (err) {
//         // console.error("Error in fetching user data:", err); // Log detailed error
//         if (!err.message.includes("not authenticated")) {
//           toast.error("Something went wrong....");
//         }
//         return { collections: [] }; // Handle the error with a fallback return value
//       }
//     },
//     refetchOnWindowFocus: false,
//   });

//   return { data, isLoading, isError, refetch };
// };

// export default useUser;





// import { useQuery } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { getUserDetail } from "../api";

// const useUser = () => {
//   const { data, isLoading, isError, refetch } = useQuery({
//     queryKey: ["user"],
//     queryFn: async () => {
//       try {
//         const userDetail = await getUserDetail();
//         console.log("Fetched user detail:", userDetail); // Verify fetched data
//         if (!userDetail || Object.keys(userDetail).length === 0) {
//           throw new Error("Fetched user detail is empty or undefined");
//         }
//         return userDetail;
//       } catch (err) {
//         if (!err.message.includes("not authenticated")) {
//           toast.error("Something went wrong....");
//         }
//         return {}; // Handle the error with a fallback return value
//       }
//     },
//     refetchOnWindowFocus: false,
//   });

//   return { data, isLoading, isError, refetch };
// };

// export default useUser;









// import { Firestore } from '@firebase/firestore';
// import { useState, useEffect } from 'react';
// // import { firestore } from '../firebase'; // Adjust this import based on your setup

// const useUser = () => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userDoc = await Firestore.collection('users').doc('109729022777570513634').get();
//         if (userDoc.exists) {
//           setData(userDoc.data());
//         } else {
//           console.error('No such document!');
//         }
//       } catch (error) {
//         setIsError(true);
//         console.error('Error fetching user data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   return { data, isLoading, isError };
// };

// export default useUser;






















// // useUser.js
// import { useQuery } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { getUserDetail } from "../api";

// const useUser = () => {
//   const { data, isLoading, isError, refetch } = useQuery({
//     queryKey: ["user"],
//     queryFn: async () => {
//       try {
//         const userDetail = await getUserDetail();
//         if (userDetail) {
//           return userDetail;
//         } else {
//           throw new Error("User data is empty");
//         }
//       } catch (err) {
//         if (!err.message.includes("not authenticated")) {
//           toast.error("Something went wrong: " + err.message);
//         }
//         return {}; // Return an empty object in case of an error
//       }
//     },
//     refetchOnWindowFocus: false,
//   });

//   return { data, isLoading, isError, refetch };
// };

// export default useUser;
























// // import { useQuery } from "@tanstack/react-query";
// // import { toast } from "react-toastify";
// // import { getUserDetail } from "../api";

// // const useUser = () => {
// //   const { data, isLoading, isError, error, refetch } = useQuery(
// //     "user",
// //     async () => {
// //       try {
// //         const userDetail = await getUserDetail();
// //         return userDetail;
// //       } catch (err) {
// //         console.error("Error fetching user details:", err); // Log the error
// //         if (!err.message.includes("not authenticated")) {
// //           toast.error("Something went wrong..."); // Ensure correct function name
// //         }
// //         throw err; // Ensure the error is re-thrown to trigger isError
// //       }
// //     },
// //     { refetchOnWindowFocus: false }
// //   );

// //   return { data, isLoading, isError, error, refetch };
// // };

// // export default useUser;

// // import { useQuery } from "@tanstack/react-query";
// // import { toast } from "react-toastify";
// // import { getUserDetail } from "../api";

// // const useUser = () => {
// //   const { data, isLoading, isError, error, refetch } = useQuery({
// //     queryKey: ["user"], // Now using the object form
// //     queryFn: async () => {
// //       try {
// //         const userDetail = await getUserDetail();
// //         return userDetail;
// //       } catch (err) {
// //         console.error("Error fetching user details:", err);
// //         if (!err.message.includes("not authenticated")) {
// //           toast.error("Something went wrong...");
// //         }
// //         throw err;
// //       }
// //     },
// //     refetchOnWindowFocus: false,
// //   });

// //   return { data, isLoading, isError, error, refetch };
// // };

// // export default useUser;

// // import { useQuery } from "@tanstack/react-query";
// // import { toast } from "react-toastify";
// // import { getUserDetail } from "../api"; // Your API call to get user details

// // const useUser = () => {
// //   const { data, isLoading, isError, error, refetch } = useQuery({
// //     queryKey: ["user"],
// //     queryFn: async () => {
// //       const token = localStorage.getItem("authToken"); // Assuming you store the token in localStorage

// //       if (!token) {
// //         throw new Error("User is not authenticated");
// //       }

// //       try {
// //         const userDetail = await getUserDetail(token); // Ensure your API uses the token correctly
// //         return userDetail;
// //       } catch (err) {
// //         console.error("Error fetching user details:", err);
// //         if (!err.message.includes("not authenticated")) {
// //           toast.error("Something went wrong...");
// //         }
// //         throw err;
// //       }
// //     },
// //     refetchOnWindowFocus: false,
// //   });

// //   return { data, isLoading, isError, error, refetch };
// // };

// // export default useUser;
