import styled from "styled-components";
import courses from "../components/Courses";
const Table = styled.table`
  
`;

const Row = styled.tr`

`;
export const EducationPage = () => {
  return (
    <div className="card text-white bg-black m-3">
      <div className="card-body">
        <h5 className="card-title">University of Manitoba</h5>
        <Table>
          <thead>
            <Row>
              <th>#</th>
              <th>Course Number</th>
              <th>Course Completed</th>
              <th>Grade</th>
            </Row>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <Row>
                <td>{index + 1}</td>
                <td>{course.courseId}</td>
                <td>{course.courseName}</td>
                <td>{course.grade}</td>
              </Row>
            ))}
          </tbody>
          <tfoot>
            <Row>
              <td>GPA</td>
              <td></td>
              <td></td>
              <td>4.28 of 4.5</td>
            </Row>
          </tfoot>
        </Table>
      </div>
    </div>
  );
};
