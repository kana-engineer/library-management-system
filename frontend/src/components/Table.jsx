function Table({books = [], setBooks}) {
    const handleDelete = (id) => {
        fetch(`http://localhost:8080/api/books/${id}`, {
            method: "DELETE",
        }) .then(() => {
            setBooks(books.filter(books => books.id !== id));
        })
    }
    return (
        <div className="w-250 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full table-auto">
                <thead className="bg-gray-50">
                <tr className="border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                        ID
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                        Title
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                        Year
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                        Actions
                    </th>
                </tr>
                </thead>

                <tbody>
                {books.map((book) => (
                    <tr
                        key={book.id}
                        className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50"
                    >
                        <td className="px-6 py-4 text-sm text-gray-500">
                            #{book.id}
                        </td>

                        <td className="px-6 py-4 font-medium">
                            {book.title}
                        </td>

                        <td className="px-6 py-4 text-sm text-gray-600">
                            {book.publicationYear}
                        </td>
                        <td className="px-6 py-4 text-red-500">
                            <button onClick={() => handleDelete(book.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;