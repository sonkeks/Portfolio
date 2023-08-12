import styles from "./Navbar.module.css";
import {SlMenu} from "react-icons/sl";
import Logo from "../resources/logo.svg";
import {scrollPageTo} from "../helpers/scrollHelpers";
import {useRef} from "react";
import SideMenu, {SideMenuHandle} from "./SideMenu/SideMenu";
import ImprintModal, {ModalHandle} from "./ImprintModal/ImprintModal";

const Navbar = () => {
    const sideMenuRef = useRef<SideMenuHandle>(null);
    const imprintModalRef = useRef<ModalHandle>(null);

    return (
        <>
        <div className={styles.container}>
            <div className={styles.navBar}>
                <img onClick={() => window.scrollTo({behavior: "smooth", top: 0})} className={styles.logo} src={Logo} alt="Logo"/>
                <div className={styles.navItems}>
                    <div onClick={() => scrollPageTo("skills")}>Skills</div>
                    <div onClick={() => scrollPageTo("projects")}>Projects</div>
                    <div onClick={() => scrollPageTo("experience")}>Experience</div>
                    <div onClick={() => scrollPageTo("contact")}>Contact</div>
                    <div onClick={() => imprintModalRef.current?.open()}>Imprint</div>
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