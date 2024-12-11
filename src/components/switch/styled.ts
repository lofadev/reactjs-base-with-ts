import { Switch } from 'antd';
import styled from 'styled-components';

export const SwitchStyled = styled(Switch)`
  &:not(.ant-switch-checked) {
    background-color: #ccc;

    .ant-switch-inner-unchecked {
      color: ${({ theme }) => theme.base.bgPrimary};
    }
    &.ant-switch:hover:not(.ant-switch-disabled) {
      background-color: #ddd;
    }
  }
`;
