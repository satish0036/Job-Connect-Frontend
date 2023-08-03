import { createSlice } from "@reduxjs/toolkit";
import Authdata from "../../../all-data/AuthData";

export const AuthDataSlice = createSlice({
  name: "newUser",
  initialState:  Authdata, // The initial state should directly contain the JobData array
  reducers: {
        addAuth: (state, action) => {
      // No need to use initialState here
      state.push(action.payload); // Add the payload to the JobData array in the state
    },
  },
});

export const { addAuth } = AuthDataSlice.actions;
export default AuthDataSlice.reducer;
