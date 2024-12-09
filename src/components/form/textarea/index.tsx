import { TextAreaProps } from 'antd/es/input';
import React from 'react';
import { Controller, useController, useFormContext } from 'react-hook-form';

import FormError from '../form-error';
import { useTranslateError } from '../hook';
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

  const translationError = useTranslateError(name, error);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          {!!label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}
          <TextAreaStyled rows={5} {...field} {...props} status={error ? 'error' : ''} id={name} />
          {!!error && <FormError message={translationError} />}
        </>
      )}
    />
  );
};

export default FieldText;
