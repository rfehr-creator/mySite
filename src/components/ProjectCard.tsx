import styled from "styled-components";

const Card = styled.div`
  margin: 5px;
  padding: 5px;
  background-color: black;
  color: white;
`;

const CardHeader = styled.div`
  font-size: 20px;
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
      <div>{description}</div>
    </Card>
  );
};
