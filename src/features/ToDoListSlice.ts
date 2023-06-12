import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ToDoListData} from '../types'
import {RootState} from "../app/store.ts";

const initialState: ToDoListData[] = [{
    id: 0,
    title: 'Untitled',
}]

export const toDoListSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        setTodoListData: (_state, action: PayloadAction<ToDoListData[]>) => {
            return action.payload;
        },
        addTodo: (state, action: PayloadAction<ToDoListData>) => {
            state.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            const index = state.findIndex(todo => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
})

export const { setTodoListData, addTodo , removeTodo} = toDoListSlice.actions;
export const isTodoListFetched = (state: RootState) => state.ToDoListData[0].title !== initialState[0].title;

export default toDoListSlice.reducer