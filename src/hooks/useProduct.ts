import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetHomeProductsTabs } from "@store/products/productsSlice";
import { useEffect, useState } from "react";

const useProduct = () => {
  const [activeTab, setActiveTab] = useState(1);
  const dispatch = useAppDispatch();
  const { loading, error, productsTabs, activeProductsTab } = useAppSelector(
    (state) => state.products
  );
  const { products } = useAppSelector((state) => state.wishlist);
  useEffect(() => {
    dispatch(actGetHomeProductsTabs());
  }, [dispatch]);

  return {
    loading,
    error,
    productsTabs,
    activeTab,
    setActiveTab,
    activeProductsTab,
    products,
  };
};

export default useProduct;
