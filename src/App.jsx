import { useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import "./App.css";
import { OrginalBooksData, ReadBookList } from "./Components/LevelContext/LevelContext";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  //Load books data using loader function and access by hook
  const data = useLoaderData();
  //crate state to handle all read book
  const [readlist,setReadlist] = useState([])
  return (
    <>
      <div className="mx-10">
        <ReadBookList.Provider value={[readlist,setReadlist]}>
        <OrginalBooksData.Provider value={data}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </OrginalBooksData.Provider>
        </ReadBookList.Provider>
      </div>
    </>
  );
}

export default App;
