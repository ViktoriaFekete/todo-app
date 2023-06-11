import {ToDoListItemData, ToDoListItemFormInputs} from "../../types.ts";
import {useDispatch} from "react-redux";
import {useFormData} from "../../api/useFormData.ts";
import {SubmitHandler} from "react-hook-form";
import {addTodoItem} from "../../features/ToDoItemsSlice.ts";
import {useParams} from "react-router-dom";
import {createToDoItem} from "../../api/useToDoListItemsData.ts";

function Form() {

    const dispatch = useDispatch();
    const listId: string | undefined = useParams().listId;

    const onSubmit: SubmitHandler<ToDoListItemFormInputs> = (data: ToDoListItemFormInputs): void => {

        if (listId === undefined) throw new Error("listId is undefined");

        const newItem: ToDoListItemData = {
            title: data.title,
            completed: false,
            description: data.description,
            deadline: data.deadline,
            todolistId: parseInt(listId),
            id: 0
        }
        dispatch(addTodoItem(newItem));
        createToDoItem(listId, newItem);
        newtask.close();
    }

    const { handleSubmit, register, errors} = useFormData(
        'newTaskForm',
        onSubmit
    );

    return (
        <form onSubmit={handleSubmit}
            className="mx-5 my-5">
            <h2 className="font-bold text-lg">Task details</h2>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">What do you need to do?</span>
                </label>
                <input type="text" placeholder="e.g. Check my emails" className="text-sm input input-bordered w-full"  {...register("title")} />
            </div>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Due date</span>
                </label>
                <input type="date" placeholder="" className="text-sm input input-bordered w-full"  {...register("deadline")} />
            </div>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <textarea placeholder="Add some notes here..." className="textarea textarea-bordered w-full"  {...register("description")} />
            </div>

            <div className="text-center">
                <button className="btn btn-primary btn-outline my-5 mx-5 rounded-full w-2/6"
                        type="button"
                        onClick={() => {newtask.close()}}>
                    Cancel
                </button>
                <button type="submit"
                        className="btn btn-secondary my-5 mx-5 rounded-full w-2/6">
                    Save
                </button>
            </div>

        </form>
    );
}

export default Form;