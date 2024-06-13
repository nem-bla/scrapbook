import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Collections = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPhotos = async () => {
    try {
      const response = await Axios.get('http://localhost:8000/api/images');
      if (Array.isArray(response.data.imageUrls)) {
        setPhotos(response.data.imageUrls);
      } else {
        console.error('Unexpected response data:', response.data);
      }
    } catch (error) {
      console.error('Error fetching photos: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((url, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={url} alt={`Photo ${index}`} className="w-full h-auto object-cover"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;
