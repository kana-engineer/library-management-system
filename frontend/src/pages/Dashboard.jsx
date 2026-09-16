import MainSection from "../components/MainSection.jsx";
import DashboardSection from "../components/DashboardSection.jsx";

function Dashboard() {
    return(
        <>
            <div className="grid grid-cols-[400px_2fr]">
                <div className="border-r-1">
                    <MainSection/>
                </div>
                <div>
                    <DashboardSection/>
                </div>
            </div>
        </>
    )
}

export default Dashboard;