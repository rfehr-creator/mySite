import { useState } from "react";
import NavItem from "./NavItem";
import styled from "styled-components";
import theme from "./../Theme"

const NavbarStyle = styled.div`
width: 100%;
background-color: ${theme.navbar};
`

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");

  return (
    <nav className="navbar navbar-expand">
      <NavbarStyle>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavItem
              isSelected={activeItem === "Home"}
              name="Home"
              to="/"
              onClick={() => setActiveItem("Home")}
            />

            <NavItem
              isSelected={activeItem === "Project"}
              name="Projects"
              to="/projects"
              onClick={() => setActiveItem("Project")}
            />
            <NavItem
              isSelected={activeItem === "Education"}
              name="Education"
              to="/Education"
              onClick={() => setActiveItem("Education")}
            />
            <NavItem
              isSelected={activeItem === "WorkExperience"}
              name="Work Experience"
              to="/workExperience"
              onClick={() => setActiveItem("WorkExperience")}
            />
          </ul>
        </div>
      </NavbarStyle>
    </nav>
  );
};