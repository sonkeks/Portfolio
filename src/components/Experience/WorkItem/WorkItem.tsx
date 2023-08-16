import styles from "./WorkItem.module.css";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";
import {SyntheticEvent, useState} from "react";

interface WorkItemProps {
    position: string,
    title: string,
    link?: string,
    date: string,
    infoList: string[]
}

const WorkItem = ({position, title, link, date, infoList}: WorkItemProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleItem = (e: SyntheticEvent) => {
        setIsOpen(!isOpen);
        e.preventDefault();
    }

    return (
        <details open={isOpen} className={isOpen ? styles.workOpen : ""}>
            <summary onClick={(e) => toggleItem(e)} className={styles.workItem}>
                <div>{infoList.length > 0 && (isOpen ? <FiChevronUp className={styles.arrow}/> : <FiChevronDown className={styles.arrow}/>)}</div>
                <span className={styles.workTitle}>{position} <a onClick={event => event.stopPropagation()} href={link}>@{title}</a></span>
                <div className={styles.workDate}>{date}</div>
            </summary>
            {infoList.length > 0 &&
                <div className={styles.workContent}>
                    <ul>
                        {infoList.map((info, index) => {
                            return <li key={index}>{info}</li>
                        })}
                    </ul>
                </div>
            }
        </details>
    )
}

export default WorkItem;
