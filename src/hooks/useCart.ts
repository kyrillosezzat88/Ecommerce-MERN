import { actGetProductsById, deleteProduct } from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

const useCart = () => {
  const { productsFullInfo, error, loading, products } = useAppSelector(
    (state) => state.cart
  );
  const productsWithQty = productsFullInfo.map((product) => {
    const matchingProduct = products.find((pro) => pro.id === product.id);
    return {
      ...product,
      quantity: matchingProduct ? matchingProduct.quantity : 1,
    };
  });
  const SubTotal = productsWithQty.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
  const dispatch = useAppDispatch();
  const actDeleteProduct = (id: number) => {
    dispatch(deleteProduct({ id }));
  };
  useEffect(() => {
    dispatch(actGetProductsById());
  }, [dispatch, products]);

  return {
    productsWithQty,
    error,
    loading,
    actDeleteProduct,
    SubTotal,
  };
};

export default useCart;
