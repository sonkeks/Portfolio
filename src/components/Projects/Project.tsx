import styles from "./Projects.module.css";
import {FiExternalLink, FiGithub} from "react-icons/fi";

interface ProjectProps {
    label: string,
    title: string,
    description: string,
    info: string,
    technologies: string[],
    image: string,
    shadow: boolean,
    git?: string,
    link?: string,
}

const Project = ({label, title, description, info, technologies, image, shadow, git, link}: ProjectProps) => {
    return (
        <>
            <section>
                <div className={styles.projectHeader}>
                    <div>
                        <label>{label}</label>
                        <h3 className={styles.projectName}>{title}</h3>
                    </div>
                    <div className={styles.links  + " " + styles.headerLinks}>
                        {git && git.length > 0 && <a target="_blank" rel="noopener noreferrer" href={git}><FiGithub size={35}/></a>}
                        {link && link.length > 0 && <a target="_blank" rel="noopener noreferrer" href={link}><FiExternalLink size={35}/></a>}
                    </div>
                </div>
                <div className={styles.projectInfo}>
                    <p>{description}</p>
                    <p>{info}</p>
                </div>
                <div className={styles.techStack}>
                    {technologies.map((technology, index) => {
                        return <span key={index}>{technology}</span>
                    })}
                </div>
                <div className={styles.links + " " + styles.footerLinks}>
                    {git && git.length > 0 && <a target="_blank" rel="noopener noreferrer" href={git}><FiGithub size={35}/></a>}
                    {link && link.length > 0 && <a target="_blank" rel="noopener noreferrer" href={link}><FiExternalLink size={35}/></a>}
                </div>
            </section>
            <section>
                <img className={`${styles.projectImage} ${shadow ? styles.projectImageShadow : ""}`} src={image} alt={"Project called " + title}/>
            </section>
        </>
    )
}

export default Project;
