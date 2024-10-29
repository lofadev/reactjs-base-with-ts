import { Spin } from 'antd';
import { Navigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { LOCAL_STORAGE_KEY, ROUTE_NAMES } from '~/constants';
import { DefaultLayout } from '~/layouts';
import { useAuth } from '~/slices/auth';
import { TRoute } from '~/types/route';
import { getLocalStorage } from '~/utils/storage';

export const PrivateRoute: React.FC<TRoute> = ({ component: Component, layout }) => {
  const Layout = layout ? layout : layout === null ? Fragment : DefaultLayout;
  const { meInfo, isLoading, error } = useAuth();
  const token = getLocalStorage(LOCAL_STORAGE_KEY.TOKEN);

  return (
    <Spin spinning={isLoading}>
      {token ? (
        meInfo ? (
          <Layout>
            <Component />
          </Layout>
        ) : error ? (
          <Navigate to={ROUTE_NAMES.AUTH.LOGIN} replace={true} />
        ) : null
      ) : (
        <Navigate to={ROUTE_NAMES.AUTH.LOGIN} replace={true} />
      )}
    </Spin>
  );
};
