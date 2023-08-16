import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

console.log(process.env.NODE_ENV);

i18n
    .use(initReactI18next)
    .use(Backend)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        debug: false,
        ns: ['contact', 'courses', 'experience', 'header', 'imprint', 'navbar', 'projects', 'projects', 'skills'],
        backend: {
            loadPath: process.env.NODE_ENV !== "production" ? `./locales/{{lng}}/{{ns}}.json` : `/soenke/build/locales/{{lng}}/{{ns}}.json`
        },
        load: 'unspecific',
        react: {
            useSuspense: true
        }
    });

export default i18n;
