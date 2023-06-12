import {ToDoListItemData, ToDoListItemFormInputs} from "../../types.ts";
import {useDispatch} from "react-redux";
import {useFormData} from "../../api/useFormData.ts";
import {SubmitHandler} from "react-hook-form";
import {addTodoItem} from "../../features/ToDoItemsSlice.ts";
import {useParams} from "react-router-dom";
import {createToDoItem} from "../../api/useToDoListItemsData.ts";
import {z, ZodSchema} from "zod";

function Form() {

    const dispatch = useDispatch();
    const listId: string | undefined = useParams().listId;

    const taskSchema: ZodSchema = z.object({
        title: z.string().min(1, {message: "Title must be at least 1 character long"}).max(150, {message: "Title must be at most 150 characters long"}),
        description: z.string().max(500, {message: "Description must be at most 500 characters long"}).optional(),
        deadline: z.coerce.date().min(new Date(), {message: "Are you sure you can make it? :)"})
    });

    const newtask: HTMLDialogElement = document.getElementById("newtask") as HTMLDialogElement;

    const onSubmit: SubmitHandler<ToDoListItemFormInputs> = async (data: ToDoListItemFormInputs): void => {

        if (listId === undefined) throw new Error("listId is undefined");

        const newItem: ToDoListItemData = {
            title: data.title,
            completed: false,
            description: data.description,
            deadline: (data.deadline ? data.deadline : new Date()).toLocaleString(),
            todolistId: parseInt(listId),
            id: "0"
        }
        taskSchema.parse(newItem);

        const response = await createToDoItem(listId, newItem);
        newItem.id = response.id;
        dispatch(addTodoItem(newItem));

        newtask.close();
    }

    const { handleSubmit, register, errors} = useFormData(
        taskSchema,
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
                <input type="text" placeholder="e.g. Check my emails" className="text-sm input input-bordered w-full" {...register("title")} />
                {errors.title?.message && <p className="text-error py-1 px-2 italic">{errors.title?.message}</p>}
            </div>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Due date</span>
                </label>
                <input type="date" className="text-sm input input-bordered w-full"  {...register("deadline")} />
                {errors.deadline?.message && <p className="text-error py-1 px-2 italic">{errors.deadline?.message}</p>}
            </div>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <textarea placeholder="Add some notes here..." className="textarea textarea-bordered w-full"  {...register("description")} />
                {errors.description?.message && <p className="text-error py-1 italic">{errors.description?.message}</p>}
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