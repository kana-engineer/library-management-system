import {NavLink} from "react-router-dom";

function BooksSet() {
    return(
        <>
            <div>
                <div>
                    <p><NavLink className="text-red-500" to="add-books">Add Books</NavLink></p>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}

export default BooksSet;