import {SubmitHandler, useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {ToDoListItemFormInputs} from "../types.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {ZodSchema} from "zod";

export const useFormData = (toDoListItemFormSchema: ZodSchema,  onSubmitCallback: (data: ToDoListItemFormInputs) => void) => {
    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm<ToDoListItemFormInputs>(
        {resolver: zodResolver(toDoListItemFormSchema)}
    );
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<ToDoListItemFormInputs> = (data: ToDoListItemFormInputs) => {
        dispatch(onSubmitCallback(data));
    };

    return {
        handleSubmit: handleSubmit(onSubmit),
        register,
        errors,
    };
};
