import { Route, Routes } from 'react-router-dom';
import { GlobalRoute, PrivateRoute, PublicRoute } from '.';
import { GLOBAL_ROUTES, PRIVATE_ROUTES, PUBLIC_ROUTES } from './constant';

const RootRoutes = () => {
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

export default RootRoutes;
