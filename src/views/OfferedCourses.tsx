import { ListGroup, Container, Badge } from 'react-bootstrap';
import { BsCheck, BsX } from 'react-icons/bs';

import mockedData from 'data/courses_data.json';
import { Title } from 'components/Typography';
import { useHistory } from 'react-router';
import { generateLink, routes } from 'utils/routes/routes';

export default function OfferedCourses() {
  const history = useHistory();

  return (
    <Container fluid>
      <ListGroup className="mb-5">
        {mockedData.data.map((d, i) => (
          <div style={{ margin: '.3rem 0' }}>
            <ListGroup.Item
              action
              onClick={() => history.push(routes.OFFERED_COURSES_PREVIEW.path)}
              className="py-3"
              style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', fontSize: '1rem' }}
            >
              <div style={{ fontSize: '.7rem', marginBottom: 7 }}>
                <Badge
                  style={{ fontSize: 11, marginBottom: 7 }}
                  variant={d.type === 'Graduate course' ? 'danger' : 'primary'}
                >
                  {d.type}
                </Badge>
              </div>
              <span style={{ fontSize: 18 }}>{d.courseName}</span>

              <span style={{ float: 'right', cursor: 'pointer' }}>
                <BsCheck size={20} className="mr-3" />
                <BsX size={23} />
              </span>
            </ListGroup.Item>
          </div>
        ))}
      </ListGroup>
    </Container>
  );
}
