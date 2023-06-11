import ToDoListItem from "../ToDoListItem/ToDoListItem.tsx";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {useToDoListItemsData} from "../../api/useToDoListItemsData.ts";
import {ToDoListItemData} from "../../types.ts";
import Searchbar from "../Searchbar/Searchbar.tsx";
import Filter from "../Filter/Filter.tsx";
import {isTodoListFetched} from "../../features/ToDoListSlice.ts";
import Form from "../Form";

function ToDoList(): JSX.Element {
    const listId: string | undefined = useParams().listId;
    useToDoListItemsData(listId);

    const items: ToDoListItemData[] = useSelector((state: RootState) => state.ToDoListItemsData);
    const isListFetched: boolean = useSelector(isTodoListFetched);

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
                onClick={() => {newtask.showModal()}}
            >+ Add item</button>

            <dialog id="newtask" className="modal ">
                <div className="modal-box">
                    <Form/>
                </div>
            </dialog>

        </div>
    );
}

export default ToDoList;