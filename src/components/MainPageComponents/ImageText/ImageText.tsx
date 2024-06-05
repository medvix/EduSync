import React from 'react';
import './ImageText.scss';

interface ImageTextComponentProps {
    imageUrl: string;
    text: string;
    heading: string;
    textPosition: string;
}

const ImageTextComponent: React.FC<ImageTextComponentProps> = ({ imageUrl, text, heading, textPosition }) => {
    const isTextLeft = textPosition === 'left';

    const imageContainer = (
        <div className="image-container">
            <img src={imageUrl} alt="Image" />
        </div>
    );

    const textContainer = (
        <div className="text-container">
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    );

    return (
        <div className={`image-text-wrapper ${isTextLeft ? 'left' : 'right'}`}>
            {isTextLeft ? (
                <>
                    {textContainer}
                    {imageContainer}
                </>
            ) : (
                <>
                    {imageContainer}
                    {textContainer}
                </>
            )}
        </div>
    );
};

export default ImageTextComponent;
