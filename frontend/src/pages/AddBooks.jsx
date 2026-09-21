import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddBooks() {
    const [title, setTitle] = useState("");
    const [publicationYear, setPublicationYear] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const book = {
            title: title,
            publicationYear: Number(publicationYear)
        };

        fetch("http://localhost:8080/api/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Created book:", data);
                navigate("/books")
            });

        console.log(book);
    };
    return (
        <div className="flex justify-center pt-16">
            <div className="w-150 border rounded-xl p-8 shadow-sm">
                <h1 className="text-3xl font-semibold mb-2">
                    Add Book
                </h1>

                <p className="text-gray-500 mb-8">
                    Add a new book to the library
                </p>

                <form className="flex flex-col gap-6"  onSubmit={handleSubmit}>

                    <div className="flex flex-col gap-2">
                        <label className="font-medium">
                            Title
                        </label>

                        <input
                            className="border rounded-lg p-3 outline-none focus:ring-2"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter book title"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-medium">
                            Publication year
                        </label>

                        <input
                            className="border rounded-lg p-3 outline-none focus:ring-2"
                            type="number"
                            value={publicationYear}
                            onChange={(e) => setPublicationYear(e.target.value)}
                            placeholder="Enter publication year"
                        />
                    </div>

                    <button
                        type="submit"
                        className="border rounded-lg p-3 cursor-pointer hover:bg-gray-100"
                    >
                        Add Book
                    </button>

                </form>
            </div>
        </div>
    );
}

export default AddBooks;