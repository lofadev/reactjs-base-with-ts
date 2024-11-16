import { LOCAL_STORAGE_KEY } from '~/constants';
import { setLocalStorage } from './storage';

export function changeLanguage(language: string) {
  setLocalStorage(LOCAL_STORAGE_KEY.LANGUAGE, language);
}
