import { AxiosError } from 'axios';
import { UserModel } from '~/models';

export interface IAuthState {
  meInfo: UserModel | null;
  isLoading: boolean;
  error: AxiosError | null;
}
