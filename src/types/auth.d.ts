import { UserModel } from '~/models';

export interface IAuthState {
  meInfo: UserModel | null;
  isLoading: boolean;
  error: any | null;
}
