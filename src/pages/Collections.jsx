import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Collections = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await Axios.get('/getData');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    getData();
}, []);

  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default Collections
