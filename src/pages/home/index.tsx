import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Container } from '~/components';

const Wrapper = styled.div`
  height: calc(100vh - 100px - 50px - 60px);
  background-color: ${({ theme }) => theme.base.bgPrimary};
  margin: 30px 0;
  padding: 20px;
`;

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <h1>{t('common.hello')}</h1>
      </Wrapper>
    </Container>
  );
};

export default Home;
