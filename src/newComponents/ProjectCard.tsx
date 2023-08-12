import styles from "./Projects.module.css";
import {FiExternalLink, FiGithub} from "react-icons/fi";

interface ProjectCardProps {
    title: string,
    description: string,
    technologies: string[],
    git?: string,
    link?: string,
    icon: any
}

const ProjectCard = ({title, description, technologies, git, link, icon}: ProjectCardProps) => {
    return (
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
                    {technologies.map(technology => {
                        return <span>{technology}</span>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
