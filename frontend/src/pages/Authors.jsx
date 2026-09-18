import BooksSet from "../components/BooksSet.jsx";
import Table from "../components/Table.jsx";
import {NavLink} from "react-router-dom";

function Authors() {
    return (
        <>
            <div className="flex items-center justify-center flex-col p-15 gap-4">
                <h1 className="text-5xl">Authors</h1>
                <p>Manage authors in the library</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex border-1 items-center p-3 rounded w-250">
                    <i className='bx bx-search pr-2'></i>
                    <input type="text" placeholder="Search..."/>
                </div>
                <div className="flex gap-3 items-center">
                    <i className='bx bx-add-to-queue text-red-500'></i>
                    <p><NavLink className="text-red-500" to="add-books">Add Authors</NavLink></p>
                </div>
                <Table/>
            </div>
        </>
    );
}

export default Authors;