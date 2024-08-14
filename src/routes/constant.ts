import Login from '~/pages/auth/login';
import Register from '~/pages/auth/register';
import Home from '~/pages/home';
import NotFound from '~/pages/not-found';
import { TRoute } from '~/types/route';

export const ROUTER_PATH = {
  HOME: '/',
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
  },
  NOTFOUND: '*',
};

export const PUBLIC_ROUTES: TRoute[] = [
  {
    path: ROUTER_PATH.HOME,
    component: Home,
  },
  {
    path: ROUTER_PATH.AUTH.LOGIN,
    component: Login,
  },
  {
    path: ROUTER_PATH.AUTH.REGISTER,
    component: Register,
  },
];

export const PRIVATE_ROUTES: TRoute[] = [];

export const GLOBAL_ROUTES: TRoute[] = [
  {
    path: ROUTER_PATH.NOTFOUND,
    component: NotFound,
  },
];
