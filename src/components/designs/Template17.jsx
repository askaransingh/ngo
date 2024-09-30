// import React from 'react'

// const Template1 = () => {
//   return (
//     <div>
//       Template1
//     </div>
//   )
// }

// export default Template1

import React, { useEffect, useRef, useState } from "react";
import MainSpinner from "../MainSpinner";
// import { useQuery } from "react-query";
import { useQuery } from "@tanstack/react-query";
import useUser from "../../hooks/useUser";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../config/firebase.config";
import { getTemplateDetailEditByUser } from "../../api";
// import htmlToImage from "html-to-image";
// import { toPng } from "html-to-image";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
// import html2pdf from "html2pdf.js";
import html2pdf from "html2pdf.js";

import { FaPlus, FaTrash } from "react-icons/fa";
// import { toast } from 'react-toastify';// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import * as htmlToImage from "html-to-image";

// import { toPng } from 'html-to-image';
// import jsPDF from 'jspdf';
// import { FadeInOutWithOpacity } from '../animations';
// import htmlToImage from 'html-to-image';
// import jsPDF from 'jspdf';
import { TemplateOne } from "../../assets-20240903T162903Z-001/assets";
import { FaHouse, FaPenToSquare, FaPencil } from "react-icons/fa6";
import { BiSolidBookmarks } from "react-icons/bi";
import {
  BsFiletypePdf,
  BsFiletypePng,
  BsFiletypeJpg,
  BsFiletypeSvg,
} from "react-icons/bs";

