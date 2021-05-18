import Notification from './Notification';
import { Wrapper } from './Notifications.styles';
import { useNotifications } from 'context/NotificationContext';

const Notifications = () => {
  const { notifications } = useNotifications();

  return (
    <Wrapper style={{ zIndex: 999999 }}>
      {notifications?.map((n, i) => {
        return <Notification message={n.message} variant={n.variant} key={i} />;
      })}
    </Wrapper>
  );
};

export default Notifications;
