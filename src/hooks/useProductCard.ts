import { addToCart } from "@store/cart/cartSlice";
import { actAddCompare } from "@store/compare/compareSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actWishlistToggle } from "@store/wishlist/wishlistSlice";
import { useState } from "react";
import { toast } from "react-toastify";

const useProductCard = (id: number, name: string) => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.wishlist);

  const [state, setState] = useState({
    isAddToCartDisabled: false,
    isAddToWishlistDisabled: false,
    isAddToCompareDisabled: false,
    isWishLoading: false,
    isCompareLoading: false,
    isProductModalOpen: false,
  });

  const updateState = (key: string, value: boolean) => {
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  const addProductHandler = () => {
    updateState("isAddToCartDisabled", true);
    dispatch(addToCart(id));
    setTimeout(() => {
      updateState("isAddToCartDisabled", false);
    }, 1000);
    toast(`${name} added to cart successfully`, { type: "success" });
  };

  const compareHandler = () => {
    updateState("isAddToCompareDisabled", true);
    updateState("isCompareLoading", true);
    dispatch(actAddCompare(id))
      .unwrap()
      .then(() => {
        toast(`${name} added to compares successfully`, { type: "success" });
        updateState("isAddToCompareDisabled", false);
        updateState("isCompareLoading", false);
      })
      .catch((error) => console.log(error));
  };

  const wishlistToggleHandler = () => {
    updateState("isAddToWishlistDisabled", true);
    updateState("isWishLoading", true);
    dispatch(actWishlistToggle({ id, name }))
      .unwrap()
      .then(() => {
        updateState("isAddToWishlistDisabled", false);
        updateState("isWishLoading", false);
      })
      .catch((error) => console.log(error));
  };

  const openModalQuickView = (e) => {
    e.stopPropagation();
    updateState("isProductModalOpen", true);
  };
  const closeModalQuickView = () => {
    updateState("isProductModalOpen", false);
  };

  return {
    addProductHandler,
    compareHandler,
    wishlistToggleHandler,
    openModalQuickView,
    closeModalQuickView,
    ...state,
    loading,
    error,
  };
};

export default useProductCard;
