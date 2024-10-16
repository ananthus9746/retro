import React, { useState } from 'react';
import styles from './DepositComponent.module.css';
import giphy from '../../assets/giphy (3).webp';

const DepositComponent = () => {
    const [ethAmount, setEthAmount] = useState(10); // Set initial ETH amount

    // Handle slider change
    const handleSliderChange = (event) => {
        setEthAmount(event.target.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.videoThumbnail}>
                <img
                    src={giphy}
                    alt="Video Thumbnail"
                    className={styles.videoImage}
                />
                {/* <div className={styles.playButton}>
                    <div className={styles.playIcon}>▶</div>
                </div> */}
            </div>
            {/* Update ETH amount dynamically */}
            <div className={styles.ethAmount}>{ethAmount} ETH</div>
            <div className={styles.slider}>
                <input
                    type="range"
                    min="1"
                    max="100"
                    value={ethAmount} // Connect slider to ETH amount
                    onChange={handleSliderChange} // Call handler on slider change
                    className={styles.rangeInput}
                />
            </div>
            <button className={styles.depositButton}>DEPOSIT</button>
        </div>
    );
};

export default DepositComponent;
