import styles from "./Experience.module.css";
import WorkItem from "./WorkItem/WorkItem";
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
            link: "https://imi-bachelor.htw-berlin.de/",
            date: t("dateBachelor"),
            infoList: [t("info1Bachelor"), t("info2Bachelor"), t("info3Bachelor"), t("info4Bachelor")]
        },
        {
            position: t("positionTS"),
            title: t("titleTS"),
            link: "https://troedelspende.de/",
            date: t("dateTS"),
            infoList: [t("info1TS"), t("info2TS"), t("info3TS")]
        },
        {
            position: t("positionPA"),
            title: t("titlePA"),
            link: "https://www.proalpha.com",
            date: t("datePA"),
            infoList: [t("info1PA"), t("info2PA"), t("info3PA")]
        },
        {
            position: t("positionMaster"),
            title: t("titleMaster"),
            link: "https://www.bht-berlin.de/m-mi",
            date: t("dateMaster"),
            infoList: [t("info1Master"), t("info2Master"), t("info3Master")],
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
                <div className={styles.workBox}>
                    {workPlaces.reverse().map((workPlace, index) => {
                        return (
                            <WorkItem
                                key={index}
                                index={index}
                                position={workPlace.position}
                                title={workPlace.title}
                                link={workPlace.link}
                                date={workPlace.date}
                                infoList={workPlace.infoList}
                            />
                        )
                    })}
                </div>
            </div>
            {/*
            <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" data-aos-easing="ease-out-sine">
                <h3>{t("courses")}</h3>
                <CourseAccordion/>
            </div>
            */}
        </div>
    )
}

export default Experience;
