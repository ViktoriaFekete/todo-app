import { configureStore } from '@reduxjs/toolkit'
import ToDoListReducer from '../features/ToDoListSlice'
import ToDoListItemsReducer from '../features/ToDoItemsSlice'

export const store = configureStore({
    reducer: {
        ToDoListData: ToDoListReducer,
        ToDoListItemsData: ToDoListItemsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch