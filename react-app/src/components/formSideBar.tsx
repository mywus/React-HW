import {SwipeableDrawer, Box, List} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { setcurrentlyOpenedRow } from '../redux/slices/muiTableSlice'
import { setIsSideBarOpened } from '../redux/slices/sideBarSlice'
import { RootState } from './types'; // Adjust the path to your types file


export const FormSideBar = () => {
    const dispatch = useDispatch();
    const opened = useSelector(
        (state: RootState) => state.SideBarOpened.open
        );
    return ( 
    <SwipeableDrawer transitionDuration={500} anchor="right" open={opened} onClose={() => dispatch(setIsSideBarOpened(false))} onOpen={() => dispatch(setIsSideBarOpened(true))}>            
    <Box
    sx={{ width : 500, borderRadius : '70px' }}
    >
    <List>
        {`ID: ${opened}`}
    </List>
    </Box>
    </SwipeableDrawer>
    )
}