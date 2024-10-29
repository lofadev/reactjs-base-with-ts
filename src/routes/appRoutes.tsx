import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LOCAL_STORAGE_KEY } from '~/constants';
import { useAuth } from '~/slices/auth';
import { getLocalStorage } from '~/utils/storage';
import { GlobalRoute, PrivateRoute, PublicRoute } from '.';
import { GLOBAL_ROUTES, PRIVATE_ROUTES, PUBLIC_ROUTES } from './constant';

export const AppRoutes = () => {
  const { getMe } = useAuth();

  useEffect(() => {
    const token = getLocalStorage(LOCAL_STORAGE_KEY.TOKEN);

    if (token) {
      getMe();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      {PUBLIC_ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={<PublicRoute {...route} />} />
      ))}
      {PRIVATE_ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={<PrivateRoute {...route} />} />
      ))}
      {GLOBAL_ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={<GlobalRoute {...route} />} />
      ))}
    </Routes>
  );
};
