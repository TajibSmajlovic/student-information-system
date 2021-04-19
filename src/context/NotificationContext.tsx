import { useMemo, useContext, useCallback, createContext, ReactNode } from 'react';
import { useImmer } from 'use-immer';

import { generateNotificationID } from 'utils/helpers';
import { ALERT_VARIANTS } from 'utils/enums';
import { NOTIFICATION_DISMISS_TIMEOUT } from 'utils/constants';

type TShowNotification = (message: string, variant?: ALERT_VARIANTS, duration?: number) => void;
type TClearNotification = (id: string) => void;

interface INotification {
  id: string;
  message: string;
  variant: ALERT_VARIANTS;
  timeout: NodeJS.Timeout;
}

interface INotificationContext {
  children: ReactNode;
  notifications: INotification[];
  showNotification: TShowNotification;
  clearNotification: TClearNotification;
}

const NotificationContext = createContext<Partial<INotificationContext>>({});

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useImmer<INotification[]>([]);

  const clearNotification: TClearNotification = useCallback(
    notificationId => {
      setNotifications(draft => {
        const index = draft.findIndex(n => n.id === notificationId);
        const notification = draft[index] as INotification;

        clearInterval(notification.timeout);
        draft.splice(index, 1);
      });
    },
    [setNotifications]
  );

  const showNotification: TShowNotification = useCallback(
    (message, variant = ALERT_VARIANTS.SUCCESS, duration = NOTIFICATION_DISMISS_TIMEOUT) => {
      const id = generateNotificationID();

      // create timeout object for deleting notification when expires
      const timeout = setTimeout(() => {
        clearNotification(id);
      }, duration);

      setNotifications(draft => {
        draft.push({
          message,
          variant,
          id,
          timeout,
        });
      });
    },
    [setNotifications, clearNotification]
  );

  const context = useMemo(
    () => ({
      notifications,
      showNotification,
      clearNotification,
    }),
    [notifications, showNotification, clearNotification]
  );

  return <NotificationContext.Provider value={context}>{children}</NotificationContext.Provider>;
};

export function useNotifications() {
  const context = useContext(NotificationContext) as INotificationContext;

  if (!context) throw new Error(`useNotifications must be used within a NotificationsProvider`);

  return context;
}

export const Consumer = NotificationContext.Consumer;
