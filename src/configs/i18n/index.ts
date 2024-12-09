import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { LANGUAGE, LOCAL_STORAGE_KEY } from '~/constants/common';
import * as en from './locales/en';
import * as vi from './locales/vi';
import { getLocalStorage } from '~/utils/storage';

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getLocalStorage(LOCAL_STORAGE_KEY.LANGUAGE),
    fallbackLng: LANGUAGE.VI,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
