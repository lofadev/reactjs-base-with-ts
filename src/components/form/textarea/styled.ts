import { Input } from 'antd';
import styled from 'styled-components';

const { TextArea } = Input;

export const TextAreaStyled = styled(TextArea)`
  &.ant-input:focus,
  &.ant-input:hover {
    border-color: ${({ theme }) => theme.textPrimary};
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

export const LabelStyled = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  font-size: 13px;
`;
