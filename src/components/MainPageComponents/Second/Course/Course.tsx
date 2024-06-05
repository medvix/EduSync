import React, { useState } from "react";
import "./Course.scss";

interface CourseProps {
    title: string;
    image: string;
    content: React.ReactNode;
}

const Course: React.FC<CourseProps> = ({ title, image, content }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);

        if (!showModal) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    return (
        <div>
            <div className="Course" onClick={toggleModal}>
                <div className="image-container">
                    <img src={image} alt={title} />
                </div>
                <h2>{title}</h2>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span>
                        {content}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Course;
