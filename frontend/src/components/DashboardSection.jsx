import Table from "./Table.jsx";

function DashboardSection() {
    return(
        <>
            <div className="flex flex-col items-center">
                <div className="flex items-center justify-center flex-col p-15 gap-4">
                    <h1 className="text-5xl">Dashboard</h1>
                    <p>Welcome back! Here's what's happening today.</p>
                </div>
                <div className="grid grid-cols-4 gap-20 p-20 w-350">
                    <div className="border-1 rounded flex flex-col items-center justify-center h-50 gap-5 shadow-2xl">
                        <h1 className="text-4xl">120</h1>
                        <p>Books 📚</p>
                    </div>
                    <div className="border-1 rounded flex flex-col items-center justify-center h-50 gap-5 shadow-2xl">
                        <h1 className="text-4xl">35</h1>
                        <p>Authors ✍️</p>
                    </div>
                    <div className="border-1 rounded flex flex-col items-center justify-center h-50 gap-5 shadow-2xl">
                        <h1 className="text-4xl">86</h1>
                        <p>Users 👤</p>
                    </div>
                    <div className="border-1 rounded flex flex-col items-center justify-center h-50 gap-5 shadow-2xl">
                        <h1 className="text-4xl">24</h1>
                        <p>Borrowed 📖</p>
                    </div>
                </div>
                <Table/>
            </div>
        </>
    )

}

export default DashboardSection;