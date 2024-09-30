// import React, { useState } from "react";
// import TemplateDesignPin from "./TemplateDesignPin"; // Adjust the path accordingly

// const ParentComponent = () => {
//   const [collections, setCollections] = useState([]);

//   // Example function for toggling collection
//   const handleCollectionToggle = (templateData) => {
//     if (collections.includes(templateData._id)) {
//       // Remove from collections
//       setCollections(collections.filter(id => id !== templateData._id));
//     } else {
//       // Add to collections
//       setCollections([...collections, templateData._id]);
//     }
//   };

//   const data = {
//     _id: "template1",
//     imageURL: "https://example.com/template1.png",
//     title: "Template One",
//   };

//   const isAdded = collections.includes(data._id);

//   return (
//     <div>
//       <TemplateDesignPin
//         data={data}
//         isAdded={isAdded}
//         onCollectionToggle={handleCollectionToggle}
//       />
//     </div>
//   );
// };

// // export default ParentComponent;
// import React, { useState } from "react";
// import TemplateDesignPin from "./TemplateDesignPin"; // Adjust path accordingly

// const ParentComponent = () => {
//   const [collections, setCollections] = useState([]);

//   // Function for toggling collection
//   const handleCollectionToggle = (templateData) => {
//     if (collections.includes(templateData._id)) {
//       // Remove from collections
//       setCollections(collections.filter(id => id !== templateData._id));
//     } else {
//       // Add to collections
//       setCollections([...collections, templateData._id]);
//     }
//   };

//   const data = {
//     _id: "template1",
//     imageURL: "https://example.com/template1.png",
//     title: "Template One",
//   };

//   const isAddedToCollection = collections.includes(data._id);

//   return (
//     <div>
//       <TemplateDesignPin
//         data={data}
//         isAddedToCollection={isAddedToCollection}
//         onCollectionToggle={handleCollectionToggle} // Pass the function
//         isFavorited={false} // Pass appropriate logic for favorites if needed
//         onFavoriteToggle={() => {}} // Placeholder function for favorite toggle
//       />
//     </div>
//   );
// };

// export default ParentComponent;


// import React, { useState } from "react";
// import TemplateDesignPin from "./TemplateDesignPin"; // Adjust path accordingly

// const ParentComponent = () => {
//   const [collections, setCollections] = useState([]);

//   // Function for toggling collection
//   const handleCollectionToggle = (templateData) => {
//     if (collections.includes(templateData._id)) {
//       // Remove from collections
//       setCollections(collections.filter(id => id !== templateData._id));
//     } else {
//       // Add to collections
//       setCollections([...collections, templateData._id]);
//     }
//   };

//   const data = {
//     _id: "template1",
//     imageURL: "https://example.com/template1.png",
//     title: "Template One",
//   };

//   const isAddedToCollection = collections.includes(data._id);

//   return (
//     <div>
//       <TemplateDesignPin
//         data={data}
//         isAddedToCollection={isAddedToCollection}
//         onCollectionToggle={handleCollectionToggle} // Pass the function
//         isFavorited={false} // Pass appropriate logic for favorites if needed
//         onFavoriteToggle={() => {}} // Placeholder function for favorite toggle
//       />
//     </div>
//   );
// };

// // export default ParentComponent;
// import React, { useState } from "react";
// import TemplateDesignPin from "./TemplateDesignPin"; // Adjust path accordingly

// const ParentComponent = () => {
//   const [collections, setCollections] = useState([]);
//   const [favourites, setFavourites] = useState([]);

//   // Toggle Collection
//   const handleCollectionToggle = (templateData) => {
//     if (collections.includes(templateData._id)) {
//       setCollections(collections.filter(id => id !== templateData._id));
//     } else {
//       setCollections([...collections, templateData._id]);
//     }
//   };

//   // Toggle Favourites
//   const handleFavouritesToggle = (templateData) => {
//     if (favourites.includes(templateData._id)) {
//       setFavourites(favourites.filter(id => id !== templateData._id));
//     } else {
//       setFavourites([...favourites, templateData._id]);
//     }
//   };

//   const data = {
//     _id: "template1",
//     imageURL: "https://example.com/template1.png",
//     title: "Template One",
//   };

//   return (
//     <div>
//       <TemplateDesignPin
//         data={data}
//         isAdded={collections.includes(data._id)}
//         isFavourite={favourites.includes(data._id)}
//         onCollectionToggle={handleCollectionToggle}
//         onFavouritesToggle={handleFavouritesToggle}
//       />
//     </div>
//   );
// };

// export default ParentComponent;
import React, { useState } from "react";
import TemplateDesignPin from "./TemplateDesignPin"; // Adjust the path accordingly

const ParentComponent = () => {
  const [collections, setCollections] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const handleCollectionToggle = (templateData) => {
    if (collections.includes(templateData._id)) {
      // Remove from collections
      setCollections(collections.filter(id => id !== templateData._id));
    } else {
      // Add to collections
      setCollections([...collections, templateData._id]);
    }
  };

  const handleFavouritesToggle = (templateData) => {
    if (favourites.includes(templateData._id)) {
      // Remove from favourites
      setFavourites(favourites.filter(id => id !== templateData._id));
    } else {
      // Add to favourites
      setFavourites([...favourites, templateData._id]);
    }
  };

  const data = {
    _id: "template1",
    imageURL: "https://example.com/template1.png",
    title: "Template One",
  };

  const isAdded = collections.includes(data._id);
  const isFavourite = favourites.includes(data._id);

  return (
    <div>
      <TemplateDesignPin
        data={data}
        isAdded={isAdded}
        isFavourite={isFavourite}
        onCollectionToggle={handleCollectionToggle}  // Pass the function here
        onFavouritesToggle={handleFavouritesToggle}  // Pass the function here
      />
    </div>
  );
};

export default ParentComponent;
