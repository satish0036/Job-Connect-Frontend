import { createSlice } from "@reduxjs/toolkit";
// import initialState from "../../../all-data/JobData";

export const UserImageSlice = createSlice({
    name: "newImage",
    initialState: {
        value:"https://cdn-icons-png.flaticon.com/128/149/149071.png",
        // value: "https://media.licdn.com/dms/image/D5603AQE3_0wiLwBxng/profile-displayphoto-shrink_800_800/0/1684238799848?e=1695859200&v=beta&t=d733r6MDEQ8IsGUErRGUog52Fap7ErjmqnX6shnTVjU"
    },
    reducers: {

        addImage: (state, action) => {
            const newData = action.payload;

            if (newData !== "") {
                state.value = action.payload;
            }

        },
    },
});

export const { addImage } = UserImageSlice.actions;
export default UserImageSlice.reducer;

