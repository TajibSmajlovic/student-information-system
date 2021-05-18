import { Container, Row, Col, ListGroup } from 'react-bootstrap';

import announcements from 'data/announcements.json';
import events from 'data/professors_calendar';
import Input from 'components/Form/Input/Input';
import { Calendar, Card, Modal, Label } from 'components';
import { Title } from 'components/Typography';
import { useToggle } from 'utils/hooks';

const Home = () => {
  const [isShowing, setIsShowing] = useToggle(false);
  return (
    <Container fluid>
      <Row>
        <Col md="9">
          <Calendar {...{ events, editable: false }} />
        </Col>
        <Col md="3">
          <Card style={{ position: 'sticky', top: 100 }}>
            <Title style={{ fontSize: '1.6rem', margin: 0 }}>Announcements</Title>
            <ListGroup className="mt-4">
              {announcements.data.map(a => {
                return (
                  <div style={{ margin: '.3rem 0' }}>
                    <ListGroup.Item
                      style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', fontSize: '1rem' }}
                      action
                      onClick={setIsShowing}
                    >
                      <div style={{ fontSize: '.7rem', marginBottom: 7 }}>{a.date}</div>
                      {a.title}
                    </ListGroup.Item>
                  </div>
                );
              })}
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Modal onHide={setIsShowing} title="Announcement" show={isShowing}>
        <Row>
          <Col md="6">
            <Input label="Event title" value="Midterm exam schedule is posted" disabled={true} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="6">
            <Label style={{ marginTop: -25 }} label="Some field" />
            <div className="mb-3">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                www.lorem-ipsum.com
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Input
              style={{ height: 100 }}
              disabled={true}
              label="Details"
              as="textarea"
              rows={5}
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id rhoncus eros, sit amet consectetur purus. Mauris sit amet volutpat nibh. Ut elementum nibh non augue vulputate tempor. Vestibulum in dignissim velit. In sit amet dapibus mauris. Fusce consectetur nisl fermentum, ultricies velit sed, tristique tellus. Nulla et vestibulum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="6">
            <Input label="Date" type="date" disabled={true} value="2021-03-24" />
          </Col>
        </Row>
      </Modal>
    </Container>
  );
};

export default Home;
