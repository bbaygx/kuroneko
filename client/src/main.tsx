import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter, RouterProvider} from 'react-router-dom'
import { router } from './routes/router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
