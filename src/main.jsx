import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import About from "./Components/About/About.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import BookInfo from "./Components/BookInfo/BookInfo.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Home from "./Components/Home/Home.jsx";
import ListedBooks from "./Components/ListedBooks/ListedBooks.jsx";
import Login from "./Components/Login/Login.jsx";
import PagesRead from "./Components/PagesRead/PagesRead.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import UserProfile from "./Components/UserProfile/UserProfile.jsx";
import {
  loadingDataforHome,
  singleBookLoader,
} from "./Components/Utilities/Utilites.js";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: loadingDataforHome,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed-books",
        element: <PrivateRoute><ListedBooks /></PrivateRoute>,
      },
      {
        path: "/pages-to-read",
        element: <PrivateRoute>
          <PagesRead />
        </PrivateRoute>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/book/:bookId",
        element: <PrivateRoute>
          <BookInfo></BookInfo>
        </PrivateRoute>,
        loader: singleBookLoader,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Signup />,
      },
      {
        path:"/profile",
        element:<UserProfile/>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
