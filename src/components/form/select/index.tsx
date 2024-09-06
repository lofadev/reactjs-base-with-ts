import { SelectProps } from 'antd';
import { Controller, useController, useFormContext } from 'react-hook-form';

import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import ErrorMessage from '../error-message';
import { SelectStyled } from './styled';

interface IProps extends SelectProps<any, DefaultOptionType | BaseOptionType> {
  name: string;
}

const FieldSelect: React.FC<IProps> = ({ name, ...props }) => {
  const { control } = useFormContext();
  const {
    fieldState: { error },
  } = useController({ name, control });
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <>
            <SelectStyled {...field} {...props} />
            {!!error && <ErrorMessage message={error.message} />}
          </>
        );
      }}
    />
  );
};

export default FieldSelect;
