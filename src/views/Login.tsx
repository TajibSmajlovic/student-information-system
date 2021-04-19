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
  const { t } = useTranslation([LOCALIZATION_PAGES.COMMON, LOCALIZATION_PAGES.LOGIN]);
  const { showNotification } = useNotifications();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async ({ email, password }: { email: string; password: string }) => {
    // mimic an API call

    const user = {
      id: 1,
      name: 'Tarik Sidran',
      email: 'sidrantarik@gmail.com',
      role: USER_ROLES.ADMIN,
    };

    if (email === user.email && password === "test123") {
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
                <Col xs="12">LOGO</Col>
                <Col xs="12">
                  <FormikField type="email" name="email" label="email" />
                </Col>
                <Col xs="12">
                  <FormikField name="password" label="password" type="password" togglePassword={true} />
                </Col>
                <Col xs="12" className="mt-3">
                  <Button block type="submit" text={t('login')} disabled={!values.email || !values.password} />
                </Col>
              </Row>
            </Form>
          )}
        </Formik>

        <div className="mt-3">
          {/* Add translation */}
          <Link to="/reset-password" linkDescription="Can't remember your password?" linkText="Reset Password" />
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
