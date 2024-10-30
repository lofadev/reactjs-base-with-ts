import { Spin } from 'antd';
import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { ROUTE_NAMES } from '~/constants';
import { DefaultLayout } from '~/layouts';
import { useAuth } from '~/slices/auth';
import { TRoute } from '~/types/route';

export const PublicRoute: React.FC<TRoute> = ({ component: Component, layout }) => {
  const Layout = layout ? layout : layout === null ? Fragment : DefaultLayout;
  const { meInfo, isLoading } = useAuth();
  const location = useLocation();
  const pathname: string = useMemo(() => location.state?.pathname ?? ROUTE_NAMES.HOME, [location.state?.pathname]);

  return (
    <Spin spinning={isLoading}>
      {!meInfo ? (
        <Layout>
          <Component />
        </Layout>
      ) : (
        <Navigate to={pathname} replace={true} />
      )}
    </Spin>
  );
};
