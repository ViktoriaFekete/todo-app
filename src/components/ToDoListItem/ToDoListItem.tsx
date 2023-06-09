interface ToDoListItemProps {
    taskName: string;
    isCompleted: boolean;
    index: number;
    deadline: string;
    description: string;
}

function ToDoListItem(props: ToDoListItemProps) {
    console.log(props);
    const ddl = new Date(props.deadline).toLocaleDateString();

    return <li key={props.index}>
        <div className="flex w-full bg-base-100 border text-slate-600 text-sm leading-6 font-medium py-2 px-4 my-3 rounded-sm">
            <input type="checkbox" checked={props.isCompleted} className="checkbox checkbox-lg checkbox-secondary"/>

            <div className="w-full text-lg mx-4">
                <span className="text-left">{props.taskName}</span>
                <div className="text-sm">
                    <span className="text-slate-400">{props.description}</span>

                    {/*<button className="btn text-black">Remove</button>*/}
                    {/*<button className="btn text-black">Edit</button>*/}
                </div>

            </div>

            <div className="w-1/3 text-base">
                <span className="float-right material-symbols-outlined">event</span>
                <span className="float-right"> {ddl}</span>
            </div>
        </div>
    </li>;
}

export default ToDoListItem;