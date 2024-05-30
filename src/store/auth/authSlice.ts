import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  accessToken: string | null;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  } | null;
}

const initialState: IAuth = {
  loading: "idle",
  error: null,
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
