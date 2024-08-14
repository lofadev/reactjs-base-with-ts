import { IUser } from '~/interfaces/user';

export interface IAuthState {
  meInfo: IUser | null;
  isLoading: boolean;
  error: any | null;
}
