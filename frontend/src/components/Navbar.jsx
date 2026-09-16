function Navbar() {
    return (
        <>
            <div className="flex justify-around px-4 py-6 border-b-1">
                <h1 className="text-xl font-semibold">📚 Library Management</h1>
                <div>
                    <ul className="flex gap-20">
                        <li><a className="#">Books</a></li>
                        <li><a className="#">Authors</a></li>
                        <li><a className="#">Users</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;