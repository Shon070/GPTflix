import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducers from "./movieSlice";
import showsReducers from "./showsSlice";
import gptReducers from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducers,
    shows: showsReducers,
    gpt: gptReducers,
  },
});

export default appStore;
