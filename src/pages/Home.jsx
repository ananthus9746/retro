import React from 'react';
import styles from './Home.module.css';
import AnimatedComponent from '../components/AnimatedComponent/AnimatedComponent';
import giphy from '../assets/giphy (1).webp'
import giphy2 from '../assets/giphy (2).webp'
import DepositComponent from '../components/DepositComponent/DepositComponent';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <DepositComponent />

            <h1 className={styles.title}>Welcome to Retro Land!</h1>
            <p className={styles.subtitle}>Experience the nostalgia of the 80s and 90s in style!</p>
            {/* <img src={giphy} className={styles.img} /> */}
            <AnimatedComponent />

            <div className={styles.retroContent}>
                <div className={styles.box}>
                    <h2>Unique Features</h2>
                    <p>Our site is filled with retro-inspired designs, animations, and more!</p>
                </div>
                <div className={styles.box}>
                    <h2>Get in Touch</h2>
                    <p>Connect with us for collaboration, inquiries, or feedback.</p>
                </div>
            </div>            <img src={giphy2} className={styles.img2} />

        </div>
    );
};

export default Home;
