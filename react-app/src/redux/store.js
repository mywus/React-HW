import { configureStore } from '@reduxjs/toolkit'
import isSideBarOpenedReducer from './slices/sideBarSlice'
import currentlyOpenedRowReducer from './slices/muiTableSlice'


export const store = configureStore({
    reducer: {
        isSideBarOpened: isSideBarOpenedReducer,
        currentlyOpened: currentlyOpenedRowReducer
    },
})

