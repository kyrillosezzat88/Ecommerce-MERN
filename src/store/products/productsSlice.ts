import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading, TProduct, TProductsTab } from "@types";
import actGetHomeProductsTabs from "./actions/getProducts";
import actGetProductsTabByIds from "./actions/getProductTabById";

interface IProducts {
  productsTabs: TProductsTab;
  activeProductsTab: TProduct[];
  homeProducts: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: IProducts = {
  productsTabs: [],
  activeProductsTab: [],
  homeProducts: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    activeProductsTabCleanup(state) {
      state.activeProductsTab = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetHomeProductsTabs.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetHomeProductsTabs.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    builder.addCase(actGetHomeProductsTabs.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productsTabs = action.payload;
    });

    builder.addCase(actGetProductsTabByIds.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });

    builder.addCase(actGetProductsTabByIds.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    builder.addCase(actGetProductsTabByIds.fulfilled, (state, action) => {
      state.error = null;
      state.loading = "succeeded";
      state.activeProductsTab = action.payload as TProduct[];
    });
  },
});

export { actGetHomeProductsTabs, actGetProductsTabByIds };
export const { activeProductsTabCleanup } = productsSlice.actions;
export default productsSlice.reducer;
