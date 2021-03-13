export const isDevelopment = process.env.NODE_ENV === 'development';

export const generateNotificationID = () => `id_${new Date().getTime()}`;
