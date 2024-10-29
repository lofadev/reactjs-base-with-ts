import { lazy } from 'react';
import { ROUTE_NAMES } from '~/constants';
import Home from '~/pages/home';
import { TRoute } from '~/types/route';

const Register = lazy(() => import('~/pages/auth/register'));
const NotFound = lazy(() => import('~/pages/not-found'));
const Login = lazy(() => import('~/pages/auth/login'));

export const PUBLIC_ROUTES: TRoute[] = [
  {
    path: ROUTE_NAMES.HOME,
    component: Home,
  },
  {
    path: ROUTE_NAMES.AUTH.LOGIN,
    component: Login,
  },
  {
    path: ROUTE_NAMES.AUTH.REGISTER,
    component: Register,
  },
];

export const PRIVATE_ROUTES: TRoute[] = [];

export const GLOBAL_ROUTES: TRoute[] = [
  {
    path: ROUTE_NAMES.NOTFOUND,
    component: NotFound,
  },
];
