import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 40px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const Container: React.FC<PropsWithChildren> = ({ children }) => <Wrapper>{children}</Wrapper>;
