import {ToDoListData, ToDoListItemFormInputs} from "../../types.ts";
import {useDispatch, useSelector} from "react-redux";
import {useFormData} from "../../api/useFormData.ts";
import {SubmitHandler} from "react-hook-form";
import {z, ZodSchema} from "zod";
import {addTodo} from "../../features/ToDoListSlice.ts";
import {createToDoList} from "../../api/useToDoListData.ts";
import {RootState} from "../../app/store.ts";

function ListForm() {

    const dispatch = useDispatch();
    const allLists: ToDoListData[] = useSelector((state: RootState) => state.ToDoListData);
    const listId = allLists.length + 1;

    const listSchema: ZodSchema = z.object({
        title: z.string().min(1, {message: "Title must be at least 1 character long"}).max(150, {message: "Title must be at most 150 characters long"}),
    });

    const newlist: HTMLDialogElement = document.getElementById("newlist") as HTMLDialogElement;

    const onSubmit: SubmitHandler<ToDoListItemFormInputs> = async (data: ToDoListItemFormInputs) => {

        if (listId === undefined) throw new Error("listId is undefined");

        const newList: ToDoListData = {
            title: data.title,
            id: 0
        }
        listSchema.parse(newList);

        const response = await createToDoList(newList);
        newList.id = response.id;
        dispatch(addTodo(newList));

        newlist.close();
    }

    const { handleSubmit, register, errors} = useFormData(
        listSchema,
        onSubmit
    );

    return (
        <form onSubmit={handleSubmit}
              className="mx-5 my-5">
            <h2 className="font-bold text-lg">List details</h2>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">List name</span>
                </label>
                <input type="text" placeholder="My list" className="text-sm input input-bordered w-full" {...register("title")} />
                {errors.title?.message && <p className="text-error py-1 px-2 italic">{errors.title?.message}</p>}
            </div>

            <div className="text-center">
                <button className="btn btn-primary btn-outline my-5 mx-5 rounded-full w-2/6"
                        type="button"
                        onClick={() => {newlist.close()}}>
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

export default ListForm;