import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductsContextProvider from './utilities/store/products/productsContextProvider';
import SidebarContextProvider from './utilities/store/sidebar/sidebarContextProvider';
import CartContextProvider from './utilities/store/cart/cartContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <SidebarContextProvider>
        <ProductsContextProvider>
          <App />
        </ProductsContextProvider>
      </SidebarContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);

