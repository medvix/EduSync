import React, { useState } from 'react';
import './Second.scss';
import Course from './Course/Course';
import MediaImage from "../../../global/assets/Grafika.svg";
import MusicImage from "../../../global/assets/WebDevelopment.svg";
import ImageCourseImage from "../../../global/assets/Audiovizual.svg";
import PopUpContent from "./PopUpContent/PopUpContent"

interface SecondProps {
}

export const Second: React.FC<SecondProps> = props => {

    const coursesData = [
        { id: 1, title: "Web Development a Dizajn", image: MusicImage, article: "Music course article", content: <PopUpContent /> },
        { id: 2, title: "Grafika a Multimediálny Obsah", image: MediaImage, article: "Media course article", content: <PopUpContent /> },
        { id: 3, title: "Audiovizuálne a Interaktívne Prvky", image: ImageCourseImage, article: "Image course article", content: <PopUpContent /> },
    ];

    return (
        <div className="MainCourses">
            <h1>Naše kurzy</h1>
            <div className="Courses">
                {coursesData.map((course) => (
                    <Course
                        key={course.id}
                        title={course.title}
                        image={course.image}
                        content={course.content}
                    ></Course>
                ))}
            </div>
        </div>
    );
};

export default Second;
