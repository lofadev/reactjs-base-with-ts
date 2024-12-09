import { CheckboxProps } from 'antd';
import { Controller, useController, useFormContext } from 'react-hook-form';

import FormError from '../form-error';
import { CheckboxStyled } from './styled';
import FormLabel from '../form-label';
import { useTranslateError } from '../hook';

interface IProps extends CheckboxProps {
  name: string;
  question?: string;
  label?: string;
}

const FieldCheckbox: React.FC<IProps> = ({ question, name, label, ...props }) => {
  const { control } = useFormContext();
  const {
    fieldState: { error },
  } = useController({ name, control });

  const translationError = useTranslateError(name, error);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          {!!label && <FormLabel>{label}</FormLabel>}
          <CheckboxStyled {...field} {...props} checked={field.value}>
            {question}
          </CheckboxStyled>
          {!!error && <FormError message={translationError} />}
        </>
      )}
    />
  );
};

export default FieldCheckbox;
