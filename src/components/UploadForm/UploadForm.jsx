import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { storage, firestore } from "../../firebase";
import styles from "./UploadFormChat.module.css";
import giphy from '../../assets/giphy (1).webp';
import giphy2 from '../../assets/giphy (2).webp';
import giphy3 from '../../assets/giphy (3).webp';

const UploadForm = ({ onUploadComplete }) => {
    const [description, setDescription] = useState("");
    const [progress, setProgress] = useState(0);

    const predefinedImages = [giphy, giphy2, giphy3];

    const handleUpload = () => {
        if (description) {
            // Select a random image
            const randomImage = predefinedImages[Math.floor(Math.random() * predefinedImages.length)];
            const fileName = randomImage.split("/").pop(); // Extract the file name

            const storageRef = ref(storage, `images/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, randomImage);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(progress);
                },
                (error) => {
                    console.error(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        addDoc(collection(firestore, "images"), {
                            url,
                            description,
                            createdAt: Timestamp.now(),
                        });
                        setProgress(0);
                        setDescription("");
                        onUploadComplete();
                    });
                }
            );
        }
    };

    return (
        <div className={styles.uploadContainer}>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={styles.descriptionInput}
            />
            <button onClick={handleUpload} className={styles.uploadButton}>Send</button>
            {progress > 0 && <progress value={progress} max="100" className={styles.progress} />}
        </div>
    );
};

export default UploadForm;
