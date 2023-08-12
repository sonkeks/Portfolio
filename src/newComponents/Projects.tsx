import styles from "./Projects.module.css";
import Blubble from "../resources/BlubbleMockUp.png";
import Creape from "../resources/Creape.png";
import Project from "./Project";
import ProjectCard from "./ProjectCard";
import {scrollPageTo} from "../helpers/scrollHelpers";
import {IoBed, IoMusicalNote, IoNewspaper} from "react-icons/io5";

const Projects = () => {

    const featuredProjects = [
        {
            label: "Book Reading Club App",
            title: "Blubble",
            description: "A native Android & iOS app for founding, finding and organizing book clubs and their discussions. Communicate meeting dates with all club members, share notes and interests by commenting or uploading photos and guide your discussions with synchronous timers.",
            info: "This was the semesters second best university group project in my study program created in collaboration with Diva-e.",
            technologies: ["React", "Ionic", "Capacitor", "Firebase", "Socket.io", "Docker"],
            image: Blubble,
            git: "https://github.com/Diva-E-HTW-BookClub/Diva-E-BookClub",
            link: ""
        },
        {
            label: "Simple DIY Social Network",
            title: "Creape",
            description: "A web app for posting and sharing DIYs as well as getting instructions on how to recreate posted projects. Save your favorite DIYs and follow or message other users if you want to get to know more about their DIY ideas.",
            info: "A project alongside a course at university.",
            technologies: ["JavaScript", "Express.js", "MongoDB", "Socket.io"],
            image: Creape,
            git: "https://github.com/LeanderAK/WTAT1_Group_B",
            link: ""
        },
    ]

    const projects = [
        {
            label: "Landing Page and Booking Service",
            title: "Hotel Website",
            description: "Web application including a booking service for a Hotel in northern Germany",
            info: "...",
            technologies: ["JavaScript", "Express.js", "MongoDB", "Hello"],
            image: "",
            git: "/",
            link: "/",
            icon: <IoBed color="#2674D0" size={40} />
        },
        {
            label: "Landing Page and Booking Service",
            title: "Guitar Chord Finder",
            description: "Swift Notes App with chord finding algorithm and chord pattern display",
            info: "...",
            technologies: ["Swift", "SwiftUI", "Apple", "Xcode"],
            image: "",
            git: "/",
            link: "/",
            icon: <IoMusicalNote color="#2674D0" size={40} />
        },
        {
            label: "Magazine Website",
            title: "Magazine Website",
            description: "A Magazine Landing Page with 3D Elements ",
            info: "...",
            technologies: ["React", "TypeScript", "Three.js"],
            image: "",
            git: "/",
            link: "/",
            icon: <IoNewspaper color="#2674D0" size={40} />
        },
    ]

    return (
        <div id="projects" className={styles.container}>
            <h1>Projects</h1>
            <h2>What I have been Creating</h2>
            <div className={styles.projectsContainer}>
                {featuredProjects.map(project => {
                    return <Project
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
            <h2>Current Projects</h2>
            <div className={styles.projectCardGrid}>
            {projects.map(project => {
                return (
                    <ProjectCard title={project.title} description={project.description} technologies={project.technologies} icon={project.icon}/>
                )
            })}
            </div>
            <div className={styles.footer}>
                <div className={styles.phrase}>Wanna Work on a Project With me?</div>
                <button className={styles.contactButton} onClick={() => scrollPageTo("contact")}>Contact Me</button>
            </div>
        </div>
    )
}

export default Projects;
