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

  const [readBtn,setReadBtn] = useState(true);

  const [wishBtn,setWishBtn] = useState(false)
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

  const handleReadBtnClick = () =>{
    setReadBtn(true);
    setWishBtn(false);
  }
  const handleWishBtnClick = () =>{
    setReadBtn(false);
    setWishBtn(true);
  }
  return (
    <div>
      <h1 className="text-3xl font-bold py-8 bg-[#1313130D] rounded-2xl text-center">
        Books
      </h1>
      <div className="my-10">
        <SelactItem sortData={sortData} handleChange={handleChange}></SelactItem>
      </div>
      <div className="flex gap-5 border-b-2 border-[#1313134D]">
        <h1 onClick={handleReadBtnClick} className={`py-[14px] px-[17px] text-xl text-[#131313CC] cursor-pointer ${readBtn ? "border-t border-r border-2 rounded-t-lg border-[#1313134D]" : ""}`}>Read List</h1>
        <h1 onClick={handleWishBtnClick} className={`py-[14px] px-[17px] text-xl text-[#131313CC] cursor-pointer ${wishBtn ? "border-t border-r border-2 rounded-t-lg border-[#1313134D]" : ""}`}>Read List</h1>
      </div>
      <div className="mt-10">
        {
            readBtn && !wishBtn? <div>read data</div> : <div>wish data</div>
        }
      </div>
    </div>
  );
};

export default ListedBooks;
