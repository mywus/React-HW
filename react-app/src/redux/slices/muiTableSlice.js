import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentlyOpenedRow: -1,
}

export const currentlyOpenedRowSlice = createSlice({
    name: 'currentlyOpenedRow',
    initialState,
    reducers: {
        setIsSideBarOpened: (state, action) => {
            state.currentlyOpenedRow = action.payload
        },
    },
})

export const { setcurrentlyOpenedRow } = currentlyOpenedRowSlice.actions
export default currentlyOpenedRowSlice.reducer