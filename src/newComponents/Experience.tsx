import styles from "./Experience.module.css";
import WorkItem from "./WorkItem/WorkItem";
import CourseAccordion from "./CourseAccordion/CourseAccordion";
import AOS from "aos";
import 'aos/dist/aos.css';
import {useEffect} from "react";

const workPlaces = [
    {
        position: "International Media & Computing Bachelor",
        title: "HTW Berlin",
        link: "/",
        date: "October 2020 - April 2024",
        infoList: ["International Study Program of Computer Science, Business, Media and Design in German and English", "Including a 4 months Internship and a Project Semester", "Desired Bachelor-Thesis Topic: Development of a Search Engine with Bias mitigation concerning Gender in the German Language"]
    },
    {
        position: "Full Stack Development Intern",
        title: "TroedelSpende",
        link: "/",
        date: "April 2022 - August 2022",
        infoList: ["Working in a Java Spring backend and a React TypeScript based frontend using the Windy CSS framework", "Operating in an Agile Sprint based environment", "Advertising the product to intererested parties on Start-up and non-profit organization events"]
    },
    {
        position: "Masters Program",
        title: "Some University",
        link: "/",
        date: "Soon",
        infoList: [],
    }
]

const Experience = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="experience" className={styles.container}>
            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-out-cubic">
                <h1>Experience</h1>
                <h2>Work and Courses</h2>
            </div>
            <div data-aos="fade-up" data-aos-offset="160" data-aos-delay="0" data-aos-duration="1000" data-aos-easing="ease-out-sine">
                <h3>Where I have worked</h3>
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
                <h3>Important University Courses</h3>
                <CourseAccordion/>
            </div>
        </div>
    )
}

export default Experience;
