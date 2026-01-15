import styles from "./WorkItem.module.css";
import {useState} from "react";
import {FiChevronDown} from "react-icons/fi";

interface WorkItemProps {
    index: number,
    position: string,
    title: string,
    link?: string,
    date: string,
    infoList: string[]
}

const WorkItem = ({index, position, title, link, date, infoList}: WorkItemProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  return (
        <div className={styles.workItem}>
            <div className={`${styles.timelineCircle} ${index === 0 ? styles.timelineCircleRecent : ''}`}></div>
            <div className={styles.workContent}>
              <div className={styles.workItemHeader}>
                <span>
                  <h3><a target="_blank" rel="noreferrer" href={link}>@{title}</a></h3>
                  <h4>{position}</h4>
                  <label className={styles.workDate}>{date}</label>
                </span>
                <button
                  onClick={() => setIsCollapsed(prev => !prev)}
                  aria-expanded={!isCollapsed}
                  className={styles.toggleButton}
                >
                  <FiChevronDown className={`${styles.collapseIcon} ${!isCollapsed ? styles.rotate : ""}`}/>
                </button>
              </div>
              <ul className={`${styles.workInfo} ${isCollapsed ? styles.collapsed : ""}`}>
              {infoList.map((item, i) => (
                <li key={i}>
                  {item}
                </li>
              ))}
            </ul>
            </div>
            <div className={styles.connector}></div>
        </div>
    )
}

export default WorkItem;
