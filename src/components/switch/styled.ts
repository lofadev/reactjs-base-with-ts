import { Switch } from 'antd';
import styled from 'styled-components';

export const SwitchStyled = styled(Switch)`
  --height: 34px;
  --width: 74px;
  width: var(--width);
  height: var(--height);

  &,
  &.ant-switch:hover:not(.ant-switch-disabled) {
    background-color: ${({ theme }) => theme.lightGray};
  }

  .ant-switch-handle {
    width: calc(var(--height) - 6px);
    height: calc(var(--height) - 6px);

    &::before {
      top: 2px;
      inset-inline-start: 2px;
      border-radius: 14px;
    }
  }

  &.ant-switch.ant-switch-checked .ant-switch-handle {
    inset-inline-start: calc(100% - 32px);
  }

  &.ant-switch.ant-switch-checked,
  &.ant-switch.ant-switch-checked:hover:not(.ant-switch-disabled) {
    background-color: ${({ theme }) => theme.lightGray};
  }
`;
