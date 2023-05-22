import styled from "styled-components";
import courses from "../components/UMCourses";
import otherCourses from "../components/OtherCourses";
import theme from "./../Theme";
import { useState } from "react";

const padding = "5px;";

const Table = styled.table`
width: 100%
`;

const Card = styled.div`
  width: 100%;
  margin: 10px;
`;

const Title = styled.h2`
  text-align: center;
`;

const Header = styled.thead`
  background-color: ${theme.primary};
  color: white;
`;

const Footer = styled.tfoot`
  background-color: ${theme.primary};
  color: white;
`;
const TH = styled.th`
  padding: ${padding};
`;
const TD = styled.td`
  padding: ${padding};
`;

const Button = styled.button`
  background-color: ${theme.primary};
  color: white;
  padding: 5px;
  text-align: center;
  border: none;
  margin-top: 5px;
  border-radius: 5px;
  width: 100%;
`;

const Tables = styled.div`
width: fit-content;
`

const Row = styled.tr``;
export const EducationPage = () => {
  const [viewGrade, setViewGrade] = useState<boolean>(false);
  return (
    <Tables>
      <Card>
        <Title>Other</Title>
        <Table>
          <Header>
            <Row>
              <TH>Where</TH>
              <TH>Course Name</TH>
            </Row>
          </Header>
          <tbody>
            {otherCourses.map((course) => (
              <Row>
                <TD>{course.where}</TD>
                <TD>{course.courseName}</TD>
              </Row>
            ))}
          </tbody>
        </Table>
      </Card>
      <Card>
        <Title>University of Manitoba</Title>
        <Table>
          <Header>
            <Row>
              <TH>#</TH>
              <TH>Course #</TH>
              <TH>Course Name</TH>
              {viewGrade && <TH>Grade</TH>}
            </Row>
          </Header>
          <tbody>
            {courses.map((course, index) => (
              <Row>
                <TD>{index + 1}</TD>
                <TD>{course.courseId}</TD>
                <TD>{course.courseName}</TD>
                {viewGrade && <TD>{course.grade}</TD>}
              </Row>
            ))}
          </tbody>
          {viewGrade && <Footer>
            <Row>
              <td>GPA</td>
              <td></td>
              <td></td>
              <td>4.28 of 4.5</td>
            </Row>
          </Footer>}
        </Table>
        <Button onClick={() => setViewGrade(!viewGrade)}>View Grades</Button>
      </Card>
    </Tables>
  );
};
