import styles from './Home.module.css';
import AnimatedComponent from '../components/AnimatedComponent/AnimatedComponent';
import giphy from '../assets/giphy (1).webp'
import giphy2 from '../assets/giphy (2).webp'
import DepositComponent from '../components/DepositComponent/DepositComponent';
import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa'; // Import play/pause icons
import audio from '../assets/retro-game-arcade-short-236130.mp3'
const Home = () => {
    const [isPlaying, setIsPlaying] = useState(false); // Music play/pause state
    const audioRef = useRef(null); // Reference to the audio element
    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className={styles.homeContainer}>
            <DepositComponent />

            <div className={styles.musicPlayer}>
                Play Music
                <button onClick={togglePlayPause} className={styles.playPauseButton}>
                    {isPlaying ? <FaPause /> : <FaPlay />} {/* Icon changes based on state */}
                </button>
                <audio ref={audioRef} src={audio} preload="auto" />
            </div>

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
