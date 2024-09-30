import { useState } from "react";
import Template4 from "./Template4";
import Template5 from "./Template5";

const ParentComponent = () => {
    const [data, setData] = useState({
      aboutMe: "Your about info here",
      skills: [{ title: "React", percentage: 80 }],
    });
    const [isEdit, setIsEdit] = useState(false);
  
    const handleAboutMeChange = (newValue) => {
      setData((prevData) => ({
        ...prevData,
        aboutMe: newValue,
      }));
    };
  
    const handleSkillsChange = (index, event) => {
      const { name, value } = event.target;
      const updatedSkills = [...data.skills];
      updatedSkills[index] = { ...updatedSkills[index], [name]: value };
      setData((prevData) => ({ ...prevData, skills: updatedSkills }));
    };
  
    const addSkill = () => {
      setData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, { title: '', percentage: 0 }],
      }));
    };
  
    const removeSkill = (index) => {
      const updatedSkills = data.skills.filter((_, i) => i !== index);
      setData((prevData) => ({ ...prevData, skills: updatedSkills }));
    };
  
    return (
      <>
      <Template4
        data={data}
        isEdit={isEdit}
        handleAboutMeChange={handleAboutMeChange}
        handleSkillsChange={handleSkillsChange}
        addSkill={addSkill}
        removeSkill={removeSkill}
      />
      {/* <Template5
        data={data}
        isEdit={isEdit}
        handleAboutMeChange={handleAboutMeChange}
        handleSkillsChange={handleSkillsChange}
        addSkill={addSkill}
        removeSkill={removeSkill}
      /> */}
      </>
    );
  };
  export default ParentComponent