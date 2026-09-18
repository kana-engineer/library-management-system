import {NavLink} from "react-router-dom";
import Table from "../components/Table.jsx";

function Borrowed() {
    return (
        <>
            <div className="flex items-center justify-center flex-col p-15 gap-4">
                <h1 className="text-5xl">Borrowed Books</h1>
                <p>Manage borrowed books</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex border-1 items-center p-3 rounded w-250">
                    <i className='bx bx-search pr-2'></i>
                    <input type="text" placeholder="Search..."/>
                </div>
                <div className="flex gap-3 items-center">
                    <i className='bx bx-add-to-queue text-red-500'></i>
                    <p><NavLink className="text-red-500" to="add-books">Borrow Book</NavLink></p>
                </div>
                <Table/>
            </div>
        </>
    )
}

export default Borrowed;