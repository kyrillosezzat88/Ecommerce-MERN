import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";
import { toast } from "react-toastify";

const actWishlistToggle = createAsyncThunk(
  "wishlist/actWishlistToggle",
  async (data: { id: number; name: string }, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const isRecordExist = await axios.get(
        `wishlist?userId=1&productId=${data.id}`
      );

      if (isRecordExist.data.length > 0) {
        await axios.delete(`/wishlist/${isRecordExist.data[0].id}`);
        toast(`${data.name} has been deleted from wishlist successfully`, {
          type: "error",
        });
        return { type: "remove", id: data.id };
      }

      await axios.post(`/wishlist`, { userId: 1, productId: data.id });
      toast(`${data.name} has been added to wishlist successfully`, {
        type: "success",
      });
      return { type: "add", id: data.id };
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actWishlistToggle;
