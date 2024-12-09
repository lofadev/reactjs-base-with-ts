import { LANGUAGE, LOCAL_STORAGE_KEY } from '~/constants';
import { getLocalStorage, setLocalStorage } from './storage';

export function changeLanguage(language: string) {
  setLocalStorage(LOCAL_STORAGE_KEY.LANGUAGE, language);
}

export const checkValidLanguage = (languageValue?: string) => {
  const selectedLanguage = getLocalStorage(languageValue ?? LOCAL_STORAGE_KEY.LANGUAGE);

  if (!selectedLanguage) {
    return LANGUAGE.VI;
  }

  if (selectedLanguage !== LANGUAGE.VI && selectedLanguage !== LANGUAGE.EN) {
    return LANGUAGE.VI;
  }

  return selectedLanguage;
};
