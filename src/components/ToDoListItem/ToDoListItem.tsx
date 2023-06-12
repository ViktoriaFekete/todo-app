import React from 'react';
import {removeTodoItem} from "../../features/ToDoItemsSlice.ts";
import {deleteToDoItem, updateToDoItem} from "../../api/useToDoListItemsData.ts";
import {useDispatch} from "react-redux";
import {ToDoListItemData} from "../../types.ts";
import {useParams} from "react-router-dom";

function ToDoListItem(props: ToDoListItemData ) {

    const item: ToDoListItemData = props;
    const dispatch = useDispatch();
    const [isCompleted, setIsCompleted] = React.useState(item.completed);
    const deadline = new Date(item.deadline).toLocaleDateString();
    const listId: string | undefined = useParams().listId;

    React.useEffect(() => {
        setIsCompleted(item.completed);
    }, [item.completed]);

    function handleEdit(){
        const modal: HTMLDialogElement = document.getElementById("modal") as HTMLDialogElement;
        modal.showModal();
    }

    function handleDelete(e: React.MouseEvent<HTMLButtonElement>){
        if (listId === undefined) throw new Error("listId is undefined");
        const target: HTMLButtonElement = e.target as HTMLButtonElement;
        const itemId: string | null = target.getAttribute("item-id");

        if (itemId === null) throw new Error("itemId is null");

        deleteToDoItem(listId, itemId);
        dispatch(removeTodoItem(itemId));
    }

    function handleCheckboxChange(){
        if (listId === undefined) throw new Error("listId is undefined");

        setIsCompleted(!isCompleted);
        updateToDoItem(listId, item.id, {completed: !isCompleted});
    }

    return <li key={item.id}>
        <div className="flex flex-wrap sm:flex-nowrap w-full py-5 bg-base-100 border text-slate-600 text-sm leading-6 font-medium py-2 px-4 my-3 rounded-lg">
            <input type="checkbox"
                   checked={isCompleted}
                   className="checkbox checkbox-lg checkbox-secondary"
                   onChange={handleCheckboxChange}
            />

            <div className="w-4/6 mx-4">
                <span className="text-left text-md lg:text-lg">{item.title}</span>
                <div className="">
                    <span className="text-slate-400 text-sm md:text-md lg:text-lg">{item.description}</span>
                </div>
            </div>

            <div className="mt-3 mx-10 sm: mx-0 sm:mt-0 w-full sm:w-2/6 text-base">
                <div>
                    <span className="float-left sm:float-right ml-1 material-symbols-outlined">event</span>
                    <span className="float-left sm:float-right">{deadline}</span>
                </div>
                <div className="flex mt-2 mx-0 float-right">
                    <button className="btn btn-ghost float-right rounded-full"
                    onClick={handleDelete}>
                        <span className="material-symbols-outlined" item-id={item.id}>delete</span>
                    </button>
                    <button className="btn btn-ghost float-right rounded-full"
                        onClick={handleEdit}>
                        <span className="material-symbols-outlined" item-id={item.id}>edit</span>
                    </button>
                </div>
            </div>
        </div>
    </li>;
}

export default ToDoListItem;