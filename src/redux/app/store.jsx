import { configureStore } from "@reduxjs/toolkit";
import authLoginSlice from "../feature/authLoginSlice";
import authRegisterSlice from "../feature/authRegisterSlice";
import userDetailSlice from "../feature/userDetailSlice";
import createProjectSlice from "../feature/createProjectSlice";


export const reduxStore = configureStore({
  reducer: {
    authLogin: authLoginSlice,
    authRegister: authRegisterSlice,
    userDetail : userDetailSlice,
    createProject: createProjectSlice,
  },
});

export default reduxStore;