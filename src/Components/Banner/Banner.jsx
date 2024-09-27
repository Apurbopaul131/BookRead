import BannerPic from '../../../public/Images/banner_update.png';
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero bg-[#1313130D] h-auto lg:h-[400px] mt-5 rounded-3xl">
      <div className="hero-content flex-col lg:flex-row gap-8  lg:gap-36">
      <div className="space-y-6">
          <h1 className="text-5xl font-bold">Books to freshen up <br />your bookshelf</h1>
          <button className="btn bg-[#23BE0A] text-white text-xl font-bold">View The List</button>
        </div>
        <img
          src={BannerPic}
          className="rounded-lg w-[200px] h-[300px]"
        />
      </div>
    </div>
  );
};

export default Banner;
