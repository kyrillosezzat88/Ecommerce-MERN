import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCategory } from "@types";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = TCategory[];

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const categories = await axios.get<TResponse>("/categories");
      console.log(categories);
      return categories.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetCategories;
