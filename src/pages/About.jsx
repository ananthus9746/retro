import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.title}>About Us</h1>
            <p className={styles.text}>
                We bring you a blast from the past with this retro-styled website. Inspired by the bold colors and fonts from the 80s and 90s, we aim to provide a nostalgic experience. Whether you're here to explore or connect, welcome!
            </p>
        </div>
    );
};

export default About;
