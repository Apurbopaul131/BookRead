import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { IoMan } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";

const FinalBook = ({ book }) => {
  const {
    bookName,
    author,
    image,
    publisher,
    category,
    totalPages,
    rating,
    tags,
    yearOfPublishing,
  } = book;
  return (
    <div className="md:grid md:grid-cols-5 gap-8 mb-5 border-2 border-[#13131326] p-4 rounded-md">
      <div className="col-span-1">
        <img src={image} alt="" className="rounded-md"/>
      </div>
      <div className="col-span-4">
        <div className="space-y-3 pb-4 border-b-2 border-[#13131326]">
          <h1 className="text-2xl text-[#131313] font-bold">{bookName}</h1>
          <p className="text-lg font-medium text-[#131313CC]">By:{author}</p>
          <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-center">
            <h3 className="text-sm font-bold text-[#131313]">Tags</h3>
            {tags.map((tag, idx) => (
              <h3
                key={idx}
                className="py-2 px-4 rounded-full bg-[#23BE0A0D] text-[#23BE0A] font-medium text-center"
              >
                {tag}
              </h3>
            ))}
            <h3 className="flex gap-1 items-center"><CiLocationOn className="text-2xl"/><span>Year of puslishing:{yearOfPublishing}</span></h3>
          </div>
          <div className="flex gap-8 items-center">
            <p className="text-sm text-[#13131399] flex items-center gap-1"><IoMan /><span>Publisher:{publisher}</span></p>
            <p className="text-sm text-[#13131399] flex items-center gap-1"><MdOutlineContactPage className="text-xl" /><span>page:{totalPages}</span></p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-3">
            <h1 className="px-[20px] py-[11px] bg-[#328EFF26] text-[#328EFF] rounded-full text-center"><span>Category:{category}</span></h1>
            <h1 className="px-[20px] py-[11px] bg-[#FFAC3326] text-[#FFAC33] rounded-full text-center">Rationg:{rating}</h1>
            <h1 className="px-[20px] py-[11px] bg-[#23BE0A] text-white rounded-full font-bold text-center">View Details</h1>
          </div>
      </div>
    </div>
  );
};
FinalBook.propTypes = {
  book: PropTypes.array.isRequired,
};
export default FinalBook;
