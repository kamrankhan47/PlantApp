import { configureStore } from "@reduxjs/toolkit";
import plantSlice from "../Slice/plantSlice";

const store=configureStore(
    {
        reducer:{
            plant:plantSlice
        }
    }
)

export default store

