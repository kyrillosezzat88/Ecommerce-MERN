import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actAddCompare = createAsyncThunk(
  "compare/actAddCompare",
  async (id: number, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const isRecordExists = await axios.get(
        `compare?userId=1&productId=${id}`
      );
      if (!isRecordExists.data.length) {
        await axios.post("/compare", { userId: 1, productId: id });
      }
      return id;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actAddCompare;
