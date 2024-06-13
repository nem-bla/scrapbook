// CollectionPhoto.jsx
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Collection from './Collection';

const CollectionPhoto = () => {
  const [imageUrl, setImageUrl] = useState('');

  const getImage = async () => {
    try {
      const response = await Axios.get('http://localhost:8000/api/image');
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div>
      {imageUrl ? <Collection imageUrl={imageUrl} /> : <p>Loading...</p>}
    </div>
  );
};

export default CollectionPhoto;
