// // import { useQuery } from "@tanstack/react-query"



// // const useFilters = () => {
// //     const { data, isLoading,isError, refetch}= useQuery(
// //         "globalFilter",
// //         () =>({searchTerm: ""}),
// //         {refetchOnWindowFocus: false}

// //     );

// //     return {data,isLoading, isError,refetch};
// // };
// // export default useFilters;



// // import { useQuery } from "@tanstack/react-query";

// // const useFilters = () => {
// //   const { data, isLoading, isError, refetch } = useQuery({
// //     queryKey: ["globalFilter"], // The key should be an array
// //     queryFn: () => ({ searchTerm: "" }), // Your query function
// //     refetchOnWindowFocus: false, // Additional options go here
// //   });

// //   return { data, isLoading, isError, refetch };
// // };

// // export default useFilters;




// // import { useQuery } from "@tanstack/react-query";

// // // const fetchTemplates = async () => {
// // //   // Replace with your actual API call or database query
// // //   const response = await fetch("/api/templates");
// // //   const data = await response.json();
// // //   return data;
// // // };
// // const fetchTemplates = async () => {
// //   try {
// //     const response = await fetch("/api/templates");
// //     if (!response.ok) {
// //       throw new Error("Network response was not ok");
// //     }
// //     const data = await response.json();
// //     console.log("Fetched templates:", data);
// //     return data;
// //   } catch (error) {
// //     console.error("Error fetching templates:", error);
// //     throw error;
// //   }
// // };

// // const useFilters = () => {
// //   const { data, isLoading, isError, refetch } = useQuery({
// //     queryKey: ["globalFilter"],
// //     queryFn: fetchTemplates,
// //     refetchOnWindowFocus: false,
// //   });

// //   return { data, isLoading, isError, refetch };
// // };

// // export default useFilters;




// // import { useQuery } from "@tanstack/react-query";

// // const useFilters = () => {
// //   const { data, isLoading, isError, refetch } = useQuery({
// //     queryKey: ["globalFilter"], // The key should be an array
// //     queryFn: () => ({ searchTerm: "" }), // Your query function
// //     refetchOnWindowFocus: false, // Additional options go here
// //   });

// //   return { data, isLoading, isError, refetch };
// // };

// // export default useFilters;


// // import { useQuery } from "@tanstack/react-query";

// // const useFilters = () => {
// //   const { data, isLoading, isError, refetch } = useQuery({
// //     queryKey: ["globalFilter"], // Ensure consistency
// //     queryFn: () => ({ searchTerm: "" }), // Query returns a default empty search term
// //     refetchOnWindowFocus: false,
// //   });

// //   return { data, isLoading, isError, refetch };
// // };

// // export default useFilters;


// // import { useQuery } from "@tanstack/react-query";

// // const useFilters = () => {
// //   const { data, isLoading, isError, refetch } = useQuery({
// //     queryKey: ["globalFilter"],
// //     queryFn: () => ({ searchTerm: "", selectedTag: "" }),
// //     refetchOnWindowFocus: false,
// //   });

// //   return { data, isLoading, isError, refetch };
// // };

// // export default useFilters;







// import { useQuery } from "@tanstack/react-query";

// const useFilters = () => {
//   const { data, isLoading, isError, refetch } = useQuery({
//     queryKey: ["globalFilter"], // The key should be an array
//     queryFn: () => ({ searchTerm: "" }), // Your query function
//     refetchOnWindowFocus: false, // Additional options go here
//   });

//   return { data, isLoading, isError, refetch };
// };

// export default useFilters;

// // import { useQuery } from "@tanstack/react-query";
// // import { fetchFilters } from "../api"; // Import your API function

// // const useFilters = () => {
// //   const { data, isLoading, isError, refetch } = useQuery({
// //     queryKey: ["globalFilter"],
// //     queryFn: () => fetchFilters(), // Fetch filters or global filter state
// //     refetchOnWindowFocus: false,
// //   });

// //   return { data, isLoading, isError, refetch };
// // };

// // export default useFilters;




// // import { useQuery } from "@tanstack/react-query";
// // import { fetchFilters } from "../api"; // Ensure this function is correct

// // const useFilters = () => {
// //   const { data = {}, isLoading, isError, refetch } = useQuery({
// //     queryKey: ["globalFilter"],
// //     queryFn: fetchFilters, // Fetch filters from the API
// //     refetchOnWindowFocus: false,
// //   });

// //   return { data, isLoading, isError, refetch };
// // };

// // export default useFilters;
// useFilter





// import { useQuery } from "@tanstack/react-query";

// const useFilters = () => {
//   const { data, isLoading, isError, refetch } = useQuery({
//     queryKey: ["globalFilter"], // The key should be an array
//     queryFn: () => ({ searchTerm: "" }), // Your query function
//     refetchOnWindowFocus: false, // Additional options go here
//   });

//   return { data, isLoading, isError, refetch };
// };

// export default useFilters;





import { useQuery } from "@tanstack/react-query";

const useFilters = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["globalFilter"], // The key should be an array
    queryFn: () => ({ searchTerm: "" }), // Your query function
    refetchOnWindowFocus: false, // Additional options go here
  });

  return { data, isLoading, isError, refetch };
};

export default useFilters;