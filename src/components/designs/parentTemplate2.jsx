// import React, { useState } from 'react';
// import Template2 from './Template2'; // Adjust the path based on your project structure

// const ParentComponent = () => {
//   // State hooks for each field
//   const [name, setName] = useState('John Doe');
//   const [address, setAddress] = useState('1234 Main St');
//   const [phone, setPhone] = useState('123-456-7890');
//   const [email, setEmail] = useState('john.doe@example.com');
//   const [skills, setSkills] = useState([
//     { title: 'JavaScript', percentage: 80 },
//   ]);
//   const [education, setEducation] = useState([
//     { degree: 'B.S. Computer Science', institution: 'ABC University', year: '2019' },
//   ]);
//   const [experience, setExperience] = useState([
//     { jobTitle: 'Software Engineer', company: 'Tech Corp', year: '2020', description: 'Developed web applications.' },
//   ]);
//   const [isEdit, setIsEdit] = useState(true); // Edit mode toggle

//   // Handler for education changes
//   const handleEducationChange = (index, event, field) => {
//     const updatedEducation = [...education];
//     updatedEducation[index][field] = event.target.value;
//     setEducation(updatedEducation);
//   };

//   // Handler for experience changes
//   const handleExperienceChange = (index, event, field) => {
//     const updatedExperience = [...experience];
//     updatedExperience[index][field] = event.target.value;
//     setExperience(updatedExperience);
//   };

//   // Handler for skills changes
//   const handleSkillsChange = (index, event) => {
//     const updatedSkills = [...skills];
//     updatedSkills[index][event.target.name] = event.target.value;
//     setSkills(updatedSkills);
//   };

//   // Functions to add and remove items
//   const addSkill = () => setSkills([...skills, { title: '', percentage: 50 }]);
//   const removeSkill = (index) => setSkills(skills.filter((_, i) => i !== index));

//   const addEducation = () => setEducation([...education, { degree: '', institution: '', year: '' }]);
//   const removeEducation = (index) => setEducation(education.filter((_, i) => i !== index));

//   const addExperience = () => setExperience([...experience, { jobTitle: '', company: '', year: '', description: '' }]);
//   const removeExperience = (index) => setExperience(experience.filter((_, i) => i !== index));

//   return (
//     <Template2
//       name={name}
//       address={address}
//       phone={phone}
//       email={email}
//       isEdit={isEdit}
//       setName={setName}
//       setAddress={setAddress}
//       setPhone={setPhone}
//       setEmail={setEmail}
//       skills={skills}
//       handleSkillsChange={handleSkillsChange}
//       addSkill={addSkill}
//       removeSkill={removeSkill}
//       education={education}
//       handleEducationChange={handleEducationChange}
//       addEducation={addEducation}
//       removeEducation={removeEducation}
//       experience={experience}
//       handleExperienceChange={handleExperienceChange}
//       addExperience={addExperience}
//       removeExperience={removeExperience}
//     />
//   );
// };

// // export default ParentComponent;
// import React, { useState } from "react";
// import Template2 from "./Template2";

// const ResumeParent = () => {
//   const [isEdit, setIsEdit] = useState(true); // Toggle edit mode
//   const [name, setName] = useState("John Doe");
//   const [address, setAddress] = useState("123 Street, City");
//   const [phone, setPhone] = useState("123-456-7890");
//   const [skills, setSkills] = useState([
//     { title: "JavaScript", percentage: 80 },
//     { title: "React", percentage: 90 },
//     { title: "CSS", percentage: 85 },
//   ]);

//   // Adding a new skill
//   const addSkill = () => {
//     setSkills([...skills, { title: "", percentage: 0 }]);
//   };

//   // Removing a skill
//   const removeSkill = (index) => {
//     setSkills(skills.filter((_, i) => i !== index));
//   };

//   // Handling changes to skill inputs
//   const handleSkillsChange = (index, e) => {
//     const updatedSkills = [...skills];
//     updatedSkills[index][e.target.name] = e.target.value;
//     setSkills(updatedSkills);
//   };

//   return (
//     <div>
//       <button onClick={() => setIsEdit(!isEdit)}>
//         {isEdit ? "Save" : "Edit"}
//       </button>
//       <Template2
//         name={name}
//         setName={setName}
//         address={address}
//         setAddress={setAddress}
//         phone={phone}
//         setPhone={setPhone}
//         skills={skills}
//         setSkills={setSkills}
//         isEdit={isEdit}
//         addSkill={addSkill}
//         removeSkill={removeSkill}
//         handleSkillsChange={handleSkillsChange}
//       />
//     </div>
//   );
// };

// export default ResumeParent;
import React, { useState } from "react";
import Template2 from "./Template2";

const ResumeParent = () => {
  const [isEdit, setIsEdit] = useState(true); // Toggle edit mode
  const [name, setName] = useState("John Doe");
  const [address, setAddress] = useState("123 Street, City");
  const [phone, setPhone] = useState("123-456-7890"); // This is where setPhone is defined
  const [skills, setSkills] = useState([
    { title: "JavaScript", percentage: 80 },
    { title: "React", percentage: 90 },
    { title: "CSS", percentage: 85 },
  ]);

  const addSkill = () => {
    setSkills([...skills, { title: "", percentage: 0 }]);
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleSkillsChange = (index, e) => {
    const updatedSkills = [...skills];
    updatedSkills[index][e.target.name] = e.target.value;
    setSkills(updatedSkills);
  };

  return (
    <div>
      <button onClick={() => setIsEdit(!isEdit)}>
        {isEdit ? "Save" : "Edit"}
      </button>
      <Template2
        name={name}
        setName={setName}
        address={address}
        setAddress={setAddress}
        phone={phone}
        setPhone={setPhone} // Ensure setPhone is passed as a prop here
        skills={skills}
        setSkills={setSkills}
        isEdit={isEdit}
        addSkill={addSkill}
        removeSkill={removeSkill}
        handleSkillsChange={handleSkillsChange}
      />
    </div>
  );
};

export default ResumeParent;
