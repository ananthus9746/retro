import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { storage, firestore } from "../../firebase";
import styles from "./UploadFormChat.module.css";

const UploadForm = ({ onUploadComplete }) => {
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState("");
    const [progress, setProgress] = useState(0);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (file && description) {
            const storageRef = ref(storage, `images/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

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
                        setFile(null);
                        setDescription("");
                        onUploadComplete();
                    });
                }
            );
        }
    };

    return (
        <div className={styles.uploadContainer}>
            <input type="file" onChange={handleFileChange} className={styles.fileInput} />
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
