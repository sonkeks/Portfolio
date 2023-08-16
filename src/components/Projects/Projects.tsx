import styles from "./Projects.module.css";
import Blubble from "../../resources/BlubbleMockUp2.png";
import Creape from "../../resources/Creape.png";
import Project from "./Project";
import ProjectCard from "./ProjectCard";
import {scrollPageTo} from "../../helpers/scrollHelpers";
import {IoBed, IoMusicalNote, IoNewspaper} from "react-icons/io5";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import {useTranslation} from "react-i18next";

const Projects = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const { t } = useTranslation("projects");

    const getImagePath = (image: string) => {
        if (process.env.NODE_ENV === "production") {
            return `/soenke/build/${image}`;
        } else {
            return image;
        }
    }

    const featuredProjects = [
        {
            label: t("blubbleLabel"),
            title: t("blubbleTitle"),
            description: t("blubbleDescription"),
            info: t("blubbleInfo"),
            technologies: ["React", "Ionic", "Capacitor", "Firebase", "Socket.io", "Docker"],
            image: getImagePath(Blubble),
            git: "https://github.com/Diva-E-HTW-BookClub/Diva-E-BookClub",
            link: "https://showtime.f4.htw-berlin.de/ws22/bachelor/b6-book-reading-club-applikation/"
        },
        {
            label: t("creapeLabel"),
            title: t("creapeTitle"),
            description: t("creapeDescription"),
            info: t("creapeInfo"),
            technologies: ["JavaScript", "Express.js", "MongoDB", "Socket.io"],
            image: getImagePath(Creape),
            git: "https://github.com/LeanderAK/WTAT1_Group_B",
            link: ""
        },
    ]

    const projects = [
        {
            label: "...",
            title: t("hotelTitle"),
            description: t("hotelDescription"),
            info: "...",
            technologies: ["JavaScript", "Express.js", "MongoDB", "Hello"],
            image: "",
            git: "/",
            link: "/",
            icon: <IoBed color="var(--primary)" size={40}/>
        },
        {
            label: "...",
            title: t("guitarTitle"),
            description: t("guitarDescription"),
            info: "...",
            technologies: ["Swift", "SwiftUI", "Apple", "Xcode"],
            image: "",
            git: "/",
            link: "/",
            icon: <IoMusicalNote color="var(--primary)" size={40}/>
        },
        {
            label: "...",
            title: t("magazineTitle"),
            description: t("magazineDescription"),
            info: "...",
            technologies: ["React", "TypeScript", "Three.js"],
            image: "",
            git: "/",
            link: "/",
            icon: <IoNewspaper color="var(--primary)" size={40}/>
        },
    ]

    return (
        <div id="projects" className={styles.container}>
            <div data-aos="fade-up" data-aos-offset="250" data-aos-duration="1000" data-aos-easing="ease-out-cubic">
                <h1>{t("projects")}</h1>
                <h2>{t("subtitle")}</h2>
            </div>
            <div className={styles.projectsContainer} data-aos="fade-up" data-aos-offset="130" data-aos-duration="1000" data-aos-easing="ease-out-sine">
                {featuredProjects.map((project, index) => {
                    return <Project
                        key={index}
                        label={project.label}
                        title={project.title}
                        description={project.description}
                        info={project.info}
                        technologies={project.technologies}
                        image={project.image}
                        git={project.git}
                        link={project.link}
                    />
                })}
            </div>
            <div>
                <h2>{t("other")}</h2>
                <div className={styles.projectCardGrid}>
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard key={index} title={project.title} description={project.description}
                                         technologies={project.technologies} icon={project.icon}
                                         index={index}/>
                        )
                    })}
                </div>
                <div className={styles.footer}>
                    <div className={styles.phrase}>{t("wanna")}</div>
                    <button className={styles.contactButton} onClick={() => scrollPageTo("contact")}>{t("contact")}</button>
                </div>
            </div>
        </div>
    )
}

export default Projects;
