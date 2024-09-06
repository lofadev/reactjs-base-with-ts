import { Select } from 'antd';
import { BaseOptionType, DefaultOptionType, SelectProps } from 'antd/es/select';
import styled from 'styled-components';

export const SelectStyled = styled(Select)<SelectProps<any, DefaultOptionType | BaseOptionType>>`
  font-size: 16px;
  min-width: 400px;
  height: 50px;

  .ant-select-selector {
    padding-left: 22px;
    border-radius: 4px;
  }

  .ant-select-selection-search-input {
    height: 50px;
  }

  .ant-select-arrow {
    inset-inline-end: 18px;
  }

  &.ant-select-focused .ant-select-selector,
  &:hover .ant-select-selector {
    border-color: ${({ theme }) => theme.textPrimary} !important;
  }

  &.ant-select-focused .ant-select-selector {
    box-shadow: 0 0 0 2px rgba(149, 157, 165, 0.1) !important;
  }
`;
