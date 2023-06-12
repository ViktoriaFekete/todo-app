import {Link} from "react-router-dom";
import {deleteToDoList, useToDoListData} from "../../api/useToDoListData.ts"
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../app/store";
import {ToDoListData} from "../../types.ts";
import {removeTodo} from "../../features/ToDoListSlice.ts";
import ListForm from "../ListForm/ListForm.tsx";

function AllToDoLists() {
    useToDoListData();

    const dispatch = useDispatch();
    const allLists: ToDoListData[] = useSelector((state: RootState) => state.ToDoListData);
    const newlist: HTMLDialogElement = document.getElementById("newlist") as HTMLDialogElement;

    function handleDelete(e: React.MouseEvent<HTMLButtonElement>){
        const target = (e.target) as HTMLSpanElement;
        const listId: string | null = target.getAttribute("item-id");

        if (listId === null) throw new Error("listId is undefined");

        dispatch(removeTodo(parseInt(listId)));
        deleteToDoList(listId);
    }

    return (
        <>
            <ul className="w-full">
                {allLists.map((list) => {
                    return (
                        <li key={list.id}>
                            <div className="flex w-full py-2 bg-base-100 border text-slate-600 text-sm leading-6 font-medium px-4 my-3 rounded-lg justify-between">
                                <Link to={`/list/${list.id}`} className="text-slate-600  hover:text-secondary place-self-center">{list.title}</Link>
                                <button className="btn btn-ghost float-right rounded-full"
                                        onClick={handleDelete}>
                                    <span className="material-symbols-outlined" item-id={list.id}>delete</span>
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <button className="btn btn-outline btn-secondary rounded-full float-left"
                    onClick={() => {newlist.showModal()}}
            >+ Add list</button>
            <dialog id="newlist" className="modal ">
                <div className="modal-box">
                    <ListForm/>
                </div>
            </dialog>
        </>
    );
}

export default AllToDoLists;