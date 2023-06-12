import ToDoListItem from "../ToDoListItem/ToDoListItem.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {useToDoListItemsData} from "../../api/useToDoListItemsData.ts";
import {ToDoListItemData} from "../../types.ts";
import {Searchbar} from "../Searchbar";
import {Filter} from "../Filter";
import Form from "../Form";
import {useParams} from "react-router-dom";

function ToDoList(): JSX.Element {
    useToDoListItemsData();

    const items: ToDoListItemData[] = useSelector((state: RootState) => state.ToDoListItemsData);
    const listId: string | undefined = useParams().listId;
    const listTitle: string = useSelector((state: RootState) => state.ToDoListData.filter((list) => list.id.toString() === listId)[0].title);
    const newtask: HTMLDialogElement = document.getElementById("newtask") as HTMLDialogElement;

    return (
        <div>
            <h2 className="text-primary mt-5 text-lg font-bold">{listTitle}</h2>
            <Searchbar/>
            <Filter/>
            <ul className="list-none text-left">
                {items && items.map((item: ToDoListItemData, key: number) => {
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

            <div className="w-full float-right">
                <button className="btn btn-outline btn-secondary rounded-full float-left"
                        onClick={() => {newtask.showModal()}}
                >+ Add item</button>
            </div>
            <dialog id="newtask" className="modal ">
                <div className="modal-box">
                    <Form/>
                </div>
            </dialog>

        </div>
    );
}

export default ToDoList;