import { Radio, RadioProps } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

import { RadioStyled } from './styled';

interface IOptions {
  label: string;
  value: string | number;
}

interface IProps extends RadioProps {
  name: string;
  options: IOptions[];
}

const FieldRadio: React.FC<IProps> = ({ options, name, ...props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Radio.Group {...field} {...props}>
          {options.map((option) => (
            <RadioStyled key={option.value} value={option.value}>
              {option.label}
            </RadioStyled>
          ))}
        </Radio.Group>
      )}
    />
  );
};

export default FieldRadio;
