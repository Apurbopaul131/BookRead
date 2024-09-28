import { useContext, useState } from "react";
import { ReadBookList } from "../LevelContext/LevelContext";
import "./ListedBooks.css";

const ListedBooks = () => {
  const [readlist] = useContext(ReadBookList);
  const [myCar, setMyCar] = useState("Sort By");
  const {
    rating,
    totalPages,
    yearOfPublishing
  } = readlist;
  const handleChange = (event) => {
    setMyCar(event.target.value)
  }
  return (
    <div>
      <h1 className="text-3xl font-bold py-8 bg-[#1313130D] rounded-2xl text-center">
        Listed Books
      </h1>
      <div className="my-10">
        <form className="w-1/2 mx-auto flex justify-center">
          <select value={myCar} onChange={handleChange} className="py-4 flex gap-3 items-center bg-[#23BE0A] text-white rounded-md border-none">
            <option value="Ford">{rating}</option>
            <option value="Volvo">{totalPages}</option>
            <option value="Fiat">{}</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default ListedBooks;
