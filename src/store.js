import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: "hello",
});

const stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
  },
});
