import {configureStore} from "@reduxjs/toolkit"
import DataReducer from "./features/job-data-slice/JobDataSlice.js"
import AuthReducer from "./features/auth-data-slice/AuthDataSlice.js"
import ProfileDataReducer from "./features/profile-data-slice/ProfileDataSlice.js"
import ImageDataReducer from "./features/user-image-slice/UserImageSlice.js"
import LocalStoreDataReducer from "./features/localstore-data-slice/LocalstoreDataSlice.js"
export default configureStore({
    reducer:{
        newData:DataReducer,
        newUser:AuthReducer,
        updatedProfile:ProfileDataReducer,
        newImage:ImageDataReducer,
        newLocalStoreData:LocalStoreDataReducer,
    }
})