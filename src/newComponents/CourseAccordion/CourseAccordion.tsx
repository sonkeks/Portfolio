import {useState} from "react";
import styles from "./CourseAccordion.module.css";
import {FiInfo} from "react-icons/fi";

const courses = [
    {
        title: "Machine Learning",
        school: "HTW Berlin",
        date: "April - July 2023",
        infoList: ["Examining Evolutional Strategies and comparing different reward functions (fitness functions)", "Building Linear- & Logistic Regression in Python using Numpy and in Java using JBLAS for different classification and regression tasks", "Creating Neuronal Networks in Python using Numpy. Testing different training methods (Batch Training, Over- & Undersampling)", "Learning mathematical grounds of Neuronal Network structures (calculation of cost function & backward pass)"],
    },
    {
        title: "App Development on iOS",
        school: "HTW Berlin",
        date: "October 2022 - February 2023",
        infoList: ["Learning Swift and SwiftUI in the MVVM Design Pattern", "Programming small iOS Apps with custom Gestures and Components"],
    },
    {
        title: "Usability",
        school: "HTW Berlin",
        date: "October 2022 - February 2023",
        infoList: ["Learning about the different focuses of Design and the needs and desires of stakeholders and target groups", "Applying Design Principles to already existing designs and trying to improve them in cooperation with other students", "Setting up Usability tests and learning about accessibility options and necessities in the digital world"],
    },
    {
        title: "3D-Design",
        school: "HTW Berlin",
        date: "October 2021 - February 2022",
        infoList: ["Learning the basic usage of Autodesk Maya and getting a understanding for the usage of 3D Modeling Software", "Fully creating 3D Models over the span of a Semester including modeling, texturing and lighting"],
    },
    {
        title: "Agile Web Development",
        school: "HTW Berlin",
        date: "April - July 2023",
        infoList: ["Understanding and Simulating the Concepts of Agile Development", "Working on a Group Project (Creape) alongside the Course during the Semester and incorporating the new Concepts that got presented each week in form of Sprints", "Programming Server Logic with Node.js and setting up NoSQL Databases as well as their Interactions with the Backend"],
    },
    {
        title: "Computer Science",
        school: "HTW Berlin",
        date: "October 2020 - February 2022",
        infoList: ["First Object Oriented Programming in Java", "Learning about Classes & Objects, Types, Functions, Interfaces, Inheritance, Lambda and Various Design Patterns", "Programming Sort & Way Finding Algorithims"],
    },
    {
        title: "Databases",
        school: "HTW Berlin",
        date: "October 2021 - February 2022",
        infoList: ["Setting up a SQL Database", "Understanding Entities, Attributes & Relationships as well as their usage in the relative SQL Statements"],
    },
    {
        title: "Computer Graphics",
        school: "HTW Berlin",
        date: "April - August 2021",
        infoList: ["Programming Simple Shaders and 2D/3D Visualizations using WebGL", "Understanding Vector and Matrix Processing and Calculations as well as Camera and Environment in 3D Spaces", "Learning C for GPU Programming in WebGL and Canvas Progamming in JavaScript"],
    },
    {
        title: "Image Processing",
        school: "HTW Berlin",
        date: "April 2021 - February 2022",
        infoList: ["Learning and applying Java based Image Processing Algorithms like Quantization, Gauß and other Filters", "Understanding Color Spectrum of Images and Calculating with RGB values and Hex", "Implementing Image Transformation, Scaling and Rotation, Calculating Loss and Compression Enhancements"],
    },
]

const CourseAccordion = () => {
    const [selectedCourseIndex, setSelectedCourseIndex] = useState<number>(0);

    const getCourseInfo = (index: number) => {
        const course = courses[index];
        if(index !== -1) {
            return (
                <>
                    <div className={styles.courseSchool}>{course.school}</div>
                    <div className={styles.courseDate}>{course.date}</div>
                    <ul className={styles.courseInfoList}>
                        {course.infoList.map(info => {
                            return <li>{info}</li>
                        })}
                    </ul>
                </>
            )
        } else {
            return (
                <div className={styles.info}>
                    <FiInfo size={20} />
                    <span>Select a Course on the left for more information</span>
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
                    return <div onClick={() => toggleCourseSelect(index)}
                                className={styles.coursesItem + " " + (index === selectedCourseIndex ? styles.selected : "")}>{course.title}</div>
                })}
            </div>
            <div className={styles.infoCol}>
                {getCourseInfo(selectedCourseIndex)}
            </div>
            <div className={styles.smallCoursesList}>
            {courses.map((course, index) => {
                return (
                    <div onClick={() => toggleCourseSelect(index)}
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
