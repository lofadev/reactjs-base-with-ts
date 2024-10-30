import { Flex } from 'antd';
import styled from 'styled-components';
import { Container } from '../container';
import { ThemeControl } from '../theme-control';

const HeaderStyled = styled.header`
  height: 100px;
  padding: 20px;
  background-color: ${({ theme }) => theme.base.bgContent};
`;

export const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <Flex justify="space-between">
          <h1>Header</h1>
          <ThemeControl />
        </Flex>
      </HeaderStyled>
    </Container>
  );
};
