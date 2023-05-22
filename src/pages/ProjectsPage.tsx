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
  const projects: Project[] = [
    {
      title: "Trailer Tracking",
      description: " ",
    },
    {
      title: "Logbook Program",
      description: " ",
    },
    {
      title: "Custom PC",
      description: " ",
    },
  ];
  return (
    <Projects>
      <ul className="list-group list-group-flush">
        {projects.map((x, index) => {
          return <ProjectCard key={index} {...x} />
        })}
      </ul>
    </Projects>
  );
};
