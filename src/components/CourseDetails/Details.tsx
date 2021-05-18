import { useState } from 'react';
import { Row, Col, Button, Form, Container, ListGroup } from 'react-bootstrap';
import styled, { css } from 'styled-components';

import { Card, Text, Label } from 'components';
import Input from 'components/Form/Input/Input';
import IUser from 'models/redux/IUser';
import { useSelector } from 'react-redux';
import { getUser } from 'store/reducers/sessionReducer';
import { USER_ROLES } from 'utils/enums';
import { useHistory } from 'react-router';
import { routes } from 'utils/routes/routes';

const USER_PROFILE_SETTINGS_ENUMS = {
  DETAILS: 'Course Details',
  ATTACHMENTS: 'Attachments',
};

export default function Details() {
  const [selectedNavItem, setSelectedNavItem] = useState({
    id: 1,
    value: USER_PROFILE_SETTINGS_ENUMS.DETAILS,
    onSelect: thisItem => setSelectedNavItem(thisItem),
  });
  const { role } = useSelector(getUser) as IUser;
  const history = useHistory();
  const disabled = role === USER_ROLES.STUDENT;
  const isAdding = role === USER_ROLES.ADMIN;
  const [courseCode, setCourseCode] = useState('-');
  const settingsNavItems = [
    {
      id: 1,
      value: USER_PROFILE_SETTINGS_ENUMS.DETAILS,
      onSelect: thisItem => setSelectedNavItem(thisItem),
    },
    {
      id: 2,
      value: USER_PROFILE_SETTINGS_ENUMS.ATTACHMENTS,
      onSelect: thisItem => setSelectedNavItem(thisItem),
    },
  ];

  const Title = () => (
    <Row className="mb-4">
      <Col>
        <Text fontSize="1.5rem" color="text1" lineHeight="1.25">
          {selectedNavItem.value}
        </Text>
      </Col>
    </Row>
  );

  const Wrapper = ({ children }) =>
    role !== USER_ROLES.PROFESSOR ? <Container fluid>{children}</Container> : <>{children}</>;

  return (
    <Wrapper>
      <Card>
        {role !== USER_ROLES.PROFESSOR && (
          <Row className="mb-4">
            <Col md="2">
              <Button variant="primary" className="px-4" onClick={() => history.push(routes.COURSE_REGISTRATION.path)}>
                Back
              </Button>
            </Col>
          </Row>
        )}
        <Row className="justify-content-center mt-4">
          <Col xs="12" lg="3">
            <UserAvatar>
              <Text fontSize="5rem" color="white">
                {role !== USER_ROLES.ADMIN ? 'CS542' : courseCode}
              </Text>
            </UserAvatar>

            <div className="my-4">
              {settingsNavItems.map(n => (
                <NavItem
                  key={n.id}
                  style={{
                    color: selectedNavItem.value === n.value && 'var(--primary)',
                    fontWeight: selectedNavItem.value === n.value && 'bold',
                  }}
                  isActive={selectedNavItem.value === n.value}
                  onClick={() => n.onSelect(n)}
                >
                  {n.value}
                </NavItem>
              ))}
            </div>
          </Col>

          <Col sm="12" lg="9">
            <Title />

            <div className={`${selectedNavItem.value !== USER_PROFILE_SETTINGS_ENUMS.DETAILS ? 'd-none' : ''}`}>
              <>
                <Text className="mb-3" fontWeight="500" lineHeight="1.88" fontSize="1rem">
                  Basic Information
                </Text>
                <Row>
                  <Col xs="12" lg="4" className="my-2">
                    <Input
                      type="text"
                      label="Course name"
                      disabled={!isAdding}
                      value={!isAdding ? 'COurse Name' : ''}
                    />
                  </Col>
                  <Col xs="12" lg="4" className="my-2">
                    <Input
                      type="text"
                      autoFocus
                      label="Course Code"
                      disabled={!isAdding}
                      onChange={e => {
                        setCourseCode(e.target.value);
                      }}
                      value={!isAdding ? 'CS542' : courseCode}
                    />
                  </Col>
                </Row>
                <div style={{ flexDirection: 'column' }}>
                  <Label label="Schedule" />
                  <Row>
                    <Col xs="12" lg="2" className="my-2">
                      <Input name="asd" type="time" value={!isAdding ? '12:00' : ''} disabled={!isAdding} />
                    </Col>
                    <Col xs="12" lg="2" className="my-2">
                      <Input type="time" value={!isAdding ? '15:00' : ''} disabled={!isAdding} />
                    </Col>
                    <Col xs="12" lg="4" className="my-2">
                      <Input type="date" disabled={!isAdding} />
                    </Col>
                  </Row>
                </div>

                <Row>
                  <Col xs="12" lg="4" className="my-2">
                    <Input label="Professor" disabled={!isAdding} value={!isAdding ? 'Professor name' : ''} />
                  </Col>
                  <Col xs="12" lg="4" className="my-2">
                    <Input
                      type="email"
                      name="email"
                      label="e-mail"
                      disabled={disabled}
                      value={!isAdding ? 'Some value' : '-'}
                    />
                  </Col>
                </Row>
              </>

              <Break className="my-5" />

              <>
                <Text className="mt-4 mb-3" fontWeight="500" lineHeight="1.88" fontSize="1rem">
                  Section 2
                </Text>
                <Row>
                  <Col xs="12" lg="4" className="my-2">
                    <Input disabled={disabled} type="text" label="Textbook" value={!isAdding ? 'Some value' : ''} />
                  </Col>
                  <Col xs="12" lg="4" className="my-2">
                    <Input disabled={disabled} type="text" label="Label" />
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" lg="12" className="my-2">
                    <Label label="Details" value={!isAdding ? 'Some value' : ''} />
                    <Input
                      style={{ height: 100 }}
                      disabled={disabled}
                      as="textarea"
                      rows={5}
                      value={
                        !isAdding
                          ? 'The student is expected to carry out a semester long project in order to demonstrate the skills required to implement task and user targeted user interface. First 10 weeks, there will be 3 hours of lectures including project guidance. For the remaining weeks 4 weeks, there will be regular consultation meetings with the students in order to guide and evaluate the term project.'
                          : ''
                      }
                    />
                  </Col>
                </Row>
              </>

              <>
                <Text className="mt-4 mb-3" fontWeight="500" lineHeight="1.88" fontSize="1rem">
                  Section 3
                </Text>
                <Row>
                  <Col xs="12" lg="4" className="my-2">
                    <Input disabled={disabled} type="text" label="Label" value={!isAdding ? 'Some value' : ''} />
                  </Col>
                  <Col xs="12" lg="4" className="my-2">
                    <Input disabled={disabled} type="text" label="Label" value={!isAdding ? 'Some value' : ''} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" lg="12" className="my-2">
                    <Label label="Label" value={!isAdding ? 'Some value' : ''} />
                    <Input
                      style={{ height: 100 }}
                      disabled={disabled}
                      as="textarea"
                      rows={5}
                      value={
                        !isAdding
                          ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                          : ''
                      }
                    />
                  </Col>
                </Row>
              </>
              {role !== USER_ROLES.STUDENT && (
                <>
                  <Break className="my-5" />

                  <Row className="flex-row-reverse mb-3">
                    <Col xs="12" lg="4">
                      <Button block type="submit">
                        Save Changes
                      </Button>
                    </Col>
                  </Row>
                </>
              )}
            </div>
            <div className={`${selectedNavItem.value !== USER_PROFILE_SETTINGS_ENUMS.ATTACHMENTS ? 'd-none' : ''}`}>
              {!isAdding && (
                <ListGroup className="mt-4">
                  <ListGroup.Item
                    style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', fontSize: '1rem' }}
                  >
                    <div style={{ fontSize: '.7rem', marginBottom: 7 }}>24th March</div>
                    <Button variant="link">Course Curriculum</Button>
                  </ListGroup.Item>
                </ListGroup>
              )}

              {role !== USER_ROLES.STUDENT && (
                <>
                  <div
                    className="d-flex justify-content-center align-items-center my-5"
                    style={{
                      width: '100%',
                      height: 450,
                      border: '1px dotted var(--secondary)',
                      color: 'var(--disabled)',
                      fontSize: 18,
                      cursor: 'pointer',
                    }}
                  >
                    Drag file to upload
                  </div>

                  <Button variant="success">Upload</Button>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Card>
    </Wrapper>
  );
}

const Break = styled.hr`
  background-color: #f5f5f5;
`;

const UserAvatar = styled.div`
  height: 215px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  cursor: default;
  background-color: var(--disabled);
`;

const NavItem = styled(({ isActive, notAvailable, children, ...rest }) => (
  <Text fontWeight="500" color="label" lineHeight="2.43" {...rest}>
    {children}
  </Text>
))`
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: bold;
      color: var(--primary);
    `}

  ${({ notAvailable }) =>
    notAvailable &&
    css`
      display: none;
    `}
`;
