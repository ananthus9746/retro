import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './AnimatedComponent.module.css';

const AnimatedComponent = () => {
    const animationProps = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(-20px)' },
        delay: 300,
    });

    return (
        <animated.div style={animationProps} className={styles.animatedBox}>
            Retro Vibes Activated! 💖
        </animated.div>
    );
};

export default AnimatedComponent;
