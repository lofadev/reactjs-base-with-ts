import { CheckboxProps } from 'antd';
import { Controller, useController, useFormContext } from 'react-hook-form';

import ErrorMessage from '../error-message';
import { CheckboxStyled } from './styled';

interface IProps extends CheckboxProps {
  name: string;
  question?: string;
}

const FieldCheckbox: React.FC<IProps> = ({ question, name, ...props }) => {
  const { control } = useFormContext();
  const {
    fieldState: { error },
  } = useController({ name, control });
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <CheckboxStyled {...field} {...props} checked={field.value}>
            {question}
          </CheckboxStyled>
          {!!error && <ErrorMessage message={error.message} />}
        </>
      )}
    />
  );
};

export default FieldCheckbox;
