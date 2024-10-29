import { Spin } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Suspense: React.FC = () => {
  return (
    <Wrapper>
      <Spin spinning={true} />
    </Wrapper>
  );
};
