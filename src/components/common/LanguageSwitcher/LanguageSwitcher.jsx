const LanguageSwitcher = ({ changeLanguage }) => {
    return (
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ru')}>Русский</button>
        <button onClick={() => changeLanguage('uk')}>Українська</button>
      </div>
    );
  };
  
  export default LanguageSwitcher;
  