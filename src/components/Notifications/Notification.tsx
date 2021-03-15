import { Alert } from './Notifications.styles';
import { ALERT_VARIANTS } from 'utils/enums';

interface INotification {
  message: string;
  variant: ALERT_VARIANTS;
}

const Notification = ({ message, variant }: INotification) => <Alert variant={variant}>{message}</Alert>;

export default Notification;
