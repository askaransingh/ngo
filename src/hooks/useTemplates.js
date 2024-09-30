// import { useQuery } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { fetchTemplates, getTemplates } from "../api";

// const useTemplates = () => {
//   const { data, isLoading, isError, refetch } = useQuery(
//     "templates",
//     async () => {
//       try {
//         const templates = await fetchTemplates();
//         return templates;
//       } catch (err) {
//         console.log(err);
//         toast.error("Something went wrong");
//       }
//     },
//     {refetchOnWindowFocus: false }

//   );
//   return {
//     data,
//     isError,
//     isLoading,
//     refetch,
//   };
// };


// export default useTemplates;







// import { useQuery } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import {  getTemplates } from "../api";

// const useTemplates = () => {
//   // Updated useQuery call to use object format required by TanStack Query v5
//   const { data, isLoading, isError, refetch } = useQuery({
//     queryKey: ["templates"], // The unique key used for caching the query
//     queryFn: async () => {
//       try {
//         // Fetching templates data using the provided function
//         const templates = await getTemplates();
//         console.log("Template", templates);
//         return templates;
//       } catch (err) {
//         console.error(err);
//         toast.error("Something went wrong");
//         throw err; // Re-throwing the error to ensure isError is set
//       }
//     },
//     refetchOnWindowFocus: false, // Additional option to control refetch behavior
//   });       

//   return {
//     data,
//     isError,
//     isLoading,
//     refetch,
//   };
// };

// export default useTemplates;






// const useTemplates = () => {
//   const { data, isLoading, isError, refetch, error } = useQuery({
//     queryKey: ["templates"],
//     queryFn: async () => {
//       try {
//         const response = await getTemplates();

//         // Log the response to see what you're actually getting
//         console.log("Response", response);

//         return response;
//       } catch (err) {
//         console.error("Error fetching templates:", err);
//         toast.error("Something went wrong");
//         throw err;
//       }
//     },
//     refetchOnWindowFocus: false,
//   });

//   return {
//     data,
//     isError,
//     isLoading,
//     refetch,
//   };
// };

// export default useTemplates;
// src/hooks/useTemplates.js
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getTemplates } from "../api"; // Import the function from the API file

const useTemplates = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["templates"], // Cache key for the query
    queryFn: async () => {
      try {
        // Fetch templates using the API function
        const templates = await getTemplates();
        console.log("Template", templates);
        return templates;
      } catch (err) {
        console.error("Error fetching templates:", err);
        // const templates = await getTemplates();
        // return templates;
        toast.error("Something went wrong");
        throw err;
        return [];
      }
    },
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useTemplates;
