import { NavLink } from "react-router-dom";
import styled from "styled-components";
import theme from "./../Theme"

interface Props {
  name: string;
  to: string;
  isSelected: boolean;
  onClick: () => void;
}


const Li = styled.div<{ isSelected: boolean }>`
  background-color: ${(p) => (p.isSelected && theme.primary)};
`;

const NavItem = ({ name, to, isSelected, onClick }: Props) => {
  return (
    <Li onClick={onClick} isSelected={isSelected}>
      <NavLink
        className={"nav-link active text-white"}
        aria-current="page"
        to={to}
      >
        {name}
      </NavLink>
    </Li>
  );
};

export default NavItem;
