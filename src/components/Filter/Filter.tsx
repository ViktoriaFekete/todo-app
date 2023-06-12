import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setTodoListItemData} from "../../features/ToDoItemsSlice.ts";
import {filterToDoItems} from "../../api/useToDoListItemsData.ts";
import {useParams} from "react-router-dom";

function Filter() {

    const [selectedOption, setSelectedOption] = useState("All");
    const [isFilterActive, setIsFilterActive] = useState(false);
    const dispatch = useDispatch();
    const listId: string | undefined = useParams().listId;

    useEffect(() => {
        if (!isFilterActive) return;

        if (listId === undefined) throw new Error("listId is undefined");

        let filter : string | undefined = undefined;
        let filterValue : string | undefined = undefined;

        if (selectedOption === "Active") {
            filter = "completed";
            filterValue = "false";
        } else if (selectedOption === "Done"){
            filter = "completed";
            filterValue = "true";
        }

        filterToDoItems(listId, filter, filterValue).then((res) => {
            dispatch(setTodoListItemData(res));
        })

    }, [selectedOption])

    const handleFilter = (event: React.ChangeEvent<HTMLInputElement>):void => {
        const target = event.target as HTMLInputElement;
        const filter = target.getAttribute("aria-label");
        setIsFilterActive(true);
        setSelectedOption(filter ? filter : "All");
    }
    return (
        <div>
            <div className="dropdown-bottom">
                <div className="join float-right my-5 rounded-full">
                    <input className="join-item btn" type="radio" name="options" aria-label="All" checked={selectedOption === "All"} onChange={handleFilter}/>
                    <input className="join-item btn" type="radio" name="options" aria-label="Active" checked={selectedOption === "Active"} onChange={handleFilter}/>
                    <input className="join-item btn" type="radio" name="options" aria-label="Done" checked={selectedOption === "Done"} onChange={handleFilter}/>
                </div>
            </div>
        </div>
    );
}

export default Filter;