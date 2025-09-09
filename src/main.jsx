import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AppLayout from './ui/AppLayout.jsx'
import Home from './pages/Home.jsx'
import ProductsLayout from './pages/ProductsLayout.jsx'
import ProductsList from './pages/ProductsList.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Cart from './pages/Cart.jsx'
import NotFound from './pages/NotFound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductsLayout />}>
            <Route index element={<ProductsList />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)