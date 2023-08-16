import styles from "./Projects.module.css";
import {FiExternalLink, FiGithub} from "react-icons/fi";
import AOS from "aos";
import 'aos/dist/aos.css';
import {useEffect} from "react";

interface ProjectCardProps {
    title: string,
    description: string,
    technologies: string[],
    git?: string,
    link?: string,
    icon: any,
    index: number
}

const ProjectCard = ({title, description, technologies, git, link, icon, index}: ProjectCardProps) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="flip-right" data-aos-delay={index * 150} data-aos-duration="1000"
             data-aos-easing="ease-out-sine">
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <div>
                        <div className={styles.cardHeader}>
                            {icon}
                            <span className={styles.links}>
                            {git && <a href={git}><FiGithub size={30}/></a>}
                                {link && <a href={link}><FiExternalLink size={30}/></a>}
                        </span>
                        </div>
                        <h3 className={styles.projectName}>{title}</h3>
                        <p className={styles.infoText}>{description}</p>
                    </div>
                    <div className={styles.techStack + " " + styles.overflow}>
                        {technologies.map((technology, index) => {
                            return <span key={index}>{technology}</span>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
