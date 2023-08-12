import styles from "./Header.module.css";
import Logo from "../resources/logo.svg";
import {AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";

const Header = () => {
    return (
        <div className={styles.header + " container"}>
            <div className={styles.infoBox}>
                <p className={styles.info}>Hello, my name is</p>
                <h1>Sönke</h1>
                <h1>Schaarschmidt</h1>
                <p className={styles.info}>Welcome to my Portfolio. I am a Junior Software Developer and
                    currently
                    writing my Bachelors Thesis. Let’s dive in!</p>
                <span className={styles.links}>
                    <AiOutlineGithub className={styles.icon} onClick={() => window.open("https://github.com/sonkeks")}
                                 size={50}/>
                    <AiOutlineLinkedin className={styles.icon}
                                   onClick={() => window.open("https://www.linkedin.com/in/s%C3%B6nke-schaarschmidt-0b42b8236/")}
                                   size={50}/>
                </span>
            </div>
            <img className={styles.logo} src={Logo} alt="Logo"/>
        </div>
    )
}

export default Header;