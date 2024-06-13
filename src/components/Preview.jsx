import React from 'react'
import Card from './Card'
import Frame from '../assets/frame.png'

const Preview = () => {
  return (
    <div>
    <div className="flex justify-end pl-10">
      <div className='container max-w-3xl'>
        <Card bg='bg-green-50'>
          <h2 className="text-2xl font-bold">Preview</h2>
          <img src={Frame} alt="frame"/>
        </Card>
      </div>
    </div>
    </div>
  )
}

export default Preview
