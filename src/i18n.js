import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enContact from "./locales/en/contact.json";
import enCourses from "./locales/en/courses.json";
import enExperiences from "./locales/en/experience.json";
import enHeader from "./locales/en/header.json";
import enImprint from "./locales/en/imprint.json";
import enNavbar from "./locales/en/navbar.json";
import enProjects from "./locales/en/projects.json";
import enSkills from "./locales/en/skills.json";

import deContact from "./locales/de/contact.json";
import deCourses from "./locales/de/courses.json";
import deExperiences from "./locales/de/experience.json";
import deHeader from "./locales/de/header.json";
import deImprint from "./locales/de/imprint.json";
import deNavbar from "./locales/de/navbar.json";
import deProjects from "./locales/de/projects.json";
import deSkills from "./locales/de/skills.json";

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "en",
        debug: false,
        ns: ["contact", "navbar"], // your namespaces
        resources: {
            en: {
                contact: enContact,
                courses: enCourses,
                experience: enExperiences,
                header: enHeader,
                imprint: enImprint,
                navbar: enNavbar,
                projects: enProjects,
                skills: enSkills,
            },
            de: {
                contact: deContact,
                courses: deCourses,
                experience: deExperiences,
                header: deHeader,
                imprint: deImprint,
                navbar: deNavbar,
                projects: deProjects,
                skills: deSkills,
            }
        },
        react: {
            useSuspense: true
        }
    });

export default i18n;
