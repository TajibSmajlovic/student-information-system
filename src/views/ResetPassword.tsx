import styled from 'styled-components';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { Row, Col } from 'react-bootstrap';

import { FormikField, Notification, Card, Button, LanguageSelect } from 'components';
import { Title } from 'components/Typography';
import { ALERT_VARIANTS } from 'utils/enums';
import { LOCALIZATION_PAGES } from 'utils/constants';
import { LOGIN_SCHEMA } from 'utils/validation';

const Login = () => {
  const { t } = useTranslation([LOCALIZATION_PAGES.COMMON, LOCALIZATION_PAGES.LOGIN]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const history = useHistory();

  const onBack = () => {
    history.push("/login")
  }

  const onSubmit = async ({ email}: { email: string}) => {
    // mimic an API call
  };

  return (
    <Wrapper>
      <Card>
        <Formik
          enableReinitialize
          initialValues={{ email: ''}}
          validationSchema={LOGIN_SCHEMA}
          onSubmit={onSubmit}
        >
          {({ values }) => (
            <Form>
              <Row>
                <Col xs="12">
                  {errorMessage && (
                    <Notification
                      variant={ALERT_VARIANTS.DANGER}
                      message={errorMessage}
                      dismissible={true}
                      onClose={() => setErrorMessage('')}
                    />
                  )}
                </Col>
                {/* add Logo here */}
                <Col xs="12"> <Title>Reset password</Title> </Col>
                <Col xs="12">
                  <FormikField type="email" name="email" label="" placeholder="Email address" />
                </Col>
                <Col xs="6" className="mt-3">
                  <Button block variant="secondary" onClick={onBack}  text={t('Cancel')} />
                </Col>
                <Col xs="6" className="mt-3">
                  <Button block type="submit" text={t('Continue')} disabled={!values.email} />
                </Col>
              </Row>
            </Form>
          )}
        </Formik>

        <hr />

        <div className="d-flex align-items-center justify-content-center">
          <LanguageSelect align="left" />
        </div>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 370px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Login;
