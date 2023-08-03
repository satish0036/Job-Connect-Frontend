import { createSlice } from "@reduxjs/toolkit";

// Get the user data from localStorage, if available
const userDataFromLocalStorage = JSON.parse(localStorage.getItem("userData"));

export const LocalStoreDataSlice = createSlice({
    name: "newLocalStoreData",
    initialState: userDataFromLocalStorage || {
        email: null,
        id: null,
        mobile: null,
        username: null,
    },
    reducers: {
        addLocalStoreData: (state, action) => {
            const newData = action.payload;
            console.log(newData);
            // Update the state with the new data
            state.email = newData.email;
            state.id = newData.id;
            state.mobile = newData.mobile;
            state.username = newData.username;
            // Save the updated data to localStorage
            localStorage.setItem("userData", JSON.stringify(state));
        },
        addLogout:(state,action)=>{
            state.email=null;
            state.id=null;
            state.mobile=null;
            state.username=null;
        }
    },
});

// Export the action creator
export const { addLocalStoreData ,addLogout} = LocalStoreDataSlice.actions;

// Export the reducer
export default LocalStoreDataSlice.reducer;
