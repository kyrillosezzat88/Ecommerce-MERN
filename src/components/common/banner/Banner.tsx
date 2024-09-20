import BannerSkeleton from "@components/feedback/skeletons/BannerSkeleton";
import useHomeBanners from "@hooks/useHomeBanners";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const { banners, loading } = useHomeBanners();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 spaceY">
      {loading === "pending"
        ? Array.from({ length: 2 }).map((_, idx) => (
            <BannerSkeleton key={idx} />
          ))
        : banners.map((banner) => (
            <div
              key={banner.id}
              className="relative group overflow-hidden h-[450px] flex justify-center items-center"
            >
              <img
                src={banner.image}
                alt="bannerImage"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-300 "
              />
              <div className="z-10 text-white text-center flex flex-col items-center">
                <h4 className="text-5xl font-bold">{banner.name}</h4>
                <NavLink
                  to={banner.link}
                  className="mt-4 pb-2 font-bold border-b border-white"
                >
                  Shop Now
                </NavLink>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Banner;
