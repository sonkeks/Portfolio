import styles from "./Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import Waves from "../components/Waves";

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