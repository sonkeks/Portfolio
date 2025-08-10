import styles from "./WorkItem.module.css";

interface WorkItemProps {
    index: number,
    position: string,
    title: string,
    link?: string,
    date: string,
    infoList: string[]
}

const WorkItem = ({index, position, title, link, date}: WorkItemProps) => {
    return (
        <div className={styles.workItem}>
            <div className={`${styles.timelineCircle} ${index === 0 ? styles.timelineCircleRecent : ''}`}></div>
            <div className={styles.workContent}>
                <h3><a target="_blank" rel="noreferrer" href={link}>@{title}</a></h3>
                <h4>{position}</h4>
                <label className={styles.workDate}>{date}</label>
            </div>
            <div className={styles.connector}></div>
        </div>
    )
}

export default WorkItem;
