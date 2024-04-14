import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducers from "./movieSlice";
import showsReducers from "./showsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducers,
    shows: showsReducers,
  },
});

export default appStore;
