import {Link} from "react-router-dom";
import {createToDoList, useToDoListData} from "../../api/useToDoListData.ts"
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../app/store";
import {ToDoListData} from "../../types.ts";
import {addTodo} from "../../features/ToDoListSlice.ts";

function AllToDoLists() {
    const dispatch = useDispatch();

    useToDoListData();
    const allLists: ToDoListData[] = useSelector((state: RootState) => state.ToDoListData);

    function addList(){
        const newTodo = { title: "My new list"};
        dispatch(addTodo(newTodo));
        createToDoList(newTodo);
        // ID.showModal()
    }

    return (
        <>
            <ul className="w-full">
                <p>daco</p>
                {allLists.map((list) => {
                    return (
                        <li key={list.id}>
                            <div className="flex w-full py-5 bg-base-100 border text-slate-600 text-sm leading-6 font-medium py-2 px-4 my-3 rounded-lg">
                                <Link to={`list/${list.id}`} className="text-slate-600  hover:text-secondary">List: {list.title}</Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <button className="btn btn-outline btn-secondary rounded-full float-left"
                    onClick={addList}
            >+ Add list</button>
        </>
    );
}

export default AllToDoLists;