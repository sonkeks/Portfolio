import styles from "./SideMenu.module.css";
import {forwardRef, useImperativeHandle, useRef, useState} from "react";
import {AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";
import {scrollPageTo} from "../../helpers/scrollHelpers";
import {FiChevronRight} from "react-icons/fi";
import ImprintModal, {ModalHandle} from "../ImprintModal/ImprintModal";

export type SideMenuHandle = {
    open: () => void;
}

const SideMenu = forwardRef<SideMenuHandle>((props, ref) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const imprintModalRef = useRef<ModalHandle>(null);

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

    return (
        <div className={styles.sideMenuDiv + " " + (!isOpen ? styles.close : "")}>
            <FiChevronRight size={40} onClick={() => setIsOpen(false)} className={styles.closeButton}/>
            <div className={styles.items}>
                <div>
                    <div onClick={() => closeAndScroll("skills")} className={styles.item}>Skills</div>
                    <div onClick={() => closeAndScroll("projects")} className={styles.item}>Projects</div>
                    <div onClick={() => closeAndScroll("experience")} className={styles.item}>Experience</div>
                    <div onClick={() => closeAndScroll("contact")} className={styles.item}>Contact</div>
                    <div onClick={() => {imprintModalRef.current?.open()}} className={styles.item}>Imprint</div>
                </div>
                <div className={styles.flex}>
                    <AiOutlineGithub className={styles.icon} onClick={() => window.open("https://github.com/sonkeks")} size={50} />
                    <AiOutlineLinkedin className={styles.icon} onClick={() => window.open("https://www.linkedin.com/in/s%C3%B6nke-schaarschmidt-0b42b8236/")} size={50} />
                </div>
            </div>
            <ImprintModal ref={imprintModalRef}/>
        </div>
    )
})

export default SideMenu;