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
import {useEffect, useState} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import {useTranslation} from "react-i18next";
import {getImagePath} from "../../helpers/getImagePath";

const LANGUAGES = [
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "Swift",
    "SQL",
    "CLI",
];

const FRAMEWORKS = [
    "React",
    "Angular",
    "Ionic",
    "Next.js",
    "Express.js",
    "FastAPI",
    "Spring",
    "React Native",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Expo",
    "Angular",
    "Shadcn UI",
    "Chakra UI",
    "Material UI",
];

const TOOLS = [
    "Git",
    "Scaleway",
    "Google Cloud",
    "Node.js",
    "Maven",
    "Capacitor",
    "SpaCy",
    "Docker",
    "Figma",
    "Maya"
];

const CONCEPTS = [
    "JWT & Refresh Token",
    "REST",
    "State Management",
    "ORM",
    "TDD",
];

const Skills = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const [highlightedCategory, setHighlightedCategory] = useState<number | undefined>();
    const [activeCategory, setActiveCategory] = useState<number | undefined>(undefined);
    
    const { t } = useTranslation("skills");
    
    const getShuffledSkills = () => {
        const skills = [...LANGUAGES, ...FRAMEWORKS, ...TOOLS, ...CONCEPTS];
        for (var i = skills.length - 1; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = skills[i];
            skills[i] = skills[j];
            skills[j] = temp;
        }
        return skills;
    }
    
    const [skillsArray] = useState<string[]>(() => getShuffledSkills());
    
    const filterButton = (id: number, text: string) => {
        const isActive = activeCategory === id;
        const isHighlighted = highlightedCategory === id || highlightedCategory === undefined;
        
        return (
          <button
            className={isActive && isHighlighted ? styles.buttonFocussed : styles.buttonDefault}
            onClick={() => {
                setHighlightedCategory(() => !isActive ? id : undefined);
                setActiveCategory(prev => prev !== id ? id : undefined);
            }}
            onMouseEnter={() => setHighlightedCategory(id)}
            onMouseLeave={() => {
                if (!isActive) {
                    setHighlightedCategory(undefined);
                }
            }}
          >
              {text}
          </button>
        );
    };
    
    const itemIsHighlighted = (item: string) => {
        const index = highlightedCategory !== undefined ? highlightedCategory : activeCategory;
        switch (index) {
            case 0:
                return LANGUAGES.includes(item);
            case 1:
                return FRAMEWORKS.includes(item);
            case 2:
                return TOOLS.includes(item);
            case 3:
                return CONCEPTS.includes(item);
            default:
                return false;
        }
    }
    
    return (
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-cubic" className={styles.container} id="skills">
            <div>
                <h1>{t('skills')}</h1>
                <h2>{t('subtitle')}</h2>
            </div>
            <div className={styles.box}>
                <div>
                    <div className={styles.buttons}>
                        {filterButton(0, t('languages'))}
                        {filterButton(1, t('frameworks'))}
                        {filterButton(2, t('tools'))}
                        {filterButton(3, t('concepts'))}
                    </div>
                    <ul className={styles.skillList}>
                    {skillsArray.map((item, index) => (
                          <li className={itemIsHighlighted(item) ? styles.highlighted : ""} key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.backgroundBox} data-aos="zoom-in" data-aos-delay="0" data-aos-duration="2000"
                 data-aos-easing="ease-out-sine">
                <DiReact/>
                <DiJava/>
                <DiJavascript1/>
                <DiIonic/>
                <DiMongodb/>
                <DiNodejsSmall/>
                <DiGit/>
                <DiPython/>
            </div>
            <div className={styles.imageContainer}>
              <img className={styles.skillsImage} src={getImagePath("Coding", "svg")} alt="Person coding on a lap top"/>
            </div>
        </div>
    )
}

export default Skills;
