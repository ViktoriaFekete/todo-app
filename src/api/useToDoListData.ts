import axios from "axios";
import { useEffect } from "react";
import {ToDoListData} from "../types.ts";
import {setToDoListData} from "../features/ToDoListSlice.ts";
import { useDispatch } from "react-redux";
import { PROJECT_TOKEN } from "../secrets/constants.ts";

export const useToDoListData = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const response = await axios.get(buildToDoListsUrl().toString());
            const data: ToDoListData = await response.data;
            console.log(data);
            dispatch(setToDoListData({
                id: data.id,
                title: data.title,
            } as ToDoListData));
        })();

        return () => {
            console.log("Unmount");
        };
    }, []);
};

function buildToDoListsUrl(): URL {
    return new URL("https://" + PROJECT_TOKEN + ".mockapi.io/api/v1/todolists");
}


