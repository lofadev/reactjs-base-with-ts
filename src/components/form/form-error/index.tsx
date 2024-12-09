import styled from 'styled-components';

const ErrorStyled = styled.span`
  display: inline-block;
  margin-top: 5px;
  color: ${({ theme }) => theme.textDanger};
`;

interface IProps {
  message?: string;
}

const FormError: React.FC<IProps> = ({ message }) => <ErrorStyled>{message}</ErrorStyled>;

export default FormError;
