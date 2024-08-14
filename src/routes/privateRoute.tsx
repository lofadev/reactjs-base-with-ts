import { Spin } from 'antd';
import { Navigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { LOCAL_STORAGE_KEY } from '~/constants/common';
import DefaultLayout from '~/layouts/default';
import { useAuth } from '~/slices/auth';
import { TRoute } from '~/types/route';
import { getLocalStorage } from '~/utils/storage';
import { ROUTER_PATH } from './constant';

const PrivateRoute: React.FC<TRoute> = ({ component: Component, layout }) => {
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
          <Navigate to={ROUTER_PATH.AUTH.LOGIN} replace={true} />
        ) : null
      ) : (
        <Navigate to={ROUTER_PATH.AUTH.LOGIN} replace={true} />
      )}
    </Spin>
  );
};

export default PrivateRoute;
