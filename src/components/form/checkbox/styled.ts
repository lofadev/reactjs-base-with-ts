import { Checkbox } from 'antd';
import styled from 'styled-components';

export const CheckboxStyled = styled(Checkbox)`
  --height: 24px;

  .ant-checkbox-input {
    width: var(--height);
    height: var(--height);
  }

  &:hover .ant-checkbox-inner {
    border-color: ${({ theme }) => theme.primary} !important;
  }

  .ant-checkbox + span {
    line-height: var(--height);
    padding-inline-start: 8px;
    color: ${({ theme }) => theme.textPrimary};
  }
  .ant-checkbox-inner {
    width: var(--height);
    height: var(--height);

    &::after {
      width: 8px;
      height: 14px;
      border: 3px solid ${({ theme }) => theme.white};
      border-top: 0;
      border-left: 0;
    }
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    border-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary} !important;
  }
`;
