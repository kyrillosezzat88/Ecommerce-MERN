import { addToCart } from "@store/cart/cartSlice";
import { addToCompares } from "@store/compare/compareSlice";
import { useAppDispatch } from "@store/hooks";
import { toast } from "react-toastify";

const useProductCard = (id: number) => {
  const dispatch = useAppDispatch();
  const addProductHandler = () => {
    dispatch(addToCart(id));
    toast(`${name} added to cart successfully`, { type: "success" });
  };
  const compareHandler = () => {
    dispatch(addToCompares(id));
    toast(`${name} added to compares successfully`, { type: "success" });
  };

  return { addProductHandler, compareHandler };
};

export default useProductCard;
