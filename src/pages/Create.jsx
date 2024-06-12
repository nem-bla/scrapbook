import React from 'react';
import PhotoUpload from '../components/PhotoUpload';

const Create = () => {
  return (
    <>
      <div className='relative bg-green-100 min-h-[400px]'>
        <h1 className=''>Create</h1>
      </div>
      <div className='absolute top-[200px] right-0 z-10'>
        <PhotoUpload />
      </div>
    </>
  );
};

export default Create;
