import { SwitchProps } from 'antd';
import React from 'react';
import { SwitchStyled } from './styled';

interface ISwitchProps extends SwitchProps {}

export const Switch: React.FC<ISwitchProps> = (props) => <SwitchStyled {...props} />;
