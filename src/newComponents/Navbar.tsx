import styles from "./Navbar.module.css";
import {SlMenu} from "react-icons/sl";
import {scrollPageTo} from "../helpers/scrollHelpers";
import {useRef, useState} from "react";
import SideMenu, {SideMenuHandle} from "./SideMenu/SideMenu";
import ImprintModal, {ModalHandle} from "./ImprintModal/ImprintModal";
import DarkModeToggle from "./DarkModeToggle";
import {useTranslation} from "react-i18next";

const Navbar = () => {
    const sideMenuRef = useRef<SideMenuHandle>(null);
    const imprintModalRef = useRef<ModalHandle>(null);
    const [toggleIsActive, toggle] = useState<boolean>();

    const { t, i18n } = useTranslation("navbar");

    const handleToggle = (state: boolean) => {
        toggle(state);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.navBar}>
                    <div className={styles.navItemsLeft}>
                        <svg onClick={() => window.scrollTo({behavior: "smooth", top: 0})} className={styles.logo} width="108" viewBox="0 0 108 119" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.72 118.58C21.3067 118.58 16.4533 116.847 13.16 113.38C9.86667 110.087 8.22 106.967 8.22 104.02C8.22 100.207 10.1267 98.3 13.94 98.3C14.8067 98.3 15.6733 98.3867 16.54 98.56C17.4067 98.7333 18.36 99.08 19.4 99.6C23.04 101.333 26.94 102.633 31.1 103.5C35.4333 104.193 39.5933 104.627 43.58 104.8C45.14 104.453 46.6133 102.2 48 98.04C49.3867 93.88 50.4267 89.8933 51.12 86.08C51.64 82.44 51.9 78.7133 51.9 74.9C51.9 69.3533 51.4667 63.72 50.6 58C49.7333 52.28 48.9533 46.56 48.26 40.84C43.58 47.08 38.64 53.4067 33.44 59.82C28.24 66.06 23.3867 71.78 18.88 76.98C14.3733 82.18 10.56 86.1667 7.44 88.94C6.74667 89.6333 5.88 89.98 4.84 89.98C3.62667 89.98 2.58667 89.5467 1.72 88.68C0.853334 87.64 0.42 86.5133 0.42 85.3C0.42 83.74 1.02667 82.44 2.24 81.4C3.8 79.84 6.31333 77.1533 9.78 73.34C13.2467 69.5267 17.1467 65.02 21.48 59.82C25.9867 54.4467 30.4933 48.9 35 43.18C39.5067 37.2867 43.6667 31.74 47.48 26.54C47.6533 24.8067 47.8267 23.16 48 21.6C48.1733 19.8667 48.4333 18.22 48.78 16.66C49.9933 11.2867 52.2467 7.21333 55.54 4.44C59.0067 1.49333 62.04 0.019998 64.64 0.019998C67.76 0.019998 69.32 1.66666 69.32 4.96C69.32 7.38666 68.02 10.94 65.42 15.62C64.2067 17.5267 62.9067 19.6067 61.52 21.86C60.1333 23.94 58.5733 26.1933 56.84 28.62C56.84 35.2067 57.4467 42.0533 58.66 49.16C59.8733 56.0933 60.5667 61.2933 60.74 64.76C60.9133 66.4933 61 68.2267 61 69.96C61.1733 71.6933 61.26 73.5133 61.26 75.42C61.26 80.2733 60.8267 85.1267 59.96 89.98C59.2667 94.8333 57.7933 99.2533 55.54 103.24C60.22 101.507 65.0733 99.2533 70.1 96.48C75.1267 93.5333 79.46 90.4133 83.1 87.12C86.5667 84.1733 89.7733 81.0533 92.72 77.76C95.6667 74.4667 98.44 71.4333 101.04 68.66C101.733 67.7933 102.6 67.36 103.64 67.36C104.507 67.36 105.287 67.88 105.98 68.92C106.847 69.7867 107.28 70.9133 107.28 72.3C107.28 73.86 106.847 75.16 105.98 76.2C103.38 79.84 99.74 83.9133 95.06 88.42C90.5533 92.7533 86.5667 96.22 83.1 98.82C78.5933 102.113 73.0467 105.06 66.46 107.66C59.8733 110.26 53.1133 112.167 46.18 113.38C42.7133 115.46 38.64 117.02 33.96 118.06C32.7467 118.233 31.62 118.32 30.58 118.32C29.54 118.493 28.5867 118.58 27.72 118.58Z" fill="currentColor"/>
                        </svg>
                        <div className={styles.toggleContainer}>
                            {toggleIsActive && <span className={styles.toggleLabel}>{t('dark')}</span>}
                            {!toggleIsActive && <span className={styles.toggleLabel}>{t('light')}</span>}
                            <DarkModeToggle toggled={false} onClick={handleToggle}/>
                        </div>
                        <div className={styles.languageSelect}>
                            <button onClick={() => i18n.changeLanguage("de")} className={(i18n.resolvedLanguage === "de") ? styles.active : ""}>DE</button>
                            <span>/</span>
                            <button onClick={() => i18n.changeLanguage("en")} className={(i18n.resolvedLanguage === "en") ? styles.active : ""}>EN</button>
                        </div>
                    </div>
                    <div className={styles.navItemsRight}>
                        <div onClick={() => scrollPageTo("skills")}>{t('skills')}</div>
                        <div onClick={() => scrollPageTo("projects")}>{t('projects')}</div>
                        <div onClick={() => scrollPageTo("experience")}>{t('experience')}</div>
                        <div onClick={() => scrollPageTo("contact")}>{t('contact')}</div>
                        <div onClick={() => imprintModalRef.current?.open()}>{t('imprint')}</div>
                    </div>
                    <div onClick={() => sideMenuRef.current?.open()} className={styles.burgerIcon}>
                        <SlMenu size={33}/>
                    </div>
                </div>
            </div>
            <SideMenu ref={sideMenuRef}/>
            <ImprintModal ref={imprintModalRef}/>
        </>
    )
}

export default Navbar;