import { SelectProps } from 'antd';
import { Controller, useController, useFormContext } from 'react-hook-form';

import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import FormError from '../form-error';
import { SelectStyled } from './styled';
import FormLabel from '../form-label';
import { useTranslateError } from '../hook';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface IProps extends SelectProps<any, DefaultOptionType | BaseOptionType> {
  name: string;
  label?: string;
}

const FieldSelect: React.FC<IProps> = ({ name, label, ...props }) => {
  const { control } = useFormContext();
  const {
    fieldState: { error },
  } = useController({ name, control });

  const translationError = useTranslateError(name, error);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <>
            {!!label && <FormLabel>{label}</FormLabel>}
            <SelectStyled {...field} {...props} />
            {!!error && <FormError message={translationError} />}
          </>
        );
      }}
    />
  );
};

export default FieldSelect;
