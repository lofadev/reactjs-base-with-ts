import { TextAreaProps } from 'antd/es/input';
import React, { useMemo } from 'react';
import { Controller, useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import ErrorMessage from '../error-message';
import { LabelStyled, TextAreaStyled } from './styled';

interface IProps extends TextAreaProps {
  name: string;
  label?: string;
}

const FieldText: React.FC<IProps> = ({ label, name, ...props }) => {
  const { control } = useFormContext();
  const {
    fieldState: { error },
  } = useController({ name, control });
  const { t, i18n } = useTranslation();

  const translationError = useMemo(() => {
    let translatedError: string | undefined;

    if (!!error && error.message)
      translatedError = error.type?.includes('required')
        ? t(error.message, { field: t(name as any) })
        : t(error.message);

    return translatedError;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, i18n.language]);

  return (
    <div className="form-group">
      {!!label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextAreaStyled rows={5} {...field} {...props} status={error ? 'error' : ''} id={name} />
        )}
      />
      {!!error && <ErrorMessage message={translationError} />}
    </div>
  );
};

export default FieldText;
