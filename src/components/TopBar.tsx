import styled from "styled-components";
import { Navbar } from "./NavBar";

const Title = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;

const Top = styled.div`
display: block;
  top: 0;
  position: sticky;
  position: -webkit-sticky;
  background-color: white;
`;
export const TopBar = () => {
  return (
    <Top>
      <Title>Roland Fehr</Title>
      <Navbar />
    </Top>
  );
};
