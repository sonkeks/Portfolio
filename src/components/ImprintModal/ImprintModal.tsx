import styles from "./ImprintModal.module.css";
import {FiXSquare} from "react-icons/fi";
import {forwardRef, useImperativeHandle, useState} from "react";
import {useTranslation} from "react-i18next";

export type ModalHandle = {
    open: () => void;
};

const ImprintModal = forwardRef<ModalHandle>((props,ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const { t } = useTranslation("imprint");

    useImperativeHandle(ref, () => ({
        open() {
            setIsOpen(true);
        },
    }));

    const cancelModal = () => {
        setIsOpen(false);
    }

    return (
        <div className={isOpen ? styles.backdrop : styles.hidden} onClick={cancelModal}>
            <div className={styles.container} onClick={e => {
                e.stopPropagation()
            }}>
                <div className={styles.close} onClick={cancelModal}>
                    <FiXSquare size={33}/>
                </div>
                <h3>{t("imprint")}</h3>
                <div>Sönke Schaarschmidt</div>
                <div>Stockholmer Str. 1</div>
                <div>{t("address")}</div>
                <div>soenke.schaarschmidt@gmx.de</div>
                <h3>{t("disclaimer")}</h3>
                <p>{t("disclaimerText")}</p>
                <h3>{t("copyright")}</h3>
                <p>{t("copyrightText")}</p>
                <h3>{t("photo")}</h3>
                <p>{t("photoText")}</p>
                <h3>{t("design")}</h3>
                <p>{t("designText")}</p>
                <h3>{t("updated")}</h3>
                <p>{t("updatedText")}</p>
                <div className={styles.flex}>
                    <button onClick={cancelModal} className={styles.button}>{t("close")}</button>
                </div>
            </div>
        </div>
    )
})

export default ImprintModal;
