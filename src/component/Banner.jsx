import React from "react";
import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-10 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p
            className="text-white bg-gradient-to-r from-red-600 to-red-300 py-2 
                text-md px-3 "
          >
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-[40px] font-bold">
              Nghe nói em thích tôi
            </h2>
            <div className="flex items-center space-x-3">
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
            </div>
            <p className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting
            </p>
            <div className="flex items-center space-x-4">
              <button className="p-3 bg-black text-white font-bold text-sm">
                Chi Tiết
              </button>
              <button className="p-3 bg-red-600 text-white font-bold text-sm">
                Xem Phim
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative group cursor-pointer">
            <img
              src={ImgTemp}
              alt="temp"
              className="w-full h-full object-cover"
            />
            <div
              className="w-full h-full absolute flex top-0 left-0 items-center 
                    justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
            >
              <img src={IconPlay} alt="play" className="w-16 h-16 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;