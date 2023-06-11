import ToDoListItem from "../ToDoListItem/ToDoListItem.tsx";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {createToDoItem,  useToDoListItemsData} from "../../api/useToDoListItemsData.ts";
import {ToDoListItemData} from "../../types.ts";
import {addTodoItem} from "../../features/ToDoItemsSlice.ts";
import Searchbar from "../Searchbar/Searchbar.tsx";


function ToDoList(): JSX.Element {
    const dispatch = useDispatch();

    const listId: string | undefined = useParams().listId;

    useToDoListItemsData(listId);
    const items: ToDoListItemData[] = useSelector((state: RootState) => state.ToDoListItemsData);

    function addItem(){
        if (listId === undefined) throw new Error("listId is undefined");
        const newItem: ToDoListItemData = { title: "My new task", completed: false, description: "My new task description", deadline: "2023-07-05", parentId: parseInt(listId), id: 0 };
        dispatch(addTodoItem(newItem));
        createToDoItem(newItem);
        // ID.showModal()
    }

    return (
        <div>
            <Searchbar/>
            <button className="btn btn-neutral float-right my-5 rounded-full"><span className="material-symbols-outlined">tune</span></button>
            <ul className="list-none text-left">
                {items.map((item: ToDoListItemData) => {
                    return (
                        <ToDoListItem
                            title={item.title}
                            completed={item.completed}
                            description={item.description}
                            deadline={item.deadline}
                            parentId={item.parentId}
                            id={item.id}
                        ></ToDoListItem>
                    )
                })}
            </ul>
            <button className="btn btn-outline btn-secondary rounded-full float-left"
                onClick={addItem}
            >+ Add item</button>

        </div>
    );
}

export default ToDoList;