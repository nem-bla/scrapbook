import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const PhotoUpload = () => {
  const fileSelectedHandler = event => {
    console.log(event); // Log the event

    let uploadedPhoto = event.target.files[0];
    console.log(uploadedPhoto);
  };

  return (
    <div className="flex justify-end pr-10">
      <div>
        <Card bg='bg-green-50'>
          <h2 className="text-2xl font-bold">Upload your photos</h2>
          <p className="mt-2 mb-4">
            Upload one at a time
          </p>
          <input type="file" onChange={fileSelectedHandler} />
        </Card>
        
      </div>
    </div>
  );
};

export default PhotoUpload;
