import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { LANGUAGE } from '~/constants/common';
import * as en from './locales/en';
import * as vi from './locales/vi';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: vi,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: LANGUAGE.EN,
    fallbackLng: LANGUAGE.EN,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
