import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import AppLayout from './ui/AppLayout.jsx'
import Home from './pages/Home.jsx'
import PostsLayout from './pages/PostsLayout.jsx'
import PostsList from './pages/PostsList.jsx'
import PostDetail from './pages/PostDetail.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<PostsLayout />}>
            <Route index element={<PostsList />} />
            <Route path=":id" element={<PostDetail />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)