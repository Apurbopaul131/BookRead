import PropTypes from "prop-types";
const ImageSlider = ({image,bookId}) => {
  return (
    <div id={`item${bookId}`} className="carousel-item w-full">
        <img
          src={image}
          className="w-full"
        />
      </div>
  );
};
ImageSlider.propTypes = {
    image:PropTypes.string.isRequired,
    bookId:PropTypes.number.isRequired
}
export default ImageSlider;
