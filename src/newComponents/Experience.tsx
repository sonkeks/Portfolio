import styles from "./Experience.module.css";
import WorkItem from "./WorkItem/WorkItem";
import CourseAccordion from "./CourseAccordion/CourseAccordion";
import AOS from "aos";
import 'aos/dist/aos.css';
import {useEffect} from "react";
import {useTranslation} from "react-i18next";

const Experience = () => {
    const { t } = useTranslation("experience");

    const workPlaces = [
        {
            position: t("positionBachelor"),
            title: t("titleBachelor"),
            link: "/",
            date: t("dateBachelor"),
            infoList: [t("info1Bachelor"), t("info2Bachelor"), t("info3Bachelor")]
        },
        {
            position: t("positionTS"),
            title: t("titleTS"),
            link: "/",
            date: t("dateTS"),
            infoList: [t("info1TS"), t("info2TS"), t("info3TS")]
        },
        {
            position: t("positionMaster"),
            title: t("titleMaster"),
            link: "/",
            date: t("dateMaster"),
            infoList: [],
        }
    ]

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="experience" className={styles.container}>
            <div data-aos="fade-up" data-aos-offset="150" data-aos-duration="1000" data-aos-easing="ease-out-cubic">
                <h1>{t("experience")}</h1>
                <h2>{t("subtitle")}</h2>
            </div>
            <div data-aos="fade-up" data-aos-offset="50" data-aos-delay="0" data-aos-duration="1000" data-aos-easing="ease-out-sine">
                <h3>{t("where")}</h3>
                <div className={styles.workBox}>
                    {workPlaces.map((workPlace, index) => {
                        return (
                            <WorkItem
                                key={index}
                                position={workPlace.position}
                                title={workPlace.title}
                                link={workPlace.link}
                                date={workPlace.date}
                                infoList={workPlace.infoList}
                                index={index}
                            />
                        )
                    })}
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" data-aos-easing="ease-out-sine">
                <h3>{t("courses")}</h3>
                <CourseAccordion/>
            </div>
        </div>
    )
}

export default Experience;
