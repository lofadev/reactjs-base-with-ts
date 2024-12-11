import { SwitchProps } from 'antd';
import React from 'react';
import { SwitchStyled } from './styled';

export const Switch: React.FC<SwitchProps> = (props) => <SwitchStyled {...props} />;
