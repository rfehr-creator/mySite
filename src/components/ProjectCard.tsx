import styled from "styled-components";
import theme from './../Theme'

const Card = styled.div`
  margin: 5px;
  padding: 5px;
  background-color: ${theme.primary};
  color: white;
`;

const CardHeader = styled.h4`
  
`;

interface Props {
  title: string;
  description: string;
}
export const ProjectCard = ({ title, description }: Props) => {
  return (
    <Card className="card">
      <CardHeader>{title}</CardHeader>
      <hr className="hr"></hr>
      <div hidden={false}>{description}</div>
    </Card>
  );
};
