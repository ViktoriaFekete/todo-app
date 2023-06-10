import React from 'react';
import {removeTodoItem} from "../../features/ToDoItemsSlice.ts";
import {deleteToDoItem} from "../../api/useToDoListItemsData.ts";
import {useDispatch} from "react-redux";
import {ToDoListItemData} from "../../types.ts";


function ToDoListItem(props: ToDoListItemData ) {

    const item: ToDoListItemData = props;
    const dispatch = useDispatch();

    const ddl = new Date(item.deadline).toLocaleDateString();
    const [isCompleted, setIsCompleted] = React.useState(item.completed);


    function handleEdit(){
        console.log("Edit item " + item.id);
    }

    function handleDelete(){
        console.log("Delete item " + item.id);
        dispatch(removeTodoItem(item.id));
        deleteToDoItem(item.id);
    }

    function handleCheckboxChange(){
        console.log("Checkbox change " + item.id);
        setIsCompleted(!isCompleted);
    }

    return <li key={item.id}>
        <div className="flex w-full py-5 bg-base-100 border text-slate-600 text-sm leading-6 font-medium py-2 px-4 my-3 rounded-lg">
            <input type="checkbox"
                   checked={isCompleted}
                   className="checkbox checkbox-lg checkbox-secondary"
                   onChange={handleCheckboxChange}
            />

            <div className="w-full text-lg mx-4">
                <span className="text-left">{item.title}</span>
                <div className="text-sm">
                    <span className="text-slate-400">{item.description}</span>
                </div>
            </div>

            <div className="w-1/3 text-base">
                <span className="float-right material-symbols-outlined">event</span>
                <span className="float-right"> {ddl}</span>
                <div>
                    <button className="btn btn-ghost float-right rounded-full"
                    onClick={handleDelete}>
                        <span className="material-symbols-outlined">delete</span>
                    </button>
                    <button className="btn btn-ghost float-right rounded-full"
                        onClick={handleEdit}>
                        <span className="material-symbols-outlined">edit</span>
                    </button>
                </div>
            </div>
        </div>
    </li>;
}

export default ToDoListItem;