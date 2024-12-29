import { notification } from 'antd';
import { useEffect } from 'react';
import { useError } from '~/slices/error';
import { useToastMessage } from '~/slices/toast';

export const ToastMessage = () => {
  const { toast_message, resetToastMessage, setToastMessage } = useToastMessage();
  const { message, setError } = useError();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (toast_message) {
      api[toast_message.type]({
        message: toast_message.message,
        description: toast_message.description,
        duration: 3,
        placement: 'top',
      });

      const timeId = setTimeout(() => {
        resetToastMessage();
      }, 3000);

      return () => clearTimeout(timeId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast_message]);

  useEffect(() => {
    if (message) {
      setToastMessage({
        type: 'error',
        message: 'Có lỗi',
        description: message,
      });

      const timeId = setTimeout(() => {
        setError(null);
      }, 3000);

      return () => clearTimeout(timeId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return <>{contextHolder}</>;
};
