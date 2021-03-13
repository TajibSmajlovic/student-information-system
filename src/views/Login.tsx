import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Container, Button } from 'react-bootstrap';

import IUser from 'models/IUser';
import { overwriteSharedRoot, routes } from 'utils/routes/routes';
import { setUserInfo } from 'store/actions';
import { USER_ROLES } from 'utils/enums';
import { LOCALIZATION_PAGES } from 'utils/constants';
import { useNotifications } from 'context/NotificationContext';

const Login = () => {
  const { t } = useTranslation(LOCALIZATION_PAGES.COMMON);
  const { showNotification } = useNotifications();

  const dispatch = useDispatch();
  const history = useHistory();

  const onClickHandler = async (user: IUser) => {
    // mimic an API call

    overwriteSharedRoot(user);
    dispatch(setUserInfo(user));
    if (showNotification) showNotification('You are logged in!');
    history.push(routes.ROOT.path);
  };

  return (
    // never use style prop!!!
    <Container fluid style={{ position: 'absolute', top: '50%', left: '48%' }}>
      <Button
        onClick={() =>
          onClickHandler({ id: 1, name: 'Tajib Smajlović', email: 'smajlovic.tajib@gmail.com', role: USER_ROLES.ADMIN })
        }
      >
        {t('login')}
      </Button>
    </Container>
  );
};

export default Login;
