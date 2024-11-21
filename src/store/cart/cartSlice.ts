import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading, TProduct } from "@types";
import actGetProductsById from "./actions/actGetProductsById";

interface ICart {
  products: {
    id: number;
    quantity: number;
  }[];
  productsFullInfo: TProduct[];
  total: number;
  loading: TLoading;
  error: string | null;
}

const initialState: ICart = {
  products: [],
  productsFullInfo: [],
  total: 0,
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity = 1 } = action.payload;
      const getProduct = state.products.find((pro) => pro.id === id);
      if (getProduct) {
        getProduct.quantity += quantity;
      } else {
        state.products.push({ id, quantity });
      }
    },
    cartItemChangeQTY: (state, action) => {
      const { id, type } = action.payload;
      const product = state.products.find((pro) => pro.id === id);

      if (!product) return;

      if (type === "INC") {
        product.quantity += 1;
      } else if (type === "DEC") {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.products = state.products.filter((pro) => pro.id !== id);
        }
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (pro) => pro.id === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsById.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsById.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    builder.addCase(actGetProductsById.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.error = null;
      state.productsFullInfo = action.payload;
    });
  },
});

export { actGetProductsById };
export const { addToCart, cartItemChangeQTY, deleteProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
