import axios from "axios";
import { useEffect } from "react";
import {ToDoListData} from "../types.ts";
import {setTodoListData} from "../features/ToDoListSlice.ts";
import { useDispatch } from "react-redux";
import { PROJECT_TOKEN } from "../secrets/constants.ts";

export const useToDoListData = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const response = await axios.get(buildToDoListsUrl().toString());
            const data: ToDoListData[] = await response.data;
            dispatch(setTodoListData(data));
        })();

        return () => {
            console.log("Unmount");
        };
    }, []);
};

export const createToDoList = async (todoList: object) => {
    try {
        const response = await axios.post(buildToDoListsUrl().toString(), todoList);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

// TODO: change string to number for todolistid
export const deleteToDoList = async (todoListId: string) => {
    try {
        const response = await axios.delete(buildToDoListsUrl(todoListId).toString());
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}



function buildToDoListsUrl(param?: string): URL {
    const url: URL = new URL("https://" + PROJECT_TOKEN + ".mockapi.io/api/v1/todolists");
    if (param) {
        url.pathname += "/" + param;
    }
    return url;
}




