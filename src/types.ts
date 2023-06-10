export interface ToDoListData {
    id: number;
    title: string;
}

export interface ToDoListItemData {
    title: string;
    completed: boolean;
    id: number;
    deadline: string;
    description: string;
    parentId: number;
}