import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import { TProduct } from "@types";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = TProduct[];

const actGetProductsById = createAsyncThunk(
  "cart/actGetProductById",
  async (_, thunkApi) => {
    const { rejectWithValue, fulfillWithValue, signal, getState } = thunkApi;
    const { cart } = getState() as RootState;
    const productsIds = cart.products.map((pro) => pro.id);
    if (!productsIds.length) return fulfillWithValue([]);
    try {
      const productsIdsAsString = productsIds
        .map((id) => {
          return `id=${id}`;
        })
        .join("&");
      const response = await axios.get<TResponse>(
        `/products?${productsIdsAsString}`,
        {
          signal,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProductsById;
