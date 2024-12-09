import { IconType } from 'antd/es/notification/interface';

export interface IToastMessageParams {
  type: IconType;
  message?: string;
  description: string | ReactNode;
}

export type IToastMessageState = {
  toast_message?: IToastMessageParams | null;
};
