import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ToDoListData } from '../types'

// Define the initial state using that type
const initialState: ToDoListData = {
    id: 0,
    title: 'Untitled',
}

export const toDoListSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        setToDoListData: (state, action: PayloadAction<ToDoListData>) => {
            state.id = action.payload.id
            state.title = action.payload.title
        }
    }
})

export const { setToDoListData} = toDoListSlice.actions;

export default toDoListSlice.reducer