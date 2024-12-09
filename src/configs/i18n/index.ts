import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { LANGUAGE } from '~/constants/common';
import { checkValidLanguage } from '~/utils/language';
import * as en from './locales/en';
import * as vi from './locales/vi';

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
    lng: checkValidLanguage(),
    fallbackLng: LANGUAGE.VI,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
