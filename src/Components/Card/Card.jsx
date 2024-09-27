import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import './Card.css';
const Card = ({book}) => {
    const {
        bookName,
        author,
        image,
        tags,
        category,
        rating
    } = book;
    return (
        <div className='border-2 border-[#13131326] rounded-2xl p-6 space-y-4'>
            <img src={image} alt="" className='w-[345px] h-[345px] rounded-2xl'/>
            <div className='space-y-4 pb-3 border-b-2 border-dashed border-[%13131326]'>
                <div className='flex gap-8'>
                    {
                        tags.map((tag,idx)=><h3 key={idx}  className='py-2 px-4 rounded-full bg-[#23BE0A0D] text-[#23BE0A] font-medium'>{tag}</h3>)
                    }
                </div>
                <h1 className='text-2xl font-bold text-[#131313]'>{bookName}</h1>
                <p className='text-sm font-medium text-[#131313]'>By:{author}</p>
            </div>
            <div className='flex justify-between'>
                <p>{category}</p>
                <p className='flex gap-2 items-center'><span>{rating}</span><CiStar /></p>
            </div>
        </div>
    );
};
Card.propTypes = {
    book:PropTypes.object.isRequired
}
export default Card;