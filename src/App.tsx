import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { ToastContainer } from 'react-toastify';

/**
 * Defines the application routes using React Router.
 * "/"              => HomePage component
 * "/products/:id"  => ProductDetailsPage component
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/products/:id",
    element: <ProductDetailsPage />
  }
]);

/**
 * Root App component that wraps the application routes
 * and provides global features like notifications (ToastContainer).
 */
const App: React.FC = () => {
  return (
    <div className="mx-auto">
      {/* Renders the appropriate route based on the URL */}
      <RouterProvider router={router} />

      {/* Toast notification container with custom settings */}
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
