import styled from 'styled-components';
import { Alert as DefaultAlert } from 'react-bootstrap';

import { ALERT_VARIANTS } from 'utils/enums';

interface INotification {
  message: string;
  variant: ALERT_VARIANTS;
}

const Notification = ({ message, variant }: INotification) => <Alert variant={variant}>{message}</Alert>;

const Alert = styled(DefaultAlert)`
  animation: fadeInFromNone 0.2s ease-out;

  @keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }
`;

export default Notification;
