import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('Home');

  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid bg-black ">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li onClick={() => setActiveItem('Home')}>
              <NavItem isSelected={activeItem === 'Home'} name='Home' to='/'/>
            </li>
            <li onClick={() => setActiveItem('Project')}>
              <NavItem isSelected={activeItem === 'Project'} name='Project' to='/projects'/>
            </li>
            <li onClick={() => setActiveItem('Education')}>
              <NavItem isSelected={activeItem === 'Education'} name='Education' to='/Education'/>
            </li>
            <li onClick={() => setActiveItem('WorkExperience')}>
              <NavItem isSelected={activeItem === 'WorkExperience'} name='Work Experience' to='/workExperience'/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// import React, { useState } from 'react';

// interface NavItemProps {
//   name: string;
//   onClick: (name: string) => void;
// }

// const NavItem: React.FC<NavItemProps> = ({ name, onClick }) => {
//   return <li onClick={() => onClick(name)}>{name}</li>;
// };

// const Navigation: React.FC = () => {
//   const [activeItem, setActiveItem] = useState<string>('');

//   const handleItemClick = (name: string) => {
//     setActiveItem(name);
//   };

//   return (
//     <nav>
//       <ul>
//         <NavItem name="Home" onClick={handleItemClick} />
//         <NavItem name="About" onClick={handleItemClick} />
//         <NavItem name="Contact" onClick={handleItemClick} />
//       </ul>
//       <p>Active item: {activeItem}</p>
//     </nav>
//   );
// };

// export default Navigation;