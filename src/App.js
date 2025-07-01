import React from 'react';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { ToastContainer } from 'react-toastify';

const router =  createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/products/:id",
    element: <ProductDetailsPage />
  }
]);


const  App = () => {
  return (
    <div className='mx-auto '>
        <RouterProvider router={router} />
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
};

export default App;

