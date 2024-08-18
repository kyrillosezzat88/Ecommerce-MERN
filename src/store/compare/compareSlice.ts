import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "@types";

interface ICompare {
  products: string[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICompare = {
  products: [],
  loading: "idle",
  error: null,
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompares: (state, action) => {
      const productId = action.payload;
      const getProduct = state.products.find((pro) => pro === productId);
      if (!getProduct) {
        state.products = [...state.products, action.payload];
      }
    },
  },
});

export const { addToCompares } = compareSlice.actions;
export default compareSlice.reducer;
