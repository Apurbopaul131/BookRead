import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from './App.jsx';
import About from './Components/About/About.jsx';
import Home from './Components/Home/Home.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import PagesRead from './Components/PagesRead/PagesRead.jsx';
import { loadingDataforHome } from './Components/Utilities/Utilites.js';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader:loadingDataforHome,
    children:[
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/listed-books",
        element:<ListedBooks/>
      },
      {
        path:"/pages-to-read",
        element:<PagesRead/>
      },
      {
        path:"/about",
        element:<About/>
      }

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
