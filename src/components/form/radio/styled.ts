import { Radio } from 'antd';
import styled from 'styled-components';

export const RadioStyled = styled(Radio)`
  & > span:nth-child(2) {
    padding-inline-start: 8px;
    padding-inline-end: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.textPrimary};
  }

  .ant-radio-inner {
    border-color: #a6a7b5;
    width: 24px;
    height: 24px;
    &:after {
      width: 40px;
      height: 40px;
      margin-block-start: -20px;
      margin-inline-start: -20px;
      border-radius: 100px;
      background-color: ${({ theme }) => theme.primary};
    }
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: ${({ theme }) => theme.primary};
    background-color: transparent !important;
  }

  .ant-radio-checked::after {
    border-color: ${({ theme }) => theme.primary};
  }

  &:hover {
    .ant-radio-inner {
      border-color: ${({ theme }) => theme.primary};
    }
  }
`;
