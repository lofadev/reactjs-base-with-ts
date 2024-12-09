import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FieldError } from 'react-hook-form';

export const useTranslateError = (name: string, error: FieldError | undefined) => {
  const { t, i18n } = useTranslation();

  const translateError = useMemo(() => {
    let translatedError: string | undefined;

    if (error?.message) {
      translatedError = error.type?.includes('required') ? t(error.message, { field: name }) : t(error.message);
    }

    return translatedError;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, i18n.language]);

  return translateError;
};
