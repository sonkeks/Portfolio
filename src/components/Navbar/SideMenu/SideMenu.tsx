import styles from "./SideMenu.module.css";
import {forwardRef, useContext, useImperativeHandle, useRef, useState} from "react";
import {AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";
import {scrollPageTo} from "../../../helpers/scrollHelpers";
import {FiChevronRight} from "react-icons/fi";
import ImprintModal, {ModalHandle} from "../../ImprintModal/ImprintModal";
import DarkModeToggle from "../DarkModeToggle";
import {useTranslation} from "react-i18next";
import {DarkModeContext} from "../DarkModeContext";

export type SideMenuHandle = {
    open: () => void;
}

const SideMenu = forwardRef<SideMenuHandle>((_, ref) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const imprintModalRef = useRef<ModalHandle>(null);
    const {state} = useContext(DarkModeContext);

    useImperativeHandle(ref, () => ({
        open() {
            setIsOpen(true);
        },
    }));

    const closeAndScroll = (target: string) => {
        setIsOpen(false);
        setTimeout(() => {
            scrollPageTo(target);
        }, 50)
    }

    const {t} = useTranslation("navbar");

    return (
        <>
            <div className={styles.sideMenuDiv + " " + (!isOpen ? styles.close : "")}>
                <div className={styles.header}>
                    <FiChevronRight size={40} onClick={() => setIsOpen(false)} className={styles.closeButton}/>
                    <div className={styles.toggleContainer}>
                        {state.isDark && <span className={styles.toggleLabel}>{t('dark')}</span>}
                        {!state.isDark && <span className={styles.toggleLabel}>{t('light')}</span>}
                        <DarkModeToggle />
                    </div>
                </div>
                <div className={styles.items}>
                    <div>
                        <div onClick={() => closeAndScroll("skills")} className={styles.item}>{t("skills")}</div>
                        <div onClick={() => closeAndScroll("projects")} className={styles.item}>{t("projects")}</div>
                        <div onClick={() => closeAndScroll("experience")}
                             className={styles.item}>{t("experience")}</div>
                        <div onClick={() => closeAndScroll("contact")} className={styles.item}>{t("contact")}</div>
                        <div onClick={() => {
                            imprintModalRef.current?.open()
                        }} className={styles.item}>{t("imprint")}
                        </div>
                    </div>
                    <div className={styles.flex}>
                        <AiOutlineGithub className={styles.icon}
                                         onClick={() => window.open("https://github.com/sonkeks")}
                                         size={50}/>
                        <AiOutlineLinkedin className={styles.icon}
                                           onClick={() => window.open("https://www.linkedin.com/in/s%C3%B6nke-schaarschmidt-0b42b8236/")}
                                           size={50}/>
                    </div>
                </div>
            </div>
            <ImprintModal ref={imprintModalRef}/>
        </>
    )
})

export default SideMenu;
