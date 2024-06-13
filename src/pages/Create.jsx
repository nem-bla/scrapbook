import React from 'react';
import PhotoUpload from '../components/PhotoUpload';
import Preview from '../components/Preview';

const Create = () => {
  return (
    <>
      <div className='relative bg-green-100 min-h-screen'>
        <h1 className=''></h1>
      </div>
      <div className="absolute top-[200px] left-0 z-10">
        <Preview />

      </div>
      <div className='absolute top-[200px] right-0 z-10'>
        <PhotoUpload />
      </div>
    </>
  );
};

export default Create;