import { AnimatePresence, motion } from "framer-motion";
// import { FadeInOutWIthOpacity, opacityINOut } from "../../animations";
import { opacityINOut, FadeInOutWIthOpacity } from "../../animations";
import html2canvas from "html2canvas";
import juice from "juice";
const Template17 = ({}) => {
  const result = useRef(null);
  const { pathname } = useLocation();
  const location = useLocation();
  const navigate = useNavigate();
  const templateName = pathname?.split("/")?.slice(-1);
  const searchParams = new URLSearchParams(location.search);
  const loadedTemplateId = searchParams.get("templateId");
  // console.log(pathname, templateName, loadedTemplateId);
  const element = result.current;

  const [isEdit, setIsEdit] = useState(false);
  const { data: user } = useUser();

  const resumeRef = useRef(null);

  const [imageAsset, setImageAsset] = useState({
    isImageLoading: false,
    imageURL: null,
  });
  // c

  const downloadPDF = () => {
    const element = document.getElementById("resume");

    const opt = {
      margin: 0, // Remove any extra margin
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2, // Use a moderate scale for better rendering without excessive size
        useCORS: true,
        width: element.scrollWidth, // Capture full width
        height: element.scrollHeight, // Capture full height
      },
      jsPDF: {
        unit: "px",
        format: [element.scrollWidth, element.scrollHeight],
        orientation: "portrait",
      }, // Adjust PDF size to match the content's dimensions
    };

    html2pdf().from(element).set(opt).save();
  };

  const downloadPNG = () => {
    const element = document.getElementById("resume");

    html2canvas(element, {
      scale: 2, // Adjust scale for higher resolution if needed
      useCORS: true, // Enable cross-origin resource sharing for external images
      width: element.scrollWidth, // Capture full width
      height: element.scrollHeight, // Capture full height
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png"); // Get PNG image data
      const link = document.createElement("a"); // Create a link element
      link.href = imgData;
      link.download = "resume.png"; // Set the file name
      link.click(); // Programmatically click the link to trigger download
    });
  };
  const downloadJPG = () => {
    const element = document.getElementById("resume");

    html2canvas(element, {
      scale: 2, // Adjust scale for higher resolution if needed
      useCORS: true, // Enable cross-origin resource sharing for external images
      width: element.scrollWidth, // Capture full width
      height: element.scrollHeight, // Capture full height
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0); // Get JPG image data (1.0 is for highest quality)
      const link = document.createElement("a"); // Create a link element
      link.href = imgData;
      link.download = "resume.jpg"; // Set the file name
      link.click(); // Programmatically click the link to trigger download
    });
  };
  const downloadSVGwithImage = () => {
    const element = document.getElementById("resume");

    html2canvas(element, {
      scale: 2, // High scale for better resolution
      useCORS: true,
      width: element.scrollWidth,
      height: element.scrollHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png"); // Convert to PNG

      // Create an SVG element
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${element.scrollWidth}" height="${element.scrollHeight}">
          <image href="${imgData}" width="100%" height="100%"/>
        </svg>
      `;

      // Create a Blob and trigger download
      const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "resume.svg"; // Save as an SVG
      link.click(); // Trigger download
    });
  };

  const {
    data: resumeData,
    isLoading: resume_isLoading,
    isError: resume_isError,
    refetch: refetch_resumeData,
  } = useQuery({
    queryKey: ["templateEditedByUser", `${templateName}-${user?.uid}`],
    queryFn: () => {
      if (!user?.uid || !templateName) {
        console.error("Invalid UID or Template Name:", user?.uid, templateName);
        return Promise.reject(new Error("Invalid UID or Template Name"));
      }
      return getTemplateDetailEditByUser(
        user.uid,
        `${templateName}-${user.uid}`
      );
    },
    enabled: !!user?.uid && !!templateName, // Ensure query doesn't run with invalid values
  });

  const [formData, setFormData] = useState({
    fullname: "Karen Richards",
    professionalTitle: "Professional Title",
    personalDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alia minus est culpa id corrupti nobis ullam harum, porro veniam facilis, obcaecati nulla magnam beatae quae at eos! Qui, similique laboriosam?`,
    refererName: "Sara Taylore",
    refererRole: "Director | Company Name",
    mobile: "+91 0000-0000",
    email: "urname@gmail.com",
    website: "urwebsite.com",
    address: "your street address, ss, street, city/zip code - 1234",
  });

  const [experiences, setExperiences] = useState([
    {
      year: "2012 - 2014",
      title: "Job Position Here",
      companyAndLocation: "Company Name / Location here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptatibus minima tenetur nostrum quo aliquam dolorum incidunt.",
    },
    {
      year: "2012 - 2014",
      title: "Job Position Here",
      companyAndLocation: "Company Name / Location here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptatibus minima tenetur nostrum quo aliquam dolorum incidunt.",
    },
    {
      year: "2012 - 2014",
      title: "Job Position Here",
      companyAndLocation: "Company Name / Location here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptatibus minima tenetur nostrum quo aliquam dolorum incidunt.",
    },
  ]);

  const [skills, setSkills] = useState([
    {
      title: "skill1",
      percentage: "75",
    },
    {
      title: "skill2",
      percentage: "75",
    },
    {
      title: "skill3",
      percentage: "75",
    },
    {
      title: "skill4",
      percentage: "75",
    },
    {
      title: "skill5",
      percentage: "75",
    },
  ]);

  const [education, setEducation] = useState([
    {
      major: "ENTER YOUR MAJOR",
      university: "Name of your university / college 2005-2009",
    },
  ]);

  useEffect(() => {
    if (resumeData?.formData) {
      setFormData({ ...resumeData?.formData });
    }
    if (resumeData?.experiences) {
      setExperiences(resumeData?.experiences);
    }
    if (resumeData?.skills) {
      setSkills(resumeData?.skills);
    }
    if (resumeData?.education) {
      setEducation(resumeData?.education);
    }
    if (resumeData?.userProfilePic) {
      setImageAsset((prevAsset) => ({
        ...prevAsset,
        imageURL: resumeData?.userProfilePic,
      }));
    }
  }, [resumeData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleEditable = () => {
    setIsEdit(!isEdit);
    var inputs = document.querySelectorAll("input");
    var textarea = document.querySelectorAll("textarea");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].readOnly = !inputs[i].readOnly;
    }

    for (var i = 0; i < textarea.length; i++) {
      textarea[i].readOnly = !textarea[i].readOnly;
    }
  };

  // image upload to the cloud
  const handleFileSelect = async (event) => {
    setImageAsset((prevAsset) => ({ ...prevAsset, isImageLoading: true }));
    // console.log(event.target.files[0]);
    const file = event.target.files[0];
    if (file && isAllowed(file)) {
      const reader = new FileReader();

      reader.onload = function (event) {
        const dataURL = event.target.result;
        console.log("Data URL:", dataURL);

        // You can now use the dataURL as needed, e.g., to display an image.
        setImageAsset((prevAsset) => ({
          ...prevAsset,
          imageURL: dataURL,
        }));
      };

      // Read the file as a Data URL
      reader.readAsDataURL(file);
    } else {
      toast.error("Invalid File Format");
    }
  };

  const isAllowed = (file) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    return allowedTypes.includes(file.type);
  };

  // delete an image
  const deleteImageObject = () => {
    setImageAsset((prevAsset) => ({
      ...prevAsset,
      imageURL: null,
    }));
  };

  // uploader finshed

  const handleExpChange = (index, e) => {
    const { name, value } = e.target;
    // Create a copy of the workExperiences array
    const updatedExperiences = [...experiences];
    // Update the specific field for the experience at the given index
    updatedExperiences[index][name] = value;
    // Update the state with the modified array
    setExperiences(updatedExperiences);
  };
  const saveFormData = async () => {
    const timeStamp = serverTimestamp();
    const resume_id = `${user?.uid}`;
    // const resume_id = `${templateName}-${user?.uid}`;
    const imageURL = await getImage();
    const _doc = {
      _id: loadedTemplateId,
      resume_id,
      formData,
      education,
      experiences,
      skills,
      timeStamp,
      userProfilePic: imageAsset.imageURL,
      imageURL,
    };
    console.log(_doc);
    console.log(`${user?.uid}`);
    // await saveToDatabase(_doc);
    setDoc(doc(db, "users", user?.uid, "resumes", resume_id), _doc)
      .then(() => {
        toast.success(`Data Saved`);
        refetch_resumeData();
      })
      .catch((err) => {
        toast.error(`Error : ${err.message}`);
      });
  };

  const removeExperience = (index) => {
    // Create a copy of the workExperiences array and remove the experience at the given index
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    // Update the state with the modified array
    setExperiences(updatedExperiences);
  };

  const addExperience = () => {
    // Create a copy of the workExperiences array and add a new experience
    const updatedExperiences = [
      ...experiences,
      {
        year: "2012 - 2014",
        title: "Job Position Here",
        companyAndLocation: "Company Name / Location here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptatibus minima tenetur nostrum quo aliquam dolorum incidunt.",
      },
    ];
    // Update the state with the modified array
    setExperiences(updatedExperiences);
  };

  const handleSkillsChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSkills = [...skills];
    updatedSkills[index][name] = value;
    setSkills(updatedSkills);
  };

  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const addSkill = () => {
    const updatedSkills = [
      ...skills,
      {
        title: "skill1",
        percentage: "75",
      },
    ];
    setSkills(updatedSkills);
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEdu = [...education];
    updatedEdu[index][name] = value;
    setEducation(updatedEdu);
  };

  const removeEducation = (index) => {
    const updatedEdu = [...education];
    updatedEdu.splice(index, 1);
    setEducation(updatedEdu);
  };

  const addEducation = () => {
    const updatedEdu = [
      ...education,
      {
        major: "ENTER YOUR MAJOR",
        university: "Name of your university / college 2005-2009",
      },
    ];
    setEducation(updatedEdu);
  };

  const getImage = async () => {
    const element = resumeRef.current;

    if (!element) {
      console.error("Unable to capture content. The DOM element is null.");
      return;
    }

    try {
      // Convert the HTML element to a PNG data URL
      const dataUrl = await toPng(element);
      console.log("PNG Data URL:", dataUrl);

      // If you need JPEG, convert PNG to JPEG here
      // You can use a library like `canvas` or `image-conversion` for this purpose

      return dataUrl; // Return the PNG data URL or the JPEG data URL if converted
    } catch (error) {
      console.error("Oops, something went wrong!", error.message);
      return null; // Return a default value or handle the error appropriately
    }
  };

  const elementRef = useRef(null);

  if (resume_isLoading) return <MainSpinner />;

  // if (resume_isError) {
  //   return (
  //     <div className="w-full h-[60vh] flex flex-col items-center justify-center">
  //       <p className="text-lg text-txtPrimary font-semibold">
  //         While fetching the data
  //       </p>
  //     </div>
  //   );
  // }
  return (
    <div className="w-full flex flex-col items-center justify-start gap-4">
      {/* bread crump */}
      <div className="w-full flex items-center gap-2 px-4">
        <Link
          to={"/"}
          className="flex items-center justify-center gap-2 text-txtPrimary"
        >
          <FaHouse />
          Home
        </Link>
        <p
          className="text-txtPrimary cursor-pointer"
          onClick={() => navigate(-1)}
        >
          / Template1 /
        </p>
        <p>Edit</p>
      </div>

      <div className="w-full lg:w-[1200px] grid grid-cols-1 lg:grid-cols-12 px-6 lg:px-32">
        {/* template design */}
        <div className="col-span-12 px-4 py-6">
          <div className="flex items-center justify-end w-full gap-12 mb-4">
            <div
              className="flex items-center justify-center gap-1 px-3 py-1 rounded-md bg-gray-200 cursor-pointer"
              onClick={toggleEditable}
            >
              {isEdit ? (
                <FaPenToSquare className="text-sm text-txtPrimary" />
              ) : (
                <FaPencil className="text-sm text-txtPrimary" />
              )}
              <p className="text-sm text-txtPrimary">Edit</p>
            </div>

            <div
              className="flex items-center justify-center gap-1 px-3 py-1 rounded-md bg-gray-200 cursor-pointer"
              onClick={saveFormData}
            >
              <BiSolidBookmarks className="text-sm text-txtPrimary" />
              <p className="text-sm text-txtPrimary">Save</p>
            </div>

            <div className=" flex items-center justify-center gap-2">
              <p className="text-sm text-txtPrimary">Download : </p>
              {/* <button onClick={downloadPDF}>Download PDF</button> */}
              <BsFiletypePdf
                className="text-2xl text-txtPrimary cursor-pointer"
                onClick={downloadPDF}
              />
              <BsFiletypePng
                onClick={downloadPNG}
                className="text-2xl text-txtPrimary cursor-pointer"
              />
              <BsFiletypeJpg
                className="text-2xl text-txtPrimary cursor-pointer"
                onClick={downloadJPG}
              />
              <BsFiletypeSvg
                onClick={downloadSVGwithImage}
                className="text-2xl text-txtPrimary cursor-pointer"
              />
            </div>
          </div>
          {/* <div
            className="w-full h-auto grid grid-cols-12"
            id="resume"
            ref={resumeRef}
          > */}
        <div className="bg-gray-800 p-8"  id="resume"
            ref={resumeRef}>
      <div className="bg-gray-700 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-txtPrimary uppercase">{formData.name}</h1>
        <h2 className="text-xl text-txtSecondary italic">{formData.professionalTitle}</h2>

        {/* About Me Section */}
        <div className="my-6">
          <h3 className="text-xl font-semibold text-txtPrimary">About Me</h3>
          <div className="h-1 bg-gray-500 my-2"></div>
          <textarea
            readOnly={!isEdit}
            className={`w-full bg-gray-600 text-txtPrimary p-2 rounded-md outline-none border-none ${isEdit ? "bg-gray-500" : "bg-transparent"}`}
            name="personalDescription"
            value={formData.personalDescription}
            onChange={handleChange}
            rows="4"
            style={{ resize: "none" }}
          />
        </div>

        {/* Work Experience Section */}
        <div className="my-6">
          <h3 className="text-xl font-semibold text-txtPrimary">Work Experience</h3>
          <div className="h-1 bg-gray-500 my-2"></div>
          {experiences.map((exp, i) => (
            <motion.div className="grid grid-cols-12 my-4" key={i}>
              <div className="col-span-4">
                <input
                  value={exp.year}
                  onChange={(e) => handleExpChange(i, e)}
                  name="year"
                  type="text"
                  readOnly={!isEdit}
                  className={`w-full bg-gray-600 text-txtPrimary p-2 rounded-md outline-none border-none ${isEdit ? "bg-gray-500" : "bg-transparent"}`}
                />
              </div>
              <div className="col-span-8">
                <input
                  value={exp.title}
                  onChange={(e) => handleExpChange(i, e)}
                  name="title"
                  type="text"
                  readOnly={!isEdit}
                  className={`w-full bg-gray-600 text-txtPrimary p-2 rounded-md outline-none border-none ${isEdit ? "bg-gray-500" : "bg-transparent"}`}
                />
                <input
                  value={exp.companyAndLocation}
                  onChange={(e) => handleExpChange(i, e)}
                  name="companyAndLocation"
                  type="text"
                  readOnly={!isEdit}
                  className={`w-full bg-gray-600 text-txtPrimary p-2 rounded-md outline-none border-none ${isEdit ? "bg-gray-500" : "bg-transparent"}`}
                />
                <textarea
                  readOnly={!isEdit}
                  className={`w-full bg-gray-600 text-txtPrimary p-2 rounded-md outline-none border-none ${isEdit ? "bg-gray-500" : "bg-transparent"}`}
                  name="description"
                  value={exp.description}
                  onChange={(e) => handleExpChange(i, e)}
                  rows="3"
                  style={{ resize: "none" }}
                />
                {isEdit && (
                  <div onClick={() => removeExperience(i)} className="cursor-pointer text-txtSecondary">
                    <FaTrash />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          {isEdit && (
            <div onClick={addExperience} className="cursor-pointer text-txtSecondary">
              <FaPlus />
            </div>
          )}
        </div>

        {/* Skills Section */}
        <div className="my-6">
          <h3 className="text-xl font-semibold text-txtPrimary">Skills</h3>
          <div className="h-1 bg-gray-500 my-2"></div>
          {skills.map((skill, i) => (
            <motion.div className="flex items-center justify-between my-2" key={i}>
              <input
                value={skill.title}
                onChange={(e) => handleSkillsChange(i, e)}
                name="title"
                type="text"
                readOnly={!isEdit}
                className={`w-4/12 bg-gray-600 text-txtPrimary p-2 rounded-md outline-none border-none ${isEdit ? "bg-gray-500" : "bg-transparent"}`}
              />
              <input
                value={skill.percentage}
                onChange={(e) => handleSkillsChange(i, e)}
                name="percentage"
                type="text"
                readOnly={!isEdit}
                className={`w-4/12 bg-gray-600 text-txtPrimary p-2 rounded-md outline-none border-none ${isEdit ? "bg-gray-500" : "bg-transparent"}`}
              />
              {isEdit && (
                <div onClick={() => removeSkill(i)} className="cursor-pointer text-txtSecondary">
                  <FaTrash />
                </div>
              )}
              <div className="relative w-full h-1 bg-gray-400 mt-2">
                <div className="h-full bg-gray-600" style={{ width: `${skill.percentage}%`, transition: "width 0.3s ease" }}></div>
              </div>
            </motion.div>
          ))}
          {isEdit && (
            <div onClick={addSkill} className="cursor-pointer text-txtSecondary">
              <FaPlus />
            </div>
          )}
        </div>
      </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Template17;
