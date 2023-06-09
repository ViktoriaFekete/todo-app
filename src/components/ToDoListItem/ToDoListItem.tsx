import React from 'react';

interface ToDoListItemProps {
    taskName: string;
    isCompleted: boolean;
    index: number;
    deadline: string;
    description: string;
}

function ToDoListItem(props: ToDoListItemProps) {
    const ddl = new Date(props.deadline).toLocaleDateString();
    const [isCompleted, setIsCompleted] = React.useState(props.isCompleted);

    function handleEdit(){
        console.log("Edit item " + props.index);
    }

    function handleDelete(){
        console.log("Delete item " + props.index);
    }

    function handleCheckboxChange(){
        console.log("Checkbox change " + props.index);
        setIsCompleted(!isCompleted);
    }

    return <li key={props.index}>
        <div className="flex w-full py-5 bg-base-100 border text-slate-600 text-sm leading-6 font-medium py-2 px-4 my-3 rounded-lg">
            <input type="checkbox"
                   checked={isCompleted}
                   className="checkbox checkbox-lg checkbox-secondary"
                   onChange={handleCheckboxChange}
            />

            <div className="w-full text-lg mx-4">
                <span className="text-left">{props.taskName}</span>
                <div className="text-sm">
                    <span className="text-slate-400">{props.description}</span>
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