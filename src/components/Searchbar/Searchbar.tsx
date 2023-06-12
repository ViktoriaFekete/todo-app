import {useEffect, useState} from 'react';
import {filterToDoItems} from "../../api/useToDoListItemsData.ts";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {ToDoListItemData} from "../../types.ts";
import {setTodoListItemData} from "../../features/ToDoItemsSlice.ts";

function Searchbar() {

    const [term, setTerm] = useState("-");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const dispatch = useDispatch();
    const listId: string | undefined = useParams().listId;

    useEffect(() => {
        const timer = setTimeout(() => setTerm(debouncedTerm), 1000);
        return () => clearTimeout(timer);
    }, [debouncedTerm]);

    useEffect(() => {
        if (term !== "" && term !== "-"){
            searchListItems(term);
        }
        else if (term === ""){
            showAll();
        }
    }, [term]);

    const searchListItems = async (term: string) : Promise<void> => {
        if (listId === undefined) throw new Error("listId is undefined");

        const filteredItems: ToDoListItemData[] = await filterToDoItems(listId, "search", term);
        dispatch(setTodoListItemData(filteredItems));
    }

    const showAll = async () : Promise<void> => {
        if (listId === undefined) throw new Error("listId is undefined");

        const allItems: ToDoListItemData[] = await filterToDoItems(listId);
        dispatch(setTodoListItemData(allItems));
    }

    return (
        <div>
            <input type="text"
                   placeholder="Search"
                   onChange={e => setDebouncedTerm(e.target.value)}
                   className="input input-bordered input-secondary text-black bg-transparent w-1/3 max-w-xs float-left my-5 rounded-full"
            />
        </div>
    );
}

export default Searchbar;