function Table() {
    return (
        <table class="table-auto flex flex-col items-center gap-4">
            <thead>
            <tr className="border-1 flex gap-50 p-3">
                <th>Book</th>
                <th>User</th>
                <th>Borrowed</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="border-1 p-3">Clean Code</td>
                <td className="border-1 p-3">Alex</td>
                <td className="border-1 p-3">sep 16</td>
            </tr>
            <tr>
                <td className="border-1 p-3">Effective Java</td>
                <td className="border-1 p-3">John</td>
                <td className="border-1 p-3">1972</td>
            </tr>
            <tr>
                <td className="border-1 p-3"> Design Patterns</td>
                <td className="border-1 p-3">Maria</td>
                <td className="border-1 p-3">1975</td>
            </tr>
            </tbody>
        </table>
    )
}

export default Table;