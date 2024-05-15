import {requestEvents } from "services/api";
import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { toastRejected } from "../../services/notify";

export const apiGetEvents = createAsyncThunk(
  "user/friends",
  async (formData, thunkApi) => {
    try {
        const eventsData = await requestEvents();
      return eventsData.allEvents;
    } catch (error) {
      toastRejected("Something went wrong, please try again later!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


const INITIAL_STATE = {
  events: null,
  isLoading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState: INITIAL_STATE,

  extraReducers: (builder) =>
    builder

   

      // ------------ Get friends ----------------------
      .addCase(apiGetEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = action.payload;
      })
      .addMatcher(
        isAnyOf(
            apiGetEvents.pending,
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
            apiGetEvents.rejected,
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});
export const eventsReducer = eventsSlice.reducer;