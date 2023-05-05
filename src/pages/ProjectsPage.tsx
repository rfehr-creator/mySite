import { useState } from "react";
import styled from "styled-components";
import { ProjectCard } from "../components/ProjectCard";
const Projects = styled.div`
  width: 400px;
`;

interface Project {
  title: string;
  description: string;
}

export const ProjectPage = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      title: "Trailer Tracking Project",
      description: "Hello Hello Hello Hello Hello Hello",
    },
    {
      title: "Logbook Program",
      description: "Hello Hello Hello Hello Hello Hello",
    },
    {
      title: "Custom PC",
      description: "Hello Hello Hello Hello Hello Hello",
    },
  ]);

  setProjects(projects);
  return (
    <Projects>
      <ul className="list-group list-group-flush">
        {projects.map((x) => {
          return <ProjectCard {...x} />;
        })}
        ;
      </ul>
    </Projects>
  );
};
