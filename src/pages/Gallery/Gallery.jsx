import React, { useState } from "react";
import UploadForm from "../../components/UploadForm/UploadForm";
import ImageList from "../../components/ImageList/ImageList";

const Gallery = () => {
    const [uploadCompleted, setUploadCompleted] = useState(false);

    const handleUploadComplete = () => {
        setUploadCompleted(!uploadCompleted);
    };
    return (
        <div>
            <ImageList uploadCompleted={uploadCompleted} />
            <UploadForm onUploadComplete={handleUploadComplete} />

        </div>
    );
};

export default Gallery;
