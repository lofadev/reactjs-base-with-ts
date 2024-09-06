import { Input } from 'antd';
import styled from 'styled-components';

export const InputStyled = styled(Input)`
  padding: 0 14px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  font-size: 16px;
  color: ${({ theme }) => theme.textPrimary};
  border-radius: 4px;
  transition: all 0.2s linear;

  :focus,
  :hover {
    border-color: ${({ theme }) => theme.textPrimary};
    box-shadow: 0 0 0 2px rgba(106, 152, 60, 0.1);
  }
`;

export const LabelStyled = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  font-size: 13px;
`;
