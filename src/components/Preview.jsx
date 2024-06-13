import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import Card from './Card';
import Frame from '../assets/frame.png';
import { toast } from 'react-toastify';

const Preview = () => {
  const [imageUrl, setImageUrl] = useState(Frame); // Initialize with placeholder

  const prependImageUrl = `../backend/${imageUrl}`;

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/image'); // Fetch image from backend
        if (response.data.imageUrl) { // Check if image URL exists in response
          setImageUrl(response.data.imageUrl);
        }
        console.log(imageUrl);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage(); // Call fetchImage on component mount
  }, []); // Empty dependency array for one-time fetch

  return (
    <div>
      <div className="flex justify-end pl-10">
        <div className='container max-w-3xl'>
          <Card bg='bg-green-50'>
            <h2 className="text-2xl font-bold mb-3">Preview</h2>
            <img src={prependImageUrl} />
            <h3 className='mt-3'>Image path: {imageUrl}</h3>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Preview;
