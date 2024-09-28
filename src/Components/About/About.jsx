import { useContext } from "react";
import Footer from "../Footer/Footer";
import ImageSlider from "../ImageSlider/ImageSlider";
import { OrginalBooksData } from "../LevelContext/LevelContext";
import "./About.css";
const About = () => {
  const bookImages = useContext(OrginalBooksData);
  console.log(bookImages);
  return (
    <div>
      <div className="carousel w-full h-[500px] rounded-md my-5">
        {bookImages.map(({ image, bookId }, idx) => (
          <ImageSlider key={idx} bookId={bookId} image={image}></ImageSlider>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
