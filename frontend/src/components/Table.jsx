function Table({books}) {
    return (
        <table className="table-auto flex flex-col items-center gap-4">
            <thead>
            <tr className="border-1 flex gap-50 p-3">
                <th>Title</th>
                <th>Year</th>
            </tr>
            </thead>
            <tbody>
            {books.map((book) => (
                <tr>
                    <td className="border-1 p-3">{book.title}</td>
                    <td className="border-1 p-3">{book.publicationYear}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Table;