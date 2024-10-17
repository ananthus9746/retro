import React, { useState, useEffect, useRef } from 'react';
import styles from './ImageTextOverlay.module.css';

import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

const images = [image1, image2, image3];

const ImageTextOverlay = () => {
    const [text, setText] = useState('type something...');
    const [inputValue, setInputValue] = useState('');
    const [randomImage, setRandomImage] = useState(image1);
    const canvasRef = useRef(null);

    // Randomly choose an image on mount and when "Refresh" is clicked
    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setRandomImage(images[randomIndex]);
    };

    useEffect(() => {
        // Set a random image when the component mounts
        getRandomImage();
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setText(inputValue);
    };

    const handleDownload = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = randomImage;

        // Draw the image on the canvas
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            // Add the overlay text
            ctx.font = '24px sans-serif';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.fillText(text, canvas.width / 2, canvas.height - 30); // Adjust positioning as needed

            // Create a downloadable link
            const link = document.createElement('a');
            link.download = 'image_with_text.png';
            link.href = canvas.toDataURL();
            link.click();
        };
    };

    const handleRefresh = () => {
        // Refresh and set a new random image
        getRandomImage();
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageBox}>
                <img
                    src={randomImage}
                    alt="random-decorative"
                    className={styles.image}
                />
                <p className={styles.textOverlay}>{text}</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className={styles.inputField}
                    placeholder="type something..."
                />
                <button type="submit" className={styles.submitButton}>
                    Submit
                </button>
            </form>

            <div className={styles.buttonSection}>
                <button onClick={handleDownload} className={styles.downloadButton}>
                    Download image with text
                </button>
                <button onClick={handleRefresh} className={styles.refreshButton}>
                    Refresh Image
                </button>
            </div>

            {/* Hidden canvas to create the downloadable image */}
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        </div>
    );
};

export default ImageTextOverlay;
