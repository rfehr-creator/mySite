import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  name: string;
  to: string;
  isSelected: boolean;
}

const NavItem = ({ name, to, isSelected }: Props) => {
  return (
    <NavLink
      className={
        isSelected ? "nav-link active text-primary" : "nav-link active text-white"
      }
      aria-current="page"
      to={to}
    >
      {name}
    </NavLink>
  );
};

export default NavItem;
