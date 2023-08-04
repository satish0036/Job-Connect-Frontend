import { createSlice } from "@reduxjs/toolkit";

export const JobDataSlice = createSlice({
  name: "newData",
  initialState: {},
  reducers: {
    addData: (state, action) => {
      state.JobData = action.payload;
    },
    addNewJob:(state,action)=>{
      return {
        ...state,
        JobData: [...state.JobData, action.payload]
      };
      // or
      // addNewJob: (state, action) => {
      //   state.JobData = [...state.JobData, action.payload];
      // }
    },
    editJobs: (state, action) => {
      const { id, updatedData } = action.payload;

      // Find the index of the job with the matching id in the state
      const jobIndex = state.JobData.findIndex((job) => job.id === id);

      if (jobIndex !== -1) {
        // If the job with the specified id is found, update its properties using updatedData
        for (const key in updatedData) {
          if (Object.prototype.hasOwnProperty.call(updatedData, key)) {
            // Only update properties that exist in updatedData and are not undefined or null
            if (updatedData[key] !== "" && updatedData[key] !== null) {
              state.JobData[jobIndex][key] = updatedData[key];
            }
          }
        }
      }
    },
    deleteJob: (state, action) => {
      const jobIdToDelete = action.payload;
      state.JobData = state.JobData.filter((job) => job.id !== jobIdToDelete);
    },
  },
});

export const { addData ,addNewJob,editJobs,deleteJob} = JobDataSlice.actions;
export default JobDataSlice.reducer;
