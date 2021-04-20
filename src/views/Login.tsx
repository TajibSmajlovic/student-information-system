import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { Row, Col } from 'react-bootstrap';

import { FormikField, Notification, Card, Button, LanguageSelect } from 'components';
import { Link } from 'components/Typography';
import { overwriteSharedRoot, routes } from 'utils/routes/routes';
import { useNotifications } from 'context/NotificationContext';
import { setUserInfo } from 'store/actions';
import { USER_ROLES, ALERT_VARIANTS } from 'utils/enums';
import { LOCALIZATION_PAGES } from 'utils/constants';
import { LOGIN_SCHEMA } from 'utils/validation';

const Login = () => {
  const { t } = useTranslation(LOCALIZATION_PAGES.LOGIN);
  const { t: tCommon } = useTranslation(LOCALIZATION_PAGES.COMMON);
  const { showNotification } = useNotifications();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async ({ email, password }: { email: string; password: string }) => {
    // mimic an API call

    const user = {
      id: 1,
      name: 'user',
      email: 'user@mail.com',
      role: USER_ROLES.ADMIN,
    };

    if (email === user.email && password === 'pass123') {
      overwriteSharedRoot(user);
      dispatch(setUserInfo(user));
      showNotification('You are logged in!');
      history.push(routes.ROOT.path);
    } else {
      setErrorMessage('Error message todo');
    }
  };

  return (
    <Wrapper>
      <Card>
        <Formik
          enableReinitialize
          initialValues={{ email: '', password: '' }}
          validationSchema={LOGIN_SCHEMA}
          onSubmit={onSubmit}
        >
          {({ values }) => (
            <Form>
              <Row>
                {errorMessage && (
                  <Col xs="12">
                    <Notification
                      variant={ALERT_VARIANTS.DANGER}
                      message={errorMessage}
                      dismissible={true}
                      onClose={() => setErrorMessage('')}
                    />
                  </Col>
                )}
                <Col xs="12" className="d-flex align-items-center justify-content-center mb-4">
                  <img className="w-50" src={`${process.env.PUBLIC_URL}/assets/images/ius_logo.png`} alt="ius_logo" />
                </Col>
                <Col xs="12">
                  <FormikField type="email" name="email" label="email" />
                </Col>
                <Col xs="12">
                  <FormikField name="password" label="password" type="password" togglePassword={true} />
                </Col>
                <Col xs="12" className="mt-3">
                  <Button block type="submit" text={tCommon('login')} disabled={!values.email || !values.password} />
                </Col>
              </Row>
            </Form>
          )}
        </Formik>

        <div className="mt-3">
          <Link
            to="/reset-password"
            linkDescription={t('forgot_password_link_description')}
            linkText={t('forgot_password_link_text')}
          />
        </div>

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
