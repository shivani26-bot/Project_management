import { configureStore } from "@reduxjs/toolkit";
import authLoginSlice from "../feature/authLoginSlice";
import authRegisterSlice from "../feature/authRegisterSlice";


export const reduxStore = configureStore({
  reducer: {
   
    authLogin: authLoginSlice,
    authRegister: authRegisterSlice,
    
  },
});

export default reduxStore;