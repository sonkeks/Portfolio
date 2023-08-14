import styles from "./Home.module.css";
import Navbar from "../newComponents/Navbar";
import Header from "../newComponents/Header";
import Skills from "../newComponents/Skills";
import Projects from "../newComponents/Projects";
import Experience from "../newComponents/Experience";
import Contact from "../newComponents/Contact";
import Waves from "../newComponents/Waves";

const Home = () => {
    return (
        <div>
            <div className={styles.margin}>
                <Navbar/>
            </div>
            <div className={styles.margin}>
                <div className={styles.homeBody + " " + styles.topSpacing}>
                    <Header/>
                </div>
            </div>
            <Waves/>
            <div className={styles.margin}>
                <div className={styles.homeBody}>
                    <Skills />
                    <Projects data-aos="fade-up"/>
                    <Experience data-aos="fade-up"/>
                    <Contact data-aos="fade-up"/>
                </div>
            </div>
        </div>
    )
}

export default Home;