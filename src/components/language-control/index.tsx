import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGE, LOCAL_STORAGE_KEY } from '~/constants';
import { getLocalStorage, setLocalStorage } from '~/utils/storage';
import { Switch } from '../switch';

export const LanguageControl = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(getLocalStorage(LOCAL_STORAGE_KEY.LANGUAGE) ?? i18n.language);

  const handleChangeLanguage = useCallback(async () => {
    const anotherLanguage = language === LANGUAGE.VI ? LANGUAGE.EN : LANGUAGE.VI;
    await i18n.changeLanguage(anotherLanguage);
    setLocalStorage(LOCAL_STORAGE_KEY.LANGUAGE, anotherLanguage);
    setLanguage(anotherLanguage);
  }, [i18n, language]);

  return (
    <Switch
      checkedChildren={LANGUAGE.VI}
      unCheckedChildren={LANGUAGE.EN}
      checked={language === LANGUAGE.VI}
      onChange={handleChangeLanguage}
    />
  );
};
