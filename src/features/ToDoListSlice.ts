import { createSlice } from '@reduxjs/toolkit'
import { ToDoListData } from '../types'

// Define the initial state using that type
const initialState: ToDoListData[] = [{
    id: 0,
    title: 'Untitled',
}]

export const toDoListSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        setTodoListData: (state,action) => {
            return action.payload;
        },
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        removeTodo: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
})

export const { setTodoListData, addTodo , removeTodo} = toDoListSlice.actions;

export default toDoListSlice.reducer