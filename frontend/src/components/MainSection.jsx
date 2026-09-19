import {NavLink} from "react-router-dom";

function MainSection() {
    return(
        <>
            <div className='mt-20'>
                <ul className="flex gap-20 flex-col p-10">
                    <li><NavLink className={({isActive}) => isActive ? "border-b-1 text-4xl" : "border-none text-4xl"} to="/">
                        Home
                    </NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "border-b-1 text-4xl" : "border-none text-4xl"} to="/books">
                        Books
                    </NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "border-b-1 text-4xl" : "border-none text-4xl"} to="/authors">
                        Authors
                    </NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "border-b-1 text-4xl" : "border-none text-4xl"} to="/borrowed">
                        Borrowed
                    </NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "border-b-1 text-4xl" : "border-none text-4xl"} to="/users">
                        Users
                    </NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default MainSection;