import React, { Suspense } from "react";
import { Header, MainSpinner } from "../components";
import { Route, Routes } from "react-router-dom";
import { HomeContainer } from "../containers";
import CreateTemplate from "./CreateTemplate";
import UserProfile from "./UserProfile";
import CreateResume from "./CreateResume";
import TemplateDesignPinDetails from "./TemplateDesignPinDetails";
import TemplatesComponent from "../components/designs/TemplatesComponent";
import ResumeHome from "./ResumeHome";
import Nav from "./Nav";
const HomeScreen = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* <Header /> */}
      <Nav/>
      <main className="w-full">
        <Suspense fallback={<MainSpinner />}>
          <Routes>
          <Route path="/" element={<ResumeHome/>} />
            <Route path="/HomeContainer" element={<HomeContainer />} />
            
            <Route path="/template/create" element={<CreateTemplate />} />
            <Route path="/profile/:uid" element={<UserProfile />} />
            <Route path="/resume/*" element={<CreateResume />} />
            <Route path="/resumeDetail/:templateID" element={<TemplateDesignPinDetails />} />
          </Routes>
            {/* <TemplatesComponent/> */}
        </Suspense>
      </main>
    </div>
  );
};

export default HomeScreen;
