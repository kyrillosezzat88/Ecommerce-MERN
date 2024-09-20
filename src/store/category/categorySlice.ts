import { createSlice } from "@reduxjs/toolkit";
import { isString, TCategory, TLoading } from "@types";
import actGetCategories from "./actions/actGetCategories";

interface ICategory {
  categories: TCategory[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICategory = {
  categories: [],
  loading: "idle",
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actGetCategories };
export default categorySlice.reducer;
