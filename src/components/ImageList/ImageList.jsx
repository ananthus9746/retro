import React, { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase";
import style from './ImageListChat.module.css';
import giphy from '../../assets/giphy (1).webp';
import giphy2 from '../../assets/giphy (2).webp';
import giphy3 from '../../assets/giphy (3).webp';

const ImageList = ({ uploadCompleted }) => {
    const predefinedImages = [giphy, giphy2, giphy3];

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(collection(firestore, "images"), orderBy("createdAt", "desc"));
                const snapshot = await getDocs(q);

                const imagesData = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });

                setImages(imagesData);
            } catch (err) {
                console.error("Error fetching images:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [uploadCompleted]);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const getRandomPredefinedImage = () => {
        const randomIndex = Math.floor(Math.random() * predefinedImages.length);
        return predefinedImages[randomIndex];
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={style.chatContainer}>
            <div className={style.chatMessages}>
                {images.length > 0 ? (
                    images.map((image) => (
                        <div key={image.id} className={style.chatMessage} onClick={() => openModal(image)}>
                            <img
                                src={getRandomPredefinedImage()}
                                alt={image.description}
                                className={style.chatImage}
                            />
                            <p className={style.chatDescription}>{image.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No images to display</p>
                )}
            </div>

            {selectedImage && (
                <div className={style.modal} onClick={closeModal}>
                    <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                        <span className={style.closeBtn} onClick={closeModal}>&times;</span>
                        <img src={selectedImage.url} alt={selectedImage.description} className={style.modalImage} />
                        <p className={style.modalDescription}>{selectedImage.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageList;
