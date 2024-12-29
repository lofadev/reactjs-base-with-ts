export interface IErrorState {
  message: string | null;
}

export interface IResponseError {
  status: 'ERROR';
  message: string;
  data: null;
}
