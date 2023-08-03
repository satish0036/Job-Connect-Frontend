import { createSlice } from "@reduxjs/toolkit";
export const ProfileDataSlice = createSlice({
  name: "updatedProfile",
  initialState: {},
  reducers: {
    addDataInProfile: (state, action) => {
      const newData = action.payload;
      return newData;
    },
    editDataInProfile: (state, action) => {
      const updatedData = action.payload;
      for (const key in updatedData) {
        if (Object.prototype.hasOwnProperty.call(updatedData, key)) {
          // Only update properties that exist in updatedData and are not undefined or null
          if (updatedData[key] !== "" && updatedData[key] !== null) {
            state[key] = updatedData[key];
          }
        }
      }
    },
    resetProfileData: (state) => {
      return {};
    },
  },
});

export const { addDataInProfile,resetProfileData,editDataInProfile } = ProfileDataSlice.actions;
export default ProfileDataSlice.reducer;
