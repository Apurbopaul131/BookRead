import { useContext, useState } from "react";
import { ReadBookList, WishBookList } from "../LevelContext/LevelContext";
import SelactItem from "../SetactItem/SelactItem";
import "./ListedBooks.css";

const ListedBooks = () => {
  const [readlist,setReadlist] = useContext(ReadBookList);
  const [wishList, setWishlist] = useContext(WishBookList);
  console.log(readlist);
  console.log(wishList);
//   const {
//     rating,
//     totalPages,
//     yearOfPublishing
//   } = readlist;
  const [sortData, setSortData] = useState("sort by");
  const handleChange = (event) => {
    setSortData(event.target.value)
    const readListedBook = [...readlist];
    const wishlistedBook = [...wishList];
    readListedBook.sort((previousBook,currentBook)=>currentBook[event.target.value] - previousBook[event.target.value]);
    wishlistedBook.sort((previousBook,currentBook)=>currentBook[event.target.value] - previousBook[event.target.value]);
    
    setReadlist(readListedBook);
    setWishlist(wishlistedBook);
    console.log('sorting done');
    
  }
  return (
    <div>
      <h1 className="text-3xl font-bold py-8 bg-[#1313130D] rounded-2xl text-center">
        Books
      </h1>
      <div className="my-10">
        <SelactItem sortData={sortData} handleChange={handleChange}></SelactItem>
      </div>
    </div>
  );
};

export default ListedBooks;
