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
      console.log(action.payload);
      const { id, quantity = 1 } = action.payload;
      const getProduct = state.products.find((pro) => pro.id === id);

      if (getProduct) {
        getProduct.quantity += quantity;
      } else {
        state.products.push({ id, quantity });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
