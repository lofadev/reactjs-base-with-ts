import { Button } from 'antd';
import styled from 'styled-components';
import { Container } from '~/components';

const Wrapper = styled.div`
  height: calc(100vh - 100px - 50px - 60px);
  background-color: ${({ theme }) => theme.base.bgContent};
  margin: 30px 0;
  padding: 20px;
`;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Button type="primary">hello</Button>
      </Wrapper>
    </Container>
  );
};

export default Home;
