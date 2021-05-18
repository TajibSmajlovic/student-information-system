import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { Formik, Form } from 'formik';

import { FormikField, Button, Text } from 'components';

const initialValues = {
  previousPassword: '',
  proposedPassword: '',
  repeatNewPassword: '',
};

const ChangePasswordForm = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      {() => (
        <Form>
          <>
            <Text className="mb-3" fontWeight="500" lineHeight="1.88" fontSize="1rem">
              Password and Security
            </Text>
            <Row>
              <Col xs="12" lg="6" className="my-2">
                <FormikField togglePassword type="password" name="previousPassword" placeholder="Old password" />
              </Col>
            </Row>
            <Row>
              <Col xs="12" lg="6" className="my-2">
                <FormikField togglePassword type="password" name="proposedPassword" placeholder="New Password" />
              </Col>
              <Col xs="12" lg="6" className="my-2">
                <FormikField togglePassword type="password" name="repeatNewPassword" placeholder="Repeat Password" />
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
  );
};

const Break = styled.hr`
  background-color: #f5f5f5;
`;

export default ChangePasswordForm;
