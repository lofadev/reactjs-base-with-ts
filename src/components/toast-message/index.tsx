import { notification } from 'antd';
import { useEffect } from 'react';
import { useToastMessage } from '~/slices/toast';

export const ToastMessage = () => {
  const { toast_message, resetToastMessage } = useToastMessage();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (toast_message) {
      api[toast_message.type]({
        message: toast_message.message,
        description: toast_message.description,
        duration: 3,
        placement: 'top',
      });
    }

    return () => {
      setTimeout(() => {
        resetToastMessage();
      }, 3000);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast_message]);

  return <>{contextHolder}</>;
};
