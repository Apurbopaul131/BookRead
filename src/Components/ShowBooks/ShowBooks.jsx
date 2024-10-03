import PropTypes from 'prop-types';
import FinalBook from '../FinalBook/FinalBook';
import './ShowBooks.css';
const ShowBooks = ({booksData}) => {
    console.log(booksData)
    return (
        <div className=''>
            {
                booksData.map((book)=><FinalBook key={book.bookId} book={book}></FinalBook>)
            }
        </div>
    );
};

ShowBooks.propTypes = {
    booksData:PropTypes.array.isRequired
}
export default ShowBooks;