import styled from "styled-components";
import theme from "./../Theme";

const Card = styled.div`
  margin: 5px;
  padding: 5px;
  width: 400px;
  background-color: ${theme.primary};
  color: white;
`;

const CardHeader = styled.h4`
`;

interface Props {
  company: string;
  role: string;
  start: string;
  end: string;
  length: string;
}
export const CompanyCard = ({ company, role, start, end, length }: Props) => {
  return (
    <Card className="card">
      <CardHeader>{company}</CardHeader>
      <div>{role}</div>
      <div>
        {start}
        {" - "}
        {end}
        {" (" + length + ")"}
      </div>
      <hr className="hr"></hr>
    </Card>
  );
};
