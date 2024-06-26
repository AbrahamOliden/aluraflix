import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.jsx';
import NotFound from './routes/not-found.jsx';
import NewVideoRoute from './routes/new-video.jsx';
import NewCategoryRoute from './routes/new-category.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />
  },
  {
    path: "new-video",
    element: <NewVideoRoute />
  },
  {
    path: "new-category",
    element: <NewCategoryRoute />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
