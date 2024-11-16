import styled from 'styled-components';
import { Container } from '../container';
import { ThemeControl } from '../theme-control';
import { Flex } from 'antd';
import { LanguageControl } from '../language-control';

const HeaderStyled = styled.header`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.base.bgPrimary};
`;

export const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <h1>Header</h1>
        <Flex gap={8}>
          <LanguageControl />
          <ThemeControl />
        </Flex>
      </HeaderStyled>
    </Container>
  );
};
