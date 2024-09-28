import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ReadBookList, WishBookList } from '../LevelContext/LevelContext';
import './BookInfo.css';

const BookInfo = () => {
    const data = useLoaderData();
    //Take readlist and setRead list form context api
    const [readlist,setReadlist] = useContext(ReadBookList);
    
    //Take readlist and setRead list form context api
    const [wishlist,setWishlist] = useContext(WishBookList);

    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing
    } = data;
    
    //This function called when click on the read button
    const handleReadList =(readBook) =>{
        console.log(readBook);
        const duplicateBook = readlist.find((bookItem)=>bookItem.bookId === readBook.bookId);
        const duplicateWishlist = wishlist.find((bookItem)=>bookItem.bookId === readBook.bookId);
        if(!duplicateBook && !duplicateWishlist){
            setReadlist([...readlist,readBook]);
        }
        else if(duplicateWishlist){
            const reamainingWishlist = wishlist.filter((wishBookItem)=> wishBookItem.bookId !== duplicateWishlist.bookId);
            setWishlist(reamainingWishlist);
            setReadlist([...readlist, readBook]);
        }
        else{
            alert('book already add to readlist');
        }
        
    }

    const handleWishList = (wishBook) =>{
        const findReadBook = readlist.find((readItem)=>readItem.bookId === wishBook.bookId);
        const findWishBook = wishlist.find((wishItem)=>wishItem.bookId === wishBook.bookId);
        if(findReadBook){
            alert('The book already read..');
        }
        else if(findWishBook){
            alert('The book already added to wish list..');
        }
        else{
            setWishlist([...wishlist,wishBook]);
        }
    }
    return (
        <div className='grid grid-cols-2 gap-8 mt-5'>
            <div className=''>
                <img src={image} alt="" className='rounded-2xl' />
            </div>
            <div>
                <div className='space-y-4 pb-6 border-b-2 border-[#13131326]'>
                    <h1 className='text-4xl font-bold text-[#131313]'>{bookName}</h1>
                    <p className='text-xl font-medium text-[#131313CC]'>By:{author}</p>
                </div>
                <h3 className='text-xl font-medium text-[#131313CC] py-4 border-b-2 border-[#13131326]'>{category}</h3>
                <div className='space-y-4 pb-4 border-b-2 border-[#13131326]'>
                    <p className='text-xl font-bold text-[#131313]'>review: <span className='text-sm text-[#131313B3]'>{review}</span></p>
                    <div className='flex gap-5 items-center'>
                        <h3 className='text-sm font-bold text-[#131313]'>Tags</h3>
                        {
                            tags.map((tag,idx)=><h3 key={idx}  className='py-2 px-4 rounded-full bg-[#23BE0A0D] text-[#23BE0A] font-medium'>{tag}</h3>)
                        }
                    </div>
                </div>
                <div className='space-y-3 py-4'>
                    <p className='flex gap-8'><span className='text-sm text-[#131313B3]'>Number of Pages:</span><span className='text-sm text-[#131313] font-semibold'>{totalPages}</span></p>
                    <p className='flex gap-8'><span className='text-sm text-[#131313B3]'>Publisher:</span><span className='text-sm text-[#131313] font-semibold'>{publisher}</span></p>
                    <p className='flex gap-8'><span className='text-sm text-[#131313B3]'>Year of Publishing:</span><span className='text-sm text-[#131313] font-semibold'>{yearOfPublishing}</span></p>
                    <p className='flex gap-8'><span className='text-sm text-[#131313B3]'>Rating:</span><span className='text-sm text-[#131313] font-semibold'>{rating}</span></p>
                </div>
                <div className='flex gap-4'>
                    <button onClick={()=>handleReadList(data)} className="btn bg-white border-2 border-[#1313134D]">Read</button>
                    <button onClick={()=>handleWishList(data)} className="btn bg-[#50B1C9] text-white font-semibold">WishList</button>
                </div>
            </div>
        </div>
    );
};

export default BookInfo;
