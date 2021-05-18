import * as React from 'react';
import { Container, Form, Accordion, Button, Card, ButtonGroup } from 'react-bootstrap';

import ITableColumn from 'models/ITableColumn';
import mockedData from 'data/courses_data.json';
import { Table } from 'components';
import { routes, generateLink } from 'utils/routes/routes';
import { useHistory } from 'react-router';

const CourseRegistration = () => {
  const [selectedCourses, setSelectedCourses] = React.useState([]);
  const columns: ITableColumn[] = [
    { name: '' },
    {
      name: 'Course Name',
    },

    {
      name: 'Faculty',
    },
    {
      name: 'Student quota',
    },
    {
      name: 'Additional field 1',
    },
    {
      name: 'Additional field 2',
    },
    {
      name: 'Additional field 3',
    },
  ];
  const history = useHistory();

  const Header = ({ ...props }) => (
    <Card.Header style={{ backgroundColor: 'var(--white)', fontSize: '1.2rem', fontWeight: 'bold' }} {...props} />
  );

  const addCourse = course =>
    selectedCourses.includes(course)
      ? setSelectedCourses(prevVal => [...prevVal.filter(c => c.id === course.id)])
      : setSelectedCourses(prevVal => [...prevVal, course]);

  return (
    <Container fluid>
      <Header>
        Selected Courses
        <ButtonGroup style={{ float: 'right', marginRight: -18 }}>
          <Button disabled variant="primary">
            View Schedule
          </Button>
          <Button disabled variant="secondary">
            Send to Advisor for approval
          </Button>
        </ButtonGroup>
      </Header>
      <Table columns={[...columns].splice(1, columns.length)}>
        {selectedCourses.map((d, i) => (
          <tr key={i}>
            <td>
              <Button
                style={{ marginLeft: -15 }}
                variant="link"
                onClick={() => history.push(generateLink(routes.ATTENDANCE, { param: 123 }))}
              >
                {d.courseName}
              </Button>
            </td>
            <td>{d.faculty}</td>
            <td>{d.studentsNumber}</td>
            <td>Additional field</td>
            <td>Additional field</td>
            <td>Additional field</td>
            <td>
              <Button onClick={() => addCourse(d)} variant="outline-secondary">
                Remove
              </Button>
            </td>
          </tr>
        ))}
      </Table>

      <hr />

      <Accordion defaultActiveKey="0">
        <Accordion.Toggle as={Header} eventKey="0">
          Faculty Elective
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Table columns={columns}>
            {mockedData.data?.length &&
              mockedData.data.map((d, i) => (
                <tr key={i}>
                  <th style={{ width: 25 }}>
                    <Form.Group className="mb-0" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" onChange={() => addCourse(d)} />
                    </Form.Group>
                  </th>
                  <td>
                    <Button
                      style={{ marginLeft: -15 }}
                      variant="link"
                      onClick={() => history.push(generateLink(routes.ATTENDANCE, { param: 123 }))}
                    >
                      {d.courseName}
                    </Button>
                  </td>
                  <td>{d.faculty}</td>
                  <td>{d.studentsNumber}</td>
                  <td>Additional field</td>
                  <td>Additional field</td>
                  <td>Additional field</td>
                  <td></td>
                </tr>
              ))}
          </Table>
        </Accordion.Collapse>

        <hr />

        <Accordion.Toggle as={Header} eventKey="1">
          University Elective
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Table columns={columns}>
            {[...mockedData.data].splice(0, 2).map((d, i) => (
              <tr key={i}>
                <th style={{ width: 25 }}>
                  <Form.Group className="mb-0" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onChange={() => addCourse(d)} />
                  </Form.Group>
                </th>
                <td>
                  <Button style={{ marginLeft: -15 }} variant="link">
                    {d.courseName}
                  </Button>
                </td>
                <td>{d.faculty}</td>
                <td>{d.type}</td>
                <td>{d.studentsNumber}</td>
                <td>{d.additionalField3}</td>
                <td>Additional field</td>
                <td></td>
              </tr>
            ))}
          </Table>
        </Accordion.Collapse>
      </Accordion>
    </Container>
  );
};

export default CourseRegistration;
