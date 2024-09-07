import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading, TProduct } from "@types";
import actWishlistToggle from "./actions/actWishlistToggle";

interface IWishlist {
  products: number[];
  productsFullInfo: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: IWishlist = {
  products: [],
  productsFullInfo: [],
  loading: "idle",
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    cleanUpWishlist: (state) => {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actWishlistToggle.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actWishlistToggle.fulfilled, (state, action) => {
      if (action.payload.type === "add") {
        state.products = [...state.products, action.payload.id];
      } else {
        state.products = state.products.filter(
          (pro) => pro !== action.payload.id
        );
        state.productsFullInfo = state.productsFullInfo.filter(
          (pro) => pro.id !== action.payload.id
        );
      }
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(actWishlistToggle.rejected, (state, action) => {
      if (action.payload && isString(action.payload)) {
        state.error = action.payload;
        state.loading = "failed";
      }
    });
  },
});

export const { cleanUpWishlist } = wishlistSlice.actions;
export { actWishlistToggle };
export default wishlistSlice.reducer;
