import { actGetProductsById } from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

const useCart = () => {
  const { productsFullInfo, error, loading } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actGetProductsById());
  }, [dispatch]);
  return { productsFullInfo, error, loading };
};

export default useCart;
