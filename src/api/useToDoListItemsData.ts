import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {PROJECT_TOKEN} from "../secrets/constants.ts";
import {ToDoListItemData} from "../types.ts";
import {setTodoListItemData} from "../features/ToDoItemsSlice.ts";

export const useToDoListItemsData = (todoListId: string|undefined) => {
    const dispatch = useDispatch();

    useEffect(() => {

        if (!todoListId) {
            return;
        }

        (async () => {
            const response =  await axios.get(buildToDoItemUrl(todoListId).toString());
            const data: ToDoListItemData[] = await response.data;
            dispatch(setTodoListItemData(data));
        })();

        return () => {
            dispatch(setTodoListItemData([]));
        };
    },[]);
}

export const createToDoItem = async (listId: string, todoItem: object) => {
    try {
        const response = await axios.post(buildToDoItemUrl(listId).toString(), todoItem);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const deleteToDoItem = async (listId: string, itemId: number) => {
    try {
        await axios.delete(buildToDoItemUrl(listId, undefined, undefined, itemId.toString()).toString() );
    }
    catch (error) {
        console.log(error);
    }
}

export const updateToDoItem = async (listId: string, itemId: number, todoItem: object) => {
    try {
        const response = await axios.put(buildToDoItemUrl(listId, undefined, undefined, itemId.toString()).toString(), todoItem);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const filterToDoItems = async (todoListId:string, filter?: string, value?: string) => {
    try {
        const response = await axios.get(buildToDoItemUrl(todoListId, filter, value).toString());
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

function buildToDoItemUrl(listId?: string, filter?:string|undefined, value?:string|undefined, itemId?: string): URL {

    const url: URL = new URL("https://" + PROJECT_TOKEN + `.mockapi.io/api/v1/todolist/${listId}/todoitem`);
    if (itemId) {
        url.pathname += "/" + itemId;
    }

    if (filter && value) {
        url.searchParams.append(filter, value);
    }
    return url;
}