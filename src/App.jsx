import { Outlet, useLoaderData } from "react-router-dom";
import "./App.css";
import { OrginalBooksData } from "./Components/LevelContext/LevelContext";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const data = useLoaderData();
  return (
    <>
      <div className="mx-10">
        <OrginalBooksData.Provider value={data}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </OrginalBooksData.Provider>
      </div>
    </>
  );
}

export default App;
