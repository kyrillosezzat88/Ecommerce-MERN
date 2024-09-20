import { actGetHomeBanners } from "@store/homeBanners/HomeBannersSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

const useHomeBanners = () => {
  const dispatch = useAppDispatch();
  const { banners, loading } = useAppSelector((state) => state.homeBanners);

  useEffect(() => {
    if (!banners.length) {
      dispatch(actGetHomeBanners());
    }
  }, [banners.length, dispatch]);
  return { banners, loading };
};

export default useHomeBanners;
