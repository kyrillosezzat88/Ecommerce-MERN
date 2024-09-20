import { createSlice } from "@reduxjs/toolkit";
import { isString, TBanner, TLoading } from "@types";
import actGetHomeBanners from "./actions/actGetHomeBanners";

interface IHomeBanner {
  banners: TBanner[];
  loading: TLoading;
  error: null | string;
}

const initialState: IHomeBanner = {
  banners: [],
  loading: "idle",
  error: null,
};

const HomeBannerSlice = createSlice({
  name: "HomeBanner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetHomeBanners.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetHomeBanners.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    builder.addCase(actGetHomeBanners.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.error = null;
      state.banners = action.payload;
    });
  },
});

export { actGetHomeBanners };
export default HomeBannerSlice.reducer;
