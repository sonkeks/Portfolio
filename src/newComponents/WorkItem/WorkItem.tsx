import styles from "./WorkItem.module.css";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";
import {SyntheticEvent, useEffect, useState} from "react";

interface WorkItemProps {
    position: string,
    title: string,
    link?: string,
    date: string,
    infoList: string[],
    index: number
}

const WorkItem = ({position, title, link, date, infoList, index}: WorkItemProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (index === 0) {
            setIsOpen(true);
        }
    }, [index])

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
