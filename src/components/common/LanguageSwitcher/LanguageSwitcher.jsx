import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>En</button>
      <button onClick={() => changeLanguage('ru')}>Ru</button>
      <button onClick={() => changeLanguage('uk')}>Uk</button>
    </div>
  );
};

export default LanguageSwitcher;