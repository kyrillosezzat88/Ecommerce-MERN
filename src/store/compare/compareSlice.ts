import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading } from "@types";
import actAddCompare from "./actions/actAddCompare";

interface ICompare {
  products: number[];
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
  extraReducers: (builder) => {
    builder.addCase(actAddCompare.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAddCompare.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && isString(action.payload)) {
        state.error = action.payload;
      }
    });
    builder.addCase(actAddCompare.fulfilled, (state, action) => {
      if (!state.products.includes(action.payload)) {
        state.products = [...state.products, action.payload];
      }
    });
  },
});

export { actAddCompare };
export const { addToCompares } = compareSlice.actions;
export default compareSlice.reducer;
