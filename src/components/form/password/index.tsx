import { InputProps } from 'antd';
import { Controller, useController, useFormContext } from 'react-hook-form';

import FormError from '../form-error';
import FormLabel from '../form-label';
import { useTranslateError } from '../hook';
import { InputStyled } from './styled';

interface IProps extends InputProps {
  name: string;
  label?: string;
}

const FieldPassword: React.FC<IProps> = ({ label, name, ...props }) => {
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
          {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          <InputStyled {...field} {...props} status={error ? 'error' : ''} id={name} />
          {!!error && <FormError message={translationError} />}
        </>
      )}
    />
  );
};

export default FieldPassword;
