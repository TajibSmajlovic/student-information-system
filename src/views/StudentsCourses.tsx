import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Container, Badge, Row, Col } from 'react-bootstrap';

import courses from 'data/courses_data.json';
import { Card } from 'components';
import { Title } from 'components/Typography';
import { routes, generateLink } from 'utils/routes/routes';

const MyCourses = () => {
  const history = useHistory();

  return (
    <Container fluid>
      <Row className="p-5">
        {[...courses.data].splice(0, 3).map(c => (
          <Col md="3">
            <CustomCard
              className="px-5 pt-3 pb-3 mb-5 mr-3"
              onClick={() => history.push(generateLink(routes.COURSE_DETAILS, { param: 123 }))}
            >
              <Title style={{ fontSize: '1.5rem', marginTop: 25 }}>{c.courseName}</Title>
              <h6 style={{ color: 'var(--text-grey)', textAlign: 'center', marginTop: 25 }}>
                {c.studentsNumber} students enrolled
              </h6>
            </CustomCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const CustomCard = styled(Card)`
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 3px 15px 2px rgba(0, 0, 0, 0.15);
  }
`;

export default MyCourses;
