import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className="flex justify-around px-4 py-6 border-b-1 fixed left-0 right-0 bg-white z-1">
                <h1 className="text-xl font-semibold">📚 Library Management</h1>
                <div>
                    <ul className="flex gap-20">
                        <li><NavLink className={({isActive}) => isActive ? "border-b-1" : "border-none"} to="/">
                            Home
                        </NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "border-b-1" : "border-none"} to="/books">
                            Books
                        </NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "border-b-1" : "border-none"} to="/authors">
                            Authors
                        </NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "border-b-1" : "border-none"} to="/borrowed">
                            Borrowed
                        </NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "border-b-1" : "border-none"} to="/users">
                            Users
                        </NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;