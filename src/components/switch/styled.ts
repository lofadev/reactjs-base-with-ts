import { Switch } from 'antd';
import styled from 'styled-components';

export const SwitchStyled = styled(Switch)`
  &.ant-switch:not(.ant-switch-checked) {
    background-color: ${({ theme }) => theme.base.textPrimary};
  }

  &.ant-switch {
    color: ${({ theme }) => theme.base.bgPrimary};

    .ant-switch-inner {
      .ant-switch-inner-checked {
        color: ${({ theme }) => theme.base.white};
      }
      .ant-switch-inner-unchecked {
        color: inherit;
      }
    }
  }
`;
