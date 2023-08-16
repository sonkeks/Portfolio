import {useState} from "react";
import styles from "./CourseAccordion.module.css";
import {FiInfo} from "react-icons/fi";
import {useTranslation} from "react-i18next";

const CourseAccordion = () => {
    const [selectedCourseIndex, setSelectedCourseIndex] = useState<number>(0);

    const { t } = useTranslation("courses");

    const courses = [
        {
            title: t("titleML"),
            school: t("schoolHTW"),
            date: t("dateML"),
            infoList: [t("info1ML"), t("info2ML"), t("info3ML"), t("info4ML")],
        },
        {
            title: t("titleIOS"),
            school: t("schoolHTW"),
            date: t("dateIOS"),
            infoList: [t("info1IOS"), t("info2IOS"), t("info3IOS")],
        },
        {
            title: t("titleU"),
            school: t("schoolHTW"),
            date: t("dateU"),
            infoList: [t("info1U"), t("info2U"), t("info3U")],
        },
        {
            title: t("title3D"),
            school: t("schoolHTW"),
            date: t("date3D"),
            infoList: [t("info13D"), t("info23D")],
        },
        {
            title: t("titleAW"),
            school: t("schoolHTW"),
            date: t("dateAW"),
            infoList: [t("info1AW"), t("info2AW"), t("info3AW")],
        },
        {
            title: t("titleCS"),
            school: t("schoolHTW"),
            date: t("dateCS"),
            infoList: [t("info1CS"), t("info2CS"), t("info3CS")],
        },
        {
            title: t("titleDB"),
            school: t("schoolHTW"),
            date: t("dateDB"),
            infoList: [t("info1DB"), t("info2DB")],
        },
        {
            title: t("titleCG"),
            school: t("schoolHTW"),
            date: t("dateCG"),
            infoList: [t("info1CG"), t("info2CG"), t("info3CG")],
        },
        {
            title: t("titleIP"),
            school: t("schoolHTW"),
            date: t("dateIP"),
            infoList: [t("info1IP"), t("info2IP"), t("info3IP")],
        },
    ]

    const getCourseInfo = (index: number) => {
        const course = courses[index];
        if(index !== -1) {
            return (
                <>
                    <div className={styles.courseSchool}>{course.school}</div>
                    <div className={styles.courseDate}>{course.date}</div>
                    <ul className={styles.courseInfoList}>
                        {course.infoList.map((info, index) => {
                            return <li key={index}>{info}</li>
                        })}
                    </ul>
                </>
            )
        } else {
            return (
                <div className={styles.info}>
                    <FiInfo size={20} />
                    <span>{t("info")}</span>
                </div>
            )
        }
    }

    const toggleCourseSelect = (index: number) => {
        if(selectedCourseIndex === index) {
            setSelectedCourseIndex(-1);
        } else {
            setSelectedCourseIndex(index);
        }
    }

    return (
        <div className={styles.coursesBox}>
            <div className={styles.coursesCol}>
                {courses.map((course, index) => {
                    return <div key={index} onClick={() => toggleCourseSelect(index)}
                                className={styles.coursesItem + " " + (index === selectedCourseIndex ? styles.selected : "")}>{course.title}</div>
                })}
            </div>
            <div className={styles.infoCol}>
                {getCourseInfo(selectedCourseIndex)}
            </div>
            <div className={styles.smallCoursesList}>
            {courses.map((course, index) => {
                return (
                    <div key={index} onClick={() => toggleCourseSelect(index)}
                         className={styles.coursesItem + " " + (index === selectedCourseIndex ? styles.selected : "")}>
                        {course.title}
                        {index === selectedCourseIndex && <div className={styles.inlineInfo}>{getCourseInfo(selectedCourseIndex)}</div>}
                    </div>
                    )
            })}
            </div>
        </div>
    )
}

export default CourseAccordion;
