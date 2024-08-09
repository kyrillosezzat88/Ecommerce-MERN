import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@types";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = TProduct[];

const actGetProductsTabByIds = createAsyncThunk(
  "/products/actGetProductById",
  async (productsId: number[], thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const ProductsIds = productsId.map((id) => `id=${id}`).join("&");
      const products = await axios.get<TResponse>(`/products?${ProductsIds}`);
      return products.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProductsTabByIds;
