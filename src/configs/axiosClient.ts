import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_KEY, SYSTEM_ERROR } from '~/constants/common';
import { getLocalStorage } from '~/utils/storage';

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: getLocalStorage(LOCAL_STORAGE_KEY.TOKEN),
  },
  timeout: 10000,
  timeoutErrorMessage: SYSTEM_ERROR.TIMEOUT_ERROR.MESSAGE,
};

const AxiosClient: AxiosInstance = axios.create(config);

const handleRequestSuccess = (config: InternalAxiosRequestConfig<any>) => {
  return config;
};

const handleRequestError = (error: AxiosError) => {
  if (error.response) {
    return error.response.data;
  }

  return Promise.reject(error);
};

const handleResponseSuccess = ({ data }: AxiosResponse): AxiosResponse => data;

const handleResponseError = (error: AxiosError) => Promise.reject(error.response?.data);

AxiosClient.interceptors.request.use(handleRequestSuccess, handleRequestError);
AxiosClient.interceptors.response.use(handleResponseSuccess, handleResponseError);

export default AxiosClient;
