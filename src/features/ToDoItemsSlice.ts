import {ToDoListItemData} from "../types.ts";
import { createSlice } from '@reduxjs/toolkit'

const initialState: ToDoListItemData[] = [{
    title: "New task",
    completed: false,
    id: 0,
    deadline: new Date().toLocaleDateString(),
    description: "",
    parentId: 0,
}]

export const toDoListItemsSlice = createSlice({
    name: 'todolistitems',
    initialState,
    reducers: {
        setTodoListItemData: (state,action) => {
            return action.payload;
        },
        addTodoItem: (state, action) => {
            state.push(action.payload);
        },
        removeTodoItem: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
})

export const { setTodoListItemData, addTodoItem, removeTodoItem } = toDoListItemsSlice.actions;

export default toDoListItemsSlice.reducer