import { configureStore } from '@reduxjs/toolkit'
import ToDoListReducer from '../features/ToDoListSlice'
import ToDoListItemsReducer from '../features/ToDoItemsSlice'

export const store = configureStore({
    reducer: {
        ToDoListData: ToDoListReducer,
        ToDoListItemsData: ToDoListItemsReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch