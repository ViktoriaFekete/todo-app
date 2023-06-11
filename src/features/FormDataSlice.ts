// import { createSlice } from '@reduxjs/toolkit';
// import {ToDoListItemFormInputs} from "../types.ts";
//
//
// const initialState: ToDoListItemFormInputs = {
//     title: "",
//     deadline: new Date(),
//     description: ""
// };
//
// const formDataSlice = createSlice({
//     name: 'formdata',
//     initialState,
//     reducers: {
//         // Define your slice reducers
//         addNewItem: (state, action) => {
//             state.title = action.payload.title;
//             state.deadline = action.payload.deadline;
//             state.description = action.payload.description;
//         }
//     },
// });
//
// export const { addNewItem } = formDataSlice.actions;
// export default formDataSlice.reducer;
