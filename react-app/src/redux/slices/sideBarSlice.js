import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false,
}

export const isSidebarOpenedSlice = createSlice({
    name: 'SideBarOpened',
    initialState,
    reducers: {
        setIsSideBarOpened: (state, action) => {
            state.open = action.payload
        },
    },
})

export const { setIsSideBarOpened } = isSidebarOpenedSlice.actions
export default isSidebarOpenedSlice.reducer