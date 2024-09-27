import { useContext } from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import { OrginalBooksData } from '../LevelContext/LevelContext';
import './Home.css';

const Home = () => {
    const books = useContext(OrginalBooksData);
    return (
        <div>
            <Banner></Banner>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                {
                    books.map((book)=><Card key={book.bookId} book={book}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;