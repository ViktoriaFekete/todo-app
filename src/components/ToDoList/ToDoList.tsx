import ToDoListItem from "../ToDoListItem/ToDoListItem.tsx";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {createToDoItem,  useToDoListItemsData} from "../../api/useToDoListItemsData.ts";
import {ToDoListItemData} from "../../types.ts";
import {addTodoItem} from "../../features/ToDoItemsSlice.ts";
import Searchbar from "../Searchbar/Searchbar.tsx";
import Filter from "../Filter/Filter.tsx";
import {isTodoListFetched} from "../../features/ToDoListSlice.ts";


function ToDoList(): JSX.Element {
    const dispatch = useDispatch();
    const listId: string | undefined = useParams().listId;
    useToDoListItemsData(listId);

    const items: ToDoListItemData[] = useSelector((state: RootState) => state.ToDoListItemsData);
    const isListFetched: boolean = useSelector(isTodoListFetched);

    function addItem(){
        if (listId === undefined) throw new Error("listId is undefined");
        const newItem: ToDoListItemData = { title: "My new task", completed: false, description: "My new task description", deadline: "2023-07-05", todolistId: parseInt(listId), id: 0 };
        dispatch(addTodoItem(newItem));
        createToDoItem(listId, newItem);
        // ID.showModal()
    }

    return (
        <div>
            <Searchbar/>
            <Filter/>
            {isListFetched ?
                <ul className="list-none text-left">
                    {items.map((item: ToDoListItemData, key: number) => {
                        return (
                            <ToDoListItem
                                key={key}
                                title={item.title}
                                completed={item.completed}
                                description={item.description}
                                deadline={item.deadline}
                                todolistId={item.todolistId}
                                id={item.id}
                            ></ToDoListItem>
                        )
                    })}
                </ul>
                :
                <div className="align-center ">
                    <span className="loading loading-spinner text-secondary my-10 place-self-center block"></span>
                </div>
            }
            <button className="btn btn-outline btn-secondary rounded-full float-left"
                onClick={addItem}
            >+ Add item</button>

        </div>
    );
}

export default ToDoList;