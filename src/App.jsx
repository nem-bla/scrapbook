import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import Create from './pages/Create';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Collections from './pages/Collections';


const App = () => {
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


  return (
    <RouterProvider router={router}/>
  )
};

export default App
