import { Fragment } from 'react/jsx-runtime';
import DefaultLayout from '~/layouts/default';
import { TRoute } from '~/types/route';

const GlobalRoute: React.FC<TRoute> = ({ component: Component, layout }) => {
  const Layout = layout ? layout : layout === null ? Fragment : DefaultLayout;

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default GlobalRoute;
