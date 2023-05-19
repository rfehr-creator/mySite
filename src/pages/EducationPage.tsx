import styled from "styled-components";
import courses from "../components/UMCourses";
import otherCourses from "../components/OtherCourses";
const padding = "5px;";

const Table = styled.table``;

const Card = styled.div`
  width: fit-content;
`;

const Header = styled.thead`
  background-color: black;
  color: white;
`;

const Footer = styled.tfoot`
  background-color: black;
  color: white;
`;
const TH = styled.th`
  padding: ${padding};
`;
const TD = styled.td`
  padding: ${padding};
`;

const Row = styled.tr`
  :nth-child(even) {
    background-color: #d1ebfc;
  }
`;
export const EducationPage = () => {
  return (
    <div>
      <Card className="card m-3">
      <div className="card-body">
          <h2 className="card-title">Other</h2>
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
        </div>
      </Card>
      <Card className="card m-3">
        <div className="card-body">
          <h2 className="card-title">University of Manitoba</h2>
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
        </div>
      </Card>
    </div>
  );
};
