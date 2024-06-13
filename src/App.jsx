import React, { useEffect, useState } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import Create from './pages/Create';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Collections from './pages/Collections';
import Axios from 'axios';


const App = () => {

  // test connection to backend
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

  // Add a post


  // Delete a post


  // Update a post


  // React Router
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />}/>
    <Route path='/create' element={<Create />}/>
    <Route path='/collections' element={<Collections />}/>
    <Route path='/contact' element={<Contact />}/>
    </Route>
    )
  );

  useEffect(() => {
      getData();
  }, []);

  return (
    <>
    <RouterProvider router={router}/>
    {data}
    </>
    
  )
};

export default App
