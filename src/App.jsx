import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import { Outlet, useLoaderData } from "react-router-dom";
import "./App.css";
import {
  AuthContext,
  OrginalBooksData,
  ReadBookList,
  WishBookList,
} from "./Components/LevelContext/LevelContext";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  //Load books data using loader function and access by hook
  const data = useLoaderData();
  //crate state to handle all read book
  const [readlist, setReadlist] = useState([]);
  //create state to handle wish list book
  const [wishlist, setWishlist] = useState([]);
  const {loading} = useState(AuthContext);
  return (
    <>
      <div className="mx-10">
        <Toaster/>
        <WishBookList.Provider value={[wishlist, setWishlist]}>
          <ReadBookList.Provider value={[readlist, setReadlist]}>
            <OrginalBooksData.Provider value={data}>
              <Navbar></Navbar>
              {
                loading && <div className="text-center mt-5">
                <span className="loading loading-spinner loading-lg text-warning"></span>
              </div>
              }
              <Outlet></Outlet>
            </OrginalBooksData.Provider>
          </ReadBookList.Provider>
        </WishBookList.Provider>
      </div>
    </>
  );
}

export default App;
