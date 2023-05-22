import "./App.css";
import { TopBar } from "./components/TopBar";
import { Navbar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectsPage";
import { EducationPage } from "./pages/EducationPage";
import { WorkExperiencePage } from "./pages/WorkExperiencePage";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Roland Fehr";
  });

  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="workExperience" element={<WorkExperiencePage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
