import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = {
  tabName: string;
  productIds: number[];
  id: number;
}[];

const actGetHomeProductsTabs = createAsyncThunk(
  "/products/actGetHomeProductsTabs",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const homeProductsTabs = await axios.get<TResponse>(`/homeProductsTabs`);
      return homeProductsTabs.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetHomeProductsTabs;
