import React, { useState } from 'react';
import Axios from 'axios';
import Card from './Card';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const PhotoUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const fileSelectedHandler = event => {
        setSelectedFile(event.target.files[0]);
    };

    const uploadFileHandler = async () => {
        if (!selectedFile) {
            alert('Please select a file first');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await Axios.post('http://localhost:8000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('File uploaded successfully:', response.data);
            toast.success('Image uploaded successfully!');
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className="flex justify-end pr-10">
            <div>
                <Card bg='bg-green-50'>
                    <h2 className="text-2xl font-bold">Upload your photos</h2>
                    <p className="mt-2 mb-4">
                        Please upload one photo at a time
                    </p>
                    <input type="file" onChange={fileSelectedHandler} />
                    <button
                        onClick={uploadFileHandler}
                        className="mt-4 bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-300"
                    >
                        Upload
                    </button>
                </Card>
            </div>
        </div>
    );
};

export default PhotoUpload;
