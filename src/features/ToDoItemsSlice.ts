import {ToDoListItemData} from "../types.ts";
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const itemInitialState: ToDoListItemData[] = [{
    title: "New task",
    completed: false,
    id: 0,
    deadline: new Date().toLocaleDateString(),
    description: "",
    todolistId: 0,
}]

export const toDoListItemsSlice = createSlice({
    name: 'todolistitems',
    initialState: itemInitialState,
    reducers: {
        setTodoListItemData: (_state, action: PayloadAction<ToDoListItemData[]>) => {
            return action.payload;
        },
        addTodoItem: (state, action: PayloadAction<ToDoListItemData>) => {
            state.push(action.payload);
        },
        removeTodoItem: (state, action: PayloadAction<number>) => {
            const index = state.findIndex(todo => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
})

export const { setTodoListItemData, addTodoItem, removeTodoItem } = toDoListItemsSlice.actions;

export default toDoListItemsSlice.reducer