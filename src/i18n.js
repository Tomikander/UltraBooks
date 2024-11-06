import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      NOW_GAME: "Now Game",
      BUTTON_START: "Start",
      BUTTON_TEXT: "Show Words",
      RESET_BUTTON_TEXT: "Reset Game",
      CORRECT_FEEDBACK: "Correct!",
      INCORRECT_FEEDBACK: "Incorrect!",
    }
  },
  uk: {
    translation: {
      NOW_GAME: "Зіграймо!",
      BUTTON_START: "натисни тут",
      BUTTON_TEXT: "Це хто?",
      RESET_BUTTON_TEXT: "С",
      CORRECT_FEEDBACK: "Правильно!",
      INCORRECT_FEEDBACK: "Не правильно!",
    }
  },
  ru: {
    translation: {
      NOW_GAME: "Сыграем!",
      BUTTON_START: "Нажми!",
      BUTTON_TEXT: "Это хто?",
      RESET_BUTTON_TEXT: "С",
      CORRECT_FEEDBACK: "Правильно!",
      INCORRECT_FEEDBACK: "Не правильно!",
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'uk', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
