import { SwitchProps } from 'antd';
import React from 'react';
import { SwitchStyled } from './styled';

interface ISwitchProps extends SwitchProps {}
const Switch: React.FC<ISwitchProps> = (props) => <SwitchStyled {...props} />;

export default Switch;
