import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "@types";

interface ICart {
  products: {
    id: number;
    quantity: number;
  }[];
  total: number;
  loading: TLoading;
  error: string | null;
}

const initialState: ICart = {
  products: [],
  total: 0,
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      const getProduct = state.products.find((pro) => pro.id === productId);
      if (getProduct) {
        getProduct.quantity++;
      } else {
        state.products = [...state.products, { id: productId, quantity: 1 }];
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
