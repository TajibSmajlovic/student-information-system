import { useState } from 'react';

import { Alert } from './Notifications.styles';
import { ALERT_VARIANTS } from 'utils/enums';

interface INotification {
  message: string;
  variant: ALERT_VARIANTS;
  dismissible?: boolean;
  onClose?: () => void;
}

const Notification = ({ message, variant, onClose, dismissible = false }: INotification) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    if (onClose) onClose();

    setShow(false);
  };

  return show ? (
    <Alert variant={variant} dismissible={dismissible} onClose={handleClose} style={{ zIndex: 999999 }}>
      {message}
    </Alert>
  ) : null;
};

export default Notification;
