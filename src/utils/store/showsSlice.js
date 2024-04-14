import { createSlice } from "@reduxjs/toolkit";

const showSlice = createSlice({
  name: "shows",
  initialState: {
    topRatedShows: null,
    onAirShows: null,
    popularShows: null,
    arrivingTodayShows: null,
  },
  reducers: {
    addTopRatedShows: (state, action) => {
      state.topRatedShows = action.payload;
    },
    addOnAirShows: (state, action) => {
      state.onAirShows = action.payload;
    },
    addPopularShows: (state, action) => {
      state.popularShows = action.payload;
    },
    addArrivingTodayShows: (state, action) => {
      state.arrivingTodayShows = action.payload;
    },
  },
});

export const {
  addTopRatedShows,
  addOnAirShows,
  addPopularShows,
  addArrivingTodayShows,
} = showSlice.actions;
export default showSlice.reducer;
