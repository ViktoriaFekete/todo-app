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
            const response =  await axios.get(buildToDoItemUrl("","parentId", todoListId).toString());
            const data: ToDoListItemData[] = await response.data;
            dispatch(setTodoListItemData(data));
        })();

        return () => {
            dispatch(setTodoListItemData([]));
        };
    },[]);
}

export const createToDoItem = async (todoItem: object) => {
    try {
        const response = await axios.post(buildToDoItemUrl().toString(), todoItem);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const deleteToDoItem = async (itemId: number) => {
    try {
        const response = await axios.delete(buildToDoItemUrl(itemId.toString()).toString() );
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const getAllItems = async (todoListId: string) => {
    try {
        const url: URL = buildToDoItemUrl();
        url.searchParams.append("parentId", todoListId);
        const response = await axios.get(url.toString());

        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const filterToDoItems = async (filter: string, value: string) => {
    try {
        const url: URL = buildToDoItemUrl("", filter, value);
        const response = await axios.get(url.toString());
        console.log(url);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

function buildToDoItemUrl(param?: string, filter?:string, value?:string): URL {
    const url: URL = new URL("https://" + PROJECT_TOKEN + ".mockapi.io/api/v1/todoitem");
    if (param) {
        url.pathname += "/" + param;
    }
    if (filter && value) {
        url.searchParams.append(filter, value);
    }
    return url;
}