import { actGetCategories } from "@store/category/categorySlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

const useCategories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, categories } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    if (!categories.length) {
      dispatch(actGetCategories());
    }
  }, [categories.length, dispatch]);
  return { loading, error, categories };
};

export default useCategories;
