import {Link} from "react-router-dom";
import {useToDoListData} from "../../api/useToDoListData.ts"
import {useSelector} from "react-redux";
import { RootState } from "../../app/store";
import {ToDoListData} from "../../types.ts";

// const allLists = [
//     {
//         "title": "et ipsam reprehenderit",
//         "items": [],
//         "id": "1"
//     },
//     {
//         "title": "delectus labore aliquid",
//         "items": [],
//         "id": "2"
//     },
//     {
//         "title": "amet corporis iusto",
//         "items": [],
//         "id": "3"
//     },
//     {
//         "title": "corporis eveniet ullam",
//         "items": [],
//         "id": "4"
//     },
//     {
//         "title": "ratione totam impedit",
//         "items": [],
//         "id": "5"
//     }]

function AllToDoLists() {

    useToDoListData();
    const allLists: ToDoListData = useSelector((state: RootState) => state.ToDoListData);
    console.log(allLists);

    function addList(){
        console.log("Add list");
        // ID.showModal()
    }

    return (
        <>
            <ul className="w-full">
                <p>daco</p>
                {/*{allLists.map((list, index) => {*/}
                {/*    return (*/}
                {/*        <li key={index}>*/}
                {/*            <div className="flex w-full py-5 bg-base-100 border text-slate-600 text-sm leading-6 font-medium py-2 px-4 my-3 rounded-lg">*/}
                {/*                <Link to={`list/${list.id}`} className="text-slate-600  hover:text-secondary">List: {list.title}</Link>*/}
                {/*            </div>*/}
                {/*        </li>*/}
                {/*    )*/}
                {/*})}*/}
            </ul>
            <button className="btn btn-outline btn-secondary rounded-full float-left"
                    onClick={addList}
            >+ Add list</button>
        </>
    );
}

export default AllToDoLists;