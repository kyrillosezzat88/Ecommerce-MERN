import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actGetHomeBanners = createAsyncThunk(
  "HomeBanner/actGetHomeBanners",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const banners = await axios.get("/homeBanners");
      return banners.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetHomeBanners;
