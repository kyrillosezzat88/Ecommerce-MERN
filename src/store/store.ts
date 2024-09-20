import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import products from "./products/productsSlice";
import cart from "./cart/cartSlice";
import compare from "./compare/compareSlice";
import wishlist from "./wishlist/wishlistSlice";
import categories from "./category/categorySlice";
import homeBanners from "./homeBanners/HomeBannersSlice";

const store = configureStore({
  reducer: {
    auth,
    products,
    cart,
    compare,
    wishlist,
    categories,
    homeBanners,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store };
