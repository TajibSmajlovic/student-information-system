import * as React from 'react';
import { Container, Row, Col, ListGroup, Tabs, Tab } from 'react-bootstrap';
import styled from 'styled-components';

import announcements from 'data/announcements.json';
import coursesAnnouncements from 'data/courses_announcements.json';
import events from 'data/student_calendar';
import { Calendar, Card } from 'components';
import { Title } from 'components/Typography';

const Home = () => {
  const [activeKey, setActiveKey] = React.useState('global');

  return (
    <Container fluid>
      <Row>
        <Col md="9">
          <Calendar {...{ events, editable: false }} />
        </Col>
        <Col md="3">
          <Card style={{ position: 'sticky', top: 100 }}>
            <Title className="mb-4" style={{ fontSize: '1.6rem', margin: 0 }}>
              Announcements
            </Title>
            <CustomTabs onSelect={k => setActiveKey(k)} activeKey={activeKey} defaultActiveKey="home">
              <Tab eventKey="global" title="Global">
                <ListGroup className="mt-4">
                  {announcements.data.map(a => {
                    return (
                      <div style={{ margin: '.3rem 0' }}>
                        <ListGroup.Item
                          style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', fontSize: '1rem' }}
                          action
                        >
                          <div style={{ fontSize: '.7rem', marginBottom: 7 }}>{a.date}</div>
                          {a.title}
                        </ListGroup.Item>
                      </div>
                    );
                  })}
                </ListGroup>
              </Tab>
              <Tab eventKey="courses" title="Courses">
                <ListGroup className="mt-4">
                  {coursesAnnouncements.data.map(a => {
                    return (
                      <div style={{ margin: '.3rem 0' }}>
                        <ListGroup.Item
                          style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', fontSize: '1rem' }}
                          action
                        >
                          <div style={{ fontSize: '.7rem', marginBottom: 7 }}>{a.date}</div>
                          {a.title}
                        </ListGroup.Item>
                      </div>
                    );
                  })}
                </ListGroup>
              </Tab>
            </CustomTabs>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const CustomTabs = styled(Tabs)`
  display: flex;
  flex-direction: row;
  margin: 0 3px;

  .active {
    font-weight: bold !important;
    color: var(--primary) !important;
    border-bottom: 3px solid var(--primary) !important;
  }

  a {
    border: none !important;
    width: 50%;
    font-weight: 500;
    text-align: center;
    color: var(--secondary) !important;
  }

  a:hover,
  a:active {
    border-bottom: 3px solid var(--primary) !important;
    color: var(--primary) !important;
  }
`;

export default Home;
