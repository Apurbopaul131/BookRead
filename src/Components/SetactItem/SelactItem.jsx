import PropTypes from 'prop-types';
import './SelactItem.css';
const SelactItem = ({sortData,handleChange}) => {
    return (
        <form className="w-1/2 mx-auto flex justify-center">
          <select value={sortData} onChange={handleChange} className="select select-success bg-[#23BE0A] text-xl text-bold text-white">
          <option disabled value="sort by">Sort By</option>
            <option value="rating">Rating</option>
            <option value="totalPages">Total pages</option>
            <option value="yearOfPublishing">Year of publish</option>
          </select>
        </form>
    );
};

SelactItem.propTypes = {
    sortData:PropTypes.string.isRequired,
    handleChange:PropTypes.func.isRequired
}
export default SelactItem;