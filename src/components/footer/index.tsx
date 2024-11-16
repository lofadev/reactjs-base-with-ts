import { Flex } from 'antd';
import { Container } from '../container';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.base.bgPrimary};
`;

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Flex justify="center">
          <p>Copyright by @LofA</p>
        </Flex>
      </Wrapper>
    </Container>
  );
};
