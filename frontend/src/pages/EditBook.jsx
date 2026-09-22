import {isRouteErrorResponse, useParams} from "react-router-dom";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function EditBook() {
    const { id } = useParams();
    const navigate = useNavigate()
    const handleEdit = (e) => {
        e.preventDefault();
        console.log("Editing param: ", id);
        const book = {
            title: title,
            publicationYear: Number(publicationYear)
        }
        fetch(`http://localhost:8080/api/books/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        }) .then(response => response.json() )
            .then(
                data => { console.log(data);
                navigate("/books")
            });
    }

    const [title, setTitle] = useState("");
    const [publicationYear, setPublicationYear] = useState("");

    useEffect(() => {
        fetch(`http://localhost:8080/api/books/${id}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setTitle(data.title);
                setPublicationYear(data.publicationYear)
            })
    }, [id])

    return (
        <div className="flex justify-center pt-16">
            <div className="w-150 rounded-xl border border-gray-200 p-8 shadow-sm">

                <div className="mb-8">
                    <h1 className="text-3xl font-semibold">
                        Edit Book
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Update book information
                    </p>
                </div>

                <form className="flex flex-col gap-6"  onSubmit={handleEdit}>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">
                            Title
                        </label>

                        <input
                            type="text"
                            placeholder="Book title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-500"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">
                            Publication Year
                        </label>

                        <input
                            type="number"
                            placeholder="2026"
                            value={publicationYear}
                            onChange={(e) => setPublicationYear(e.target.value)}
                            className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-500"
                        />
                    </div>

                    <div className="mt-2 flex justify-end gap-3">
                        <button
                            type="button"
                            className="cursor-pointer rounded-lg border border-gray-300 px-5 py-2.5 hover:bg-gray-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="cursor-pointer rounded-lg bg-black px-5 py-2.5 text-white hover:bg-gray-800"
                        >
                            Save Changes
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default EditBook;