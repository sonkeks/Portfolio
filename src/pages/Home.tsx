import styles from "./Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import Waves from "../components/Waves";
import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sönke Schaarschmidt</title>
                <meta name="description" content="Developer Portfolio of Sönke Schaarschmidt"/>
                <meta name="keywords" content="Developer, Portfolio, Frontend, UI, UX"/>
                <meta name="author" content="Sönke Schaarschmidt"/>
                <meta property="og:title" content="Sönke Schaarschmidt"/>
                <meta property="og:description" content="Developer Portfolio of Sönke Schaarschmidt"/>
                <meta property="og:url" content="https://www.soenke-schaarschmidt.de"/>
                <meta name="twitter:title" content="Sönke Schaarschmidt"/>
                <meta name="twitter:description" content="Developer Portfolio of Sönke Schaarschmidt"/>
            </Helmet>
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
                    <Skills/>
                    <Projects data-aos="fade-up"/>
                    <Experience data-aos="fade-up"/>
                    <Contact data-aos="fade-up"/>
                </div>
            </div>
        </div>
    )
}

export default Home;