import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsTabByIds,
  activeProductsTabCleanup,
} from "@store/products/productsSlice";
import { useEffect } from "react";

const useTabNavigation = (
  setActiveTab: (tab: number) => void,
  activeTab: number
) => {
  const dispatch = useAppDispatch();
  const { productsTabs } = useAppSelector((state) => state.products);

  const activeTAbHandler = (activeTab: number) => {
    setActiveTab(activeTab);
    const selectedTab = productsTabs.find(
      (tab) => tab.id === activeTab
    )?.productIds;
    dispatch(activeProductsTabCleanup());
    dispatch(actGetProductsTabByIds(selectedTab as number[]));
  };
  useEffect(() => {
    activeTAbHandler(activeTab);
    return () => {
      dispatch(activeProductsTabCleanup());
    };
  }, [dispatch, productsTabs]);
  return { activeTAbHandler };
};

export default useTabNavigation;
