// Assuming your component file is named TemplatesComponent.jsx
import React from 'react';
import useTemplates from '../../hooks/useTemplates';
// import useTemplates from '../hooks/useTemplates'; // Adjust the import path as needed

const TemplatesComponent = () => {
  const { data, isLoading, isError } = useTemplates(); // Fetch templates

  if (isLoading) {
    return <p>Loading templates...</p>; // Show loading message
  }

  if (isError) {
    return <p>error</p>; // Show error message
  }

  if (data && data.length > 0) {
    return (
      <div>
        {data.map((template) => (
          <div key={template._id}>
            <h2>{template.name}</h2>
            <p>{template.title}</p>
            {/* Render other template details as needed */}
          </div>
        ))}
      </div>
    );
  }

  return <p>No templates available</p>; // Message when no templates exist
};

export default TemplatesComponent; // Don't forget to export the component
