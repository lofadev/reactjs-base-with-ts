import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const LabelStyled = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  font-size: 13px;
`;

type FormLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & PropsWithChildren;

const FormLabel: React.FC<FormLabelProps> = ({ children, ...props }) => (
  <LabelStyled {...props}>{children}</LabelStyled>
);

export default FormLabel;
