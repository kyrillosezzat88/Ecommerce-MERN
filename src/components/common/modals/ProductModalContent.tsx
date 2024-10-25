import React, { useState } from "react";
import { TProduct } from "@types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { RepeatIcon, ShareIcon, StarIcon } from "@assets/icons";

const ProductModalContent: React.FC<TProduct> = ({
  name,
  gallery,
  price,
  id,
  isLiked,
  description,
  rate,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const gallerySlider = (
    <div className="sticky top-0">
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
        className="mb-3 rounded-lg"
        autoplay
      >
        {gallery?.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[Thumbs]}
      >
        {gallery?.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              className="rounded-lg cursor-pointer"
              alt={`Thumbnail ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
  const incrementQTY = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrementQTY = () => {
    setQuantity((prev) => prev - 1 || 1);
  };
  return (
    <div className="flex gap-6 max-h-1/2 flex-wrap md:flex-nowrap">
      <div className="w-full md:w-1/2">{gallerySlider}</div>
      <div className="w-full md:w-1/2 overflow-auto">
        <h1 className="text-xl md:text-3xl font-bold mb-2">{name}</h1>
        <div className="flex items-center gap-[2px] mb-2">
          {Array.from({ length: 5 }).map((_, idx) => (
            <StarIcon key={idx} />
          ))}
          <span className="ml-2 text-sm"> (1,364) reviews</span>
        </div>
        <div className="badge badge-primary text-sm">Best Seller</div>
        <p className="my-2 py-4 border-gray-200 border-b">{description}</p>
        <div>
          <h2 className="font-xl mb-2">Colors:</h2>
          <div className="flex gap-2">
            <span className="rounded-full cursor-pointer w-6 h-6 bg-primary"></span>
            <span className="rounded-full cursor-pointer w-6 h-6 bg-red-500"></span>
            <span className="rounded-full cursor-pointer w-6 h-6 bg-yellow-500"></span>
          </div>
        </div>
        <div className="my-4">
          <h2 className="font-xl mb-2">Sizes:</h2>
          <div className="flex gap-2">
            <span className="rounded-full cursor-pointer w-10 h-10 flex justify-center items-center text-sm border border-gray-200 hover:bg-black hover:text-white">
              XS
            </span>
            <span className="rounded-full cursor-pointer w-10 h-10 flex justify-center items-center text-sm border border-gray-200  hover:bg-black hover:text-white">
              M
            </span>
          </div>
        </div>
        {/* quantity */}
        <div className="flex items-center justify-between px-6 md:justify-center text-xl border border-gray-300 rounded-lg md:w-1/3">
          <button
            className=" btn btn-ghost hover:bg-gray-100"
            onClick={decrementQTY}
          >
            -
          </button>
          <input
            type="number"
            min={1}
            value={quantity}
            className=" w-14 p-4 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <button
            className=" btn btn-ghost hover:bg-gray-100"
            onClick={incrementQTY}
          >
            +
          </button>
        </div>
        {/* add to cart */}
        <div className="flex flex-col gap-4 uppercase mt-4">
          <button className="btn btn-primary uppercase">Add To Cart</button>
          <button className="btn btn-black uppercase">Buy it now</button>
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <button className="btn btn-sm btn-circle">
                <RepeatIcon />
              </button>
              <span>Compare</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="btn btn-sm btn-circle">
                <ShareIcon />
              </button>
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModalContent;
