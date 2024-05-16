import {requestEvents, requestRegistration } from "services/api";
import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { toastRejected } from "../../services/notify";

export const apiGetEvents = createAsyncThunk(
  "events/events",
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

export const registerParticipant = createAsyncThunk(
  'registration/registerParticipant',
  async ({ eventId, participantData }, thunkApi) => {
    try {
      const data = await requestRegistration(eventId, participantData);
      return data;
    } catch (error) {
      throw error; // Handle errors in the component
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

  
      .addCase(apiGetEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = action.payload;
      })
      .addMatcher(
        isAnyOf(
          apiGetEvents.pending,
          registerParticipant.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          apiGetEvents.rejected,
          registerParticipant.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});
export const eventsReducer = eventsSlice.reducer;