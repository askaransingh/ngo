// import { useEffect, useState } from "react";
// import Template5 from "./Template5";

// const ParentComponent = () => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         // Fetch data and set it
//         const fetchData = async () => {
//             const result = await fetchDataFromAPI(); // Replace with your fetch logic
//             setData(result);
//         };

//         fetchData();
//     }, []);

//     if (!data) {
//         return <div>Loading...</div>; // Show loading state while fetching data
//     }

//     return <Template5 data={data} />;
// };
// export default ParentComponent
// import React, { useEffect, useState } from 'react';

// const Parent5 = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchDataFromAPI = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/'); // Replace with your actual API URL
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDataFromAPI();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       {/* Render your data here */}
//       {data && <div>{JSON.stringify(data)}</div>}
//     </div>
//   );
// };

// export default Parent5;
// import React, { useEffect, useState } from 'react';

// const Template5 = () => {
//   const [data, setData] = useState({ aboutMe: '' }); // Initialize with an object
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchDataFromAPI = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/'); // Replace with your actual API URL
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDataFromAPI();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   // Now you can safely destructure aboutMe
//   const { aboutMe } = data;

//   return (
//     <div>
//       {/* Render your data here */}
//       <div>{aboutMe}</div>
//       {/* Additional rendering logic */}
//     </div>
//   );
// };

// export default Template5;
import React, { useEffect, useState } from 'react';

const Parent5 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch('http://localhost:3000/'); // Replace with your actual API URL
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* Render your data here */}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default Parent5;
