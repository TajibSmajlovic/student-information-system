import { useState } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import styled, { css } from 'styled-components';

import { Card, Text } from 'components';
import FormikField from 'components/Form/FormikField';

import ChangePassword from './ChangePasswordForm';
const USER_PROFILE_SETTINGS_ENUMS = {
  PERSONAL_INFO: 'Personal Info',
  PASSWORD_AND_SECURITY: 'Password and Security',
};

export default function Details() {
  const [selectedNavItem, setSelectedNavItem] = useState({
    id: 1,
    value: USER_PROFILE_SETTINGS_ENUMS.PERSONAL_INFO,
    onSelect: thisItem => setSelectedNavItem(thisItem),
  });

  const settingsNavItems = [
    {
      id: 1,
      value: USER_PROFILE_SETTINGS_ENUMS.PERSONAL_INFO,
      onSelect: thisItem => setSelectedNavItem(thisItem),
    },
    {
      id: 2,
      value: USER_PROFILE_SETTINGS_ENUMS.PASSWORD_AND_SECURITY,
      onSelect: thisItem => setSelectedNavItem(thisItem),
    },
  ];

  const Title = () => (
    <Row className="mb-4">
      <Col>
        <Text fontSize="1.5rem" color="text1" lineHeight="1.25">
          My Profile
        </Text>
      </Col>
    </Row>
  );

  return (
    <Container fluid>
      <Card>
        <Row className="justify-content-center mt-4">
          <Col xs="12" lg="3">
            <UserAvatar>
              <Text fontSize="5rem" color="white">
                T.S
              </Text>
            </UserAvatar>

            <div className="my-4">
              {settingsNavItems?.map(n => (
                <NavItem key={n.id} isActive={selectedNavItem.id === n.id} onClick={() => n.onSelect(n)}>
                  {n.value}
                </NavItem>
              ))}
            </div>
          </Col>

          <Col sm="12" lg="9">
            <Title />

            <div className={`${selectedNavItem.value !== USER_PROFILE_SETTINGS_ENUMS.PERSONAL_INFO ? 'd-none' : ''}`}>
              <Formik enableReinitialize initialValues={{}} onSubmit={() => {}}>
                {() => (
                  <Form>
                    <>
                      <Text className="mb-3" fontWeight="500" lineHeight="1.88" fontSize="1rem">
                        Personal Information
                      </Text>
                      <Row>
                        <Col xs="12" lg="4" className="my-2">
                          <FormikField type="text" name="firstName" label="First name" value="Tajib" />
                        </Col>
                        <Col xs="12" lg="4" className="my-2">
                          <FormikField type="text" name="lastName" label="Last Name" value="Smajlović" />
                        </Col>
                        <Col xs="12" lg="4" className="my-2">
                          <FormikField name="dateOfBirth" type="date" placeholder="yyyy-mm-dd" label="Date of birth" />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12" lg="4" className="my-2">
                          <FormikField type="number" name="phone" label="Phone" />
                        </Col>
                        <Col xs="12" lg="4" className="my-2">
                          <FormikField type="email" name="email" label="e-mail" />
                        </Col>
                      </Row>
                    </>

                    <Break className="my-5" />

                    <>
                      <Text className="mt-4 mb-3" fontWeight="500" lineHeight="1.88" fontSize="1rem">
                        Address
                      </Text>
                      <Row>
                        <Col xs="12" lg="4" className="my-2">
                          <FormikField type="text" name="address.city" label="City" />
                        </Col>
                        <Col xs="12" lg="4" className="my-2">
                          <FormikField type="text" name="address.state" label="Address" />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12" lg="4" className="my-2">
                          <FormikField type="number" name="address.zip" label="Zip Code" />
                        </Col>
                        <Col xs="12" lg="8" className="my-2">
                          <FormikField type="text" name="address.road" label="Road" />
                        </Col>
                      </Row>
                    </>

                    <Break className="my-5" />

                    <Row className="flex-row-reverse mb-3">
                      <Col xs="12" lg="4">
                        <Button block type="submit">
                          Save Changes
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            </div>
            <div
              className={`${
                selectedNavItem.value !== USER_PROFILE_SETTINGS_ENUMS.PASSWORD_AND_SECURITY ? 'd-none' : ''
              }`}
            >
              <ChangePassword />
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
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
