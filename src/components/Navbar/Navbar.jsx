import { Link } from "react-router-dom";
import styles from './Navbar.module.css'; // Use CSS Modules for styling

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={`${styles.link} ${styles.primary}`}>Home</Link>
            <Link to="/about" className={`${styles.link} ${styles.secondary}`}>About</Link>
            <Link to="/contact" className={`${styles.link} ${styles.tertiary}`}>Contact</Link>
            <Link to="/generate" className={`${styles.link} ${styles.secondary}`}>Generate</Link>
            <Link to="/gallery" className={`${styles.link} ${styles.primary_}`}>Gallery</Link>
        </nav>
    );
};

export default Navbar;
