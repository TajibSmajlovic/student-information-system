import styled from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import 'utils/localization/i18n';
import Routes from 'utils/routes/routes';
import { Notifications } from 'components';
import { NotificationProvider } from 'context/NotificationContext';
import { UserProvider } from 'context/UserContext';
import { configureStore } from 'store/configureStore';
import { useCurrentWidth } from 'utils/hooks';

const store = configureStore();

const App = () => {
  const width = useCurrentWidth();

  return width < 1024 ? (
    <Message />
  ) : (
    <Provider store={store}>
      <Router>
        <NotificationProvider>
          <UserProvider>
            <Notifications />
            <Routes />
          </UserProvider>
        </NotificationProvider>
      </Router>
    </Provider>
  );
};

const Message = styled(({ ...rest }) => (
  <div {...rest}>Only the desktop version of this application is available!</div>
))`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
`;

export default App;
