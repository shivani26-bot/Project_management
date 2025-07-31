import { configureStore } from "@reduxjs/toolkit";
import authLoginSlice from "../feature/authLoginSlice";
import authRegisterSlice from "../feature/authRegisterSlice";
import userDetailSlice from "../feature/userDetailSlice";


export const reduxStore = configureStore({
  reducer: {
    authLogin: authLoginSlice,
    authRegister: authRegisterSlice,
    userDetail : userDetailSlice
  },
});

export default reduxStore;