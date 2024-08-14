import { PropsWithChildren } from 'react';
import { Footer, Header } from '~/components';
import { MainStyled } from './styled';

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <MainStyled>{children}</MainStyled>
      <Footer />
    </>
  );
};

export default DefaultLayout;
