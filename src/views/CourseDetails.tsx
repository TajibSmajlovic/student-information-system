import { useState } from 'react';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';

import coursesAnnouncements from 'data/courses_announcements.json';
import Announcements from './Announcements';
import {
  Tab,
  Tabs,
  Attendance,
  StudentsManagement,
  Grades,
  CourseDetails as Details,
  Card,
  Modal,
  Label,
} from 'components';
import { useSelector } from 'react-redux';
import { getUser } from 'store/reducers/sessionReducer';
import IUser from 'models/redux/IUser';
import { USER_ROLES } from 'utils/enums';
import { Title } from 'components/Typography/Title';
import Input from 'components/Form/Input/Input';
import { useToggle } from 'utils/hooks';

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState<string>('4');
  const [visitedTabs, setVisitedTabs] = useState<string[]>([activeTab]);
  const { role } = useSelector(getUser) as IUser;
  const [isShowing, setIsShowing] = useToggle(false);

  const onHandleTabChange = (eventKey: string) => {
    setActiveTab(eventKey);

    if (!visitedTabs.includes(eventKey)) setVisitedTabs(prevState => [...prevState, eventKey]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Container fluid>
        <Tabs activeKey={activeTab} onSelect={onHandleTabChange}>
          <Tab eventKey="4" title="Attendance">
            {visitedTabs.includes('4') && <Attendance />}
          </Tab>
          {role !== USER_ROLES.STUDENT && (
            <Tab eventKey="5" title="Announcements">
              {visitedTabs.includes('5') && <Announcements />}
            </Tab>
          )}
          <Tab eventKey="3" title="Grades">
            {visitedTabs.includes('3') && <Grades disabled={role === USER_ROLES.STUDENT} />}
          </Tab>
          {role !== USER_ROLES.STUDENT && (
            <Tab eventKey="2" title="Students">
              {visitedTabs.includes('2') && (
                <StudentsManagement showAddButton={false} showPagination={false} showActions={false} />
              )}
            </Tab>
          )}
          <Tab eventKey="1" title="Details">
            {visitedTabs.includes('1') && <Details />}
          </Tab>
        </Tabs>
      </Container>
      {role === USER_ROLES.STUDENT && (
        <Card style={{ height: 200, position: 'sticky', top: 100, width: 450 }}>
          <Title className="ml-3" style={{ fontSize: '1.6rem', margin: 0 }}>
            Course Announcements
          </Title>
          <ListGroup className="mt-4">
            {coursesAnnouncements.data.map(a => {
              return (
                <div style={{ margin: '.3rem 0', width: 310 }}>
                  <ListGroup.Item
                    style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', fontSize: '1rem', width: 310 }}
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
      )}
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
    </div>
  );
};

export default CourseDetails;
