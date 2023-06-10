import ToDoListItem from "../ToDoListItem/ToDoListItem.tsx";
import {useParams} from "react-router-dom";

const items = [
    {
        "deadline": "2024-04-25T07:27:18.911Z",
        "title": "Id laudantium consequatur alias.",
        "description": "Consequatur libero illo quae libero labore hic culpa voluptates.",
        "completed": true,
        "id": "1"
    },
    {
        "deadline": "2024-04-10T21:23:11.202Z",
        "title": "Provident vel tempora cum sit iste placeat debitis alias odit.",
        "description": "In accusantium quasi quas aspernatur natus at quis fuga.",
        "completed": false,
        "id": "2"
    },
    {
        "deadline": "2023-09-17T04:22:51.259Z",
        "title": "Numquam quis quidem rerum cumque tenetur ipsa.",
        "description": "Error ab recusandae sint tempore incidunt dolore quo.",
        "completed": true,
        "id": "3"
    },
    {
        "deadline": "2023-11-11T19:36:21.688Z",
        "title": "Numquam vitae consectetur dicta magnam ex.",
        "description": "Aliquid facilis eveniet earum quasi sed.",
        "completed": false,
        "id": "4"
    },
    {
        "deadline": "2023-12-25T22:57:46.869Z",
        "title": "Ipsa aspernatur earum sunt.",
        "description": "Deserunt nesciunt a dolore.",
        "completed": false,
        "id": "5"
    }
]
function ToDoList(): JSX.Element {
    const listId: string | undefined = useParams().listId;
    console.log("open list ", listId);

    function addItem(){
        console.log("Add item");
        // ID.showModal()
    }

    return (
        <div>
            <input type="text" placeholder="Search" className="input input-bordered input-secondary bg-transparent w-full max-w-xs float-left my-5 rounded-full" />
            <button className="btn btn-neutral float-right my-5 rounded-full"><span className="material-symbols-outlined">tune</span></button>
            <ul className="list-none text-left">
                {items.map((item, index) => {
                    return (
                        <ToDoListItem
                            index={index}
                            taskName={item.title}
                            isCompleted={item.completed}
                            description={item.description}
                            deadline={item.deadline}
                        ></ToDoListItem>)
                })}
            </ul>
            <button className="btn btn-outline btn-secondary rounded-full float-left"
                onClick={addItem}
            >+ Add item</button>

        </div>
    );
}

export default ToDoList;