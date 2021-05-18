import styled from 'styled-components';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { Row, Col } from 'react-bootstrap';

import { FormikField, Notification, Card, Button, LanguageSelect } from 'components';
import { ALERT_VARIANTS } from 'utils/enums';
import { LOCALIZATION_PAGES } from 'utils/constants';
import { RESET_PASSWORD_SCHEMA } from 'utils/validation';
import { Title } from 'components/Typography';

const ResetPassword = () => {
  const { t } = useTranslation([LOCALIZATION_PAGES.COMMON, LOCALIZATION_PAGES.LOGIN]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const history = useHistory();

  const onBack = () => {
    history.push('/login');
  };

  const onSubmit = async ({ email }: { email: string }) => {
    console.log(email);
  };

  return (
    <Wrapper>
      <Card>
        <Formik
          enableReinitialize
          initialValues={{ email: '' }}
          validationSchema={RESET_PASSWORD_SCHEMA}
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
                <Col xs="12" className="d-flex align-items-center justify-content-center mb-4">
                  <img className="w-50" src={`${process.env.PUBLIC_URL}/assets/images/ius_logo.png`} alt="ius_logo" />
                </Col>

                <Col>
                  <Title style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: 25 }}>Generate Password</Title>
                </Col>

                <Col xs="12">
                  <FormikField type="email" name="email" label="" placeholder="T.R. Identity / Passport No" />
                </Col>
                <Col xs="12">
                  <FormikField type="email" name="father's name" label="" placeholder="Father's name" />
                </Col>
                <Col xs="12">
                  <Title> Date of birth </Title>
                </Col>
                <Col xs="12">
                  <FormikField type="date" name="day" label="" placeholder="" />
                </Col>
                <Col xs="6" className="mt-3">
                  <Button block variant="secondary" onClick={onBack} text={t('Cancel')} />
                </Col>
                <Col xs="6" className="mt-3">
                  <Button block type="submit" text={t('Generate')} disabled={!values.email} />
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

export default ResetPassword;
