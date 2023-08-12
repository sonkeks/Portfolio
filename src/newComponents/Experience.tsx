import styles from "./Experience.module.css";
import WorkItem from "./WorkItem/WorkItem";
import CourseAccordion from "./CourseAccordion/CourseAccordion";

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

    return (
        <div id="experience" className={styles.container}>
            <h1>Experience</h1>
            <h2>Work and Courses</h2>
            <h3>Where I have worked</h3>
            <div className={styles.workBox}>
                {workPlaces.map((workPlace, index) => {
                    return (
                        <WorkItem
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
            <h3>Important University Courses</h3>
            <CourseAccordion />
        </div>
    )
}

export default Experience;
