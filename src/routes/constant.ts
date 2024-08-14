import Home from '~/pages/home';
import NotFound from '~/pages/not-found';
import { TRoute } from '~/types/route';

export const ROUTER_PATH = {
  HOME: '/',
  AUTH: {
    LOGIN: '/login',
    SIGNUP: '/sign-up',
  },
  DASHBOARD: '/dashboard',
  NOTFOUND: '*',
};

export const PUBLIC_ROUTES: TRoute[] = [
  {
    path: ROUTER_PATH.HOME,
    component: Home,
  },
];

export const PRIVATE_ROUTES: TRoute[] = [
  {
    path: ROUTER_PATH.DASHBOARD,
    component: Home,
  },
];

export const GLOBAL_ROUTES: TRoute[] = [
  {
    path: ROUTER_PATH.NOTFOUND,
    component: NotFound,
  },
];
