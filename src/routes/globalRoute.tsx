import { Fragment } from 'react/jsx-runtime';
import { DefaultLayout } from '~/layouts';
import { TRoute } from '~/types/route';

export const GlobalRoute: React.FC<TRoute> = ({ component: Component, layout }) => {
  const Layout = layout ? layout : layout === null ? Fragment : DefaultLayout;

  return (
    <Layout>
      <Component />
    </Layout>
  );
};
