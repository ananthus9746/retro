import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.title}>Contact Us</h1>
            <form className={styles.form}>
                <label className={styles.label}>Name</label>
                <input type="text" className={styles.input} placeholder="Enter your name" />

                <label className={styles.label}>Email</label>
                <input type="email" className={styles.input} placeholder="Enter your email" />

                <label className={styles.label}>Message</label>
                <textarea className={styles.input} rows="4" placeholder="Your message"></textarea>

                <button className={styles.button} type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
