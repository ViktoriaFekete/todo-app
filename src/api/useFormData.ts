import {SubmitHandler, useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {ToDoListItemFormInputs} from "../types.ts";

export const useFormData = (formName: string, onSubmitCallback: (data: ToDoListItemFormInputs) => void) => {
    const { handleSubmit, register, errors } = useForm<ToDoListItemFormInputs>();
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
