import styles from "./Skills.module.css";
import {
    DiGit,
    DiIonic,
    DiJava,
    DiJavascript1,
    DiMongodb,
    DiNodejsSmall,
    DiPython,
    DiReact
} from "react-icons/di";

const Skills = () => {
    return (
        <div className={styles.container} id="skills">
            <h1>Skills</h1>
            <h2>Development & More</h2>
            <div className={styles.box}>
                <div>
                    <h3>Languages</h3>
                    <ul>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Python</li>
                        <li>Swift</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div>
                    <h3>Frameworks</h3>
                    <ul>
                        <li>React</li>
                        <li>Ionic</li>
                        <li>Capacitor</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>Spring</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div>
                    <h3>Tools</h3>
                    <ul>
                        <li>Git</li>
                        <li>Docker</li>
                        <li>Figma</li>
                        <li>Maya</li>
                    </ul>
                </div>
                <div>
                    <h3>Other</h3>
                    <ul>
                        <li>Photography</li>
                        <li>Making Music</li>
                    </ul>
                </div>
            </div>
            <div className={styles.backgroundBox}>
                <DiReact/>
                <DiJava/>
                <DiJavascript1/>
                <DiIonic/>
                <DiMongodb/>
                <DiNodejsSmall/>
                <DiGit/>
                <DiPython/>
            </div>
        </div>
    )
}

export default Skills;
