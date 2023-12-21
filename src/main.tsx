import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './routes/Router.tsx'
import { ProductProvider } from '../src/context/ProductContext.tsx'
import {
  CartProvider
} from './context/CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
        <Router />
      </ProductProvider>
    </CartProvider>


  </React.StrictMode>,
)
