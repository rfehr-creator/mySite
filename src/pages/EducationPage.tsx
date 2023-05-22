import styled from "styled-components";
import courses from "../components/UMCourses";
import otherCourses from "../components/OtherCourses";
import theme from "./../Theme";

const padding = "5px;";

const Table = styled.table``;

const Card = styled.div`
  width: fit-content;
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

const Row = styled.tr``;
export const EducationPage = () => {
  return (
    <div>
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
              <TH>Grade</TH>
            </Row>
          </Header>
          <tbody>
            {courses.map((course, index) => (
              <Row>
                <TD>{index + 1}</TD>
                <TD>{course.courseId}</TD>
                <TD>{course.courseName}</TD>
                <TD>{course.grade}</TD>
              </Row>
            ))}
          </tbody>
          <Footer>
            <Row>
              <td>GPA</td>
              <td></td>
              <td></td>
              <td>4.28 of 4.5</td>
            </Row>
          </Footer>
        </Table>
      </Card>
    </div>
  );
};
